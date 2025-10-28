import { ref, computed } from 'vue'
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

        let tag = document.querySelector(`meta[${attribute}="${name}"]`)
        if (!tag) {
            tag = document.createElement('meta')
            tag.setAttribute(attribute, name)
            document.head.appendChild(tag)
        }
        tag.setAttribute('content', content)
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
