import { ref } from 'vue'

const ITEMS_DATA_CONFIG = {
    weapons: {
        routePath: '/items/weapons'
    },
    equipment: {
        routePath: '/items/equipment'
    }
}

const loadDataModule = async (category) => {
    switch (category) {
        case 'weapons':
            return await import('../data/items/weapons/weapons.js')
        case 'equipment':
            return await import('../data/items/equipment/equipment.js')
        default:
            throw new Error(`Unknown items category: ${category}`)
    }
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

    const loadData = async (category = categoryRef.value) => {
        categoryRef.value = category
        loading.value = true
        error.value = null
        try {
            const mod = await loadDataModule(category)
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


