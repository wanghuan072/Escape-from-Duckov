import { ref } from 'vue'
import { getCurrentLocale } from '../i18n'
import { createDataLoader, dataExtractors } from './useDataLoader'

// 语言映射表 - 支持多语言数据加载
const localeMap = {
    en: () => import('../data/mods/en/mods.js'),
    de: () => import('../data/mods/de/mods.js'),
    fr: () => import('../data/mods/fr/mods.js'),
    es: () => import('../data/mods/es/mods.js'),
    ja: () => import('../data/mods/ja/mods.js'),
    ko: () => import('../data/mods/ko/mods.js'),
    ru: () => import('../data/mods/ru/mods.js'),
    pt: () => import('../data/mods/pt/mods.js'),
    zh: () => import('../data/mods/zh/mods.js')
}

// 使用通用数据加载器
const loadModsData = createDataLoader(localeMap, dataExtractors.default)

/**
 * 通用的 Mods 数据加载 composable
 * @returns {Object} 包含数据加载相关的方法和状态
 */
export function useModsData() {
    const mods = ref([])
    const loading = ref(false)
    const error = ref(null)

    /**
     * 加载 mods 数据（支持多语言）
     */
    const loadData = async (locale = null) => {
        loading.value = true
        error.value = null
        
        try {
            const targetLocale = locale || getCurrentLocale()
            const data = await loadModsData(targetLocale)
            mods.value = Array.isArray(data) ? data : []
        } catch (err) {
            console.error('Failed to load mods data:', err)
            error.value = err.message || 'Failed to load data'
            mods.value = []
        } finally {
            loading.value = false
        }
    }

    /**
     * 根据 addressBar 查找单个 mod
     * @param {string} addressBar - 要查找的 addressBar（如 '/showquestsareaonmap'）
     * @returns {Object|null} 找到的 mod 或 null
     */
    const findModByAddressBar = (addressBar) => {
        if (!addressBar || !mods.value.length) return null

        const searchBar = addressBar.replace(/^\//, '').replace(/\/$/, '')
        
        // 先尝试精确匹配
        let mod = mods.value.find(m => {
            const modBar = (m.addressBar || '').replace(/^\//, '').replace(/\/$/, '')
            return modBar === searchBar
        })

        return mod || null
    }

    /**
     * 根据 ID 查找单个 mod
     * @param {string|number} id - 要查找的 ID
     * @returns {Object|null} 找到的 mod 或 null
     */
    const findModById = (id) => {
        if (!id || !mods.value.length) return null
        return mods.value.find(m => m.id === id) || null
    }

    /**
     * 获取其他 mods（排除当前 mod，返回最后5个）
     * @param {string|number} currentModId - 当前 mod 的 ID
     * @returns {Array} 其他 mods 数组
     */
    const getOtherMods = (currentModId) => {
        if (!currentModId || !mods.value.length) return []
        const filtered = mods.value.filter(m => m.id !== currentModId)
        return filtered.slice(-5)
    }

    return {
        mods,
        loading,
        error,
        loadData,
        findModByAddressBar,
        findModById,
        getOtherMods
    }
}

