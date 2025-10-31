import { ref } from 'vue'
import { getCurrentLocale } from '../i18n'

// 语言映射表
const localeMap = {
    en: () => import('../data/guide/en/guide.js'),
    de: () => import('../data/guide/de/guide.js'),
    fr: () => import('../data/guide/fr/guide.js'),
    es: () => import('../data/guide/es/guide.js'),
    ja: () => import('../data/guide/ja/guide.js'),
    ko: () => import('../data/guide/ko/guide.js'),
    ru: () => import('../data/guide/ru/guide.js'),
    pt: () => import('../data/guide/pt/guide.js'),
    zh: () => import('../data/guide/zh/guide.js')
}

/**
 * 加载 guide 数据
 */
const loadGuideData = async (locale) => {
    const targetLocale = localeMap[locale] ? locale : 'en'
    
    try {
        const module = await localeMap[targetLocale]()
        const guides = module.guides || []
        
        // 如果数据为空且不是英文，回退到英文
        if (guides.length === 0 && targetLocale !== 'en') {
            const enModule = await localeMap.en()
            return enModule.guides || []
        }
        
        return guides
    } catch (error) {
        // 加载失败，回退到英文
        if (targetLocale !== 'en') {
            try {
                const enModule = await localeMap.en()
                return enModule.guides || []
            } catch {
                return []
            }
        }
        return []
    }
}

/**
 * Guide 数据 composable
 */
export function useGuideData() {
    const guides = ref([])
    const loading = ref(false)
    const error = ref(null)

    const loadData = async (locale = null) => {
        loading.value = true
        error.value = null
        try {
            const targetLocale = locale || getCurrentLocale()
            const data = await loadGuideData(targetLocale)
            guides.value = Array.isArray(data) ? data : []
        } catch (err) {
            error.value = err.message || 'Failed to load guide data'
            guides.value = []
        } finally {
            loading.value = false
        }
    }

    const findGuideByAddressBar = (addressBar) => {
        const path = addressBar.startsWith('/') ? addressBar : `/${addressBar}`
        return guides.value.find(g => g.addressBar === path) || null
    }

    const findGuideById = (id) => {
        return guides.value.find(g => g.id === id) || null
    }

    return {
        guides,
        loading,
        error,
        loadData,
        findGuideByAddressBar,
        findGuideById
    }
}

