import { ref } from 'vue'
import { getCurrentLocale } from '../i18n'
import { createDataLoader, dataExtractors } from './useDataLoader'

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

// 使用通用数据加载器
const loadGuideData = createDataLoader(localeMap, dataExtractors.guides)

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

    /**
     * 仅加载首页需要的指南数据（isHome: true）
     * 用于性能优化，减少首页加载的数据量
     */
    const loadHomeGuidesOnly = async (locale = null) => {
        loading.value = true
        error.value = null
        try {
            const targetLocale = locale || getCurrentLocale()
            const allData = await loadGuideData(targetLocale)
            // 只保留 isHome 为 true 的指南
            guides.value = Array.isArray(allData) 
                ? allData.filter(guide => guide.isHome === true) 
                : []
        } catch (err) {
            error.value = err.message || 'Failed to load home guides'
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
        loadHomeGuidesOnly,
        findGuideByAddressBar,
        findGuideById
    }
}

