// SEO配置文件
export const seoConfig = {
    // 域名配置
    domain: 'duckovgame.com',
    fullDomain: 'https://duckovgame.com',
    protocol: 'https://',

    // 社交媒体配置
    social: {
        twitter: '@duckovgame',
        facebook: 'duckovgame',
        instagram: 'duckovgame',
        discord: 'duckovgame'
    },

    // 默认SEO设置
    defaults: {
        title: 'Escape from Duckov - Official Community Site',
        description: 'The ultimate community resource for Escape from Duckov. Find guides, maps, mods, quests, notes, and strategies to survive in Duckov.',
        keywords: 'Escape from Duckov, survival game, guides, maps, mods, quests, notes, community, strategies',
        author: 'Escape from Duckov Community',
        image: 'https://duckovgame.com/images/bg.jpg',
        type: 'website'
    },

    // 页面优先级设置
    priorities: {
        home: 1.0,
        guides: 0.9,
        guideDetail: 0.8,
        wiki: 0.8,
        notes: 0.7,
        quests: 0.7,
        maps: 0.8,
        mods: 0.7,
        modDetail: 0.6
    },

    // 更新频率设置
    changefreq: {
        home: 'weekly',
        guides: 'weekly',
        guideDetail: 'monthly',
        wiki: 'weekly',
        notes: 'monthly',
        quests: 'monthly',
        maps: 'monthly',
        mods: 'weekly',
        modDetail: 'monthly'
    }
}
