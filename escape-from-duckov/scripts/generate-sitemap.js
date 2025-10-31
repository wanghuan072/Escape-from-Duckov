import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { guides } from '../src/data/guide/guide.js'
import { mods } from '../src/data/mods/mods.js'
import quests from '../src/data/wiki/quests/quests.js'
import itemsWeapons from '../src/data/items/weapons/weapons.js'
import itemsEquipment from '../src/data/items/equipment/equipment.js'
import itemsAmmunition from '../src/data/items/ammunition/ammunition.js'
import itemsKey from '../src/data/items/key/key.js'
import itemsFish from '../src/data/items/fish/fish.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// SEO配置
const seoConfig = {
    fullDomain: 'https://duckovgame.com'
}

// 路由配置
const routes = [
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

// 生成URL
function generateUrl(path) {
    return `${seoConfig.fullDomain}${path}`
}

// 生成单个URL的XML
function generateUrlXml(path, lastmod, priority, changefreq) {
    const url = generateUrl(path)

    return `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
}

// 生成站点地图
function generateSitemap() {
    const lastmod = new Date().toISOString().split('T')[0]

    let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`

    // 为每个路由生成URL
    routes.forEach(route => {
        sitemapXml += `\n${generateUrlXml(route.path, lastmod, route.priority, route.changefreq)}`
    })

    // 为每个指南生成URL
    if (guides && Array.isArray(guides)) {
        guides.forEach(guide => {
            if (!guide || !guide.addressBar) return
            const guidePath = `/guides${guide.addressBar}`
            sitemapXml += `\n${generateUrlXml(guidePath, guide.publishDate || lastmod, 0.8, 'monthly')}`
        })
    }

    // 为每个模组生成URL
    if (mods && Array.isArray(mods)) {
        mods.forEach(mod => {
            if (!mod || !mod.addressBar) return
            const modPath = `/mods${mod.addressBar}`
            sitemapXml += `\n${generateUrlXml(modPath, mod.publishDate || lastmod, 0.6, 'monthly')}`
        })
    }

    // 为每个任务生成URL
    if (quests && Array.isArray(quests)) {
        quests
            .filter(quest => quest && quest.showDetail !== false)
            .forEach(quest => {
                if (!quest.addressBar) return
                const questPath = `/wiki/quests${quest.addressBar}`
                sitemapXml += `\n${generateUrlXml(questPath, quest.publishDate || lastmod, 0.7, 'monthly')}`
            })
    }


    // 为 items/weapons 生成URL
    if (itemsWeapons && Array.isArray(itemsWeapons)) {
        itemsWeapons
            .filter(item => item && item.showDetail !== false && item.addressBar)
            .forEach(item => {
                const p = `/items/weapons${item.addressBar}`
                sitemapXml += `\n${generateUrlXml(p, item.publishDate || lastmod, 0.7, 'monthly')}`
            })
    }

    // 为 items/equipment 生成URL
    if (itemsEquipment && Array.isArray(itemsEquipment)) {
        itemsEquipment
            .filter(item => item && item.showDetail !== false && item.addressBar)
            .forEach(item => {
                const p = `/items/equipment${item.addressBar}`
                sitemapXml += `\n${generateUrlXml(p, item.publishDate || lastmod, 0.7, 'monthly')}`
            })
    }

    // 为 items/ammunition 生成URL
    if (itemsAmmunition && Array.isArray(itemsAmmunition)) {
        itemsAmmunition
            .filter(item => item && item.showDetail !== false && item.addressBar)
            .forEach(item => {
                const p = `/items/ammunition${item.addressBar}`
                sitemapXml += `\n${generateUrlXml(p, item.publishDate || lastmod, 0.7, 'monthly')}`
            })
    }

    // 为 items/key 生成URL
    if (itemsKey && Array.isArray(itemsKey)) {
        itemsKey
            .filter(item => item && item.showDetail !== false && item.addressBar)
            .forEach(item => {
                const p = `/items/key${item.addressBar}`
                sitemapXml += `\n${generateUrlXml(p, item.publishDate || lastmod, 0.7, 'monthly')}`
            })
    }

    // 为 items/fish 生成URL
    if (itemsFish && Array.isArray(itemsFish)) {
        itemsFish
            .filter(item => item && item.showDetail !== false && item.addressBar)
            .forEach(item => {
                const p = `/items/fish${item.addressBar}`
                sitemapXml += `\n${generateUrlXml(p, item.publishDate || lastmod, 0.7, 'monthly')}`
            })
    }

    sitemapXml += `\n</urlset>`
    return sitemapXml
}

// 生成并保存站点地图
try {
    const sitemapContent = generateSitemap()
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

    console.log(`✅ Total URLs in sitemap: ${(sitemapContent.match(/<url>/g) || []).length}`)
    
    // 验证生成的站点地图
    const validation = sitemapContent.includes('<?xml version="1.0" encoding="UTF-8"?>') &&
                      sitemapContent.includes('<urlset') &&
                      sitemapContent.includes('</urlset>')
    
    if (validation) {
        console.log('✅ Sitemap validation passed')
    } else {
        console.error('❌ Sitemap validation failed')
        process.exit(1)
    }
} catch (error) {
    console.error('❌ Error generating sitemap:', error)
    process.exit(1)
}
