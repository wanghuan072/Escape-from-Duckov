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
                <div class="content-wrapper">
                    <article class="detail-article" v-html="mod?.detailsHtml"></article>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { mods } from '../data/mods/mods.js'

const route = useRoute()
const mod = ref(null)

onMounted(() => {
    const modId = route.params.id
    mod.value = mods.find(m => m.addressBar === `/${modId}`)
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
.mod-detail-view {
    min-height: 100vh;
}

/* Mod Detail Header */
.mod-detail-header {
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

.mod-detail-content {
    max-width: 800px;
    margin: 0 auto;
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

.mod-detail-description {
    font-size: 1.3rem;
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 32px;
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
    padding: 80px 0;
}

.content-wrapper {
    max-width: 900px;
    margin: 0 auto;
}

@media (max-width: 768px) {
    .mod-detail-title {
        font-size: 2.5rem;
    }
    
    .mod-detail-description {
        font-size: 1.1rem;
    }
    
    .mod-article {
        padding: 32px 24px;
    }
    
    .mod-detail-meta {
        flex-direction: column;
        gap: 16px;
    }
}
</style>
