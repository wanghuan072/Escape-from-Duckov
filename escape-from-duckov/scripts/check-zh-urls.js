import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const supportedLanguages = ['en', 'de', 'fr', 'es', 'ja', 'ko', 'ru', 'pt', 'zh']

async function checkDataCounts() {
    const data = {
        guides: {},
        mods: {},
        quests: {},
        maps: {},
        items: {
            weapons: {},
            equipment: {},
            ammunition: {},
            key: {},
            fish: {}
        }
    }

    // Load all data
    for (const lang of supportedLanguages) {
        // guides
        try {
            const guideModule = await import(`../src/data/guide/${lang}/guide.js`)
            data.guides[lang] = (guideModule.guides || guideModule.default || []).filter(g => g && g.addressBar)
        } catch (error) {
            data.guides[lang] = []
        }

        // mods
        try {
            const modsModule = await import(`../src/data/mods/${lang}/mods.js`)
            data.mods[lang] = (modsModule.default || []).filter(m => m && m.addressBar)
        } catch (error) {
            data.mods[lang] = []
        }

        // maps
        try {
            const mapsModule = await import(`../src/data/maps/${lang}/maps.js`)
            data.maps[lang] = (mapsModule.maps || mapsModule.default || []).filter(m => m && m.addressBar)
        } catch (error) {
            data.maps[lang] = []
        }

        // quests
        try {
            const questsModule = await import(`../src/data/wiki/quests/${lang}/quests.js`)
            data.quests[lang] = (questsModule.default || []).filter(q => q && q.showDetail !== false && q.addressBar)
        } catch (error) {
            data.quests[lang] = []
        }

        // items
        for (const category of ['weapons', 'equipment', 'ammunition', 'key', 'fish']) {
            try {
                const itemsModule = await import(`../src/data/items/${category}/${lang}/${category}.js`)
                data.items[category][lang] = (itemsModule.default || []).filter(i => i && i.showDetail !== false && i.addressBar)
            } catch (error) {
                data.items[category][lang] = []
            }
        }
    }

    // Compare counts
    console.log('=== Data Counts Comparison ===\n')
    
    const dataTypes = [
        { name: 'guides', data: data.guides },
        { name: 'mods', data: data.mods },
        { name: 'maps', data: data.maps },
        { name: 'quests', data: data.quests },
        { name: 'weapons', data: data.items.weapons },
        { name: 'equipment', data: data.items.equipment },
        { name: 'ammunition', data: data.items.ammunition },
        { name: 'key', data: data.items.key },
        { name: 'fish', data: data.items.fish }
    ]

    for (const { name, data: typeData } of dataTypes) {
        const enCount = typeData.en?.length || 0
        const zhCount = typeData.zh?.length || 0
        
        if (enCount !== zhCount) {
            console.log(`❌ ${name}: EN=${enCount}, ZH=${zhCount} (差 ${enCount - zhCount})`)
            
            // Find missing items
            if (enCount > zhCount) {
                const enItems = typeData.en || []
                const zhItems = typeData.zh || []
                const enAddressBars = new Set(enItems.map(item => item.addressBar))
                const zhAddressBars = new Set(zhItems.map(item => item.addressBar))
                
                const missing = Array.from(enAddressBars).filter(addr => !zhAddressBars.has(addr))
                if (missing.length > 0) {
                    console.log(`   缺少的addressBar: ${missing.join(', ')}`)
                }
            }
        } else {
            console.log(`✅ ${name}: ${enCount}`)
        }
    }
}

checkDataCounts().catch(console.error)

