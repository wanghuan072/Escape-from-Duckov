<template>
    <div class="wiki-view">
        <div class="container">
            <!-- Header Section -->
            <section class="page-header">
                <div class="page-header-content">
                    <div class="page-header-text">
                        <h1 class="page-title">{{ t('WikiPage.title') }}</h1>
                        <p class="page-subtitle">{{ t('WikiPage.subtitle') }}</p>
                    </div>
                </div>
            </section>

            <!-- Important Articles -->
            <section class="articles-section">
                <div class="articles-grid">
                    <a :href="getLocalizedPathForCurrentLang('/wiki/quests')" class="article-card">
                        <div class="card-image-container">
                            <img src="/images/wiki-01.webp" alt="Quests" class="card-image">
                        </div>
                        <h3 class="card-title">{{ t('WikiPage.quests.title') }}</h3>
                    </a>
                    <a :href="getLocalizedPathForCurrentLang('/items/weapons')" class="article-card">
                        <div class="card-image-container">
                            <img src="/images/hideout-02.webp" alt="Weapons" class="card-image">
                        </div>
                        <h3 class="card-title">{{ t('ItemsPage.weapons.title') }}</h3>
                    </a>
                    <a :href="getLocalizedPathForCurrentLang('/items/equipment')" class="article-card">
                        <div class="card-image-container">
                            <img src="/images/hideout-03.webp" alt="Equipment" class="card-image">
                        </div>
                        <h3 class="card-title">{{ t('ItemsPage.equipment.title') }}</h3>
                    </a>
                    <a :href="getLocalizedPathForCurrentLang('/items/ammunition')" class="article-card">
                        <div class="card-image-container">
                            <img src="/images/hideout-04.webp" alt="Ammunition" class="card-image">
                        </div>
                        <h3 class="card-title">{{ t('ItemsPage.ammunition.title') }}</h3>
                    </a>
                    <a :href="getLocalizedPathForCurrentLang('/items/key')" class="article-card">
                        <div class="card-image-container">
                            <img src="/images/hideout-05.webp" alt="Keys" class="card-image">
                        </div>
                        <h3 class="card-title">{{ t('ItemsPage.key.title') }}</h3>
                    </a>
                    <a :href="getLocalizedPathForCurrentLang('/items/fish')" class="article-card">
                        <div class="card-image-container">
                            <img src="/images/hideout-06.webp" alt="Fish" class="card-image">
                        </div>
                        <h3 class="card-title">{{ t('ItemsPage.fish.title') }}</h3>
                    </a>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { getLocalizedPath } from '../../utils/routeUtils'
import { detectLanguageFromPath } from '../../i18n'

const route = useRoute()
const { t, locale } = useI18n()

// 获取当前语言的路径（从 URL 路径检测，确保与 URL 一致）
const getLocalizedPathForCurrentLang = (path) => {
    // 优先从当前路由路径检测语言，确保与 URL 一致
    const pathLang = detectLanguageFromPath(route.path)
    const targetLang = pathLang !== 'en' ? pathLang : (locale.value || 'en')
    return getLocalizedPath(path, targetLang)
}
</script>

<style scoped>
/* Header styles now use global .page-header classes */

/* Articles Section */
.articles-section {
    margin: 0 auto;
}

.articles-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}

.article-card {
    background-color: rgba(21, 21, 21, 0.6);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(250, 147, 23, 0.2);
    border-radius: 8px;
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease;
    overflow: hidden;
}

.article-card:hover {
    transform: translateY(-4px);
    border-color: #FA9317;
    box-shadow: 0 8px 32px rgba(250, 147, 23, 0.3);
}

.card-image-container {
    width: 100%;
    overflow: hidden;
    font-size: 0;
    background-color: rgba(26, 26, 26, 0.8);
}

.card-image {
    width: 100%;
    aspect-ratio: 16/9;
    transition: transform 0.3s ease;
}

.article-card:hover .card-image {
    transform: scale(1.05);
}

.quests-image {
    background: linear-gradient(135deg, rgba(250, 147, 23, 0.3) 0%, rgba(230, 126, 34, 0.3) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
}

.quests-image::before {
    content: '📋';
    font-size: 3rem;
    opacity: 0.6;
}

.notes-image {
    background: linear-gradient(135deg, rgba(230, 126, 34, 0.3) 0%, rgba(250, 147, 23, 0.3) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
}

.notes-image::before {
    content: '📝';
    font-size: 3rem;
    opacity: 0.6;
}

.card-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #FA9317;
    text-align: center;
    padding: 10px;
    margin: 0;
}

/* Medium screens (≤1024px) */
@media (max-width: 1024px) {
    .articles-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
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

    .card-title {
        font-size: 16px;
        padding: 8px;
    }

    /* Layout Adjustments */
    .articles-grid {
        gap: 10px;
    }

    .article-card {
        border-radius: 6px;
    }

    .card-image-container {
        font-size: 0;
    }

    .card-image {
        aspect-ratio: 16/9;
    }
}
</style>
