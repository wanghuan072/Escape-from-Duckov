<template>
    <div class="mods-view">
        <!-- Mods Header -->
        <section class="page-header">
            <div class="container">
                <div class="page-header-content">
                    <div class="page-header-text">
                        <h1 class="page-title">{{ t('ModsPage.title') }}</h1>
                        <p class="page-subtitle">{{ t('ModsPage.subtitle') }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Mods Content -->
        <section class="mods-content">
            <div class="container">
                <div class="mods-grid">
                    <div v-for="mod in mods" :key="mod.id" class="mod-card" @click="goToMod(mod.addressBar)">
                        <div class="mod-card-media">
                            <img v-if="mod.imageUrl" :src="mod.imageUrl" :alt="mod.imageAlt || mod.title"
                                class="mod-card-image" />
                            <div v-else class="mod-card-image placeholder"></div>
                        </div>
                        <div class="mod-card-content">
                                <h3 class="mod-title">{{ mod.title }}</h3>
                                <p class="mod-description">{{ mod.description }}</p>
                                <div class="mod-stats">
                                    <div v-if="mod.releaseDate" class="mod-stat-item">
                                        <span class="mod-stat-label">{{ t('ModsPage.stats.releaseDate') }}</span>
                                        <span class="mod-stat-value">{{ formatReleaseDate(mod.releaseDate) }}</span>
                                    </div>
                                    <div v-if="mod.subscribers !== undefined && mod.subscribers !== null"
                                        class="mod-stat-item">
                                        <span class="mod-stat-label">{{ t('ModsPage.stats.subscribers') }}</span>
                                        <span class="mod-stat-value">{{ formatNumber(mod.subscribers) }}</span>
                                    </div>
                                </div>
                            <div class="mod-footer">
                                <div class="mod-tags">
                                    <span v-for="tag in mod.tags" :key="tag" class="tag">{{ tag }}</span>
                                </div>
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
import { useModsData } from '../composables/useModsData'
import { getLocalizedPath } from '../utils/routeUtils'

const router = useRouter()
const { t, locale } = useI18n()
const { mods, loadData } = useModsData()

const isEnglishLocale = computed(() => locale.value?.startsWith('en'))

const formatNumber = (value) => {
    if (typeof value === 'number') {
        return value.toLocaleString()
    }
    return value ?? ''
}

const formatReleaseDate = (value) => {
    if (!value) return ''
    if (isEnglishLocale.value) {
        const date = new Date(value)
        if (!Number.isNaN(date.getTime())) {
            return new Intl.DateTimeFormat('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
            }).format(date)
        }
    }
    return value
}

onMounted(() => {
    loadData()
})

// 监听语言变化，重新加载数据
watch(locale, () => {
    loadData()
})

const goToMod = (addressBar) => {
    const path = getLocalizedPath(`/mods${addressBar}`, locale.value)
    window.location.href = path
}
</script>

<style scoped>
.mods-view {
    min-height: 100vh;
}

.mods-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.mod-card {
    background: rgba(24, 24, 24, 0.88);
    border-radius: 16px;
    border: 1px solid rgba(250, 147, 23, 0.18);
    transition: all 0.3s ease;
    cursor: pointer;
    backdrop-filter: blur(12px);
    position: relative;
    overflow: hidden;
}

.mod-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at top left, rgba(250, 147, 23, 0.2), transparent 60%);
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
}

.mod-card:hover {
    transform: translateY(-6px);
    border-color: rgba(250, 147, 23, 0.32);
    box-shadow: 0 18px 40px rgba(250, 147, 23, 0.22);
}

.mod-card:hover::before {
    opacity: 1;
}

.mod-card-media {
    position: relative;
    overflow: hidden;
    border-radius: 10px 10px 0 0;
    aspect-ratio: 16/9;
    background: linear-gradient(135deg, rgba(250, 147, 23, 0.35), rgba(24, 24, 24, 0.6));
}

.mod-card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    filter: saturate(1.05);
    transition: transform 0.4s ease;
}

.mod-card:hover .mod-card-image {
    transform: scale(1.04);
}

.mod-card-image.placeholder {
    background: repeating-linear-gradient(135deg,
            rgba(250, 147, 23, 0.18),
            rgba(250, 147, 23, 0.18) 16px,
            rgba(24, 24, 24, 0.4) 16px,
            rgba(24, 24, 24, 0.4) 32px);
}

.mod-card-content {
    padding: 1rem;
}

.mod-footer {
    position: relative;
    z-index: 1;
    margin-top: 0.5rem;
    padding-top: 0.5rem;
    border-top: 1px solid rgba(250, 147, 23, 0.12);
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
    font-size: 0.6rem;
}

.mod-title {
    font-size: 1.35rem;
    font-weight: 700;
    color: var(--text-heading);
    margin-bottom: 0.5rem;
    line-height: 1.25;
    letter-spacing: 0.2px;
}

.mod-description {
    position: relative;
    z-index: 1;
    color: var(--text-secondary);
    line-height: 1.5;
    margin-bottom: 0.5rem;
    font-size: 0.8rem;
    letter-spacing: 0.1px;
}

.mod-stats {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px 18px;
}

.mod-stat-item {
    display: flex;
    flex-direction: column;
    gap: 4px;
    color: rgba(255, 231, 198, 0.9);
}

.mod-stat-label {
    font-weight: 600;
    font-size: 0.68rem;
    letter-spacing: 0.6px;
    color: rgba(250, 147, 23, 0.78);
}

.mod-stat-value {
    font-weight: 600;
    font-size: 0.85rem;
    letter-spacing: 0.2px;
}

.mod-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 0;
}

.tag {
    background: rgba(250, 147, 23, 0.12);
    border: 1px solid rgba(250, 147, 23, 0.22);
    color: rgba(255, 213, 154, 0.94);
    padding: 2px 12px;
    border-radius: 999px;
    font-size: 0.6rem;
    font-weight: 600;
    letter-spacing: 0.3px;
    transition: all 0.3s ease;
}

.mod-card:hover .tag {
    border-color: rgba(250, 147, 23, 0.56);
    color: #FA9317;
    background: rgba(250, 147, 23, 0.2);
}

/* Medium screens (≤1024px) */
@media (max-width: 1024px) {
    .mods-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
    }

    .mod-title {
        font-size: 1.3rem;
    }

    .mod-description {
        font-size: 0.9rem;
    }

    .mod-card-media {
        height: 160px;
        margin-bottom: 1.1rem;
    }

    .mod-stats {
        gap: 10px 16px;
    }

    .mod-stat-label {
        font-size: 0.7rem;
    }

    .mod-stat-value {
        font-size: 0.8rem;
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

    .mod-title {
        font-size: 16px;
        margin-bottom: 10px;
    }

    .mod-card-media {
        height: 140px;
        margin-bottom: 1rem;
    }

    .mod-stats {
        grid-template-columns: 1fr;
        gap: 10px;
    }

    /* Layout Adjustments */
    .mods-content {
        padding: 20px 0;
    }

    .mods-grid {
        grid-template-columns: 1fr;
        gap: 10px;
    }

    .mod-tags {
        gap: 6px;
        margin-bottom: 0;
    }

    .mod-footer {
        margin-top: 12px;
        padding-top: 12px;
    }

    .tag {
        font-size: 12px;
        padding: 4px 10px;
    }
}
</style>