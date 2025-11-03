import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { seoConfig } from './config.js'
import { getCurrentLocale } from '../i18n'

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
                        let module = null
                        // 使用 switch case 确保 Vite 可以正确解析路径
                        switch (targetLocale) {
                            case 'en':
                                module = await import('../data/guide/en/guide.js')
                                break
                            case 'de':
                                module = await import('../data/guide/de/guide.js')
                                break
                            case 'fr':
                                module = await import('../data/guide/fr/guide.js')
                                break
                            case 'es':
                                module = await import('../data/guide/es/guide.js')
                                break
                            case 'ja':
                                module = await import('../data/guide/ja/guide.js')
                                break
                            case 'ko':
                                module = await import('../data/guide/ko/guide.js')
                                break
                            case 'ru':
                                module = await import('../data/guide/ru/guide.js')
                                break
                            case 'pt':
                                module = await import('../data/guide/pt/guide.js')
                                break
                            case 'zh':
                                module = await import('../data/guide/zh/guide.js')
                                break
                            default:
                                module = await import('../data/guide/en/guide.js')
                        }
                        item = module.guides.find(g => g.addressBar === `/${route.params.id}`)
                    } catch (error) {
                        // 如果加载失败，回退到英文
                        if (targetLocale !== 'en') {
                            try {
                                const enModule = await import('../data/guide/en/guide.js')
                                item = enModule.guides.find(g => g.addressBar === `/${route.params.id}`)
                            } catch (e) {
                                console.error('Failed to load fallback guide data:', e)
                            }
                        }
                    }
                } else if (routeName === 'mod-detail') {
                    // 根据当前语言动态加载 mods 数据
                    const locale = getCurrentLocale()
                    const supportedLocales = ['en', 'de', 'fr', 'es', 'ja', 'ko', 'ru', 'pt', 'zh']
                    const targetLocale = supportedLocales.includes(locale) ? locale : 'en'
                    
                    try {
                        let module = null
                        // 使用 switch case 确保 Vite 可以正确解析路径
                        switch (targetLocale) {
                            case 'en':
                                module = await import('../data/mods/en/mods.js')
                                break
                            case 'de':
                                module = await import('../data/mods/de/mods.js')
                                break
                            case 'fr':
                                module = await import('../data/mods/fr/mods.js')
                                break
                            case 'es':
                                module = await import('../data/mods/es/mods.js')
                                break
                            case 'ja':
                                module = await import('../data/mods/ja/mods.js')
                                break
                            case 'ko':
                                module = await import('../data/mods/ko/mods.js')
                                break
                            case 'ru':
                                module = await import('../data/mods/ru/mods.js')
                                break
                            case 'pt':
                                module = await import('../data/mods/pt/mods.js')
                                break
                            case 'zh':
                                module = await import('../data/mods/zh/mods.js')
                                break
                            default:
                                module = await import('../data/mods/en/mods.js')
                        }
                        
                        if (module && module.default) {
                            const searchId = route.params.id || ''
                            const cleanSearchId = searchId.replace(/^\//, '').replace(/\/$/, '')
                            
                            item = module.default.find(m => {
                                if (!m.addressBar) return false
                                const cleanAddressBar = m.addressBar.replace(/^\//, '').replace(/\/$/, '')
                                return cleanAddressBar === cleanSearchId
                            })
                        }
                    } catch (error) {
                        // 如果加载失败，回退到英文
                        if (targetLocale !== 'en') {
                            try {
                                const enModule = await import('../data/mods/en/mods.js')
                                if (enModule && enModule.default) {
                                    const searchId = route.params.id || ''
                                    const cleanSearchId = searchId.replace(/^\//, '').replace(/\/$/, '')
                                    item = enModule.default.find(m => {
                                        if (!m.addressBar) return false
                                        const cleanAddressBar = m.addressBar.replace(/^\//, '').replace(/\/$/, '')
                                        return cleanAddressBar === cleanSearchId
                                    })
                                }
                            } catch (e) {
                                console.warn('Failed to load fallback mods data:', e)
                            }
                        }
                    }
                } else if (routeName === 'wiki-detail') {
                    // 根据当前语言动态加载 wiki 数据
                    const locale = getCurrentLocale()
                    const supportedLocales = ['en', 'de', 'fr', 'es', 'ja', 'ko', 'ru', 'pt', 'zh']
                    const targetLocale = supportedLocales.includes(locale) ? locale : 'en'
                    const category = route.params.category || 'quests'
                    const searchId = route.params.id || ''
                    
                    try {
                        let module = null
                        // 根据 category 加载对应的数据
                        if (category === 'quests') {
                            // 使用 switch case 确保 Vite 可以正确解析路径
                            switch (targetLocale) {
                                case 'en':
                                    module = await import('../data/wiki/quests/en/quests.js')
                                    break
                                case 'de':
                                    module = await import('../data/wiki/quests/de/quests.js')
                                    break
                                case 'fr':
                                    module = await import('../data/wiki/quests/fr/quests.js')
                                    break
                                case 'es':
                                    module = await import('../data/wiki/quests/es/quests.js')
                                    break
                                case 'ja':
                                    module = await import('../data/wiki/quests/ja/quests.js')
                                    break
                                case 'ko':
                                    module = await import('../data/wiki/quests/ko/quests.js')
                                    break
                                case 'ru':
                                    module = await import('../data/wiki/quests/ru/quests.js')
                                    break
                                case 'pt':
                                    module = await import('../data/wiki/quests/pt/quests.js')
                                    break
                                case 'zh':
                                    module = await import('../data/wiki/quests/zh/quests.js')
                                    break
                                default:
                                    module = await import('../data/wiki/quests/en/quests.js')
                            }
                        }
                        
                        if (module && module.default) {
                            // 清理搜索ID（去除前后斜杠）
                            const cleanSearchId = searchId.replace(/^\//, '').replace(/\/$/, '')
                            
                            item = module.default.find(w => {
                                if (!w.addressBar) return false
                                // addressBar格式是 /infrastructure
                                const cleanAddressBar = w.addressBar.replace(/^\//, '').replace(/\/$/, '')
                                return cleanAddressBar === cleanSearchId
                            })
                        }
                    } catch (error) {
                        console.warn('Failed to load wiki data for SEO:', error)
                        // 如果加载失败，回退到英文
                        if (targetLocale !== 'en' && category === 'quests') {
                            try {
                                const enModule = await import('../data/wiki/quests/en/quests.js')
                                if (enModule && enModule.default) {
                                    const cleanSearchId = searchId.replace(/^\//, '').replace(/\/$/, '')
                                    item = enModule.default.find(w => {
                                        if (!w.addressBar) return false
                                        const cleanAddressBar = w.addressBar.replace(/^\//, '').replace(/\/$/, '')
                                        return cleanAddressBar === cleanSearchId
                                    })
                                }
                            } catch (e) {
                                console.error('Failed to load fallback wiki data:', e)
                            }
                        }
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
