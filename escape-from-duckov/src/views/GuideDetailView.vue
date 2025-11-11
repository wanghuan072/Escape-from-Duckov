.nav-card-prev {
    align-items: flex-start;
}

.nav-card-next {
    align-items: flex-end;
    text-align: right;
}
<template>
    <div class="guide-detail-view">
        <!-- Guide Detail Header -->
        <section class="guide-detail-header">
            <div class="container">
                <div class="breadcrumb">
                    <a :href="getLocalizedPathForCurrentLang('/guides')" class="breadcrumb-link">
                        <svg class="breadcrumb-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                            <polyline points="9,22 9,12 15,12 15,22" />
                        </svg>
                        Guides
                    </a>
                    <svg class="breadcrumb-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2">
                        <polyline points="9,18 15,12 9,6" />
                    </svg>
                    <span class="breadcrumb-current">{{ guide?.title }}</span>
                </div>

                <div class="guide-detail-content">
                    <div class="guide-detail-text">
                        <h1 class="guide-title">{{ guide?.title }}</h1>

                        <div class="guide-category">
                            <span class="category-badge">{{ getCategoryName(guide?.category) }}</span>
                        </div>

                        <div class="guide-detail-meta">
                            <div class="meta-item">
                                <svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12,6 12,12 16,14" />
                                </svg>
                                <span class="meta-text">{{ formatDate(guide?.publishDate) }}</span>
                            </div>
                        </div>

                        <div class="guide-tags">
                            <span v-for="tag in guide?.tags" :key="tag" class="tag">{{ tag }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Guide Content -->
        <section class="guide-content">
            <div class="container">
                <div class="content-layout">
                    <!-- Left Content -->
                    <div class="left-content">
                        <!-- 使用 v-html 渲染 detailsHtml -->
                        <div class="detail-article" v-html="guide?.detailsHtml"></div>
                    </div>

                    <!-- Right Sidebar -->
                    <div class="right-sidebar">
                        <div class="guide-info-box">
                            <div class="info-box-header">
                                <h3 class="info-box-title">{{ guide?.title }}</h3>
                            </div>

                            <!-- Guide Category -->
                            <div class="guide-category-info">
                                <div class="category-badge">{{ getCategoryName(guide?.category) }}</div>
                            </div>

                            <!-- Guide Meta Info -->
                            <div class="guide-meta">
                                <div class="meta-item">
                                    <svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <polyline points="12,6 12,12 16,14" />
                                    </svg>
                                    <span class="meta-text">{{ formatDate(guide?.publishDate) }}</span>
                                </div>
                            </div>

                            <!-- Guide Tags -->
                            <div class="guide-tags">
                                <span v-for="tag in guide?.tags" :key="tag" class="tag">{{ tag }}</span>
                            </div>
                        </div>

                        <!-- Guide navigation -->
                        <div class="guide-navigation" v-if="previousGuide || nextGuide">
                            <h4 class="nav-title">Guide Navigation</h4>
                            <div class="nav-grid">
                                <a
                                    v-if="previousGuide"
                                    :href="getLocalizedPathForCurrentLang(`/guides${previousGuide.addressBar}`)"
                                    class="nav-card nav-card-prev"
                                >
                                    <div class="nav-card-direction">← Previous Guide</div>
                                    <div class="nav-card-title">{{ previousGuide.title }}</div>
                                    <div class="nav-card-meta">
                                        <span>{{ getCategoryName(previousGuide.category) }}</span>
                                        <span>{{ formatDate(previousGuide.publishDate) }}</span>
                                    </div>
                                </a>
                                <a
                                    v-if="nextGuide"
                                    :href="getLocalizedPathForCurrentLang(`/guides${nextGuide.addressBar}`)"
                                    class="nav-card nav-card-next"
                                >
                                    <div class="nav-card-direction">Next Guide →</div>
                                    <div class="nav-card-title">{{ nextGuide.title }}</div>
                                    <div class="nav-card-meta">
                                        <span>{{ getCategoryName(nextGuide.category) }}</span>
                                        <span>{{ formatDate(nextGuide.publishDate) }}</span>
                                    </div>
                                </a>
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
import { useGuideData } from '../composables/useGuideData'
import { getLocalizedPath } from '../utils/routeUtils'
import { useSEO } from '../seo/composables.js'
import { seoConfig } from '../seo/config.js'

const route = useRoute()
const { locale } = useI18n()
const { guides, loadData, findGuideByAddressBar } = useGuideData()
const guide = ref(null)
const { setSEO } = useSEO()

// 获取当前语言的路径
const getLocalizedPathForCurrentLang = (path) => {
    return getLocalizedPath(path, locale.value)
}

// 初始化加载数据并查找 guide
const initGuide = async () => {
    await loadData()
    const guideId = route.params.id
    guide.value = findGuideByAddressBar(`/${guideId}`)
}

// 手动更新SEO
const updateSEO = () => {
    if (!guide.value) return

    if (guide.value.seo) {
        setSEO({
            title: guide.value.seo.title || guide.value.title || seoConfig.defaults.title,
            description: guide.value.seo.description || guide.value.description || seoConfig.defaults.description,
            keywords: guide.value.seo.keywords || seoConfig.defaults.keywords,
            author: seoConfig.defaults.author,
            image: guide.value.imageUrl || seoConfig.defaults.image,
            type: 'article'
        })
    } else {
        setSEO({
            title: guide.value.title ? `${guide.value.title} - Escape from Duckov` : seoConfig.defaults.title,
            description: guide.value.description || seoConfig.defaults.description,
            keywords: seoConfig.defaults.keywords,
            author: seoConfig.defaults.author,
            image: guide.value.imageUrl || seoConfig.defaults.image,
            type: 'article'
        })
    }
}

onMounted(async () => {
    await initGuide()
    await nextTick()
    updateSEO()
})

// 监听语言变化，重新加载数据
watch(locale, async () => {
    await initGuide()
    await nextTick()
    updateSEO()
})

// 监听路由变化，更新当前 guide
watch(() => route.params.id, async () => {
    const guideId = route.params.id
    guide.value = findGuideByAddressBar(`/${guideId}`)
    await nextTick()
    updateSEO()
})

// 监听guide变化，自动更新SEO
watch(guide, () => {
    if (guide.value) {
        nextTick(() => {
            updateSEO()
        })
    }
}, { immediate: true })

const currentGuideIndex = computed(() => {
    if (!guide.value) return -1
    return guides.value.findIndex(g => g.id === guide.value.id)
})

const previousGuide = computed(() => {
    if (currentGuideIndex.value <= 0) return null
    return guides.value[currentGuideIndex.value - 1] || null
})

const nextGuide = computed(() => {
    if (currentGuideIndex.value === -1) return null
    return guides.value[currentGuideIndex.value + 1] || null
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

const getCategoryName = (category) => {
    const categoryMap = {
        'getting-started': 'Getting Started',
        'walkthroughs': 'Walkthroughs',
        'advanced': 'Advanced'
    }
    return categoryMap[category] || 'Guide'
}
</script>

<style scoped>
.guide-detail-view {
    min-height: 100vh;
}

/* Guide Detail Header */
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

/* Guide Title (H1) */
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

/* Guide Content */
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

/* Left Content */
.left-content {
    background-color: var(--bg-card);
    border-radius: 8px;
    padding: 20px;
    border: 1px solid var(--border-color);
}

/* Right Sidebar */
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

.guide-category-info {
    padding: 16px;
    text-align: center;
    border-bottom: 1px solid var(--border-color);
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

/* Navigation */
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

.nav-grid {
    display: grid;
    gap: 12px;
}

.nav-card {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 16px;
    border-radius: 10px;
    text-decoration: none;
    color: var(--text-primary);
    background: linear-gradient(135deg, rgba(250, 147, 23, 0.08), rgba(250, 147, 23, 0.02));
    border: 1px solid rgba(250, 147, 23, 0.15);
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease, background 0.2s ease;
}

.nav-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 24px rgba(250, 147, 23, 0.18);
    border-color: rgba(250, 147, 23, 0.35);
    background: linear-gradient(135deg, rgba(250, 147, 23, 0.12), rgba(250, 147, 23, 0.04));
}

.nav-card-direction {
    font-size: 0.75rem;
    letter-spacing: 0.6px;
    text-transform: uppercase;
    color: #FA9317;
    font-weight: 600;
}

.nav-card-title {
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.4;
}

.nav-card-meta {
    display: flex;
    justify-content: space-between;
    font-size: 0.75rem;
    color: var(--text-secondary);
}

.nav-card-meta span:first-child {
    font-weight: 500;
}

.nav-card-next .nav-card-meta {
    flex-direction: row-reverse;
    text-align: right;
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
}

/* Mobile screens (≤768px) */
@media (max-width: 768px) {
    .guide-title {
        font-size: 1.75rem;
        margin-bottom: 16px;
        line-height: 1.3;
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

    .nav-title {
        font-size: 16px;
        margin-bottom: 10px;
    }

    .nav-card {
        padding: 12px;
    }

    .nav-card-title {
        font-size: 0.95rem;
    }

    .nav-card-direction,
    .nav-card-meta {
        font-size: 0.7rem;
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

    .guide-category-info,
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
}
</style>