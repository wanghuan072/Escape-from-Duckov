<template>
    <div class="maps-view">
        <!-- Maps Header -->
        <section class="page-header">
            <div class="container">
                <div class="page-header-content">
                    <div class="page-header-text">
                        <h1 class="page-title">{{ t('MapsPage.title') }}</h1>
                        <p class="page-subtitle">{{ t('MapsPage.subtitle') }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Maps Content -->
        <section class="maps-content">
            <div class="container">
                <!-- Loading State -->
                <div v-if="loading" class="loading-state">
                    <p>Loading maps...</p>
                </div>
                
                <!-- Error State -->
                <div v-if="error" class="error-state">
                    <p>Error loading maps: {{ error }}</p>
                </div>

                <!-- Maps Grid -->
                <div v-if="!loading && !error" class="maps-grid">
                    <div 
                        v-for="map in maps" 
                        :key="map.id" 
                        class="map-card"
                        @click="goToMap(map.addressBar)"
                    >
                        <div class="map-card-header">
                            <div class="map-image">
                                <img :src="map.imageUrl" :alt="map.imageAlt" class="map-screenshot">
                            </div>
                        </div>
                        <div class="map-card-content">
                            <h3 class="map-title">{{ map.title }}</h3>
                            <p class="map-description">{{ map.description }}</p>
                            <div v-if="map.tags && map.tags.length > 0" class="map-tags">
                                <span v-for="tag in map.tags" :key="tag" class="tag">{{ tag }}</span>
                            </div>
                            <div class="map-footer">
                                <span class="update-date">{{ formatDate(map.publishDate) }}</span>
                                <span class="view-link">{{ t('MapsPage.viewMap') || 'View Map' }}</span>
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
import { useI18n } from 'vue-i18n'
import { useMapsData } from '../composables/useMapsData'
import { getLocalizedPath } from '../utils/routeUtils'

const { t, locale } = useI18n()
const { maps, loading, error, loadData } = useMapsData()

// 初始化加载数据
onMounted(() => {
    loadData()
})

// 监听语言变化，重新加载数据
watch(locale, () => {
    loadData()
})

const goToMap = (addressBar) => {
    const path = getLocalizedPath(`/maps${addressBar}`, locale.value)
    window.location.href = path
}

const formatDate = (dateString) => {
    if (!dateString) return ''
    const date = new Date(dateString)
    return `${t('MapsPage.updated') || 'Updated'} ${date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric', 
        year: 'numeric' 
    })}`
}
</script>

<style scoped>
.maps-view {
    min-height: 100vh;
}

.maps-content {
    position: relative;
    z-index: 1;
}

.maps-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    max-width: 1200px;
    margin: 0 auto;
}

.map-card {
    background: rgba(30, 30, 30, 0.8);
    border-radius: 8px;
    border: 1px solid rgba(250, 147, 23, 0.2);
    padding: 0;
    transition: all 0.3s ease;
    cursor: pointer;
    backdrop-filter: blur(10px);
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

.map-card::before {
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

.map-card:hover {
    transform: translateY(-4px);
    border-color: rgba(250, 147, 23, 0.4);
    box-shadow: 0 8px 32px rgba(250, 147, 23, 0.2);
}

.map-card:hover::before {
    opacity: 1;
}

.map-card-header {
    width: 100%;
    overflow: hidden;
}

.map-image {
    width: 100%;
    aspect-ratio: 16/9;
    overflow: hidden;
}

.map-screenshot {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.map-card:hover .map-screenshot {
    transform: scale(1.05);
}

.map-card-content {
    padding: 24px;
    display: flex;
    flex-direction: column;
    flex: 1;
}

.map-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-heading);
    margin-bottom: 12px;
    line-height: 1.3;
}

.map-description {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 20px;
    font-size: 0.95rem;
    flex: 1;
}

.map-tags {
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

.map-card:hover .tag {
    border-color: rgba(250, 147, 23, 0.6);
    color: #FA9317;
}

.map-footer {
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

.map-card:hover .view-link {
    color: #fff;
    text-shadow: 0 0 8px rgba(250, 147, 23, 0.6);
}

.loading-state,
.error-state {
    text-align: center;
    padding: 40px;
    color: var(--text-secondary);
}

/* Medium screens (≤1024px) */
@media (max-width: 1024px) {
    .maps-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }
    
    .map-card-content {
        padding: 20px;
    }
    
    .map-title {
        font-size: 1.3rem;
    }
    
    .map-description {
        font-size: 0.9rem;
    }
}

/* Mobile screens (≤768px) */
@media (max-width: 768px) {
    .page-title {
        font-size: 24px;
        margin-bottom: 10px;
    }
    
    .page-subtitle {
        font-size: 12px;
    }
    
    .maps-content {
        padding: 20px 0;
    }
    
    .maps-grid {
        grid-template-columns: 1fr;
        gap: 10px;
    }
    
    .map-card-content {
        padding: 10px;
    }
    
    .map-title {
        font-size: 16px;
        margin-bottom: 10px;
    }
    
    .map-description {
        font-size: 12px;
        margin-bottom: 10px;
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
    
    .map-footer {
        padding-top: 10px;
        gap: 8px;
    }
}
</style>
