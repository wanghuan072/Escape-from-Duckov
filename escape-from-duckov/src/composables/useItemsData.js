import { ref } from 'vue'
import { getCurrentLocale } from '../i18n'
import { createDataLoader, dataExtractors } from './useDataLoader'

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

// 为每个类别创建语言映射表
const createLocaleMap = (category) => ({
    en: () => import(`../data/items/${category}/en/${category}.js`),
    de: () => import(`../data/items/${category}/de/${category}.js`),
    fr: () => import(`../data/items/${category}/fr/${category}.js`),
    es: () => import(`../data/items/${category}/es/${category}.js`),
    ja: () => import(`../data/items/${category}/ja/${category}.js`),
    ko: () => import(`../data/items/${category}/ko/${category}.js`),
    ru: () => import(`../data/items/${category}/ru/${category}.js`),
    pt: () => import(`../data/items/${category}/pt/${category}.js`),
    zh: () => import(`../data/items/${category}/zh/${category}.js`)
})

// 为每个类别创建数据加载器
const categoryLoaders = {
    ammunition: createDataLoader(createLocaleMap('ammunition'), dataExtractors.default),
    equipment: createDataLoader(createLocaleMap('equipment'), dataExtractors.default),
    fish: createDataLoader(createLocaleMap('fish'), dataExtractors.default),
    key: createDataLoader(createLocaleMap('key'), dataExtractors.default),
    weapons: createDataLoader(createLocaleMap('weapons'), dataExtractors.default)
}

const loadDataModule = async (category, locale = null) => {
    const loader = categoryLoaders[category]
    if (!loader) {
        throw new Error(`Unknown items category: ${category}`)
    }
    
    const targetLocale = locale || getCurrentLocale()
    const data = await loader(targetLocale)
    return { default: data }
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


