import { ref } from 'vue'
import { getCurrentLocale } from '../i18n'

/**
 * Wiki 数据配置映射
 * 添加新的 wiki 类别时，只需在此添加配置即可
 */
const WIKI_DATA_CONFIG = {
    quests: {
        routePath: '/wiki/quests'
    }
    // 添加新的类别示例：
    // equipment: {
    //     routePath: '/wiki/equipment'
    // }
}

// 语言映射表 - 支持多语言数据加载
const localeMap = {
    en: (category) => {
        switch (category) {
            case 'quests':
                return import('../data/wiki/quests/en/quests.js')
            default:
                throw new Error(`Unknown wiki category: ${category}`)
        }
    },
    de: (category) => {
        switch (category) {
            case 'quests':
                return import('../data/wiki/quests/de/quests.js')
            default:
                throw new Error(`Unknown wiki category: ${category}`)
        }
    },
    fr: (category) => {
        switch (category) {
            case 'quests':
                return import('../data/wiki/quests/fr/quests.js')
            default:
                throw new Error(`Unknown wiki category: ${category}`)
        }
    },
    es: (category) => {
        switch (category) {
            case 'quests':
                return import('../data/wiki/quests/es/quests.js')
            default:
                throw new Error(`Unknown wiki category: ${category}`)
        }
    },
    ja: (category) => {
        switch (category) {
            case 'quests':
                return import('../data/wiki/quests/ja/quests.js')
            default:
                throw new Error(`Unknown wiki category: ${category}`)
        }
    },
    ko: (category) => {
        switch (category) {
            case 'quests':
                return import('../data/wiki/quests/ko/quests.js')
            default:
                throw new Error(`Unknown wiki category: ${category}`)
        }
    },
    ru: (category) => {
        switch (category) {
            case 'quests':
                return import('../data/wiki/quests/ru/quests.js')
            default:
                throw new Error(`Unknown wiki category: ${category}`)
        }
    },
    pt: (category) => {
        switch (category) {
            case 'quests':
                return import('../data/wiki/quests/pt/quests.js')
            default:
                throw new Error(`Unknown wiki category: ${category}`)
        }
    },
    zh: (category) => {
        switch (category) {
            case 'quests':
                return import('../data/wiki/quests/zh/quests.js')
            default:
                throw new Error(`Unknown wiki category: ${category}`)
        }
    }
}

/**
 * 加载指定语言和类别的 wiki 数据
 */
const loadWikiData = async (locale, category) => {
    const targetLocale = localeMap[locale] ? locale : 'en'
    
    try {
        const moduleLoader = localeMap[targetLocale]
        if (!moduleLoader) {
            throw new Error(`Locale ${targetLocale} not supported`)
        }
        
        const module = await moduleLoader(category)
        const data = module.default || []
        
        // 如果数据为空且不是英文，回退到英文
        if (data.length === 0 && targetLocale !== 'en') {
            const enModule = await localeMap.en(category)
            return enModule.default || []
        }
        
        return data
    } catch (error) {
        // 加载失败，回退到英文
        if (targetLocale !== 'en') {
            try {
                const enModule = await localeMap.en(category)
                return enModule.default || []
            } catch {
                return []
            }
        }
        return []
    }
}

/**
 * 通用的 Wiki 数据加载 composable
 * @param {string} category - wiki 类别 (如 'quests', 'weapons')
 * @returns {Object} 包含数据加载相关的方法和状态
 */
export function useWikiData(category) {
    const data = ref([])
    const loading = ref(false)
    const error = ref(null)

    /**
     * 从模块中提取数据数组
     */
    const extractDataFromModule = (module, category) => {
        if (module && module.default) {
            return module.default
        } else if (module && module[category]) {
            return module[category]
        } else if (module && Array.isArray(module)) {
            return module
        } else if (module) {
            const keys = Object.keys(module)
            if (keys.length > 0) {
                return module[keys[0]]
            }
        }
        return null
    }

    /**
     * 加载指定类别的 wiki 数据（支持多语言）
     */
    const loadData = async (locale = null) => {
        if (!category) {
            error.value = 'Category is required'
            return
        }

        const config = WIKI_DATA_CONFIG[category]
        if (!config) {
            error.value = `Unknown wiki category: ${category}`
            return
        }

        loading.value = true
        error.value = null

        try {
            const targetLocale = locale || getCurrentLocale()
            const extractedData = await loadWikiData(targetLocale, category)
            
            if (extractedData && Array.isArray(extractedData)) {
                data.value = extractedData
            } else {
                error.value = `Failed to extract data from module for category: ${category}`
                data.value = []
            }
        } catch (err) {
            console.error(`Failed to load wiki data for ${category}:`, err)
            error.value = err.message || 'Failed to load data'
            data.value = []
        } finally {
            loading.value = false
        }
    }

    /**
     * 根据 ID 查找单个项目
     * @param {string} id - 要查找的 ID（addressBar 的 ID 部分）
     * @returns {Object|null} 找到的项目或 null
     */
    const findItemById = (id) => {
        if (!id || !data.value.length) return null

        const searchId = id || ''
        const possibleAddressBars = [
            `/${searchId}`,
            `/${searchId}/`,
            searchId,
            `/${searchId.replace(/^\//, '')}`
        ]

        // 先尝试精确匹配
        let item = data.value.find(item => possibleAddressBars.includes(item.addressBar))

        // 如果没有找到，尝试部分匹配
        if (!item) {
            item = data.value.find(item => {
                const itemBar = item.addressBar.replace(/^\//, '').replace(/\/$/, '')
                const searchBar = searchId.replace(/^\//, '').replace(/\/$/, '')
                return itemBar === searchBar
            })
        }

        return item || null
    }

    /**
     * 获取其他项目（排除当前项目，返回最后5个）
     * @param {string|number} currentItemId - 当前项目的 ID
     * @returns {Array} 其他项目数组
     */
    const getOtherItems = (currentItemId) => {
        if (!currentItemId || !data.value.length) return []
        const filtered = data.value.filter(item => item.id !== currentItemId)
        return filtered.slice(-5)
    }

    /**
     * 获取详情页路由路径
     * @param {string} itemAddressBar - 项目的 addressBar
     * @returns {string} 详情页路径
     */
    const getDetailPath = (itemAddressBar) => {
        if (!category) return ''
        const config = WIKI_DATA_CONFIG[category]
        if (!config) return ''
        
        // 提取 addressBar 中的 ID 部分（去掉开头的斜杠）
        const itemId = itemAddressBar.replace(/^\//, '')
        
        // 根据类别返回对应的路径
        if (category === 'quests') {
            return `/wiki/quests/${itemId}`
        } else {
            // 其他类别使用 /wiki/{category}/{id} 格式
            return `/wiki/${category}/${itemId}`
        }
    }

    return {
        data,
        loading,
        error,
        loadData,
        findItemById,
        getOtherItems,
        getDetailPath
    }
}

/**
 * 获取所有可用的 wiki 类别配置
 */
export function getWikiCategories() {
    return Object.keys(WIKI_DATA_CONFIG)
}

/**
 * 获取指定类别的配置
 */
export function getWikiCategoryConfig(category) {
    return WIKI_DATA_CONFIG[category] || null
}

