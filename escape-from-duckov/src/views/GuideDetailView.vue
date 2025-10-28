<template>
    <div class="guide-detail-view">
        <!-- Guide Detail Header -->
        <section class="guide-detail-header">
            <div class="container">
                <div class="breadcrumb">
                    <a href="/guides" class="breadcrumb-link">
                        <svg class="breadcrumb-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                            <polyline points="9,22 9,12 15,12 15,22"/>
                        </svg>
                        Guides
                    </a>
                    <svg class="breadcrumb-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="9,18 15,12 9,6"/>
                    </svg>
                    <span class="breadcrumb-current">{{ guide?.title }}</span>
                </div>
                
                <div class="guide-detail-content">
                    <div class="guide-detail-text">
                        <div class="guide-category">
                            <span class="category-badge">{{ getCategoryName(guide?.category) }}</span>
                        </div>
                        <h1 class="guide-detail-title">{{ guide?.title }}</h1>
                        <p class="guide-detail-description">{{ guide?.description }}</p>
                        
                        <div class="guide-detail-meta">
                            <div class="meta-item">
                                <svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <circle cx="12" cy="12" r="10"/>
                                    <polyline points="12,6 12,12 16,14"/>
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
                <div class="content-wrapper">
                    <article class="detail-article" v-html="guide?.detailsHtml"></article>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { guides } from '../data/guide/guide.js'

const route = useRoute()
const guide = ref(null)

onMounted(() => {
    const guideId = route.params.id
    guide.value = guides.find(g => g.addressBar === `/${guideId}`)
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
    padding: 120px 0 80px;
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

.guide-detail-content {
    max-width: 800px;
    margin: 0 auto;
}

.guide-category {
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

.guide-detail-title {
    font-size: 3.5rem;
    font-weight: 700;
    color: var(--text-heading);
    margin-bottom: 24px;
    line-height: 1.1;
    background: linear-gradient(135deg, var(--text-heading) 0%, #FA9317 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.guide-detail-description {
    font-size: 1.3rem;
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 32px;
}

.guide-detail-meta {
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

.guide-tags {
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

/* Guide Content */
.guide-content {
    padding: 80px 0;
}

.content-wrapper {
    max-width: 900px;
    margin: 0 auto;
}


@media (max-width: 768px) {
    .guide-detail-title {
        font-size: 2.5rem;
    }
    
    .guide-detail-description {
        font-size: 1.1rem;
    }
    
    .guide-detail-content {
        grid-template-columns: 1fr;
        gap: 40px;
    }
    
    .guide-detail-image {
        width: 100%;
        height: 250px;
    }
    
    .guide-detail-meta {
        flex-direction: column;
        gap: 16px;
    }
}
</style>