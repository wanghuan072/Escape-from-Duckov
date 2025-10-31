<template>
    <div class="wiki-detail-view">
        <!-- Wiki Detail Header -->
        <section class="wiki-detail-header">
            <div class="container">
                <div class="breadcrumb">
                    <a href="/wiki" class="breadcrumb-link">
                        <svg class="breadcrumb-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                            <polyline points="9,22 9,12 15,12 15,22" />
                        </svg>
                        Wiki
                    </a>
                    <svg class="breadcrumb-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2">
                        <polyline points="9,18 15,12 9,6" />
                    </svg>
                    <a :href="getCategoryLink(category)" class="breadcrumb-link">{{ getCategoryDisplayName(category)
                    }}</a>
                    <svg class="breadcrumb-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2">
                        <polyline points="9,18 15,12 9,6" />
                    </svg>
                    <span class="breadcrumb-current">{{ item?.title }}</span>
                </div>
                
                <div class="wiki-detail-content" v-if="item">
                    <div class="wiki-detail-text">
                        <h1 class="wiki-title">{{ item?.title }}</h1>
                    </div>
                </div>
            </div>
        </section>

        <!-- Wiki Content -->
        <section class="wiki-content">
            <div class="container">
                <div class="content-layout">
                    <!-- Left Content -->
                    <div class="left-content">
                        <div v-if="!item" style="text-align: center; padding: 40px; color: var(--text-secondary);">
                            Loading...
                        </div>
                        <!-- 使用 v-html 渲染 detailsHtml -->
                        <div v-else class="detail-article" v-html="item?.detailsHtml"></div>
                    </div>

                    <!-- Right Sidebar -->
                    <div class="right-sidebar" v-if="item">
                        <div class="quest-info-box">
                            <div class="info-box-header">
                                <h3 class="info-box-title">{{ item?.title }}</h3>
                            </div>

                            <!-- 直接显示图片 -->
                            <div class="quest-image" v-if="item?.imageUrl">
                                <img :src="item?.imageUrl" :alt="item?.imageAlt" class="quest-image-img">
                            </div>

                            <!-- 使用数据中的 rightContent 数组 -->
                            <div class="quest-details" v-if="item?.rightContent && item.rightContent.length > 0">
                                <div v-for="content in item?.rightContent" :key="content.label" class="detail-item">
                                    <span class="detail-label">{{ content.label }}:</span>
                                    <span class="detail-value">{{ content.value }}</span>
                                </div>
                            </div>
                        </div>

                        <!-- Other Items 自动总结所有数据 -->
                        <div class="quest-navigation">
                            <h4 class="nav-title">Other {{ category === 'quests' ? 'Quests' : category === 'weapons' ?
                                'Weapons' : 'Items' }}</h4>
                            <div class="nav-links">
                                <a v-for="quest in otherQuests" :key="quest.id"
                                    :href="`/wiki/${category}/${quest.addressBar.replace('/', '')}`" class="nav-link">{{
                                        quest.title }}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useWikiData } from '../../composables/useWikiData.js'

const route = useRoute()
const item = ref(null)
const category = ref('')

const { category: routeCategory, id } = route.params
category.value = routeCategory

const { data: allItems, loadData, findItemById, getOtherItems } = useWikiData(routeCategory)

onMounted(async () => {
    await loadData()
    if (id) {
        item.value = findItemById(id)
    }
})

// 计算其他项目（排除当前项目，只显示最后10个）
const otherQuests = computed(() => {
    if (!item.value) return []
    return getOtherItems(item.value.id)
})

const getCategoryDisplayName = (category) => {
    const categoryMap = {
        'quests': 'Quests',
        'weapons': 'Weapons',
        'equipment': 'Equipment'
    }
    return categoryMap[category] || 'Wiki'
}

const getCategoryLink = (category) => {
    if (category === 'quests') return '/wiki/quests'
    if (category) return `/wiki/${category}`
    return '/wiki'
}
</script>

<style scoped>
.wiki-detail-view {
    min-height: 100vh;
}

/* Wiki Detail Header */
.wiki-detail-header {
    padding: 80px 0 40px;
}

.breadcrumb {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.875rem;
    color: var(--text-secondary);
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

/* Wiki Title (H1) */
.wiki-title {
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

.wiki-detail-content {
    padding-top: 24px;
}

.wiki-detail-text {
    max-width: 800px;
}

/* Wiki Content */
.wiki-content {
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

.quest-info-box {
    background-color: var(--bg-card);
    border: 2px solid #FFD700;
    border-radius: 8px;
    overflow: hidden;
}

.info-box-header {
    background-color: #FFD700;
    padding: 16px;
}

.info-box-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--bg-primary);
    margin: 0;
    text-align: center;
}

.quest-image {
    position: relative;
    width: 100%;
    height: 200px;
    overflow: hidden;
}

.quest-image-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}


.quest-details {
    padding: 20px;
}

.detail-item {
    margin-bottom: 12px;
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.detail-label {
    font-size: 0.875rem;
    color: var(--text-secondary);
    font-weight: 500;
}

.detail-value {
    color: var(--text-primary);
    font-size: 0.9rem;
}


/* Navigation */
.quest-navigation {
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
    color: #FFD700;
}

/* Responsive Design */
@media (max-width: 1024px) {
    .wiki-title {
        font-size: 2.5rem;
    }
    
    .content-layout {
        grid-template-columns: 1fr;
        gap: 24px;
    }

    .right-sidebar {
        order: -1;
    }
}

/* Mobile screens (≤768px) */
@media (max-width: 768px) {
    .wiki-title {
        font-size: 1.75rem;
        line-height: 1.3;
    }
    
    .wiki-detail-content {
        padding-top: 16px;
    }
    
    .info-box-title {
        font-size: 16px;
    }

    .nav-title {
        font-size: 16px;
        margin-bottom: 10px;
    }

    .nav-link {
        font-size: 12px;
        padding: 5px 10px;
    }

    .detail-label {
        font-size: 12px;
    }

    .detail-value {
        font-size: 12px;
    }

    .detail-item {
        gap: 2px;
        margin-bottom: 5px;
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

    /* Section Spacing */
    .wiki-detail-header {
        padding: 20px 0;
    }

    .wiki-content {
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

    .quest-image {
        height: 120px;
    }

    .info-box-header {
        padding: 10px;
    }

    .quest-details {
        padding: 10px;
    }

    .quest-navigation {
        padding: 10px;
    }

    .nav-links {
        gap: 6px;
    }
}
</style>
