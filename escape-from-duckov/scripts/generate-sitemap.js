import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// 支持的语言列表（英语为默认语言，无需前缀）
const supportedLanguages = ['en', 'de', 'fr', 'es', 'ja', 'ko', 'ru', 'pt', 'zh']

// 动态加载所有语言的数据
async function loadDataForAllLanguages() {
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

    // 加载所有语言的 guides 数据
    for (const lang of supportedLanguages) {
        try {
            const guideModule = await import(`../src/data/guide/${lang}/guide.js`)
            data.guides[lang] = guideModule.guides || guideModule.default || []
        } catch (error) {
            console.warn(`Failed to load guides for ${lang}:`, error.message)
            data.guides[lang] = []
        }
    }

    // 加载所有语言的 mods 数据
    for (const lang of supportedLanguages) {
        try {
            const modsModule = await import(`../src/data/mods/${lang}/mods.js`)
            data.mods[lang] = modsModule.default || []
        } catch (error) {
            console.warn(`Failed to load mods for ${lang}:`, error.message)
            data.mods[lang] = []
        }
    }

    // 加载所有语言的 maps 数据
    for (const lang of supportedLanguages) {
        try {
            const mapsModule = await import(`../src/data/maps/${lang}/maps.js`)
            data.maps[lang] = mapsModule.maps || mapsModule.default || []
        } catch (error) {
            console.warn(`Failed to load maps for ${lang}:`, error.message)
            data.maps[lang] = []
        }
    }

    // 加载所有语言的 quests 数据
    for (const lang of supportedLanguages) {
        try {
            const questsModule = await import(`../src/data/wiki/quests/${lang}/quests.js`)
            data.quests[lang] = questsModule.default || []
        } catch (error) {
            console.warn(`Failed to load quests for ${lang}:`, error.message)
            data.quests[lang] = []
        }
    }

    // 加载所有语言的 items 数据
    for (const lang of supportedLanguages) {
        // weapons
        try {
            const weaponsModule = await import(`../src/data/items/weapons/${lang}/weapons.js`)
            data.items.weapons[lang] = weaponsModule.default || []
        } catch (error) {
            console.warn(`Failed to load weapons for ${lang}:`, error.message)
            data.items.weapons[lang] = []
        }

        // equipment
        try {
            const equipmentModule = await import(`../src/data/items/equipment/${lang}/equipment.js`)
            data.items.equipment[lang] = equipmentModule.default || []
        } catch (error) {
            console.warn(`Failed to load equipment for ${lang}:`, error.message)
            data.items.equipment[lang] = []
        }

        // ammunition
        try {
            const ammunitionModule = await import(`../src/data/items/ammunition/${lang}/ammunition.js`)
            data.items.ammunition[lang] = ammunitionModule.default || []
        } catch (error) {
            console.warn(`Failed to load ammunition for ${lang}:`, error.message)
            data.items.ammunition[lang] = []
        }

        // key
        try {
            const keyModule = await import(`../src/data/items/key/${lang}/key.js`)
            data.items.key[lang] = keyModule.default || []
        } catch (error) {
            console.warn(`Failed to load key for ${lang}:`, error.message)
            data.items.key[lang] = []
        }

        // fish
        try {
            const fishModule = await import(`../src/data/items/fish/${lang}/fish.js`)
            data.items.fish[lang] = fishModule.default || []
        } catch (error) {
            console.warn(`Failed to load fish for ${lang}:`, error.message)
            data.items.fish[lang] = []
        }
    }

    return data
}

// SEO配置
const seoConfig = {
    fullDomain: 'https://duckovgame.com'
}

// 基础路由配置（英语版本）
const baseRoutes = [
    { path: '/', name: 'home', priority: 1.0, changefreq: 'weekly' },
    { path: '/guides', name: 'guides', priority: 0.9, changefreq: 'weekly' },
    { path: '/wiki', name: 'wiki', priority: 0.8, changefreq: 'weekly' },
    { path: '/wiki/quests', name: 'quests', priority: 0.7, changefreq: 'monthly' },
    { path: '/items', name: 'items', priority: 0.7, changefreq: 'weekly' },
    { path: '/items/weapons', name: 'items-weapons', priority: 0.7, changefreq: 'weekly' },
    { path: '/items/equipment', name: 'items-equipment', priority: 0.7, changefreq: 'weekly' },
    { path: '/items/ammunition', name: 'items-ammunition', priority: 0.7, changefreq: 'weekly' },
    { path: '/items/key', name: 'items-key', priority: 0.7, changefreq: 'weekly' },
    { path: '/items/fish', name: 'items-fish', priority: 0.7, changefreq: 'weekly' },
    { path: '/maps', name: 'maps', priority: 0.8, changefreq: 'monthly' },
    { path: '/mods', name: 'mods', priority: 0.7, changefreq: 'weekly' },
    { path: '/privacy-policy', name: 'privacy-policy', priority: 0.5, changefreq: 'yearly' },
    { path: '/terms-of-service', name: 'terms-of-service', priority: 0.5, changefreq: 'yearly' },
    { path: '/copyright', name: 'copyright', priority: 0.5, changefreq: 'yearly' },
    { path: '/about-us', name: 'about-us', priority: 0.6, changefreq: 'monthly' },
    { path: '/contact-us', name: 'contact-us', priority: 0.6, changefreq: 'monthly' }
]

// 生成所有语言的路由
function generateAllLanguageRoutes() {
    const allRoutes = []
    
    // 添加英语路由（默认，无前缀）
    allRoutes.push(...baseRoutes)
    
    // 为其他语言生成路由（带语言前缀）
    for (const lang of supportedLanguages) {
        if (lang === 'en') continue // 英语已添加
        
        baseRoutes.forEach(route => {
            allRoutes.push({
                ...route,
                path: `/${lang}${route.path}`,
                priority: Math.round((route.priority - 0.1) * 10) / 10 // 降低优先级，并修复浮点数精度
            })
        })
    }
    
    return allRoutes
}

// 生成URL
function generateUrl(path) {
    return `${seoConfig.fullDomain}${path}`
}

// 生成单个URL的XML
function generateUrlXml(path, lastmod, priority, changefreq) {
    const url = generateUrl(path)
    // 修复浮点数精度问题，确保只显示一位小数
    const roundedPriority = Math.round(priority * 10) / 10

    return `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${roundedPriority}</priority>
  </url>`
}

// 生成站点地图
async function generateSitemap(data) {
    const lastmod = new Date().toISOString().split('T')[0]

    let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`

    // 生成所有语言的路由
    const allRoutes = generateAllLanguageRoutes()
    allRoutes.forEach(route => {
        sitemapXml += `\n${generateUrlXml(route.path, lastmod, route.priority, route.changefreq)}`
    })

    // 为每种语言的 guides 生成URL
    for (const lang of supportedLanguages) {
        const guides = data.guides[lang] || []
        const langPrefix = lang === 'en' ? '' : `/${lang}`
        const priority = lang === 'en' ? 0.8 : 0.7 // 英语0.8，其他0.7
        
        guides.forEach(guide => {
            if (!guide || !guide.addressBar) return
            const guidePath = `${langPrefix}/guides${guide.addressBar}`
            sitemapXml += `\n${generateUrlXml(guidePath, guide.publishDate || lastmod, priority, 'monthly')}`
        })
    }

    // 为每种语言的 mods 生成URL
    for (const lang of supportedLanguages) {
        const mods = data.mods[lang] || []
        const langPrefix = lang === 'en' ? '' : `/${lang}`
        const priority = lang === 'en' ? 0.6 : 0.5 // 英语0.6，其他0.5
        
        mods.forEach(mod => {
            if (!mod || !mod.addressBar) return
            const modPath = `${langPrefix}/mods${mod.addressBar}`
            sitemapXml += `\n${generateUrlXml(modPath, mod.publishDate || lastmod, priority, 'monthly')}`
        })
    }

    // 为每种语言的 maps 生成URL
    for (const lang of supportedLanguages) {
        const maps = data.maps[lang] || []
        const langPrefix = lang === 'en' ? '' : `/${lang}`
        const priority = lang === 'en' ? 0.7 : 0.6 // 英语0.7，其他0.6
        
        maps.forEach(map => {
            if (!map || !map.addressBar) return
            const mapPath = `${langPrefix}/maps${map.addressBar}`
            sitemapXml += `\n${generateUrlXml(mapPath, map.publishDate || lastmod, priority, 'monthly')}`
        })
    }

    // 为每种语言的 quests 生成URL
    for (const lang of supportedLanguages) {
        const quests = data.quests[lang] || []
        const langPrefix = lang === 'en' ? '' : `/${lang}`
        const priority = lang === 'en' ? 0.7 : 0.6 // 英语0.7，其他0.6
        
        quests
            .filter(quest => quest && quest.showDetail !== false)
            .forEach(quest => {
                if (!quest.addressBar) return
                const questPath = `${langPrefix}/wiki/quests${quest.addressBar}`
                sitemapXml += `\n${generateUrlXml(questPath, quest.publishDate || lastmod, priority, 'monthly')}`
            })
    }

    // 为每种语言的 items/weapons 生成URL
    for (const lang of supportedLanguages) {
        const weapons = data.items.weapons[lang] || []
        const langPrefix = lang === 'en' ? '' : `/${lang}`
        const priority = lang === 'en' ? 0.7 : 0.6 // 英语0.7，其他0.6
        
        weapons
            .filter(item => item && item.showDetail !== false && item.addressBar)
            .forEach(item => {
                const p = `${langPrefix}/items/weapons${item.addressBar}`
                sitemapXml += `\n${generateUrlXml(p, item.publishDate || lastmod, priority, 'monthly')}`
            })
    }

    // 为每种语言的 items/equipment 生成URL
    for (const lang of supportedLanguages) {
        const equipment = data.items.equipment[lang] || []
        const langPrefix = lang === 'en' ? '' : `/${lang}`
        const priority = lang === 'en' ? 0.7 : 0.6 // 英语0.7，其他0.6
        
        equipment
            .filter(item => item && item.showDetail !== false && item.addressBar)
            .forEach(item => {
                const p = `${langPrefix}/items/equipment${item.addressBar}`
                sitemapXml += `\n${generateUrlXml(p, item.publishDate || lastmod, priority, 'monthly')}`
            })
    }

    // 为每种语言的 items/ammunition 生成URL
    for (const lang of supportedLanguages) {
        const ammunition = data.items.ammunition[lang] || []
        const langPrefix = lang === 'en' ? '' : `/${lang}`
        const priority = lang === 'en' ? 0.7 : 0.6 // 英语0.7，其他0.6
        
        ammunition
            .filter(item => item && item.showDetail !== false && item.addressBar)
            .forEach(item => {
                const p = `${langPrefix}/items/ammunition${item.addressBar}`
                sitemapXml += `\n${generateUrlXml(p, item.publishDate || lastmod, priority, 'monthly')}`
            })
    }

    // 为每种语言的 items/key 生成URL
    for (const lang of supportedLanguages) {
        const keys = data.items.key[lang] || []
        const langPrefix = lang === 'en' ? '' : `/${lang}`
        const priority = lang === 'en' ? 0.7 : 0.6 // 英语0.7，其他0.6
        
        keys
            .filter(item => item && item.showDetail !== false && item.addressBar)
            .forEach(item => {
                const p = `${langPrefix}/items/key${item.addressBar}`
                sitemapXml += `\n${generateUrlXml(p, item.publishDate || lastmod, priority, 'monthly')}`
            })
    }

    // 为每种语言的 items/fish 生成URL
    for (const lang of supportedLanguages) {
        const fish = data.items.fish[lang] || []
        const langPrefix = lang === 'en' ? '' : `/${lang}`
        const priority = lang === 'en' ? 0.7 : 0.6 // 英语0.7，其他0.6
        
        fish
            .filter(item => item && item.showDetail !== false && item.addressBar)
            .forEach(item => {
                const p = `${langPrefix}/items/fish${item.addressBar}`
                sitemapXml += `\n${generateUrlXml(p, item.publishDate || lastmod, priority, 'monthly')}`
            })
    }

    sitemapXml += `\n</urlset>`
    return sitemapXml
}

// 生成并保存站点地图
async function main() {
    try {
        console.log('📦 Loading data for all languages...')
        const data = await loadDataForAllLanguages()
        
        console.log('🗺️  Generating sitemap...')
        const sitemapContent = await generateSitemap(data)
        
        const publicPath = path.join(__dirname, '../public/sitemap.xml')
        const distPath = path.join(__dirname, '../dist/sitemap.xml')

        // 确保public目录存在
        const publicDir = path.dirname(publicPath)
        if (!fs.existsSync(publicDir)) {
            fs.mkdirSync(publicDir, { recursive: true })
        }

        fs.writeFileSync(publicPath, sitemapContent, 'utf8')
        console.log('✅ Generated sitemap.xml in public folder')

        // 如果dist目录存在，也复制一份
        if (fs.existsSync(path.join(__dirname, '../dist'))) {
            fs.writeFileSync(distPath, sitemapContent, 'utf8')
            console.log('✅ Generated sitemap.xml in dist folder')
        }

        const urlCount = (sitemapContent.match(/<url>/g) || []).length
        console.log(`✅ Total URLs in sitemap: ${urlCount}`)
        
        // 统计各语言的URL数量
        const langStats = {}
        for (const lang of supportedLanguages) {
            const langPrefix = lang === 'en' ? '' : `/${lang}`
            const pattern = lang === 'en' ? /<loc>https:\/\/duckovgame\.com\/(?!de|fr|es|ja|ko|ru|pt|zh)/g : new RegExp(`<loc>https://duckovgame\.com/${lang}/`, 'g')
            const matches = sitemapContent.match(pattern) || []
            langStats[lang] = matches.length
        }
        
        console.log('\n📊 URLs by language:')
        Object.entries(langStats).forEach(([lang, count]) => {
            console.log(`   ${lang}: ${count} URLs`)
        })
        
        // 验证生成的站点地图
        const validation = sitemapContent.includes('<?xml version="1.0" encoding="UTF-8"?>') &&
                          sitemapContent.includes('<urlset') &&
                          sitemapContent.includes('</urlset>')
        
        if (validation) {
            console.log('\n✅ Sitemap validation passed')
        } else {
            console.error('\n❌ Sitemap validation failed')
            process.exit(1)
        }
    } catch (error) {
        console.error('❌ Error generating sitemap:', error)
        process.exit(1)
    }
}

// 运行主函数
main()
