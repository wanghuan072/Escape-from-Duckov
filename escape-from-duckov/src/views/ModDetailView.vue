<template>
    <div class="mod-detail-view">
        <!-- Mod Detail Header -->
        <section class="mod-detail-header">
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
                        <div class="mod-category">
                            <span class="category-badge">{{ mod?.category?.toUpperCase() }}</span>
                        </div>
                        <h1 class="mod-detail-title">{{ mod?.title }}</h1>
                        <p class="mod-detail-description">{{ mod?.description }}</p>
                        
                        <div class="mod-detail-meta">
                            <div class="meta-item">
                                <svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                    <circle cx="12" cy="7" r="4"/>
                                </svg>
                                <span class="meta-text">by {{ mod?.author }}</span>
                            </div>
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
                                <div class="meta-item">
                                    <svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                        <circle cx="12" cy="7" r="4"/>
                                    </svg>
                                    <span class="meta-text">by {{ mod?.author }}</span>
                                </div>
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
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useModsData } from '../composables/useModsData'
import { useSEO } from '../seo/composables.js'
import { seoConfig } from '../seo/config.js'

const route = useRoute()
const { locale } = useI18n()
const mod = ref(null)
const { mods: modsList, loadData, findModByAddressBar, getOtherMods } = useModsData()
const { setSEO } = useSEO()

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

/* Mod Detail Header */
.mod-detail-header {
    padding: 80px 0 40px;
}

.breadcrumb {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 40px;
    font-size: 0.9rem;
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

.mod-category {
    margin-bottom: 16px;
}

.category-badge {
    display: inline-block;
    background: linear-gradient(135deg, #FA9317 0%, #e67e22 100%);
    color: white;
    padding: 6px 16px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    box-shadow: 0 2px 8px rgba(250, 147, 23, 0.3);
}

.mod-detail-title {
    font-size: 2rem;
    font-weight: 700;
    color: var(--text-heading);
    margin-bottom: 16px;
    line-height: 1.2;
}

.mod-detail-description {
    font-size: 1rem;
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 24px;
}

.mod-detail-meta {
    display: flex;
    gap: 32px;
    margin-bottom: 24px;
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
    padding: 16px;
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
    margin-bottom: 12px;
}

.mod-meta .meta-item:last-child {
    margin-bottom: 0;
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

    .mod-detail-meta{
        gap: 10px;
        margin-bottom: 10px;
    }
    
    .category-badge {
        font-size: 12px;
        padding: 4px 12px;
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
    
    .mod-detail-header {
        padding: 20px 0;
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
