import fs from 'fs'
import path from 'path'

// Vite插件：复制静态SEO文件
export function seoPlugin() {
    return {
        name: 'seo-plugin',
        configureServer(server) {
            // 开发环境：复制静态站点地图和robots.txt
            server.middlewares.use('/sitemap.xml', (req, res, next) => {
                const publicSitemap = path.resolve(process.cwd(), 'public/sitemap.xml')
                if (fs.existsSync(publicSitemap)) {
                    const sitemapContent = fs.readFileSync(publicSitemap, 'utf8')
                    res.setHeader('Content-Type', 'application/xml')
                    res.end(sitemapContent)
                } else {
                    res.statusCode = 404
                    res.end('Sitemap not found. Run: npm run generate-sitemap')
                }
            })

            server.middlewares.use('/robots.txt', (req, res, next) => {
                const publicRobots = path.resolve(process.cwd(), 'public/robots.txt')
                if (fs.existsSync(publicRobots)) {
                    const robotsContent = fs.readFileSync(publicRobots, 'utf8')
                    res.setHeader('Content-Type', 'text/plain')
                    res.end(robotsContent)
                } else {
                    res.statusCode = 404
                    res.end('robots.txt not found')
                }
            })
        },
        writeBundle() {
            // 生产环境：复制静态站点地图和robots.txt
            const publicSitemap = path.resolve(process.cwd(), 'public/sitemap.xml')
            const distSitemap = path.resolve(process.cwd(), 'dist/sitemap.xml')

            if (fs.existsSync(publicSitemap)) {
                fs.copyFileSync(publicSitemap, distSitemap)
                console.log('✅ Copied sitemap.xml from public/')
            } else {
                console.warn('⚠️  sitemap.xml not found in public/. Run: npm run generate-sitemap')
            }

            // 复制robots.txt
            const publicRobots = path.resolve(process.cwd(), 'public/robots.txt')
            const distRobots = path.resolve(process.cwd(), 'dist/robots.txt')

            if (fs.existsSync(publicRobots)) {
                fs.copyFileSync(publicRobots, distRobots)
                console.log('✅ Copied robots.txt from public/')
            } else {
                console.warn('⚠️  robots.txt not found in public/')
            }
        }
    }
}
