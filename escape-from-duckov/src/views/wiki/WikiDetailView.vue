<template>
    <div class="wiki-detail-view">
        <!-- Wiki Detail Header -->
        <section class="wiki-detail-header">
            <div class="container">
                <div class="breadcrumb">
                    <a href="/wiki" class="breadcrumb-link">
                        <svg class="breadcrumb-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                            <polyline points="9,22 9,12 15,12 15,22"/>
                        </svg>
                        Wiki
                    </a>
                    <svg class="breadcrumb-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="9,18 15,12 9,6"/>
                    </svg>
                    <a :href="`/${category}`" class="breadcrumb-link">{{ getCategoryDisplayName(category) }}</a>
                    <svg class="breadcrumb-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="9,18 15,12 9,6"/>
                    </svg>
                    <span class="breadcrumb-current">{{ item?.title }}</span>
                </div>
            </div>
        </section>

        <!-- Wiki Content -->
        <section class="wiki-content">
            <div class="container">
                <div class="content-layout">
                    <!-- Left Content -->
                    <div class="left-content">
                        <div class="quest-header">
                            <h1 class="quest-title">{{ item?.title }}</h1>
                            <p class="quest-description">{{ item?.description }}</p>
                        </div>

                        <!-- 使用 v-html 渲染 detailsHtml -->
                        <div class="detail-article" v-html="item?.detailsHtml"></div>

                        <!-- Footer -->
                        <div class="quest-footer">
                            <p class="footer-text">
                                Community content is available under 
                                <span class="license-link">CC-BY-SA</span> 
                                unless otherwise noted.
                            </p>
                        </div>
                    </div>

                    <!-- Right Sidebar -->
                    <div class="right-sidebar">
                        <div class="quest-info-box">
                            <div class="info-box-header">
                                <h3 class="info-box-title">{{ item?.title }}</h3>
                            </div>
                            
                            <!-- 直接显示图片 -->
                            <div class="quest-image">
                                <img :src="item?.imageUrl" :alt="item?.imageAlt" class="quest-image-img">
                            </div>

                            <!-- 使用数据中的 rightContent 数组 -->
                            <div class="quest-details">
                                <div v-for="content in item?.rightContent" :key="content.label" class="detail-item">
                                    <span class="detail-label">{{ content.label }}:</span>
                                    <span class="detail-value">{{ content.value }}</span>
                                </div>
                            </div>
                        </div>

                        <!-- Other Quests 自动总结所有数据 -->
                        <div class="quest-navigation">
                            <h4 class="nav-title">Other Quests</h4>
                            <div class="nav-links">
                                <a v-for="quest in otherQuests" :key="quest.id" 
                                   :href="`/wiki/quests/${quest.addressBar.replace('/', '')}`" 
                                   class="nav-link">{{ quest.title }}</a>
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

const route = useRoute()
const item = ref(null)
const category = ref('')
const allQuests = ref([])

onMounted(async () => {
    const { category: routeCategory, id } = route.params
    
    category.value = routeCategory
    
    try {
        // 根据类别动态导入对应的数据
        let dataModule = null
        if (routeCategory === 'quests') {
            dataModule = await import('../../data/wiki/quests/quests.js')
        }
        
        if (dataModule && dataModule.default) {
            const items = dataModule.default
            allQuests.value = items
            item.value = items.find(item => item.addressBar === `/${id}`)
        }
    } catch (error) {
        console.error('Failed to load wiki data:', error)
    }
})

// 计算其他任务（排除当前任务）
const otherQuests = computed(() => {
    if (!item.value) return []
    return allQuests.value.filter(quest => quest.id !== item.value.id)
})

const getCategoryDisplayName = (category) => {
    const categoryMap = {
        'quests': 'Quests',
        'weapons': 'Weapons',
        'equipment': 'Equipment'
    }
    return categoryMap[category] || 'Wiki'
}
</script>

<style scoped>
.wiki-detail-view {
    min-height: 100vh;
    background-color: var(--bg-primary);
}

/* Wiki Detail Header */
.wiki-detail-header {
    padding: 120px 0 40px;
    background-color: var(--bg-primary);
}

.breadcrumb {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 0;
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

/* Wiki Content */
.wiki-content {
    padding: 0 0 80px;
    background-color: var(--bg-primary);
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

.quest-header {
    margin-bottom: 40px;
    border-bottom: 2px solid var(--border-color);
    padding-bottom: 20px;
}

.quest-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--text-heading);
    margin-bottom: 16px;
    line-height: 1.2;
}

.quest-description {
    font-size: 1.125rem;
    color: var(--text-primary);
    line-height: 1.6;
}


.quest-footer {
    border-top: 1px solid var(--border-color);
    padding-top: 20px;
    margin-top: 40px;
}

.footer-text {
    font-size: 0.875rem;
    color: var(--text-secondary);
    margin: 0;
}

.license-link {
    color: #FFD700;
    font-weight: 500;
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
    .content-layout {
        grid-template-columns: 1fr;
        gap: 24px;
    }
    
    .right-sidebar {
        order: -1;
    }
    
    .quest-info-box {
        max-width: 400px;
        margin: 0 auto;
    }
}

@media (max-width: 768px) {
    .wiki-detail-header {
        padding: 80px 0 20px;
    }

    .quest-title {
        font-size: 1.75rem;
    }

    .quest-description {
        font-size: 1rem;
    }

    .left-content {
        padding: 24px;
    }

    .section-title {
        font-size: 1.125rem;
    }
    
    .quest-image {
        height: 150px;
    }
}
</style>
