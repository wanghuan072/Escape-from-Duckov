<template>
    <div class="guide-view">
        <!-- Guide Header -->
        <section class="page-header">
            <div class="container">
                <div class="page-header-content">
                    <div class="page-header-text">
                        <h1 class="page-title">{{ t('GuidesPage.title') }}</h1>
                        <p class="page-subtitle">{{ t('GuidesPage.subtitle') }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Guide Categories -->
        <section class="guide-categories">
            <div class="container">
                <!-- Loading State -->
                <div v-if="loading" class="loading-state">
                    <p>Loading guides...</p>
                </div>
                
                <!-- Error State -->
                <div v-if="error" class="error-state">
                    <p>Error loading guides: {{ error }}</p>
                </div>
                
                <!-- Getting Started -->
                <div class="category-section">
                    <h2 class="category-title">{{ t('GuidesPage.category1.title') }}</h2>
                    <div class="guides-grid">
                        <div 
                            v-for="guide in gettingStartedGuides" 
                            :key="guide.id" 
                            class="guide-card"
                            @click="goToGuide(guide.addressBar)"
                        >
                            <div class="guide-card-header">
                                <span class="category-tag">{{ t('GuidesPage.category1.tag') }}</span>
                            </div>
                            <h3 class="guide-title">{{ guide.title }}</h3>
                            <p class="guide-description">{{ guide.description }}</p>
                            <div class="guide-tags">
                                <span v-for="tag in guide.tags" :key="tag" class="tag">{{ tag }}</span>
                            </div>
                            <div class="guide-footer">
                                <span class="update-date">{{ formatDate(guide.publishDate) }}</span>
                                <span class="view-link">{{ t('GuidesPage.viewGuide') }}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Walkthroughs -->
                <div class="category-section">
                    <h2 class="category-title">{{ t('GuidesPage.category2.title') }}</h2>
                    <div class="guides-grid">
                        <div 
                            v-for="guide in walkthroughGuides" 
                            :key="guide.id" 
                            class="guide-card"
                            @click="goToGuide(guide.addressBar)"
                        >
                            <div class="guide-card-header">
                                <span class="category-tag">{{ t('GuidesPage.category2.tag') }}</span>
                            </div>
                            <h3 class="guide-title">{{ guide.title }}</h3>
                            <p class="guide-description">{{ guide.description }}</p>
                            <div class="guide-tags">
                                <span v-for="tag in guide.tags" :key="tag" class="tag">{{ tag }}</span>
                            </div>
                            <div class="guide-footer">
                                <span class="update-date">{{ formatDate(guide.publishDate) }}</span>
                                <span class="view-link">{{ t('GuidesPage.viewGuide') }}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Advanced -->
                <div class="category-section">
                    <h2 class="category-title">{{ t('GuidesPage.category3.title') }}</h2>
                    <div class="guides-grid">
                        <div 
                            v-for="guide in advancedGuides" 
                            :key="guide.id" 
                            class="guide-card"
                            @click="goToGuide(guide.addressBar)"
                        >
                            <div class="guide-card-header">
                                <span class="category-tag">{{ t('GuidesPage.category3.tag') }}</span>
                            </div>
                            <h3 class="guide-title">{{ guide.title }}</h3>
                            <p class="guide-description">{{ guide.description }}</p>
                            <div class="guide-tags">
                                <span v-for="tag in guide.tags" :key="tag" class="tag">{{ tag }}</span>
                            </div>
                            <div class="guide-footer">
                                <span class="update-date">{{ formatDate(guide.publishDate) }}</span>
                                <span class="view-link">{{ t('GuidesPage.viewGuide') }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { computed, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useGuideData } from '../composables/useGuideData'
import { getLocalizedPath } from '../utils/routeUtils'

const router = useRouter()
const { t, locale } = useI18n()
const { guides, loading, error, loadData } = useGuideData()

// 初始化加载数据
onMounted(() => {
    loadData()
})

// 监听语言变化，重新加载数据
watch(locale, () => {
    loadData()
})

// 计算属性：按分类分组
const gettingStartedGuides = computed(() => 
    (guides.value || []).filter(guide => guide.category === 'getting-started')
)

const walkthroughGuides = computed(() => 
    (guides.value || []).filter(guide => guide.category === 'walkthroughs')
)

const advancedGuides = computed(() => 
    (guides.value || []).filter(guide => guide.category === 'advanced')
)

const goToGuide = (addressBar) => {
    const path = getLocalizedPath(`/guides${addressBar}`, locale.value)
    window.location.href = path
}

const formatDate = (dateString) => {
    const date = new Date(dateString)
    return `${t('GuidesPage.updated')} ${date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric', 
        year: 'numeric' 
    })}`
}
</script>

<style scoped>

.guide-view::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
        linear-gradient(transparent 50%, rgba(0, 0, 0, 0.03) 50%),
        linear-gradient(90deg, transparent 50%, rgba(0, 0, 0, 0.03) 50%);
    background-size: 2px 2px;
    pointer-events: none;
    z-index: 0;
}

.guide-view::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        transparent 0%,
        rgba(0, 0, 0, 0.1) 50%,
        transparent 100%
    );
    background-size: 100% 4px;
    pointer-events: none;
    z-index: 0;
}

/* Guide Categories */
.guide-categories {
    position: relative;
    z-index: 1;
}

.category-section {
    margin-bottom: 80px;
}

.category-section:last-child {
    margin-bottom: 0;
}

.category-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #FA9317;
    margin-bottom: 40px;
    text-align: left;
    text-shadow: 0 0 20px rgba(250, 147, 23, 0.3);
}

.guides-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    max-width: 1200px;
    margin: 0 auto;
}

.guide-card {
    background: rgba(30, 30, 30, 0.8);
    border-radius: 8px;
    border: 1px solid rgba(250, 147, 23, 0.2);
    padding: 24px;
    transition: all 0.3s ease;
    cursor: pointer;
    backdrop-filter: blur(10px);
    position: relative;
    overflow: hidden;
}

.guide-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background: linear-gradient(135deg, rgba(250, 147, 23, 0.05) 0%, transparent 50%);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.guide-card:hover {
    transform: translateY(-4px);
    border-color: rgba(250, 147, 23, 0.4);
    box-shadow: 0 8px 32px rgba(250, 147, 23, 0.2);
}

.guide-card:hover::before {
    opacity: 1;
}

.guide-card-header {
    margin-bottom: 16px;
}

.category-tag {
    background: transparent;
    border: 1px solid #FA9317;
    color: #FA9317;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.5px;
}


.guide-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-heading);
    margin-bottom: 12px;
    line-height: 1.3;
}

.guide-description {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 20px;
    font-size: 0.95rem;
}

.guide-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 20px;
}

.tag {
    background: transparent;
    border: 1px solid rgba(250, 147, 23, 0.3);
    color: var(--text-secondary);
    padding: 4px 10px;
    border-radius: 16px;
    font-size: 0.75rem;
    font-weight: 500;
    transition: all 0.3s ease;
}

.guide-card:hover .tag {
    border-color: rgba(250, 147, 23, 0.6);
    color: #FA9317;
}

.guide-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 16px;
    border-top: 1px solid rgba(250, 147, 23, 0.1);
}

.update-date {
    color: var(--text-secondary);
    font-size: 0.8rem;
}

.view-link {
    color: #FA9317;
    font-size: 0.9rem;
    font-weight: 600;
    transition: all 0.3s ease;
}

.guide-card:hover .view-link {
    color: #fff;
    text-shadow: 0 0 8px rgba(250, 147, 23, 0.6);
}

/* Medium screens (≤1024px) */
@media (max-width: 1024px) {
    .guides-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }
    
    .category-title {
        font-size: 2.2rem;
        margin-bottom: 32px;
    }
    
    .guide-card {
        padding: 20px;
    }
    
    .guide-title {
        font-size: 1.3rem;
    }
    
    .guide-description {
        font-size: 0.9rem;
    }
}

/* Mobile screens (≤768px) */
@media (max-width: 768px) {
    /* Typography - Mobile Font Sizes */
    .page-title {
        font-size: 24px;
        margin-bottom: 10px;
    }
    
    .page-subtitle {
        font-size: 12px;
    }
    
    .category-title {
        font-size: 20px;
        margin-bottom: 20px;
        text-align: center;
    }
    
    .guide-title {
        font-size: 16px;
        margin-bottom: 10px;
    }
    
    .guide-description {
        font-size: 12px;
        margin-bottom: 10px;
    }
    
    .category-tag {
        font-size: 12px;
        padding: 4px 10px;
    }
    
    .tag {
        font-size: 12px;
        padding: 4px 8px;
    }
    
    .update-date {
        font-size: 12px;
    }
    
    .view-link {
        font-size: 12px;
    }
    
    .guide-categories {
        padding: 20px 0;
    }
    
    .category-section {
        margin-bottom: 20px;
    }
    
    /* Layout Adjustments */
    .guides-grid {
        grid-template-columns: 1fr;
        gap: 10px;
    }
    
    .guide-card {
        padding: 10px;
    }
    
    .guide-card-header {
        margin-bottom: 10px;
    }
    
    .guide-tags {
        gap: 6px;
        margin-bottom: 10px;
    }
    
    .guide-footer {
        padding-top: 10px;
        gap: 8px;
    }
}
</style>
