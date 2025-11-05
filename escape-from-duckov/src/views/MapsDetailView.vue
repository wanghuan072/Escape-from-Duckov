<template>
    <div class="maps-detail-view">
        <!-- Map Detail Header -->
        <section class="guide-detail-header">
            <div class="container">
                <div class="breadcrumb">
                    <a :href="getLocalizedPathForCurrentLang('/maps')" class="breadcrumb-link">
                        <svg class="breadcrumb-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                            <polyline points="9,22 9,12 15,12 15,22" />
                        </svg>
                        {{ t('Navigation.maps') }}
                    </a>
                    <svg class="breadcrumb-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2">
                        <polyline points="9,18 15,12 9,6" />
                    </svg>
                    <span class="breadcrumb-current">{{ map?.title }}</span>
                </div>

                <div class="guide-detail-content">
                    <div class="guide-detail-text">
                        <h1 class="guide-title">{{ map?.title }}</h1>

                        <div class="guide-detail-meta">
                            <div class="meta-item">
                                <svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12,6 12,12 16,14" />
                                </svg>
                                <span class="meta-text">{{ formatDate(map?.publishDate) }}</span>
                            </div>
                        </div>

                        <div v-if="map?.tags && map.tags.length > 0" class="guide-tags">
                            <span v-for="tag in map?.tags" :key="tag" class="tag">{{ tag }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Map Content -->
        <section class="guide-content">
            <div class="container">
                <div class="content-layout">
                    <!-- Left Content -->
                    <div class="left-content">
                        <!-- Map Iframe -->
                        <div v-if="map?.iframeUrl" class="map-iframe-container">
                            <iframe 
                                :src="map.iframeUrl" 
                                height="600" 
                                style="position: relative; width: 100%; border: none; border-radius: 8px;"
                                allowfullscreen
                                loading="lazy"
                            ></iframe>
                        </div>

                        <!-- Map Description -->
                        <div v-if="map?.detailsHtml" class="detail-article" v-html="map.detailsHtml"></div>
                        <p v-else-if="map?.description" class="map-description-text">{{ map?.description }}</p>
                    </div>

                    <!-- Right Sidebar -->
                    <div class="right-sidebar">
                        <div class="guide-info-box">
                            <div class="info-box-header">
                                <h3 class="info-box-title">{{ map?.title }}</h3>
                            </div>

                            <!-- Map Meta Info -->
                            <div class="guide-meta">
                                <div class="meta-item">
                                    <svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <polyline points="12,6 12,12 16,14" />
                                    </svg>
                                    <span class="meta-text">{{ formatDate(map?.publishDate) }}</span>
                                </div>
                            </div>

                            <!-- Map Tags -->
                            <div v-if="map?.tags && map.tags.length > 0" class="guide-tags">
                                <span v-for="tag in map?.tags" :key="tag" class="tag">{{ tag }}</span>
                            </div>
                        </div>

                        <!-- Other Maps -->
                        <div class="guide-navigation">
                            <h4 class="nav-title">{{ t('MapsDetailPage.otherMaps') || 'Other Maps' }}</h4>
                            <div class="nav-links">
                                <a v-for="otherMap in otherMaps" :key="otherMap.id"
                                    :href="getLocalizedPathForCurrentLang(`/maps${otherMap.addressBar}`)"
                                    class="nav-link">{{ otherMap.title }}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, onMounted, computed, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useMapsData } from '../composables/useMapsData'
import { getLocalizedPath } from '../utils/routeUtils'
import { useSEO } from '../seo/composables.js'
import { seoConfig } from '../seo/config.js'

const route = useRoute()
const { locale, t } = useI18n()
const { maps, loadData, findMapByAddressBar } = useMapsData()
const map = ref(null)
const { setSEO } = useSEO()

// 获取当前语言的路径
const getLocalizedPathForCurrentLang = (path) => {
    return getLocalizedPath(path, locale.value)
}

// 初始化加载数据并查找 map
const initMap = async () => {
    await loadData()
    const mapId = route.params.id
    map.value = findMapByAddressBar(`/${mapId}`)
}

// 手动更新SEO
const updateSEO = () => {
    if (!map.value) return

    if (map.value.seo) {
        setSEO({
            title: map.value.seo.title || map.value.title || seoConfig.defaults.title,
            description: map.value.seo.description || map.value.description || seoConfig.defaults.description,
            keywords: map.value.seo.keywords || seoConfig.defaults.keywords,
            author: seoConfig.defaults.author,
            image: map.value.imageUrl || seoConfig.defaults.image,
            type: 'article'
        })
    } else {
        setSEO({
            title: map.value.title ? `${map.value.title} - Escape from Duckov` : seoConfig.defaults.title,
            description: map.value.description || seoConfig.defaults.description,
            keywords: seoConfig.defaults.keywords,
            author: seoConfig.defaults.author,
            image: map.value.imageUrl || seoConfig.defaults.image,
            type: 'article'
        })
    }
}

onMounted(async () => {
    await initMap()
    await nextTick()
    updateSEO()
})

// 监听语言变化，重新加载数据
watch(locale, async () => {
    await initMap()
    await nextTick()
    updateSEO()
})

// 监听路由变化，更新当前 map
watch(() => route.params.id, async () => {
    const mapId = route.params.id
    map.value = findMapByAddressBar(`/${mapId}`)
    await nextTick()
    updateSEO()
})

// 监听map变化，自动更新SEO
watch(map, () => {
    if (map.value) {
        nextTick(() => {
            updateSEO()
        })
    }
}, { immediate: true })

// 计算其他maps（排除当前map，只显示最后5个）
const otherMaps = computed(() => {
    if (!map.value) return []
    const filtered = maps.value.filter(m => m.id !== map.value.id)
    return filtered.slice(-5)
})

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
.maps-detail-view {
    min-height: 100vh;
}

/* 复用 GuideDetailView 的样式类 */
.guide-detail-header {
    padding: 80px 0 40px;
}

.breadcrumb {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 0;
    font-size: 0.875rem;
    color: var(--text-secondary);
    margin-bottom: 20px;
}

.breadcrumb-link {
    color: var(--text-secondary);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 4px;
    transition: color 0.2s ease;
}

.breadcrumb-link:hover {
    color: var(--text-primary);
}

.breadcrumb-icon {
    width: 16px;
    height: 16px;
}

.breadcrumb-arrow {
    width: 16px;
    height: 16px;
    opacity: 0.6;
}

.breadcrumb-current {
    color: var(--text-primary);
    font-weight: 500;
}

.guide-title {
    font-size: 3rem;
    font-weight: 700;
    color: var(--text-heading);
    margin: 0 0 24px 0;
    line-height: 1.2;
    background: linear-gradient(135deg, var(--text-heading) 0%, #FA9317 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.guide-detail-text {
    max-width: 800px;
}

.guide-content {
    padding: 0 0 80px;
}

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

/* Map Iframe Container - 放在顶部 */
.map-iframe-container {
    position: relative;
    width: 100%;
    background: #f8f9fa;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 32px;
}

.map-iframe-container iframe {
    display: block;
    border: none;
    border-radius: 8px;
}

/* detail-article 样式在 global.css 中定义 */
.map-description-text {
    color: var(--text-secondary);
    line-height: 1.6;
    font-size: 1.1rem;
    margin-top: 32px;
}

.right-sidebar {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.guide-info-box {
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

.guide-meta {
    padding: 16px;
    border-bottom: 1px solid var(--border-color);
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

.guide-tags {
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

.guide-navigation {
    background-color: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    padding: 20px;
}

.nav-title {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--text-heading);
    margin: 0 0 16px 0;
}

.nav-links {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.nav-link {
    color: var(--text-primary);
    text-decoration: none;
    font-size: 0.9rem;
    padding: 8px 12px;
    border-radius: 4px;
    transition: all 0.2s ease;
    border: 1px solid transparent;
}

.nav-link:hover {
    background-color: var(--bg-secondary);
    border-color: var(--border-color);
    color: #FA9317;
}

/* Medium screens (≤1024px) */
@media (max-width: 1024px) {
    .guide-title {
        font-size: 2.5rem;
        margin-bottom: 20px;
    }

    .content-layout {
        grid-template-columns: 1fr;
        gap: 24px;
    }

    .right-sidebar {
        order: -1;
    }

    .guide-info-box {
        max-width: 400px;
        margin: 0 auto;
    }

    .map-iframe-container iframe {
        height: 500px;
    }
}

/* Mobile screens (≤768px) */
@media (max-width: 768px) {
    .guide-title {
        font-size: 1.75rem;
        margin-bottom: 16px;
        line-height: 1.3;
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

    .nav-title {
        font-size: 16px;
        margin-bottom: 10px;
    }

    .nav-link {
        font-size: 12px;
        padding: 5px 10px;
    }

    /* Section Spacing */
    .guide-detail-header {
        padding: 20px 0;
    }

    .guide-content {
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

    .guide-info-box {
        max-width: 100%;
    }

    .info-box-header {
        padding: 10px;
    }

    .info-box-title {
        font-size: 16px;
    }

    .guide-meta,
    .guide-tags {
        padding: 10px;
    }

    .guide-navigation {
        padding: 10px;
    }

    .nav-links {
        gap: 6px;
    }

    .map-iframe-container {
        margin-bottom: 20px;
    }

    .map-iframe-container iframe {
        height: 400px;
    }
}
</style>

