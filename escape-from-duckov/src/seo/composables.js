import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { seoConfig } from './config.js'

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
        console.log('🔧 setSEO被调用:', seoData)
        currentSEO.value = {
            ...seoConfig.defaults,
            ...seoData
        }
        console.log('📝 当前SEO值:', currentSEO.value)
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

// 自动SEO composable - 监听路由变化自动设置SEO
export function useAutoSEO() {
    const { setSEO, generateStructuredData, addStructuredData } = useSEO()
    const route = useRoute()
    
    // 处理SEO的函数
    const handleSEO = async () => {
        console.log('🔄 SEO更新触发:', route.path, route.name)
        
        // 获取路由中的SEO信息
        const seoData = route.meta?.seo || {}
        console.log('📊 路由SEO数据:', seoData)
        
        // 处理动态内容（指南详情页和模组详情页）
        let finalSEOData = {
            title: seoData.title || seoConfig.defaults.title,
            description: seoData.description || seoConfig.defaults.description,
            keywords: seoData.keywords || seoConfig.defaults.keywords,
            author: seoConfig.defaults.author,
            image: seoConfig.defaults.image,
            type: seoData.type || seoConfig.defaults.type
        }
        
        console.log('🎯 最终SEO数据:', finalSEOData)
        
        // 如果是动态路由，需要从数据中获取实际内容
        if (route.name === 'guide-detail' || route.name === 'mod-detail') {
            try {
                let item = null
                
                if (route.name === 'guide-detail') {
                    const { guides } = await import('../data/guide/guide.js')
                    item = guides.find(g => g.addressBar === `/${route.params.id}`)
                } else if (route.name === 'mod-detail') {
                    const { mods } = await import('../data/mods/mods.js')
                    item = mods.find(m => m.addressBar === `/${route.params.id}`)
                }
                
                if (item && item.seo) {
                    // 使用数据中的SEO信息
                    finalSEOData = {
                        title: item.seo.title || finalSEOData.title,
                        description: item.seo.description || finalSEOData.description,
                        keywords: item.seo.keywords || finalSEOData.keywords,
                        author: seoConfig.defaults.author,
                        image: seoConfig.defaults.image,
                        type: 'article'
                    }
                }
            } catch (error) {
                console.warn('Failed to load dynamic SEO data:', error)
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
