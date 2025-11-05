import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { seoConfig } from './config.js'
import { getCurrentLocale } from '../i18n'

// 数据加载映射表 - 用于 SEO 中的数据加载
// 使用映射表减少重复代码，同时保持 Vite 能正确解析路径
const dataLoaders = {
    guide: {
        en: () => import('../data/guide/en/guide.js'),
        de: () => import('../data/guide/de/guide.js'),
        fr: () => import('../data/guide/fr/guide.js'),
        es: () => import('../data/guide/es/guide.js'),
        ja: () => import('../data/guide/ja/guide.js'),
        ko: () => import('../data/guide/ko/guide.js'),
        ru: () => import('../data/guide/ru/guide.js'),
        pt: () => import('../data/guide/pt/guide.js'),
        zh: () => import('../data/guide/zh/guide.js')
    },
    mods: {
        en: () => import('../data/mods/en/mods.js'),
        de: () => import('../data/mods/de/mods.js'),
        fr: () => import('../data/mods/fr/mods.js'),
        es: () => import('../data/mods/es/mods.js'),
        ja: () => import('../data/mods/ja/mods.js'),
        ko: () => import('../data/mods/ko/mods.js'),
        ru: () => import('../data/mods/ru/mods.js'),
        pt: () => import('../data/mods/pt/mods.js'),
        zh: () => import('../data/mods/zh/mods.js')
    },
    wikiQuests: {
        en: () => import('../data/wiki/quests/en/quests.js'),
        de: () => import('../data/wiki/quests/de/quests.js'),
        fr: () => import('../data/wiki/quests/fr/quests.js'),
        es: () => import('../data/wiki/quests/es/quests.js'),
        ja: () => import('../data/wiki/quests/ja/quests.js'),
        ko: () => import('../data/wiki/quests/ko/quests.js'),
        ru: () => import('../data/wiki/quests/ru/quests.js'),
        pt: () => import('../data/wiki/quests/pt/quests.js'),
        zh: () => import('../data/wiki/quests/zh/quests.js')
    }
}

/**
 * 加载数据模块（用于 SEO）
 * @param {string} dataType - 数据类型 ('guide', 'mods', 'wikiQuests')
 * @param {string} locale - 语言代码
 * @returns {Promise<Object>} 数据模块
 */
const loadDataForSEO = async (dataType, locale) => {
    const loader = dataLoaders[dataType]
    if (!loader) {
        throw new Error(`Unknown data type: ${dataType}`)
    }
    
    const localeLoader = loader[locale] || loader.en
    try {
        return await localeLoader()
    } catch (error) {
        // 如果加载失败且不是英文，回退到英文
        if (locale !== 'en' && loader.en) {
            return await loader.en()
        }
        throw error
    }
}

// SEO composable
export function useSEO() {
    const route = useRoute()

    // 当前页面的SEO数据
    const currentSEO = ref({})

    // 获取当前页面路径
    const currentPath = computed(() => {
        return route.path
    })

    // 获取Canonical URL
    const canonicalUrl = computed(() => {
        return `${seoConfig.fullDomain}${currentPath.value}`
    })

    // 设置页面SEO数据
    const setSEO = (seoData) => {
        currentSEO.value = {
            ...seoConfig.defaults,
            ...seoData
        }
        updateMetaTags()
    }

    // 更新HTML meta标签
    const updateMetaTags = () => {
        if (typeof document === 'undefined') return

        const seo = currentSEO.value

        // 更新title
        document.title = seo.title || seoConfig.defaults.title

        // 更新或创建meta标签
        updateMetaTag('description', seo.description)
        updateMetaTag('keywords', seo.keywords)
        updateMetaTag('author', seo.author)

        // Open Graph标签
        updateMetaTag('og:title', seo.title, 'property')
        updateMetaTag('og:description', seo.description, 'property')
        updateMetaTag('og:image', seo.image, 'property')
        updateMetaTag('og:url', canonicalUrl.value, 'property')
        updateMetaTag('og:type', seo.type, 'property')
        updateMetaTag('og:site_name', 'Escape from Duckov Community', 'property')

        // Twitter Card标签
        updateMetaTag('twitter:card', 'summary_large_image', 'name')
        updateMetaTag('twitter:title', seo.title, 'name')
        updateMetaTag('twitter:description', seo.description, 'name')
        updateMetaTag('twitter:image', seo.image, 'name')
        updateMetaTag('twitter:site', seoConfig.social.twitter, 'name')

        // Canonical URL
        updateCanonicalLink()
    }

    // 更新单个meta标签
    const updateMetaTag = (name, content, attribute = 'name') => {
        if (!content) return

        // 查找现有标签
        let tag = document.querySelector(`meta[${attribute}="${name}"]`)
        
        if (tag) {
            // 如果标签存在，直接更新content
            tag.setAttribute('content', content)
        } else {
            // 如果标签不存在，创建新标签
            tag = document.createElement('meta')
            tag.setAttribute(attribute, name)
            tag.setAttribute('content', content)
            document.head.appendChild(tag)
        }
    }

    // 更新Canonical链接
    const updateCanonicalLink = () => {
        let canonical = document.querySelector('link[rel="canonical"]')
        if (!canonical) {
            canonical = document.createElement('link')
            canonical.setAttribute('rel', 'canonical')
            document.head.appendChild(canonical)
        }
        canonical.setAttribute('href', canonicalUrl.value)
    }

    // 生成结构化数据
    const generateStructuredData = (pageType = 'WebPage') => {
        const baseData = {
            '@context': 'https://schema.org',
            '@type': pageType,
            name: currentSEO.value.title,
            description: currentSEO.value.description,
            url: canonicalUrl.value,
            publisher: {
                '@type': 'Organization',
                name: 'Escape from Duckov Community',
                url: seoConfig.fullDomain,
                logo: {
                    '@type': 'ImageObject',
                    url: `${seoConfig.fullDomain}/images/logo.png`
                },
                sameAs: [
                    `https://twitter.com/${seoConfig.social.twitter.replace('@', '')}`,
                    `https://facebook.com/${seoConfig.social.facebook}`,
                    `https://instagram.com/${seoConfig.social.instagram}`,
                    `https://discord.gg/${seoConfig.social.discord}`
                ]
            }
        }

        // 根据页面类型添加特定数据
        if (pageType === 'VideoGame') {
            baseData.genre = 'Survival Horror'
            baseData.gamePlatform = ['PC']
            baseData.operatingSystem = ['Windows']
            baseData.applicationCategory = 'Game'
        }

        if (pageType === 'Article') {
            baseData.author = {
                '@type': 'Organization',
                name: 'Escape from Duckov Community'
            }
            baseData.datePublished = new Date().toISOString()
            baseData.dateModified = new Date().toISOString()
        }

        return baseData
    }

    // 添加结构化数据到页面
    const addStructuredData = (data) => {
        if (typeof document === 'undefined') return

        // 移除现有的结构化数据
        const existingScript = document.querySelector('script[type="application/ld+json"]')
        if (existingScript) {
            existingScript.remove()
        }

        // 添加新的结构化数据
        const script = document.createElement('script')
        script.type = 'application/ld+json'
        script.textContent = JSON.stringify(data)
        document.head.appendChild(script)
    }

    return {
        currentSEO,
        currentPath,
        canonicalUrl,
        setSEO,
        updateMetaTags,
        generateStructuredData,
        addStructuredData
    }
}

// 路由名称到SEO key的映射
const routeToSeoKey = {
    'home': 'home',
    'guides': 'guides',
    'guide-detail': 'guideDetail',
    'wiki': 'wiki',
    'wiki-quests': 'wikiQuests',
    'wiki-detail': 'wikiDetail',
    'maps': 'maps',
    'mods': 'mods',
    'mod-detail': 'modDetail',
    'items': 'items',
    'items-weapons': 'itemsWeapons',
    'items-equipment': 'itemsEquipment',
    'items-ammunition': 'itemsAmmunition',
    'items-key': 'itemsKey',
    'items-fish': 'itemsFish',
    'items-detail': 'itemsDetail',
    'privacy-policy': 'privacyPolicy',
    'terms-of-service': 'termsOfService',
    'copyright': 'copyright',
    'about-us': 'aboutUs',
    'contact-us': 'contactUs'
}

// 自动SEO composable - 监听路由变化自动设置SEO
export function useAutoSEO() {
    const { setSEO, generateStructuredData, addStructuredData } = useSEO()
    const route = useRoute()
    const { t } = useI18n()
    
    // 处理SEO的函数
    const handleSEO = async () => {
        // 从路由名称获取SEO key
        const routeName = route.name
        const seoKey = routeToSeoKey[routeName]
        
        // 处理动态内容（指南详情页和模组详情页）
        let finalSEOData = {
            title: seoConfig.defaults.title,
            description: seoConfig.defaults.description,
            keywords: seoConfig.defaults.keywords,
            author: seoConfig.defaults.author,
            image: seoConfig.defaults.image,
            type: seoConfig.defaults.type
        }
        
        // 如果是动态路由，需要从数据中获取实际内容
        if (routeName === 'guide-detail' || routeName === 'mod-detail' || routeName === 'wiki-detail') {
            try {
                let item = null
                
                if (routeName === 'guide-detail') {
                    // 根据当前语言动态加载 guide 数据
                    const locale = getCurrentLocale()
                    const supportedLocales = ['en', 'de', 'fr', 'es', 'ja', 'ko', 'ru', 'pt', 'zh']
                    const targetLocale = supportedLocales.includes(locale) ? locale : 'en'
                    
                    try {
                        const module = await loadDataForSEO('guide', targetLocale)
                        item = module.guides?.find(g => g.addressBar === `/${route.params.id}`)
                    } catch (error) {
                        console.warn('Failed to load guide data for SEO:', error)
                    }
                } else if (routeName === 'mod-detail') {
                    // 根据当前语言动态加载 mods 数据
                    const locale = getCurrentLocale()
                    const supportedLocales = ['en', 'de', 'fr', 'es', 'ja', 'ko', 'ru', 'pt', 'zh']
                    const targetLocale = supportedLocales.includes(locale) ? locale : 'en'
                    
                    try {
                        const module = await loadDataForSEO('mods', targetLocale)
                        if (module?.default) {
                            const searchId = route.params.id || ''
                            const cleanSearchId = searchId.replace(/^\//, '').replace(/\/$/, '')
                            
                            item = module.default.find(m => {
                                if (!m.addressBar) return false
                                const cleanAddressBar = m.addressBar.replace(/^\//, '').replace(/\/$/, '')
                                return cleanAddressBar === cleanSearchId
                            })
                        }
                    } catch (error) {
                        console.warn('Failed to load mods data for SEO:', error)
                    }
                } else if (routeName === 'wiki-detail') {
                    // 根据当前语言动态加载 wiki 数据
                    const locale = getCurrentLocale()
                    const supportedLocales = ['en', 'de', 'fr', 'es', 'ja', 'ko', 'ru', 'pt', 'zh']
                    const targetLocale = supportedLocales.includes(locale) ? locale : 'en'
                    const category = route.params.category || 'quests'
                    const searchId = route.params.id || ''
                    
                    try {
                        // 目前只支持 quests 类别
                        if (category === 'quests') {
                            const module = await loadDataForSEO('wikiQuests', targetLocale)
                            if (module?.default) {
                                const cleanSearchId = searchId.replace(/^\//, '').replace(/\/$/, '')
                                item = module.default.find(w => {
                                    if (!w.addressBar) return false
                                    const cleanAddressBar = w.addressBar.replace(/^\//, '').replace(/\/$/, '')
                                    return cleanAddressBar === cleanSearchId
                                })
                            }
                        }
                    } catch (error) {
                        console.warn('Failed to load wiki data for SEO:', error)
                    }
                }
                
                if (item) {
                    if (item.seo) {
                    // 使用数据中的SEO信息
                    finalSEOData = {
                            title: item.seo.title || item.title || finalSEOData.title,
                            description: item.seo.description || item.description || finalSEOData.description,
                        keywords: item.seo.keywords || finalSEOData.keywords,
                        author: seoConfig.defaults.author,
                            image: item.imageUrl || seoConfig.defaults.image,
                            type: 'article'
                        }
                    } else {
                        // 如果数据中没有SEO字段，使用item的基本信息
                        finalSEOData = {
                            title: item.title ? `${item.title} - Escape from Duckov` : finalSEOData.title,
                            description: item.description || finalSEOData.description,
                            keywords: finalSEOData.keywords,
                            author: seoConfig.defaults.author,
                            image: item.imageUrl || seoConfig.defaults.image,
                        type: 'article'
                        }
                    }
                } else if (seoKey) {
                    // 如果数据中没有找到item，从i18n读取
                    finalSEOData = {
                        title: t(`seo.${seoKey}.title`, finalSEOData.title),
                        description: t(`seo.${seoKey}.description`, finalSEOData.description),
                        keywords: t(`seo.${seoKey}.keywords`, finalSEOData.keywords),
                        author: seoConfig.defaults.author,
                        image: seoConfig.defaults.image,
                        type: t(`seo.${seoKey}.type`, 'article')
                    }
                }
            } catch (error) {
                console.warn('Failed to load dynamic SEO data:', error)
            }
        } else if (seoKey) {
            // 从i18n读取SEO信息
            finalSEOData = {
                title: t(`seo.${seoKey}.title`, finalSEOData.title),
                description: t(`seo.${seoKey}.description`, finalSEOData.description),
                keywords: t(`seo.${seoKey}.keywords`, finalSEOData.keywords),
                author: seoConfig.defaults.author,
                image: seoConfig.defaults.image,
                type: t(`seo.${seoKey}.type`, 'website')
            }
        }
        
        // 设置SEO信息
        setSEO(finalSEOData)
        
        // 添加结构化数据
        const structuredData = generateStructuredData(finalSEOData.type === 'article' ? 'Article' : 'WebPage')
        addStructuredData(structuredData)
    }
    
    // 监听路由变化
    watch(
        () => route,
        () => {
            handleSEO()
        },
        { immediate: true, deep: true } // 立即执行一次，深度监听
    )
}
