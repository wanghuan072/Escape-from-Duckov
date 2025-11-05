import { getCurrentLocale } from '../i18n'

/**
 * 通用数据加载器
 * 封装了多语言数据加载的通用逻辑，包括错误处理和回退机制
 * 
 * @param {Object} localeMap - 语言映射表，格式: { en: () => import(...), de: () => import(...) }
 * @param {Function} extractData - 从模块中提取数据的函数，参数: (module) => array
 * @param {string} defaultLocale - 默认语言，默认 'en'
 * @returns {Function} 返回加载函数 loadData(locale)
 */
export function createDataLoader(localeMap, extractData, defaultLocale = 'en') {
    /**
     * 加载指定语言的数据
     * @param {string} locale - 目标语言代码
     * @returns {Promise<Array>} 数据数组
     */
    return async function loadData(locale) {
        const targetLocale = localeMap[locale] ? locale : defaultLocale
        
        try {
            // 尝试加载目标语言的数据
            const module = await localeMap[targetLocale]()
            const data = extractData(module) || []
            
            // 如果数据为空且不是默认语言，回退到默认语言
            if (data.length === 0 && targetLocale !== defaultLocale) {
                const defaultModule = await localeMap[defaultLocale]()
                return extractData(defaultModule) || []
            }
            
            return data
        } catch (error) {
            // 加载失败，如果目标语言不是默认语言，尝试回退到默认语言
            if (targetLocale !== defaultLocale) {
                try {
                    const defaultModule = await localeMap[defaultLocale]()
                    return extractData(defaultModule) || []
                } catch {
                    return []
                }
            }
            return []
        }
    }
}

/**
 * 常用的数据提取函数
 */
export const dataExtractors = {
    // 提取 guides 数组（从 module.guides）
    guides: (module) => module?.guides || [],
    
    // 提取 default 导出的数组（从 module.default）
    default: (module) => module?.default || [],
    
    // 通用提取器：优先提取 default，其次提取第一个数组属性
    auto: (module) => {
        if (module?.default && Array.isArray(module.default)) {
            return module.default
        }
        if (module?.guides && Array.isArray(module.guides)) {
            return module.guides
        }
        // 查找第一个数组属性
        if (module && typeof module === 'object') {
            const keys = Object.keys(module)
            for (const key of keys) {
                if (Array.isArray(module[key])) {
                    return module[key]
                }
            }
        }
        return []
    }
}

