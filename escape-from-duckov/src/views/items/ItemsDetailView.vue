<template>
    <div class="items-detail-view">
        <!-- Detail Header / Breadcrumb -->
        <section class="detail-header-section">
            <div class="container">
                <div class="breadcrumb">
                    <a :href="getLocalizedPathForCurrentLang('/items')" class="breadcrumb-link">
                        <svg class="breadcrumb-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                            <polyline points="9,22 9,12 15,12 15,22"/>
                        </svg>
                        Items
                    </a>
                    <svg class="breadcrumb-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="9,18 15,12 9,6"/>
                    </svg>
                    <a :href="getLocalizedPathForCurrentLang(`/items/${category}`)" class="breadcrumb-link">{{ categoryTitle }}</a>
                    <svg class="breadcrumb-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="9,18 15,12 9,6"/>
                    </svg>
                    <span class="breadcrumb-current">{{ item?.title || 'Item Detail' }}</span>
                </div>
                
                <div class="items-detail-content" v-if="item">
                    <div class="items-detail-text">
                        <h1 class="items-title">{{ item?.title }}</h1>
                    </div>
                </div>
            </div>
        </section>

        <!-- Content -->
        <section class="items-content">
            <div class="container">
                <div class="content-layout">
                    <!-- Left Content -->
                    <div class="left-content">
                        <div v-if="!item" style="text-align: center; padding: 40px; color: var(--text-secondary);">
                            Loading...
                        </div>
                        <div v-else class="detail-article">
                            <div class="hero-box">
                                <img :src="item.imageUrl" :alt="item.imageAlt" class="hero-image">
                                <div class="hero-meta">
                                    <h2 class="hero-title">{{ item.title }}</h2>
                                    <div class="hero-tags" v-if="item.type">
                                        <span class="tag">{{ item.type }}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="detail-html" v-html="item.detailsHtml"></div>
                        </div>
                    </div>

                    <!-- Right Sidebar -->
                    <div class="right-sidebar" v-if="item">
                        <div class="info-box">
                            <div class="info-box-header">
                                <h3 class="info-box-title">{{ item.title }}</h3>
                            </div>
                            <div class="info-image" v-if="item.imageUrl">
                                <img :src="item.imageUrl" :alt="item.imageAlt" class="info-image-img">
                            </div>
                            <div class="info-details" v-if="item.rewards && item.rewards.length">
                                <div class="detail-item" v-for="r in item.rewards" :key="r">
                                    <span class="detail-value">{{ r }}</span>
                                </div>
                            </div>
                        </div>

                        <div class="nav-box" v-if="otherItems.length">
                            <h4 class="nav-title">Other {{ categoryTitle }}</h4>
                            <div class="nav-links">
                                <a v-for="it in otherItems" :key="it.id" :href="getLocalizedPathForCurrentLang(`/items/${category}/${(it.addressBar||'').replace('/', '')}`)" class="nav-link">{{ it.title }}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useItemsData } from '../../composables/useItemsData.js'
import { getLocalizedPath } from '../../utils/routeUtils'

const route = useRoute()
const { locale } = useI18n()
const category = String(route.params.category || '')
const id = String(route.params.id || '')
const { data, loadData, findByAddress } = useItemsData(category)
const item = ref(null)

// 从路径检测语言
const detectLanguageFromPath = (path) => {
    const supportedLanguages = ['en', 'de', 'fr', 'es', 'ja', 'ko', 'ru', 'pt', 'zh']
    for (const lang of supportedLanguages) {
        if (lang === 'en') continue
        if (path.startsWith(`/${lang}/`) || path === `/${lang}`) {
            return lang
        }
    }
    return 'en'
}

// 获取当前语言的路径（从 URL 路径检测，确保与 URL 一致）
const getLocalizedPathForCurrentLang = (path) => {
    // 优先从当前路由路径检测语言，确保与 URL 一致
    const pathLang = detectLanguageFromPath(route.path)
    const targetLang = pathLang !== 'en' ? pathLang : (locale.value || 'en')
    return getLocalizedPath(path, targetLang)
}

const categoryTitle = computed(() => category.charAt(0).toUpperCase() + category.slice(1))
const otherItems = computed(() => {
    const list = Array.isArray(data.value) ? data.value : []
    if (!item.value) return []
    return list.filter(x => x && x.id !== item.value.id && x.showDetail !== false).slice(-5)
})

onMounted(async () => {
    await loadData(category)
    item.value = findByAddress(category, id)
})
</script>

<style scoped>
.items-detail-view { min-height: 100vh; }

.detail-header-section { padding: 80px 0 40px; }
.breadcrumb { display: flex; align-items: center; gap: 8px; font-size: 0.875rem; color: var(--text-secondary); }
.breadcrumb-link { color: var(--text-secondary); text-decoration: none; display: flex; align-items: center; gap: 4px; transition: color 0.2s ease; }
.breadcrumb-link:hover { color: var(--text-primary); }
.breadcrumb-icon { width: 16px; height: 16px; }
.breadcrumb-arrow { width: 16px; height: 16px; opacity: 0.6; }
.breadcrumb-current { color: var(--text-primary); font-weight: 500; }

/* Items Title (H1) */
.items-title {
    font-size: 3rem;
    font-weight: 700;
    color: var(--text-heading);
    margin: 0;
    line-height: 1.2;
    background: linear-gradient(135deg, var(--text-heading) 0%, #FFD700 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.items-detail-content {
    padding-top: 24px;
}

.items-detail-text {
    max-width: 800px;
}

.items-content { padding: 0 0 80px; }
.content-layout { display: grid; grid-template-columns: 1fr 300px; gap: 40px; max-width: 1200px; margin: 0 auto; }

.left-content { background-color: var(--bg-card); border-radius: 8px; padding: 20px; border: 1px solid var(--border-color); }
.hero-box { display: flex; align-items: center; gap: 16px; margin-bottom: 20px; }
.hero-image { width: 120px; height: 120px; object-fit: cover; border-radius: 6px; border: 1px solid var(--border-color); }
.hero-title { font-size: 1.5rem; font-weight: 700; color: var(--text-heading); margin: 0 0 8px 0; }
.tag { display: inline-block; padding: 4px 10px; font-size: 0.75rem; border-radius: 999px; background: rgba(250,147,23,0.15); color: #FA9317; border: 1px solid rgba(250,147,23,0.35); }
.detail-html :deep(img) { max-width: 100%; height: auto; }

.right-sidebar { display: flex; flex-direction: column; gap: 24px; }
.info-box { background-color: var(--bg-card); border: 2px solid #FFD700; border-radius: 8px; overflow: hidden; }
.info-box-header { background-color: #FFD700; padding: 16px; }
.info-box-title { font-size: 1.25rem; font-weight: 600; color: var(--bg-primary); margin: 0; text-align: center; }
.info-image { position: relative; width: 100%; height: 200px; overflow: hidden; }
.info-image-img { width: 100%; height: 100%; object-fit: cover; }
.info-details { padding: 16px; }
.detail-item { margin-bottom: 8px; }
.detail-value { color: var(--text-primary); font-size: 0.9rem; }

.nav-box { background-color: var(--bg-card); border: 1px solid var(--border-color); border-radius: 8px; padding: 20px; }
.nav-title { font-size: 1.125rem; font-weight: 600; color: var(--text-heading); margin: 0 0 16px 0; }
.nav-links { display: flex; flex-direction: column; gap: 8px; }
.nav-link { color: var(--text-primary); text-decoration: none; font-size: 0.9rem; padding: 8px 12px; border-radius: 4px; transition: all 0.2s ease; border: 1px solid transparent; }
.nav-link:hover { background-color: var(--bg-secondary); border-color: var(--border-color); color: #FFD700; }

@media (max-width: 1024px) {
    .items-title {
        font-size: 2.5rem;
    }
    
    .content-layout { grid-template-columns: 1fr; gap: 24px; }
    .right-sidebar { order: -1; }
}

@media (max-width: 768px) {
    .items-title {
        font-size: 1.75rem;
        line-height: 1.3;
    }
    
    .items-detail-content {
        padding-top: 16px;
    }
    
    .detail-header-section {
        padding: 20px 0;
    }
    
    .breadcrumb { font-size: 12px; gap: 8px; }
    .breadcrumb-link { font-size: 12px; }
    .breadcrumb-icon, .breadcrumb-arrow { width: 14px; height: 14px; }
    .hero-image { width: 80px; height: 80px; }
}
</style>


