import { ref } from 'vue'
import { getCurrentLocale } from '../i18n'
import { createDataLoader, dataExtractors } from './useDataLoader'

// 语言映射表
const localeMap = {
    en: () => import('../data/maps/en/maps.js'),
    de: () => import('../data/maps/de/maps.js'),
    fr: () => import('../data/maps/fr/maps.js'),
    es: () => import('../data/maps/es/maps.js'),
    ja: () => import('../data/maps/ja/maps.js'),
    ko: () => import('../data/maps/ko/maps.js'),
    ru: () => import('../data/maps/ru/maps.js'),
    pt: () => import('../data/maps/pt/maps.js'),
    zh: () => import('../data/maps/zh/maps.js')
}

// 使用通用数据加载器，auto extractor 会自动查找 maps 属性
const loadMapsData = createDataLoader(localeMap, dataExtractors.auto)

/**
 * Maps 数据 composable
 */
export function useMapsData() {
    const maps = ref([])
    const loading = ref(false)
    const error = ref(null)

    const loadData = async (locale = null) => {
        loading.value = true
        error.value = null
        try {
            const targetLocale = locale || getCurrentLocale()
            const data = await loadMapsData(targetLocale)
            maps.value = Array.isArray(data) ? data : []
        } catch (err) {
            error.value = err.message || 'Failed to load maps data'
            maps.value = []
        } finally {
            loading.value = false
        }
    }

    const findMapByAddressBar = (addressBar) => {
        const path = addressBar.startsWith('/') ? addressBar : `/${addressBar}`
        return maps.value.find(m => m.addressBar === path) || null
    }

    const findMapById = (id) => {
        return maps.value.find(m => m.id === id) || null
    }

    const getOtherMaps = (currentMapId) => {
        if (!currentMapId || !maps.value.length) return []
        const filtered = maps.value.filter(m => m.id !== currentMapId)
        return filtered.slice(-5)
    }

    return {
        maps,
        loading,
        error,
        loadData,
        findMapByAddressBar,
        findMapById,
        getOtherMaps
    }
}

