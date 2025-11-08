<template>
    <div class="mod-detail-view">
        <!-- Mod Detail Header -->
        <section class="page-header">
            <div class="container">
                <div class="breadcrumb">
                    <a href="/mods" class="breadcrumb-link">
                        <svg class="breadcrumb-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                            <polyline points="9,22 9,12 15,12 15,22"/>
                        </svg>
                        Mods
                    </a>
                    <svg class="breadcrumb-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="9,18 15,12 9,6"/>
                    </svg>
                    <span class="breadcrumb-current">{{ mod?.title }}</span>
                </div>
                
                <div class="mod-detail-content">
                    <div class="mod-detail-text">
                        <h1 class="mod-detail-title">{{ mod?.title }}</h1>
                        <p class="mod-detail-description">{{ mod?.description }}</p>
                        
                        <div class="mod-detail-meta">
                            <div class="meta-item">
                                <svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <circle cx="12" cy="12" r="10"/>
                                    <polyline points="12,6 12,12 16,14"/>
                                </svg>
                                <span class="meta-text">{{ formatDate(mod?.publishDate) }}</span>
                            </div>
                        </div>
                        
                        <div class="mod-tags">
                            <span v-for="tag in mod?.tags" :key="tag" class="tag">{{ tag }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Mod Content -->
        <section class="mod-content">
            <div class="container">
                <div class="content-layout">
                    <!-- Left Content -->
                    <div class="left-content">
                        <article class="detail-article" v-html="mod?.detailsHtml"></article>
                    </div>

                    <!-- Right Sidebar -->
                    <div class="right-sidebar">
                        <div class="mod-info-box">
                            <div class="info-box-header">
                                <h3 class="info-box-title">{{ mod?.title }}</h3>
                            </div>

                            <div class="mod-category-info">
                                <div class="category-badge">{{ mod?.category?.toUpperCase() }}</div>
                            </div>

                            <div class="mod-meta">
                                <div 
                                    v-if="mod?.author" 
                                    class="meta-item"
                                >
                                    <span class="meta-label">{{ authorLabel }}</span>
                                    <span class="meta-value">{{ mod.author }}</span>
                                </div>
                                <div 
                                    v-if="mod?.releaseDate" 
                                    class="meta-item"
                                >
                                    <span class="meta-label">{{ releaseDateLabel }}</span>
                                    <span class="meta-value">{{ formatDate(mod.releaseDate) }}</span>
                                </div>
                                <div 
                                    v-if="mod?.fileSize" 
                                    class="meta-item"
                                >
                                    <span class="meta-label">{{ sizeLabel }}</span>
                                    <span class="meta-value">{{ mod.fileSize }}</span>
                                </div>
                                <div 
                                    v-if="mod?.visits !== undefined && mod?.visits !== null" 
                                    class="meta-item"
                                >
                                    <span class="meta-label">{{ visitsLabel }}</span>
                                    <span class="meta-value">{{ formatNumber(mod.visits) }}</span>
                                </div>
                                <div 
                                    v-if="mod?.subscribers !== undefined && mod?.subscribers !== null" 
                                    class="meta-item"
                                >
                                    <span class="meta-label">{{ subscribersLabel }}</span>
                                    <span class="meta-value">{{ formatNumber(mod.subscribers) }}</span>
                                </div>
                                <div 
                                    v-if="mod?.favorites !== undefined && mod?.favorites !== null" 
                                    class="meta-item"
                                >
                                    <span class="meta-label">{{ favoritesLabel }}</span>
                                    <span class="meta-value">{{ formatNumber(mod.favorites) }}</span>
                                </div>
                                <div 
                                    v-if="mod?.externalLink" 
                                    class="meta-item"
                                >
                                    <span class="meta-label">{{ linkLabel }}</span>
                                    <a 
                                        :href="mod.externalLink" 
                                        class="meta-link-button"
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        @click.stop
                                    >
                                        {{ t('ModDetailPage.linkLabel') }}
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, onMounted, watch, nextTick, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useModsData } from '../composables/useModsData'
import { useSEO } from '../seo/composables.js'
import { seoConfig } from '../seo/config.js'

const route = useRoute()
const { t, locale } = useI18n()
const mod = ref(null)
const { mods: modsList, loadData, findModByAddressBar, getOtherMods } = useModsData()
const { setSEO } = useSEO()

const createLabel = (key, fallback) => computed(() => {
    const translated = t(key)
    return translated !== key ? translated : fallback
})

const authorLabel = createLabel('ModDetailPage.authorLabel', 'Author')
const releaseDateLabel = createLabel('ModDetailPage.releaseDateLabel', 'Release Date')
const sizeLabel = createLabel('ModDetailPage.sizeLabel', 'File Size')
const visitsLabel = createLabel('ModDetailPage.visitsLabel', 'Visitors')
const subscribersLabel = createLabel('ModDetailPage.subscribersLabel', 'Subscribers')
const favoritesLabel = createLabel('ModDetailPage.favoritesLabel', 'Favorites')
const linkLabel = createLabel('ModDetailPage.linkLabel', 'Mod Link')

const formatNumber = (value) => {
    if (typeof value === 'number') {
        return value.toLocaleString()
    }
    return value ?? ''
}

const loadModData = async () => {
    await loadData()
    const modId = route.params.id
    mod.value = findModByAddressBar(`/${modId}`)
}

// 手动更新SEO
const updateSEO = () => {
    if (!mod.value) return
    
    if (mod.value.seo) {
        setSEO({
            title: mod.value.seo.title || mod.value.title || seoConfig.defaults.title,
            description: mod.value.seo.description || mod.value.description || seoConfig.defaults.description,
            keywords: mod.value.seo.keywords || seoConfig.defaults.keywords,
            author: seoConfig.defaults.author,
            image: mod.value.imageUrl || seoConfig.defaults.image,
            type: 'article'
        })
    } else {
        setSEO({
            title: mod.value.title ? `${mod.value.title} - Escape from Duckov` : seoConfig.defaults.title,
            description: mod.value.description || seoConfig.defaults.description,
            keywords: seoConfig.defaults.keywords,
            author: seoConfig.defaults.author,
            image: mod.value.imageUrl || seoConfig.defaults.image,
            type: 'article'
        })
    }
}

onMounted(async () => {
    await loadModData()
    await nextTick()
    updateSEO()
})

// 监听语言变化，重新加载数据
watch(locale, async () => {
    await loadModData()
    await nextTick()
    updateSEO()
})

// 监听路由参数变化
watch(() => route.params.id, async (newId) => {
    if (newId) {
        mod.value = findModByAddressBar(`/${newId}`)
        await nextTick()
        updateSEO()
    }
})

// 监听mod变化，自动更新SEO
watch(mod, () => {
    if (mod.value) {
        nextTick(() => {
            updateSEO()
        })
    }
}, { immediate: true })

const formatDate = (dateString) => {
    if (!dateString) return ''
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    })
}
</script>

<style scoped>
.mod-detail-view {
    min-height: 100vh;
}

.breadcrumb {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
    font-size: 0.8rem;
}

.breadcrumb-link {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #FA9317;
    text-decoration: none;
    transition: all 0.3s ease;
    padding: 8px 12px;
    border-radius: 8px;
    background: rgba(250, 147, 23, 0.1);
}

.breadcrumb-link:hover {
    color: #e67e22;
    background: rgba(250, 147, 23, 0.2);
    transform: translateY(-1px);
}

.breadcrumb-icon {
    width: 16px;
    height: 16px;
}

.breadcrumb-arrow {
    width: 16px;
    height: 16px;
    color: var(--text-secondary);
}

.breadcrumb-current {
    color: var(--text-secondary);
    font-weight: 500;
}

/* Content Layout */
.content-layout {
    display: grid;
    grid-template-columns: 1fr 300px;
    gap: 40px;
    max-width: 1200px;
    margin: 0 auto;
}

.left-content {
    background-color: var(--bg-card);
    border-radius: 8px;
    padding: 20px;
    border: 1px solid var(--border-color);
}

.mod-detail-title {
    font-size: 2rem;
    font-weight: 700;
    color: var(--text-heading);
    margin-bottom: 15px;
    line-height: 1.2;
}

.mod-detail-description {
    font-size: 1rem;
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 15px;
}

.mod-detail-meta {
    display: flex;
    gap: 20px;
    margin-bottom: 15px;
}

.meta-item {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-secondary);
    font-size: 0.9rem;
}

.meta-icon {
    width: 16px;
    height: 16px;
    color: #FA9317;
}

.meta-text {
    font-weight: 500;
}

.mod-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.tag {
    background: rgba(250, 147, 23, 0.1);
    color: #FA9317;
    padding: 4px 12px;
    border-radius: 16px;
    font-size: 0.8rem;
    font-weight: 500;
    border: 1px solid rgba(250, 147, 23, 0.2);
    transition: all 0.3s ease;
}

.tag:hover {
    background: rgba(250, 147, 23, 0.2);
    transform: translateY(-1px);
}

/* Mod Content */
.mod-content {
    padding: 0 0 80px;
}

/* Right Sidebar */
.right-sidebar {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.mod-info-box {
    background-color: var(--bg-card);
    border: 2px solid #FA9317;
    border-radius: 8px;
    overflow: hidden;
}

.info-box-header {
    background-color: #FA9317;
    padding: 16px;
}

.info-box-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--bg-primary);
    margin: 0;
    text-align: center;
}

.mod-category-info {
    padding: 16px;
    text-align: center;
    border-bottom: 1px solid var(--border-color);
}

.mod-meta {
    padding: 16px;
    border-bottom: 1px solid var(--border-color);
}

.mod-meta .meta-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
}

.mod-meta .meta-item:last-child {
    margin-bottom: 0;
}

.mod-meta .meta-label {
    color: var(--text-secondary);
    font-size: 0.8rem;
}

.mod-meta .meta-value {
    color: var(--text-heading);
    font-weight: 600;
    font-size: 0.85rem;
}

.mod-meta .meta-link-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 8px 18px;
    border-radius: 999px;
    background: linear-gradient(135deg, #FA9317, #ffae3a);
    color: var(--bg-primary);
    font-weight: 600;
    font-size: 0.85rem;
    text-decoration: none;
    box-shadow: 0 8px 20px rgba(250, 147, 23, 0.35);
    transition: all 0.3s ease;
}

.mod-meta .meta-link-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 26px rgba(250, 147, 23, 0.45);
}

.mod-meta .meta-link-button:active {
    transform: translateY(0);
    box-shadow: 0 6px 18px rgba(250, 147, 23, 0.35);
}

/* Medium screens (≤1024px) */
@media (max-width: 1024px) {
    .content-layout {
        grid-template-columns: 1fr;
        gap: 24px;
    }
    
    .right-sidebar {
        order: -1;
    }
    
    .mod-info-box {
        max-width: 400px;
        margin: 0 auto;
    }
}

@media (max-width: 768px) {
    .mod-detail-title {
        font-size: 24px;
        margin-bottom: 10px;
    }

    .mod-detail-description {
        font-size: 12px;
        margin-bottom: 10px;
    }

    .mod-meta .meta-item {
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;
    }

    .mod-meta .meta-label,
    .mod-meta .meta-value {
        font-size: 12px;
    }

    .mod-meta .meta-link-button {
        width: 100%;
        justify-content: center;
    }

    .mod-detail-meta{
        gap: 10px;
        margin-bottom: 10px;
    }
    
    .meta-text {
        font-size: 12px;
    }
    
    .tag {
        font-size: 12px;
        padding: 4px 10px;
    }
    
    .breadcrumb {
        font-size: 12px;
        gap: 8px;
    }
    
    .breadcrumb-link {
        font-size: 12px;
    }
    
    .breadcrumb-icon,
    .breadcrumb-arrow {
        width: 14px;
        height: 14px;
    }
    
    .mod-content {
        padding: 20px 0;
    }
    
    .left-content {
        padding: 10px;
    }
    
    .content-layout {
        gap: 10px;
    }
    
    .right-sidebar {
        gap: 10px;
    }
    
    .mod-info-box {
        max-width: 100%;
    }
    
    .info-box-header {
        padding: 10px;
    }
    
    .info-box-title {
        font-size: 16px;
    }
    
    .mod-category-info,
    .mod-meta,
    .mod-tags {
        padding: 10px;
    }
}
</style>
