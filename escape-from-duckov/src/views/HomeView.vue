<template>
    <div class="home-view">
        <!-- Hero Section -->
        <section class="hero hero-background">
            <div class="container">
                <div class="hero-content">
                    <div class="hero-text">
                        <h1 class="hero-title">
                            {{ t('HomePage.hero.title') }}
                        </h1>
                        <p class="hero-subtitle">{{ t('HomePage.hero.subtitle') }}</p>
                        <a href="https://store.steampowered.com" class="btn btn-steam" target="_blank">
                            <div class="icon">
                                <svg t="1761617030408" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="4538" width="30" height="30">
                                    <path
                                        d="M511.104 0C242.261333 0 21.802667 207.36 0.938667 470.912l274.432 113.408a144.512 144.512 0 0 1 81.578666-25.173333c2.688 0 5.333333 0.170667 8.021334 0.256l122.069333-176.725334V380.16a193.194667 193.194667 0 0 1 193.024-193.024c106.410667 0 193.024 86.656 193.024 193.152s-86.613333 193.066667-193.024 193.066667h-4.48l-173.909333 124.202666c0 2.218667 0.170667 4.48 0.170666 6.784a144.725333 144.725333 0 0 1-144.64 144.896 145.578667 145.578667 0 0 1-142.122666-116.352L18.602667 651.52C79.445333 866.432 276.736 1024 511.104 1024c282.752 0 511.957333-229.248 511.957333-512S793.813333 0 511.104 0zM321.706667 776.96l-62.848-26.026667c11.178667 23.168 30.464 42.624 56.064 53.333334a108.842667 108.842667 0 0 0 142.378666-141.824 108.672 108.672 0 0 0-138.88-60.288l64.981334 26.88a80.128 80.128 0 0 1-61.653334 147.925333H321.706667z m487.04-396.928a128.810667 128.810667 0 0 0-128.64-128.64 128.64 128.64 0 1 0 128.64 128.64z m-224.981334-0.213333a96.597333 96.597333 0 1 1 193.322667 0 96.725333 96.725333 0 0 1-96.682667 96.64 96.597333 96.597333 0 0 1-96.64-96.64z"
                                        fill="#ffffff" p-id="4539"></path>
                                </svg>
                            </div>
                            {{ t('HomePage.hero.steamButton') }}
                        </a>
                    </div>
                    <div class="hero-video">
                        <div class="video-player">
                            <div class="video-thumbnail" v-if="!isVideoPlaying">
                                <img src="/images/video-bg.webp" alt="Escape From Duckov Trailer" class="video-preview">
                                <div class="play-button" @click="playVideo">
                                    <span class="play-icon">{{ t('HomePage.video.playIcon') }}</span>
                                </div>
                                <div class="video-overlay">
                                    <!-- <div class="video-title">ESCAPE FROM DUCKOV</div> -->
                                </div>
                            </div>
                            <div class="video-iframe" v-if="isVideoPlaying">
                                <iframe src="https://www.youtube.com/embed/JxHopm6cQnc" frameborder="0" allowfullscreen
                                    class="video-frame">
                                </iframe>
                                <button class="close-video" @click="closeVideo">×</button>
                            </div>
                            <div class="video-info">
                                <div class="video-header">
                                    <span class="video-icon">🎮</span>
                                    <span class="video-channel">{{ t('HomePage.video.channel') }}</span>
                                </div>
                                <div class="video-footer">
                                    <div class="video-label">{{ t('HomePage.video.label') }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- What is Escape from Duckov -->
        <section class="what-is">
            <div class="container">
                <div class="what-is-content">
                    <div class="what-is-image">
                        <img src="/images/about-01.webp" alt="Escape From Duckov Gameplay" class="gameplay-screenshot">
                    </div>
                    <div class="what-is-text">
                        <h2 class="section-title">{{ t('HomePage.about.section1.title') }}</h2>
                        <div class="what-is-description">
                            <p v-html="tWithLocalizedLinks('HomePage.about.section1.p1', {}, { raw: true })"></p>
                            <p v-html="tWithLocalizedLinks('HomePage.about.section1.p2', {}, { raw: true })"></p>
                        </div>
                    </div>
                </div>
                <div class="what-is-content">
                    <div class="what-is-image">
                        <img src="/images/about-02.webp" alt="Escape From Duckov Gameplay" class="gameplay-screenshot">
                    </div>
                    <div class="what-is-text">
                        <h2 class="section-title">{{ t('HomePage.about.section2.title') }}</h2>
                        <div class="what-is-description">
                            <p v-html="tWithLocalizedLinks('HomePage.about.section2.p1', {}, { raw: true })"></p>
                            <p v-html="tWithLocalizedLinks('HomePage.about.section2.p2', {}, { raw: true })"></p>
                        </div>
                    </div>
                </div>
                <div class="what-is-content">
                    <div class="what-is-image">
                        <img src="/images/about-03.webp" alt="Escape From Duckov Gameplay" class="gameplay-screenshot">
                    </div>
                    <div class="what-is-text">
                        <h2 class="section-title">{{ t('HomePage.about.section3.title') }}</h2>
                        <div class="what-is-description">
                            <p v-html="tWithLocalizedLinks('HomePage.about.section3.p1', {}, { raw: true })"></p>
                            <p v-html="tWithLocalizedLinks('HomePage.about.section3.p2', {}, { raw: true })"></p>
                        </div>
                    </div>
                </div>
                <div class="what-is-content">
                    <div class="what-is-image">
                        <img src="/images/about-04.webp" alt="Escape From Duckov Gameplay" class="gameplay-screenshot">
                    </div>
                    <div class="what-is-text">
                        <h2 class="section-title">{{ t('HomePage.about.section4.title') }}</h2>
                        <div class="what-is-description">
                            <p v-html="tWithLocalizedLinks('HomePage.about.section4.p1', {}, { raw: true })"></p>
                            <p v-html="tWithLocalizedLinks('HomePage.about.section4.p2', {}, { raw: true })"></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Maps Section -->
        <section class="maps-section" id="maps">
            <div class="container">
                <h2 class="section-title">{{ t('HomePage.maps.title') }}</h2>
                <p class="section-subtitle">{{ t('HomePage.maps.subtitle') }}</p>
                <div class="maps-grid">
                    <div class="map-card card">
                        <div class="map-image">
                            <img src="/images/map-01.webp" alt="Ground Zero" class="map-screenshot">
                        </div>
                        <div class="map-content">
                            <h3>{{ t('HomePage.maps.map1.name') }}</h3>
                            <p>{{ t('HomePage.maps.map1.desc') }}</p>
                        </div>
                    </div>
                    <div class="map-card card">
                        <div class="map-image">
                            <img src="/images/map-02.webp" alt="Warehouse District" class="map-screenshot">
                        </div>
                        <div class="map-content">
                            <h3>{{ t('HomePage.maps.map2.name') }}</h3>
                            <p>{{ t('HomePage.maps.map2.desc') }}</p>
                        </div>
                    </div>
                </div>
                <div class="text-center">
                    <a :href="getLocalizedPathForCurrentLang('/maps')" class="btn btn-primary">{{
                        t('HomePage.maps.viewAll') }}</a>
                </div>
            </div>
        </section>

        <!-- Duckov Wiki Section -->
        <section class="hideout-section">
            <div class="container">
                <h2 class="section-title">{{ t('HomePage.wiki.title') }}</h2>
                <p class="section-subtitle">{{ t('HomePage.wiki.subtitle') }}</p>
                <div class="guides-grid">
                    <a :href="getLocalizedPathForCurrentLang('/wiki/quests')" class="guide-card-link card">
                        <div class="guide-image">
                            <img src="/images/wiki-01.webp" alt="Quests Guide" class="guide-img">
                        </div>
                        <div class="guide-content">
                            <h3>{{ t('HomePage.wiki.quests.title') }}</h3>
                            <p>{{ t('HomePage.wiki.quests.desc') }}</p>
                        </div>
                    </a>
                    <a :href="getLocalizedPathForCurrentLang('/items/weapons')" class="guide-card-link card">
                        <div class="guide-image">
                            <img src="/images/hideout-02.webp" :alt="t('ItemsPage.weapons.title')" class="guide-img">
                        </div>
                        <div class="guide-content">
                            <h3>{{ t('ItemsPage.weapons.title') }}</h3>
                            <p>{{ t('ItemsPage.weapons.desc') }}</p>
                        </div>
                    </a>
                    <a :href="getLocalizedPathForCurrentLang('/items/equipment')" class="guide-card-link card">
                        <div class="guide-image">
                            <img src="/images/hideout-03.webp" :alt="t('ItemsPage.equipment.title')" class="guide-img">
                        </div>
                        <div class="guide-content">
                            <h3>{{ t('ItemsPage.equipment.title') }}</h3>
                            <p>{{ t('ItemsPage.equipment.desc') }}</p>
                        </div>
                    </a>
                    <a :href="getLocalizedPathForCurrentLang('/items/ammunition')" class="guide-card-link card">
                        <div class="guide-image">
                            <img src="/images/hideout-04.webp" :alt="t('ItemsPage.ammunition.title')" class="guide-img">
                        </div>
                        <div class="guide-content">
                            <h3>{{ t('ItemsPage.ammunition.title') }}</h3>
                            <p>{{ t('ItemsPage.ammunition.desc') }}</p>
                        </div>
                    </a>
                    <a :href="getLocalizedPathForCurrentLang('/items/key')" class="guide-card-link card">
                        <div class="guide-image">
                            <img src="/images/hideout-05.webp" :alt="t('ItemsPage.key.title')" class="guide-img">
                        </div>
                        <div class="guide-content">
                            <h3>{{ t('ItemsPage.key.title') }}</h3>
                            <p>{{ t('ItemsPage.key.desc') }}</p>
                        </div>
                    </a>
                    <a :href="getLocalizedPathForCurrentLang('/items/fish')" class="guide-card-link card">
                        <div class="guide-image">
                            <img src="/images/hideout-06.webp" :alt="t('ItemsPage.fish.title')" class="guide-img">
                        </div>
                        <div class="guide-content">
                            <h3>{{ t('ItemsPage.fish.title') }}</h3>
                            <p>{{ t('ItemsPage.fish.desc') }}</p>
                        </div>
                    </a>
                </div>
                <div class="text-center">
                    <a :href="getLocalizedPathForCurrentLang('/wiki')" class="btn btn-primary">{{
                        t('HomePage.wiki.exploreAll') }}</a>
                </div>
            </div>
        </section>

        <!-- Guides Section -->
        <section class="guides-section" id="guides">
            <div class="container">
                <h2 class="section-title">{{ t('HomePage.guides.title') }}</h2>
                <div class="guides-grid">
                    <div v-for="guide in homeGuides" :key="guide.id" class="guide-card card"
                        @click="goToGuide(guide.addressBar)">
                        <div class="guide-header">
                            <span class="guide-badge">{{ getCategoryBadge(guide.category) }}</span>
                        </div>
                        <h3>{{ guide.title }}</h3>
                        <p>{{ guide.description }}</p>
                    </div>
                </div>
                <div class="text-center">
                    <a :href="getLocalizedPathForCurrentLang('/guides')" class="btn btn-primary">{{
                        t('HomePage.guides.viewAll') }}</a>
                </div>
            </div>
        </section>

        <!-- Game Information -->
        <section class="single-player">
            <div class="container">
                <h2 class="section-title">{{ t('HomePage.gameInfo.title') }}</h2>
                <p class="section-subtitle">{{ t('HomePage.gameInfo.subtitle') }}</p>
                <div class="game-info-content">
                    <div class="game-left">
                        <div class="info-card">
                            <div class="info-header">
                                <h3>{{ t('HomePage.gameInfo.details.title') }}</h3>
                            </div>
                            <div class="info-items">
                                <div class="info-item">
                                    <span class="item-label">{{ t('HomePage.gameInfo.details.name') }}</span>
                                    <span class="item-value">{{ t('HomePage.gameInfo.details.nameValue') }}</span>
                                </div>
                                <div class="info-item">
                                    <span class="item-label">{{ t('HomePage.gameInfo.details.genre') }}</span>
                                    <span class="item-value">{{ t('HomePage.gameInfo.details.genreValue') }}</span>
                                </div>
                                <div class="info-item">
                                    <span class="item-label">{{ t('HomePage.gameInfo.details.developer') }}</span>
                                    <span class="item-value">{{ t('HomePage.gameInfo.details.developerValue') }}</span>
                                </div>
                                <div class="info-item">
                                    <span class="item-label">{{ t('HomePage.gameInfo.details.publisher') }}</span>
                                    <span class="item-value">{{ t('HomePage.gameInfo.details.publisherValue') }}</span>
                                </div>
                                <div class="info-item">
                                    <span class="item-label">{{ t('HomePage.gameInfo.details.release') }}</span>
                                    <span class="item-value">{{ t('HomePage.gameInfo.details.releaseValue') }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="game-right">
                        <div class="info-card">
                            <div class="info-header">
                                <h3>{{ t('HomePage.gameInfo.languages.title') }}</h3>
                            </div>
                            <div class="language-table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th class="col-language">{{ t('HomePage.gameInfo.languages.lang') }}</th>
                                            <th class="col-interface">{{ t('HomePage.gameInfo.languages.interface') }}
                                            </th>
                                            <th class="col-audio">{{ t('HomePage.gameInfo.languages.audio') }}</th>
                                            <th class="col-subtitles">{{ t('HomePage.gameInfo.languages.subtitles') }}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="col-language">{{ t('HomePage.gameInfo.languages.lang1') }}</td>
                                            <td class="col-interface">✓</td>
                                            <td class="col-audio"></td>
                                            <td class="col-subtitles">✓</td>
                                        </tr>
                                        <tr>
                                            <td class="col-language">{{ t('HomePage.gameInfo.languages.lang2') }}</td>
                                            <td class="col-interface">✓</td>
                                            <td class="col-audio"></td>
                                            <td class="col-subtitles">✓</td>
                                        </tr>
                                        <tr>
                                            <td class="col-language">{{ t('HomePage.gameInfo.languages.lang3') }}</td>
                                            <td class="col-interface">✓</td>
                                            <td class="col-audio"></td>
                                            <td class="col-subtitles">✓</td>
                                        </tr>
                                        <tr>
                                            <td class="col-language">{{ t('HomePage.gameInfo.languages.lang4') }}</td>
                                            <td class="col-interface">✓</td>
                                            <td class="col-audio"></td>
                                            <td class="col-subtitles">✓</td>
                                        </tr>
                                        <tr>
                                            <td class="col-language">{{ t('HomePage.gameInfo.languages.lang5') }}</td>
                                            <td class="col-interface">✓</td>
                                            <td class="col-audio"></td>
                                            <td class="col-subtitles">✓</td>
                                        </tr>
                                        <tr>
                                            <td class="col-language">{{ t('HomePage.gameInfo.languages.lang6') }}</td>
                                            <td class="col-interface">✓</td>
                                            <td class="col-audio"></td>
                                            <td class="col-subtitles">✓</td>
                                        </tr>
                                        <tr>
                                            <td class="col-language">{{ t('HomePage.gameInfo.languages.lang7') }}</td>
                                            <td class="col-interface">✓</td>
                                            <td class="col-audio"></td>
                                            <td class="col-subtitles">✓</td>
                                        </tr>
                                        <tr>
                                            <td class="col-language">{{ t('HomePage.gameInfo.languages.lang8') }}</td>
                                            <td class="col-interface">✓</td>
                                            <td class="col-audio"></td>
                                            <td class="col-subtitles">✓</td>
                                        </tr>
                                        <tr>
                                            <td class="col-language">{{ t('HomePage.gameInfo.languages.lang9') }}</td>
                                            <td class="col-interface">✓</td>
                                            <td class="col-audio"></td>
                                            <td class="col-subtitles">✓</td>
                                        </tr>
                                        <tr>
                                            <td class="col-language">{{ t('HomePage.gameInfo.languages.lang10') }}</td>
                                            <td class="col-interface">✓</td>
                                            <td class="col-audio"></td>
                                            <td class="col-subtitles">✓</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Reviews Section -->
        <section class="reviews-section">
            <div class="container">
                <h2 class="section-title">{{ t('HomePage.reviews.title') }}</h2>
                <p class="section-subtitle">{{ t('HomePage.reviews.subtitle') }}</p>
                <div class="reviews-grid">
                    <div class="review-card card">
                        <div class="review-header">
                            <div class="reviewer-info">
                                <div class="reviewer-avatar">
                                    <img src="/images/review-01.webp" :alt="t('HomePage.reviews.review1.name')"
                                        class="reviewer-avatar-img">
                                </div>
                                <div class="reviewer-details">
                                    <h4>{{ t('HomePage.reviews.review1.name') }}</h4>
                                    <div class="review-rating">
                                        <span class="stars">{{ t('HomePage.reviews.review1.rating') }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="review-content">
                            <p>{{ t('HomePage.reviews.review1.text') }}</p>
                        </div>
                    </div>

                    <div class="review-card card">
                        <div class="review-header">
                            <div class="reviewer-info">
                                <div class="reviewer-avatar">
                                    <img src="/images/review-01.webp" :alt="t('HomePage.reviews.review2.name')"
                                        class="reviewer-avatar-img">
                                </div>
                                <div class="reviewer-details">
                                    <h4>{{ t('HomePage.reviews.review2.name') }}</h4>
                                    <div class="review-rating">
                                        <span class="stars">{{ t('HomePage.reviews.review2.rating') }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="review-content">
                            <p>{{ t('HomePage.reviews.review2.text') }}</p>
                        </div>
                    </div>

                    <div class="review-card card">
                        <div class="review-header">
                            <div class="reviewer-info">
                                <div class="reviewer-avatar">
                                    <img src="/images/review-01.webp" :alt="t('HomePage.reviews.review3.name')"
                                        class="reviewer-avatar-img">
                                </div>
                                <div class="reviewer-details">
                                    <h4>{{ t('HomePage.reviews.review3.name') }}</h4>
                                    <div class="review-rating">
                                        <span class="stars">{{ t('HomePage.reviews.review3.rating') }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="review-content">
                            <p>{{ t('HomePage.reviews.review3.text') }}</p>
                        </div>
                    </div>

                    <div class="review-card card">
                        <div class="review-header">
                            <div class="reviewer-info">
                                <div class="reviewer-avatar">🏗️</div>
                                <div class="reviewer-details">
                                    <h4>{{ t('HomePage.reviews.review4.name') }}</h4>
                                    <div class="review-rating">
                                        <span class="stars">{{ t('HomePage.reviews.review4.rating') }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="review-content">
                            <p>{{ t('HomePage.reviews.review4.text') }}</p>
                        </div>
                    </div>

                    <div class="review-card card">
                        <div class="review-header">
                            <div class="reviewer-info">
                                <div class="reviewer-avatar">🗺️</div>
                                <div class="reviewer-details">
                                    <h4>{{ t('HomePage.reviews.review5.name') }}</h4>
                                    <div class="review-rating">
                                        <span class="stars">{{ t('HomePage.reviews.review5.rating') }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="review-content">
                            <p>{{ t('HomePage.reviews.review5.text') }}</p>
                        </div>
                    </div>

                    <div class="review-card card">
                        <div class="review-header">
                            <div class="reviewer-info">
                                <div class="reviewer-avatar">🎯</div>
                                <div class="reviewer-details">
                                    <h4>{{ t('HomePage.reviews.review6.name') }}</h4>
                                    <div class="review-rating">
                                        <span class="stars">{{ t('HomePage.reviews.review6.rating') }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="review-content">
                            <p>{{ t('HomePage.reviews.review6.text') }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ Section -->
        <section class="faq-section">
            <div class="container">
                <h2 class="section-title">{{ t('HomePage.faq.title') }}</h2>
                <div class="faq-list">
                    <div class="faq-item card">
                        <h3>{{ t('HomePage.faq.q1.question') }}</h3>
                        <p v-html="tWithLocalizedLinks('HomePage.faq.q1.answer', {}, { raw: true })"></p>
                    </div>
                    <div class="faq-item card">
                        <h3>{{ t('HomePage.faq.q2.question') }}</h3>
                        <p>{{ t('HomePage.faq.q2.answer') }}</p>
                    </div>
                    <div class="faq-item card">
                        <h3>{{ t('HomePage.faq.q3.question') }}</h3>
                        <p>{{ t('HomePage.faq.q3.answer') }}</p>
                    </div>
                    <div class="faq-item card">
                        <h3>{{ t('HomePage.faq.q4.question') }}</h3>
                        <p v-html="tWithLocalizedLinks('HomePage.faq.q4.answer', {}, { raw: true })"></p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { getLocalizedPath } from '../utils/routeUtils'
import { useGuideData } from '../composables/useGuideData'
import { detectLanguageFromPath } from '../i18n'

const route = useRoute()
const { t, locale } = useI18n()
const { guides, loadHomeGuidesOnly } = useGuideData()

// 获取当前语言的路径（从 URL 路径检测，确保与 URL 一致）
const getLocalizedPathForCurrentLang = (path) => {
    // 优先从当前路由路径检测语言，确保与 URL 一致
    const pathLang = detectLanguageFromPath(route.path)
    const targetLang = pathLang !== 'en' ? pathLang : (locale.value || 'en')
    return getLocalizedPath(path, targetLang)
}

// 处理 HTML 内容中的链接，将其转换为多语言路径
const processHtmlLinks = (htmlContent) => {
    if (!htmlContent || typeof htmlContent !== 'string') return htmlContent

    // 获取当前语言
    const pathLang = detectLanguageFromPath(route.path)
    const targetLang = pathLang !== 'en' ? pathLang : (locale.value || 'en')

    // 匹配 href="/xxx" 或 href='/xxx' 格式的链接
    return htmlContent.replace(/href=["'](\/[^"']+)["']/g, (match, path) => {
        // 如果是外部链接（http/https）或已经是多语言路径，不处理
        if (path.startsWith('http://') || path.startsWith('https://')) {
            return match
        }

        // 检查是否已经是多语言路径
        const supportedLanguagesForCheck = ['en', 'de', 'fr', 'es', 'ja', 'ko', 'ru', 'pt', 'zh']
        const isAlreadyLocalized = supportedLanguagesForCheck.some(lang => {
            if (lang === 'en') return false
            return path.startsWith(`/${lang}/`) || path === `/${lang}`
        })

        if (isAlreadyLocalized) {
            return match // 已经是多语言路径，不处理
        }

        // 转换为多语言路径
        const localizedPath = getLocalizedPath(path, targetLang)
        return `href="${localizedPath}"`
    })
}

// 包装 t() 函数以处理 HTML 内容中的链接
const tWithLocalizedLinks = (key, params = {}, options = {}) => {
    const content = t(key, params, options)
    // 如果内容包含 HTML，处理其中的链接
    if (options.raw || content.includes('<a href')) {
        return processHtmlLinks(content)
    }
    return content
}

const isVideoPlaying = ref(false)

const playVideo = () => {
    isVideoPlaying.value = true
}

const closeVideo = () => {
    isVideoPlaying.value = false
}

// 仅加载首页需要的指南数据（性能优化）
onMounted(() => {
    loadHomeGuidesOnly()
})

// 监听语言变化，重新加载数据
watch(locale, () => {
    loadHomeGuidesOnly()
})

// 首页指南数据（已经过滤，直接使用）
const homeGuides = computed(() => {
    return guides.value || []
})

// 根据 category 返回对应的 badge 文本
const getCategoryBadge = (category) => {
    const categoryMap = {
        'getting-started': t('HomePage.guides.guide1.badge'),
        'walkthroughs': t('HomePage.guides.guide2.badge'),
        'advanced': t('HomePage.guides.guide3.badge')
    }
    return categoryMap[category] || t('HomePage.guides.guide3.badge')
}

// 跳转到指南详情页
const goToGuide = (addressBar) => {
    const path = getLocalizedPath(`/guides${addressBar}`, locale.value)
    window.location.href = path
}
</script>

<style scoped>
/* Section spacing for HomeView */
section {
    padding: 40px 0;
    position: relative;
    z-index: 1;
}

.hero {
    padding: 80px 0;
}

.hero-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
}

.hero-title {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 24px;
    line-height: 1.1;
    color: var(--secondary-color);
    text-align: left;
    letter-spacing: 4px;
}


.hero-subtitle {
    font-size: 1.125rem;
    color: var(--text-secondary);
    margin-bottom: 32px;
    line-height: 1.6;
    text-align: left;
}

.steam-icon {
    width: 20px;
    height: 20px;
    margin-right: 8px;
    fill: white;
}

.btn-steam {
    background: linear-gradient(135deg, #1b2838 0%, #2a475e 100%);
    color: white;
    border: 1px solid #3c5a78;
    box-shadow: 0 4px 12px rgba(27, 40, 56, 0.3);
}

.btn-steam .icon {
    width: 30px;
    height: 30px;
    margin-right: 8px;
    fill: white;
}

.btn-steam:hover {
    background: linear-gradient(135deg, #2a475e 0%, #3c5a78 100%);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(27, 40, 56, 0.4);
    border-color: #4a6b8a;
}

.hero-video {
    position: relative;
}

.video-player {
    background: var(--card-bg);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    border: 1px solid var(--border-color);
}

.video-thumbnail {
    position: relative;
    aspect-ratio: 16/9;
    overflow: hidden;
}

.video-preview {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.play-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80px;
    height: 80px;
    background: rgba(255, 0, 0, 0.9);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
}

.play-button:hover {
    background: rgba(255, 0, 0, 1);
    transform: translate(-50%, -50%) scale(1.1);
}

.play-icon {
    color: white;
    font-size: 24px;
    margin-left: 4px;
}

.video-info {
    padding: 15px;
}

.video-overlay {
    position: absolute;
    top: 20px;
    left: 20px;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
}

.video-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 4px;
}

.video-iframe {
    position: relative;
    aspect-ratio: 16/9;
    overflow: hidden;
}

.video-frame {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 12px 12px 0 0;
}

.close-video {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    z-index: 10;
}

.close-video:hover {
    background: rgba(0, 0, 0, 0.9);
    transform: scale(1.1);
}

.video-header {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    font-size: 0.9rem;
    color: var(--text-secondary);
}

.video-icon {
    margin-right: 8px;
}

.video-footer {
    border-top: 1px solid var(--border-color);
    padding-top: 12px;
}

.video-label {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text-heading);
}

/* What is Section */
.what-is-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    margin-bottom: 30px;
}

.what-is-content:nth-child(even) {
    direction: rtl;
}

.what-is-content:nth-child(even)>* {
    direction: ltr;
}

.what-is-text {
    overflow: hidden;
}

.what-is-text .section-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #FA9317;
    margin-bottom: 24px;
    text-align: left;
}

.what-is-description p {
    font-size: 1.125rem;
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 16px;
}

.what-is-description a {
    color: var(--secondary-color);
    text-decoration: none;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    transition: all 0.3s ease;
}

.what-is-description a:hover {
    color: #e67e22;
    border-bottom-color: #e67e22;
}

.what-is-image {
    position: relative;
}

.what-is-image img {
    width: 100%;
    height: auto;
    object-fit: cover;
}

.gameplay-screenshot {
    width: 80%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    border: 1px solid var(--border-color);
}


.feature-card {
    text-align: center;
    transition: all 0.3s ease;
}

.feature-card:hover .icon-large {
    transform: scale(1.1) rotate(5deg);
    filter: drop-shadow(0 0 10px rgba(250, 147, 23, 0.5));
}

.feature-card h3 {
    font-size: 1.25rem;
    margin-bottom: 12px;
    color: var(--text-heading);
}

.feature-card p {
    color: var(--text-secondary);
    line-height: 1.6;
}

.maps-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
    margin-bottom: 32px;
}

.map-card {
    padding: 0;
    text-align: center;
    background: linear-gradient(135deg, rgba(21, 21, 21, 0.6) 0%, rgba(21, 21, 21, 0.4) 100%);
    overflow: hidden;
}

.map-card:hover {
    background: linear-gradient(135deg, rgba(21, 21, 21, 0.8) 0%, rgba(21, 21, 21, 0.6) 100%);
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(250, 147, 23, 0.3);
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

.map-content {
    padding: 24px;
}

.map-content h3 {
    font-size: 1.5rem;
    background: linear-gradient(135deg, var(--text-heading) 0%, #FA9317 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 12px;
}

.map-content p {
    color: var(--text-secondary);
    line-height: 1.6;
}

.btn-primary {
    background: linear-gradient(135deg, var(--secondary-color) 0%, #e67e22 100%);
    color: white;
    border: 2px solid var(--secondary-color);
    padding: 16px 32px;
    font-size: 1.125rem;
    font-weight: 700;
    border-radius: 8px;
    box-shadow: 0 4px 16px rgba(240, 136, 62, 0.3);
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-block;
    text-align: center;
}

.btn-primary:hover {
    background: linear-gradient(135deg, #e67e22 0%, var(--secondary-color) 100%);
    border-color: #e67e22;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(240, 136, 62, 0.4);
    color: white;
}

.text-link {
    color: var(--primary-color);
    font-size: 1rem;
    font-weight: 600;
}

.feature-card .icon-large {
    font-size: 3rem;
    margin-bottom: 16px;
    display: block;
    text-align: center;
    transition: all 0.3s ease;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
}

.legacy-card {
    text-align: center;
}

.legacy-card h3 {
    font-size: 1.5rem;
    margin-bottom: 12px;
}

.legacy-card p {
    color: var(--text-secondary);
    line-height: 1.6;
}

.world-card {
    text-align: center;
}

.world-card h3 {
    font-size: 1.25rem;
    margin-bottom: 12px;
}

.world-card p {
    color: var(--text-secondary);
    line-height: 1.6;
}

.game-info-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
}

.game-left {
    display: flex;
    flex-direction: column;
}

.game-right {
    display: flex;
    flex-direction: column;
}

.languages-full {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
}

.languages-full .info-card {
    width: 100%;
}

.info-card,
.requirements-card {
    background: var(--card-bg);
    padding: 24px;
    border-radius: 12px;
    border: 1px solid var(--border-color);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
}

.info-card:hover,
.requirements-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 32px rgba(250, 147, 23, 0.2);
    border-color: #FA9317;
}

.info-header,
.req-header {
    margin-bottom: 20px;
    padding-bottom: 12px;
    border-bottom: 2px solid var(--border-color);
}

.info-header h3,
.req-header h3 {
    font-size: 1.25rem;
    color: var(--secondary-color);
    font-weight: 600;
    margin: 0;
}

.info-items {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.info-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    background: rgba(250, 147, 23, 0.05);
    border-radius: 8px;
    border-left: 3px solid #FA9317;
    transition: all 0.3s ease;
}

.info-item:hover {
    background: rgba(250, 147, 23, 0.1);
    transform: translateX(4px);
}

.item-label {
    font-size: 0.875rem;
    color: var(--text-secondary);
    font-weight: 500;
}

.item-value {
    font-size: 1rem;
    color: var(--text-heading);
    font-weight: 600;
    text-align: right;
}

.language-table {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid var(--border-color);
}

.language-table table {
    width: 100%;
    border-collapse: collapse;
}

.language-table th {
    padding: 12px 16px;
    font-weight: 600;
    color: var(--text-heading);
    font-size: 0.9rem;
    text-align: center;
    background: rgba(250, 147, 23, 0.1);
    border-bottom: 1px solid var(--border-color);
}

.language-table th.col-language {
    text-align: left;
}

.language-table td {
    padding: 12px 16px;
    color: var(--text-primary);
    font-size: 0.9rem;
    text-align: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    transition: background 0.3s ease;
}

.language-table td.col-language {
    text-align: left;
}

.language-table tr:hover td {
    background: rgba(250, 147, 23, 0.05);
}

.language-table tr:last-child td {
    border-bottom: none;
}

.col-interface,
.col-audio,
.col-subtitles {
    color: #FA9317;
    font-weight: 600;
}

.requirements-table {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid var(--border-color);
}

.req-table-header {
    display: grid;
    grid-template-columns: 1fr 2fr 2fr;
    background: rgba(240, 136, 62, 0.1);
    border-bottom: 1px solid var(--border-color);
}

.req-table-header span {
    padding: 12px 16px;
    font-weight: 600;
    color: var(--text-heading);
    font-size: 0.9rem;
    text-align: center;
}

.req-col-spec {
    text-align: left !important;
}

.req-table-body {
    display: flex;
    flex-direction: column;
}

.req-table-row {
    display: grid;
    grid-template-columns: 1fr 2fr 2fr;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    transition: background 0.3s ease;
}

.req-table-row:last-child {
    border-bottom: none;
}

.req-table-row:hover {
    background: rgba(240, 136, 62, 0.05);
}

.req-table-row span {
    padding: 12px 16px;
    color: var(--text-primary);
    font-size: 0.9rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}

.req-table-row .req-col-spec {
    text-align: left;
    justify-content: flex-start;
    font-weight: 600;
    color: var(--text-heading);
}

.guides-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
}

.guide-card {
    padding: 32px 24px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.guide-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 32px rgba(250, 147, 23, 0.2);
    border-color: #FA9317;
    background-color: rgba(21, 21, 21, 0.8);
}

.guide-header {
    margin-bottom: 16px;
}

.guide-badge {
    display: inline-block;
    padding: 4px 12px;
    background: linear-gradient(135deg, rgba(240, 136, 62, 0.2) 0%, rgba(250, 147, 23, 0.2) 100%);
    color: var(--secondary-color);
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 600;
    border: 1px solid rgba(240, 136, 62, 0.3);
    box-shadow: 0 2px 8px rgba(240, 136, 62, 0.2);
}

.guide-card h3 {
    font-size: 1.25rem;
    margin-bottom: 12px;
}

.guide-card p {
    color: var(--text-secondary);
    line-height: 1.6;
}

.guide-card a {
    color: var(--secondary-color);
    text-decoration: none;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    transition: all 0.3s ease;
}

.guide-card a:hover {
    color: #e67e22;
    border-bottom-color: #e67e22;
}

.faq-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}

.faq-item {
    padding: 24px;
}

.faq-item h3 {
    font-size: 1.125rem;
    margin-bottom: 12px;
    color: #FA9317;
    font-weight: 600;
}

.faq-item p {
    color: var(--text-secondary);
    line-height: 1.6;
}

.faq-item a {
    color: var(--secondary-color);
    text-decoration: none;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    transition: all 0.3s ease;
}

.faq-item a:hover {
    color: #e67e22;
    border-bottom-color: #e67e22;
}

.faq-item:hover {
    border-color: #FA9317;
    background-color: rgba(21, 21, 21, 0.8);
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(250, 147, 23, 0.2);
}

.reviews-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
}

.review-card {
    padding: 24px;
    transition: all 0.3s ease;
}

.review-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(250, 147, 23, 0.2);
    border-color: #FA9317;
}

.review-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 16px;
}

.review-content p {
    font-size: 14px;
    color: var(--text-secondary);
    line-height: 1.6;
}

.reviewer-info {
    display: flex;
    align-items: center;
    gap: 12px;
}

.reviewer-avatar {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, #FA9317 0%, var(--secondary-color) 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    border: 2px solid var(--border-color);
    overflow: hidden;
}

.reviewer-avatar-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.reviewer-details h4 {
    font-size: 1rem;
    color: var(--text-heading);
    margin: 0 0 4px 0;
    font-weight: 600;
}

.review-rating {
    display: flex;
    align-items: center;
    gap: 8px;
}

.stars {
    color: #ffd700;
    font-size: 0.9rem;
}

.guides-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
    margin-bottom: 30px;
}

.guide-card-link {
    text-decoration: none;
    display: block;
    overflow: hidden;
    padding: 0;
}

.guide-image {
    width: 100%;
    height: 200px;
    overflow: hidden;
}

.guide-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.guide-card-link:hover .guide-img {
    transform: scale(1.1);
}

.guide-content {
    padding: 24px;
}

.guide-content h3 {
    font-size: 1.5rem;
    background: linear-gradient(135deg, var(--text-heading) 0%, #FA9317 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 12px;
}

.guide-content p {
    color: var(--text-secondary);
    line-height: 1.6;
}

.hideout-card {
    text-align: center;
}

.hideout-card h3 {
    font-size: 1.25rem;
    margin-bottom: 12px;
}

.hideout-card p {
    color: var(--text-secondary);
    line-height: 1.6;
}

/* Stats */
.stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    margin-top: 48px;
}

.stat-item {
    text-align: center;
}

.stat-item h3 {
    font-size: 2.5rem;
    color: var(--secondary-color);
    margin-bottom: 8px;
    background: linear-gradient(135deg, var(--secondary-color) 0%, var(--accent-blue) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.stat-item p {
    color: var(--text-secondary);
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

/* Mobile Responsive Styles (≤768px) */
@media (max-width: 768px) {

    /* Typography - Mobile Font Sizes */
    .hero-title {
        font-size: 24px;
        margin-bottom: 10px;
        letter-spacing: 4px;
    }

    .hero-title span {
        padding: 0;
    }

    .section-title {
        font-size: 20px;
        margin-bottom: 10px;
    }

    .hero-subtitle {
        font-size: 12px;
        margin-bottom: 10px;
    }

    .what-is-description p {
        font-size: 12px;
        margin-bottom: 10px;
    }

    .section-subtitle {
        font-size: 12px;
        margin-bottom: 10px;
    }

    /* Section Spacing */
    section {
        padding: 20px 0;
    }

    .hero {
        padding: 20px 0;
    }


    /* Hero Section Layout */
    .hero-content {
        grid-template-columns: 1fr;
        gap: 20px;
        text-align: center;
    }

    /* What is Section Layout */
    .what-is-content {
        grid-template-columns: 1fr;
        gap: 10px;
        text-align: left;
        margin-bottom: 10px;
    }

    .what-is-text .section-title {
        font-size: 20px;
        margin-bottom: 10px;
    }

    /* Maps Section Layout */
    .maps-grid {
        grid-template-columns: 1fr;
        gap: 10px;
        margin-bottom: 20px;
    }

    .map-content {
        padding: 10px;
    }

    .map-content h3 {
        font-size: 16px;
        margin-bottom: 5px;
    }

    .map-content p {
        font-size: 12px;
    }

    /* Guides Section Layout */
    .guides-grid {
        grid-template-columns: 1fr;
        gap: 10px;
        margin-bottom: 20px;
    }

    .guide-content {
        padding: 10px;
    }

    .guide-content h3 {
        font-size: 16px;
        margin-bottom: 10px;
    }

    .guide-content p {
        font-size: 12px;
    }

    .guide-card {
        padding: 20px;
    }

    .guide-card h3 {
        font-size: 16px;
        margin-bottom: 10px;
    }

    .guide-card p {
        font-size: 12px;
    }

    /* Game Info Section Layout */
    .game-info-content {
        grid-template-columns: 1fr;
        gap: 20px;
    }

    .info-card,
    .requirements-card {
        padding: 10px;
    }

    .info-header h3 {
        font-size: 16px;
    }

    .req-header h3 {
        font-size: 16px;
    }

    .info-item {
        padding: 5px 10px;
        gap: 5px;
    }

    .item-label {
        font-size: 12px;
    }

    .item-value {
        font-size: 12px;
    }

    /* Reviews Section Layout */
    .reviews-grid {
        grid-template-columns: 1fr;
        gap: 10px;
    }

    .review-card {
        padding: 16px;
    }

    .reviewer-details h4 {
        font-size: 14px;
    }

    .review-text {
        font-size: 12px;
    }

    .review-content p {
        font-size: 12px;
    }

    /* FAQ Section Layout */
    .faq-list {
        grid-template-columns: 1fr;
        gap: 10px;
    }

    .faq-item {
        padding: 16px;
    }

    .faq-item h3 {
        font-size: 16px;
        margin-bottom: 10px;
    }

    .faq-item p {
        font-size: 12px;
    }

    /* Button Adjustments */
    .btn-primary {
        padding: 10px 16px;
        font-size: 12px;
    }

    .btn-steam {
        padding: 10px 16px;
        font-size: 12px;
    }

    .btn-steam .icon {
        width: 20px;
        height: 20px;
    }

    /* Video Player Adjustments */
    .video-info {
        padding: 10px;
    }

    .video-header {
        font-size: 12px;
        margin-bottom: 8px;
    }

    .video-label {
        font-size: 12px;
    }

    .video-footer {
        padding-top: 10px;
    }

    .play-button {
        width: 50px;
        height: 50px;
    }

    .play-icon {
        font-size: 16px;
    }

    /* Stats Section */
    .stats {
        grid-template-columns: 1fr;
        gap: 20px;
        margin-top: 20px;
    }

    .stat-item h3 {
        font-size: 20px;
        margin-bottom: 8px;
    }

    .stat-item p {
        font-size: 12px;
    }

    /* Language Table */
    .language-table th,
    .language-table td {
        padding: 8px 12px;
        font-size: 12px;
    }

    .language-table {
        overflow-x: auto;
    }

    /* Feature Cards */
    .feature-card h3 {
        font-size: 16px;
        margin-bottom: 10px;
    }

    .feature-card p {
        font-size: 12px;
    }

    /* Legacy Cards */
    .legacy-card h3 {
        font-size: 16px;
        margin-bottom: 10px;
    }

    .legacy-card p {
        font-size: 12px;
    }

    /* World Cards */
    .world-card h3 {
        font-size: 16px;
        margin-bottom: 10px;
    }

    .world-card p {
        font-size: 12px;
    }

    /* Hideout Cards */
    .hideout-card h3 {
        font-size: 16px;
        margin-bottom: 10px;
    }

    .hideout-card p {
        font-size: 12px;
    }
}
</style>
