import { ref } from 'vue'
import { getCurrentLocale } from '../i18n'

const ITEMS_DATA_CONFIG = {
    weapons: {
        routePath: '/items/weapons'
    },
    equipment: {
        routePath: '/items/equipment'
    },
    ammunition: {
        routePath: '/items/ammunition'
    },
    key: {
        routePath: '/items/key'
    },
    fish: {
        routePath: '/items/fish'
    }
}

// 语言映射表 - ammunition 支持多语言数据加载
const ammunitionLocaleMap = {
    en: () => import('../data/items/ammunition/en/ammunition.js'),
    de: () => import('../data/items/ammunition/de/ammunition.js'),
    fr: () => import('../data/items/ammunition/fr/ammunition.js'),
    es: () => import('../data/items/ammunition/es/ammunition.js'),
    ja: () => import('../data/items/ammunition/ja/ammunition.js'),
    ko: () => import('../data/items/ammunition/ko/ammunition.js'),
    ru: () => import('../data/items/ammunition/ru/ammunition.js'),
    pt: () => import('../data/items/ammunition/pt/ammunition.js'),
    zh: () => import('../data/items/ammunition/zh/ammunition.js')
}

// 语言映射表 - equipment 支持多语言数据加载
const equipmentLocaleMap = {
    en: () => import('../data/items/equipment/en/equipment.js'),
    de: () => import('../data/items/equipment/de/equipment.js'),
    fr: () => import('../data/items/equipment/fr/equipment.js'),
    es: () => import('../data/items/equipment/es/equipment.js'),
    ja: () => import('../data/items/equipment/ja/equipment.js'),
    ko: () => import('../data/items/equipment/ko/equipment.js'),
    ru: () => import('../data/items/equipment/ru/equipment.js'),
    pt: () => import('../data/items/equipment/pt/equipment.js'),
    zh: () => import('../data/items/equipment/zh/equipment.js')
}

// 语言映射表 - fish 支持多语言数据加载
const fishLocaleMap = {
    en: () => import('../data/items/fish/en/fish.js'),
    de: () => import('../data/items/fish/de/fish.js'),
    fr: () => import('../data/items/fish/fr/fish.js'),
    es: () => import('../data/items/fish/es/fish.js'),
    ja: () => import('../data/items/fish/ja/fish.js'),
    ko: () => import('../data/items/fish/ko/fish.js'),
    ru: () => import('../data/items/fish/ru/fish.js'),
    pt: () => import('../data/items/fish/pt/fish.js'),
    zh: () => import('../data/items/fish/zh/fish.js')
}

// 语言映射表 - key 支持多语言数据加载
const keyLocaleMap = {
    en: () => import('../data/items/key/en/key.js'),
    de: () => import('../data/items/key/de/key.js'),
    fr: () => import('../data/items/key/fr/key.js'),
    es: () => import('../data/items/key/es/key.js'),
    ja: () => import('../data/items/key/ja/key.js'),
    ko: () => import('../data/items/key/ko/key.js'),
    ru: () => import('../data/items/key/ru/key.js'),
    pt: () => import('../data/items/key/pt/key.js'),
    zh: () => import('../data/items/key/zh/key.js')
}

// 语言映射表 - weapons 支持多语言数据加载
const weaponsLocaleMap = {
    en: () => import('../data/items/weapons/en/weapons.js'),
    de: () => import('../data/items/weapons/de/weapons.js'),
    fr: () => import('../data/items/weapons/fr/weapons.js'),
    es: () => import('../data/items/weapons/es/weapons.js'),
    ja: () => import('../data/items/weapons/ja/weapons.js'),
    ko: () => import('../data/items/weapons/ko/weapons.js'),
    ru: () => import('../data/items/weapons/ru/weapons.js'),
    pt: () => import('../data/items/weapons/pt/weapons.js'),
    zh: () => import('../data/items/weapons/zh/weapons.js')
}

/**
 * 加载指定语言的 ammunition 数据
 */
const loadAmmunitionData = async (locale) => {
    const targetLocale = ammunitionLocaleMap[locale] ? locale : 'en'
    
    try {
        const module = await ammunitionLocaleMap[targetLocale]()
        const data = module.default || []
        
        // 如果数据为空且不是英文，回退到英文
        if (data.length === 0 && targetLocale !== 'en') {
            const enModule = await ammunitionLocaleMap.en()
            return enModule.default || []
        }
        
        return data
    } catch (error) {
        // 加载失败，回退到英文
        if (targetLocale !== 'en') {
            try {
                const enModule = await ammunitionLocaleMap.en()
                return enModule.default || []
            } catch {
                return []
            }
        }
        return []
    }
}

/**
 * 加载指定语言的 equipment 数据
 */
const loadEquipmentData = async (locale) => {
    const targetLocale = equipmentLocaleMap[locale] ? locale : 'en'
    
    try {
        const module = await equipmentLocaleMap[targetLocale]()
        const data = module.default || []
        
        // 如果数据为空且不是英文，回退到英文
        if (data.length === 0 && targetLocale !== 'en') {
            const enModule = await equipmentLocaleMap.en()
            return enModule.default || []
        }
        
        return data
    } catch (error) {
        // 加载失败，回退到英文
        if (targetLocale !== 'en') {
            try {
                const enModule = await equipmentLocaleMap.en()
                return enModule.default || []
            } catch {
                return []
            }
        }
        return []
    }
}

/**
 * 加载指定语言的 fish 数据
 */
const loadFishData = async (locale) => {
    const targetLocale = fishLocaleMap[locale] ? locale : 'en'
    
    try {
        const module = await fishLocaleMap[targetLocale]()
        const data = module.default || []
        
        // 如果数据为空且不是英文，回退到英文
        if (data.length === 0 && targetLocale !== 'en') {
            const enModule = await fishLocaleMap.en()
            return enModule.default || []
        }
        
        return data
    } catch (error) {
        // 加载失败，回退到英文
        if (targetLocale !== 'en') {
            try {
                const enModule = await fishLocaleMap.en()
                return enModule.default || []
            } catch {
                return []
            }
        }
        return []
    }
}

/**
 * 加载指定语言的 key 数据
 */
const loadKeyData = async (locale) => {
    const targetLocale = keyLocaleMap[locale] ? locale : 'en'
    
    try {
        const module = await keyLocaleMap[targetLocale]()
        const data = module.default || []
        
        // 如果数据为空且不是英文，回退到英文
        if (data.length === 0 && targetLocale !== 'en') {
            const enModule = await keyLocaleMap.en()
            return enModule.default || []
        }
        
        return data
    } catch (error) {
        // 加载失败，回退到英文
        if (targetLocale !== 'en') {
            try {
                const enModule = await keyLocaleMap.en()
                return enModule.default || []
            } catch {
                return []
            }
        }
        return []
    }
}

/**
 * 加载指定语言的 weapons 数据
 */
const loadWeaponsData = async (locale) => {
    const targetLocale = weaponsLocaleMap[locale] ? locale : 'en'
    
    try {
        const module = await weaponsLocaleMap[targetLocale]()
        const data = module.default || []
        
        // 如果数据为空且不是英文，回退到英文
        if (data.length === 0 && targetLocale !== 'en') {
            const enModule = await weaponsLocaleMap.en()
            return enModule.default || []
        }
        
        return data
    } catch (error) {
        // 加载失败，回退到英文
        if (targetLocale !== 'en') {
            try {
                const enModule = await weaponsLocaleMap.en()
                return enModule.default || []
            } catch {
                return []
            }
        }
        return []
    }
}

const loadDataModule = async (category, locale = null) => {
    // ammunition 使用多语言加载
    if (category === 'ammunition') {
        const targetLocale = locale || getCurrentLocale()
        const data = await loadAmmunitionData(targetLocale)
        return { default: data }
    }
    
    // equipment 使用多语言加载
    if (category === 'equipment') {
        const targetLocale = locale || getCurrentLocale()
        const data = await loadEquipmentData(targetLocale)
        return { default: data }
    }
    
    // fish 使用多语言加载
    if (category === 'fish') {
        const targetLocale = locale || getCurrentLocale()
        const data = await loadFishData(targetLocale)
        return { default: data }
    }
    
    // key 使用多语言加载
    if (category === 'key') {
        const targetLocale = locale || getCurrentLocale()
        const data = await loadKeyData(targetLocale)
        return { default: data }
    }
    
    // weapons 使用多语言加载
    if (category === 'weapons') {
        const targetLocale = locale || getCurrentLocale()
        const data = await loadWeaponsData(targetLocale)
        return { default: data }
    }
    
    // 所有类别都已支持多语言，不应该到这里
    throw new Error(`Unknown items category: ${category}`)
}

export function useItemsData(initialCategory) {
    const data = ref([])
    const loading = ref(false)
    const error = ref(null)
    const categoryRef = ref(initialCategory || '')

    const extractArray = (module) => {
        if (!module) return []
        if (Array.isArray(module.default)) return module.default
        if (Array.isArray(module.items)) return module.items
        return []
    }

    const loadData = async (category = categoryRef.value, locale = null) => {
        categoryRef.value = category
        loading.value = true
        error.value = null
        try {
            const targetLocale = locale || getCurrentLocale()
            const mod = await loadDataModule(category, targetLocale)
            data.value = extractArray(mod)
        } catch (e) {
            error.value = e
            data.value = []
        } finally {
            loading.value = false
        }
    }

    const findByAddress = (category, idSlug) => {
        const list = data.value || []
        return list.find((item) => {
            if (!item || !item.addressBar) return false
            const slug = String(item.addressBar).replace(/^\//, '')
            return slug === idSlug
        })
    }

    return {
        data,
        loading,
        error,
        config: ITEMS_DATA_CONFIG,
        loadData,
        findByAddress,
    }
}


