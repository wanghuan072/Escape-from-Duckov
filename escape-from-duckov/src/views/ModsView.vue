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
                    <div 
                        v-for="mod in mods" 
                        :key="mod.id" 
                        class="mod-card"
                        @click="goToMod(mod.addressBar)"
                    >
                        <div class="mod-card-header">
                            <span class="category-tag">{{ mod.category.toUpperCase() }}</span>
                        </div>
                        <h3 class="mod-title">{{ mod.title }}</h3>
                        <p class="mod-description">{{ mod.description }}</p>
                        <div class="mod-tags">
                            <span v-for="tag in mod.tags" :key="tag" class="tag">{{ tag }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { mods } from '../data/mods/mods.js'
import { getLocalizedPath } from '../utils/routeUtils'

const router = useRouter()
const { t, locale } = useI18n()

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
    gap: 24px;
}

.mod-card {
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

.mod-card:hover {
    transform: translateY(-4px);
    border-color: rgba(250, 147, 23, 0.4);
    box-shadow: 0 8px 32px rgba(250, 147, 23, 0.2);
}

.mod-card-header {
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

.mod-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-heading);
    margin-bottom: 12px;
    line-height: 1.3;
}

.mod-description {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 20px;
    font-size: 0.95rem;
}

.mod-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 0;
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

.mod-card:hover .tag {
    border-color: rgba(250, 147, 23, 0.6);
    color: #FA9317;
}

/* Medium screens (≤1024px) */
@media (max-width: 1024px) {
    .mods-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
    }

    .mod-card {
        padding: 20px;
    }

    .mod-title {
        font-size: 1.3rem;
    }

    .mod-description {
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

    .mod-title {
        font-size: 16px;
        margin-bottom: 10px;
    }

    .mod-description {
        font-size: 12px;
        margin-bottom: 10px;
    }

    .category-tag,
    .tag {
        font-size: 12px;
        padding: 4px 8px;
    }

    /* Layout Adjustments */
    .mods-content {
        padding: 20px 0;
    }

    .mods-grid {
        grid-template-columns: 1fr;
        gap: 10px;
    }

    .mod-card {
        padding: 16px;
    }

    .mod-card-header {
        margin-bottom: 10px;
    }

    .mod-tags {
        gap: 6px;
        margin-bottom: 0;
    }
}
</style>