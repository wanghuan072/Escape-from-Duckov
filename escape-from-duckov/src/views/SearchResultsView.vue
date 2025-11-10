<template>
    <div class="search-view">
        <section class="page-header">
            <div class="container">
                <div class="page-header-content">
                    <div class="page-header-text">
                        <h1 class="page-title">{{ t('SearchPage.title') }}</h1>
                        <p class="page-subtitle">{{ t('SearchPage.subtitle') }}</p>
                    </div>
                    <form class="header-search-form" @submit.prevent="handleSubmit">
                        <label class="visually-hidden" for="search-input">{{ t('SearchPage.input.label') }}</label>
                        <input
                            id="search-input"
                            v-model="searchInput"
                            class="search-input"
                            type="search"
                            :placeholder="t('SearchPage.input.placeholder')"
                            autocomplete="off"
                        >
                        <button class="search-btn" type="submit">
                            <span class="btn-icon">🔍</span>
                            {{ t('SearchPage.input.button') }}
                        </button>
                    </form>
                </div>
                <div class="search-meta">
                    <span v-if="hasQuery" class="search-query">
                        {{ t('SearchPage.resultSummary', { count: totalResults, query: searchInput }) }}
                    </span>
                    <span v-else class="search-query">{{ t('SearchPage.resultHint') }}</span>
                </div>
            </div>
        </section>

        <section class="search-content">
            <div class="container">
                <div v-if="isLoading" class="loading-state">
                    <div class="spinner"></div>
                    <p>{{ t('SearchPage.loading') }}</p>
                </div>

                <div v-else-if="!hasResults && hasQuery" class="empty-state">
                    <h2 class="empty-title">{{ t('SearchPage.empty.title', { query: searchInput }) }}</h2>
                    <p class="empty-text">{{ t('SearchPage.empty.description') }}</p>
                </div>

                <div v-else class="results-grid">
                    <section v-if="guideResults.length" class="results-section">
                        <div class="section-header">
                            <h2>{{ t('SearchPage.sections.guides') }}</h2>
                            <span class="badge">{{ guideResults.length }}</span>
                        </div>
                        <div class="guides-grid">
                            <a v-for="guide in guideResults" :key="guide.id"
                                :href="guide.link"
                                class="guide-card">
                                <div class="guide-card-header">
                                    <span class="category-tag">{{ guide.categoryLabel }}</span>
                                </div>
                                <h3 class="guide-title">{{ guide.title }}</h3>
                                <p class="guide-description">{{ guide.description }}</p>
                                <div class="guide-tags" v-if="guide.tags?.length">
                                    <span v-for="tag in guide.tags" :key="tag" class="tag">{{ tag }}</span>
                                </div>
                                <div class="guide-footer">
                                    <span class="view-link">{{ t('SearchPage.viewDetail') }}</span>
                                </div>
                            </a>
                        </div>
                    </section>

                    <section v-if="modResults.length" class="results-section">
                        <div class="section-header">
                            <h2>{{ t('SearchPage.sections.mods') }}</h2>
                            <span class="badge">{{ modResults.length }}</span>
                        </div>
                        <div class="mods-grid">
                            <a v-for="mod in modResults" :key="mod.id" :href="mod.link" class="mod-card">
                                <div class="mod-card-media">
                                    <img v-if="mod.imageUrl" :src="mod.imageUrl" :alt="mod.imageAlt || mod.title"
                                        class="mod-card-image">
                                    <div v-else class="mod-card-image placeholder"></div>
                                </div>
                                <div class="mod-card-content">
                                    <h3 class="mod-title">{{ mod.title }}</h3>
                                    <p class="mod-description">{{ mod.description }}</p>
                                    <div class="mod-footer">
                                        <div class="mod-tags" v-if="mod.tags?.length">
                                            <span v-for="tag in mod.tags" :key="tag" class="tag">{{ tag }}</span>
                                        </div>
                                        <span class="view-link">{{ t('SearchPage.viewDetail') }}</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </section>

                    <section v-if="mapResults.length" class="results-section">
                        <div class="section-header">
                            <h2>{{ t('SearchPage.sections.maps') }}</h2>
                            <span class="badge">{{ mapResults.length }}</span>
                        </div>
                        <div class="maps-grid">
                            <a v-for="map in mapResults" :key="map.id" :href="map.link" class="map-card">
                                <div class="map-card-header">
                                    <div class="map-image">
                                        <img :src="map.imageUrl" :alt="map.imageAlt || map.title" class="map-screenshot">
                                    </div>
                                </div>
                                <div class="map-card-content">
                                    <h3 class="map-title">{{ map.title }}</h3>
                                    <p class="map-description">{{ map.description }}</p>
                                    <div class="map-footer">
                                        <span class="view-link">{{ t('SearchPage.viewDetail') }}</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </section>

                    <section v-if="wikiResults.length" class="results-section">
                        <div class="section-header">
                            <h2>{{ t('SearchPage.sections.wiki') }}</h2>
                            <span class="badge">{{ wikiResults.length }}</span>
                        </div>
                        <div class="wiki-grid">
                            <a v-for="item in wikiResults" :key="item.id" :href="item.link" class="article-card">
                                <div class="card-image-container">
                                    <img :src="item.imageUrl" :alt="item.imageAlt || item.title" class="card-image">
                                </div>
                                <h3 class="card-title">{{ item.title }}</h3>
                                <p class="card-desc">{{ item.description }}</p>
                                <div class="card-meta" v-if="item.rewards?.length">
                                    <span v-for="reward in item.rewards" :key="reward" class="reward-tag">{{ reward }}</span>
                                </div>
                            </a>
                        </div>
                    </section>

                    <section v-if="itemsResults.length" class="results-section">
                        <div class="section-header">
                            <h2>{{ t('SearchPage.sections.items') }}</h2>
                            <span class="badge">{{ itemsResults.length }}</span>
                        </div>
                        <div class="items-table-container">
                            <table class="items-table">
                                <thead>
                                    <tr>
                                        <th>{{ t('SearchPage.itemsTable.image') }}</th>
                                        <th>{{ t('SearchPage.itemsTable.name') }}</th>
                                        <th>{{ t('SearchPage.itemsTable.type') }}</th>
                                        <th>{{ t('SearchPage.itemsTable.category') }}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in itemsResults" :key="item.id" @click="navigateTo(item.link)"
                                        class="item-row">
                                        <td>
                                            <div class="avatar">
                                                <img :src="item.imageUrl" :alt="item.imageAlt || item.title">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="item-name">{{ item.title }}</div>
                                            <div class="item-desc">{{ item.description || '-' }}</div>
                                        </td>
                                        <td><span class="type-tag" v-if="item.type">{{ item.type }}</span></td>
                                        <td><span class="category-tag secondary">{{ item.categoryLabel }}</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useGuideData } from '../composables/useGuideData'
import { useModsData } from '../composables/useModsData'
import { useMapsData } from '../composables/useMapsData'
import { useItemsData } from '../composables/useItemsData'
import { useWikiData } from '../composables/useWikiData'
import { getLocalizedPath } from '../utils/routeUtils'

const route = useRoute()
const router = useRouter()
const { locale, t } = useI18n()

const searchInput = ref(route.query.q ? String(route.query.q) : '')
const isLoading = ref(false)

const { guides, loadData: loadGuides } = useGuideData()
const { mods, loadData: loadMods } = useModsData()
const { maps, loadData: loadMaps } = useMapsData()
const wikiQuests = useWikiData('quests')
const { data: wikiData, loadData: loadWiki } = wikiQuests
const weaponsData = useItemsData('weapons')
const equipmentData = useItemsData('equipment')
const ammunitionData = useItemsData('ammunition')
const keysData = useItemsData('key')
const fishData = useItemsData('fish')

const localizedPath = (path) => getLocalizedPath(path, locale.value || 'en')

const loadItemsByCategory = async (targetLocale) => {
    await Promise.all([
        weaponsData.loadData('weapons', targetLocale),
        equipmentData.loadData('equipment', targetLocale),
        ammunitionData.loadData('ammunition', targetLocale),
        keysData.loadData('key', targetLocale),
        fishData.loadData('fish', targetLocale)
    ])
}

const loadAllData = async (targetLocale = locale.value || 'en') => {
    isLoading.value = true
    try {
        await Promise.all([
            loadGuides(targetLocale),
            loadMods(targetLocale),
            loadMaps(targetLocale),
            loadWiki(targetLocale),
            loadItemsByCategory(targetLocale)
        ])
    } finally {
        isLoading.value = false
    }
}

const normalizedQuery = computed(() => searchInput.value.trim().toLowerCase())
const hasQuery = computed(() => normalizedQuery.value.length > 0)

const includesQuery = (value) => {
    if (!hasQuery.value) return false
    if (!value) return false
    return String(value).toLowerCase().includes(normalizedQuery.value)
}

const matchesItem = (item, fields = []) => {
    if (!hasQuery.value) return false
    return fields.some((field) => {
        const value = typeof field === 'function' ? field(item) : item[field]
        if (Array.isArray(value)) {
            return value.some((entry) => includesQuery(entry))
        }
        return includesQuery(value)
    })
}

const guideResults = computed(() => {
    if (!hasQuery.value) return []
    return (guides.value || [])
        .filter((guide) => matchesItem(guide, ['title', 'description', 'tags', 'category']))
        .map((guide) => ({
            id: `guide-${guide.id}`,
            title: guide.title,
            description: guide.description,
            tags: guide.tags,
            imageUrl: guide.imageUrl,
            categoryLabel: resolveGuideCategory(guide.category),
            link: localizedPath(`/guides${guide.addressBar}`)
        }))
})

const modResults = computed(() => {
    if (!hasQuery.value) return []
    return (mods.value || [])
        .filter((mod) => matchesItem(mod, ['title', 'description', 'tags']))
        .map((mod) => ({
            id: `mod-${mod.id}`,
            title: mod.title,
            description: mod.description,
            tags: mod.tags,
            imageUrl: mod.imageUrl,
            imageAlt: mod.imageAlt,
            link: localizedPath(`/mods${normalizeAddress(mod.addressBar)}`)
        }))
})

const mapResults = computed(() => {
    if (!hasQuery.value) return []
    return (maps.value || [])
        .filter((map) => matchesItem(map, ['title', 'description', 'tags']))
        .map((map) => ({
            id: `map-${map.id}`,
            title: map.title,
            description: map.description,
            imageUrl: map.imageUrl,
            imageAlt: map.imageAlt,
            link: localizedPath(`/maps${normalizeAddress(map.addressBar)}`)
        }))
})

const wikiResults = computed(() => {
    if (!hasQuery.value) return []
    return (wikiData.value || [])
        .filter((entry) => matchesItem(entry, ['title', 'description', 'rewards', rewardValues]))
        .map((entry) => ({
            id: `wiki-${entry.id}`,
            title: entry.title,
            description: entry.description,
            rewards: entry.rewards,
            imageUrl: entry.imageUrl,
            imageAlt: entry.imageAlt,
            link: localizedPath(`/wiki/quests${normalizeAddress(entry.addressBar)}`)
        }))
})

const itemCategories = [
    { data: weaponsData, type: 'weapons' },
    { data: equipmentData, type: 'equipment' },
    { data: ammunitionData, type: 'ammunition' },
    { data: keysData, type: 'key' },
    { data: fishData, type: 'fish' }
]

const itemsResults = computed(() => {
    if (!hasQuery.value) return []
    const results = []
    itemCategories.forEach(({ data, type }) => {
        const list = data.data?.value || []
        list.forEach((item) => {
            if (!item || item.showDetail === false) return
            const slug = normalizeAddress(item.addressBar)
            if (!slug) return
            if (!matchesItem(item, ['title', 'description', 'type'])) return
            results.push({
                id: `item-${type}-${item.id || slug}`,
                title: item.title,
                description: item.description,
                type: item.type,
                imageUrl: item.imageUrl,
                imageAlt: item.imageAlt,
                category: type,
                categoryLabel: resolveCategoryLabel(type),
                link: localizedPath(`/items/${type}${slug}`)
            })
        })
    })
    return results
})

const totalResults = computed(() =>
    guideResults.value.length +
    modResults.value.length +
    mapResults.value.length +
    wikiResults.value.length +
    itemsResults.value.length
)

const hasResults = computed(() => totalResults.value > 0)

function normalizeAddress(address) {
    if (!address) return ''
    const trimmed = String(address).trim()
    if (!trimmed.length) return ''
    return trimmed.startsWith('/') ? trimmed : `/${trimmed}`
}

function rewardValues(entry) {
    if (!entry?.rightContent) return []
    return entry.rightContent.map((content) => `${content.label}: ${content.value}`)
}

function resolveCategoryLabel(type) {
    switch (type) {
        case 'weapons':
            return t('ItemsPage.weapons.title')
        case 'equipment':
            return t('ItemsPage.equipment.title')
        case 'ammunition':
            return t('ItemsPage.ammunition.title')
        case 'key':
            return t('ItemsPage.key.title')
        case 'fish':
            return t('ItemsPage.fish.title')
        default:
            return t('SearchPage.sections.items')
    }
}

function resolveGuideCategory(category) {
    switch (category) {
        case 'getting-started':
            return t('GuidesPage.category1.tag')
        case 'walkthroughs':
            return t('GuidesPage.category2.tag')
        case 'advanced':
            return t('GuidesPage.category3.tag')
        default:
            return t('SearchPage.sections.guides')
    }
}

const handleSubmit = () => {
    const query = searchInput.value.trim()
    if (!query) return
    router.push({
        path: localizedPath('/search'),
        query: { q: query }
    })
}

const navigateTo = (link) => {
    if (!link) return
    window.location.href = link
}

watch(
    () => route.query.q,
    (newQuery) => {
        searchInput.value = newQuery ? String(newQuery) : ''
    }
)

watch(locale, (newLocale) => {
    const target = newLocale || 'en'
    loadAllData(target)
})

onMounted(() => {
    loadAllData(locale.value || 'en')
})
</script>

<style scoped>
.search-view {
    min-height: 100vh;
}

.page-header {
    padding: 60px 0 30px;
}

.page-header-content {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.page-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--text-heading);
    margin: 0;
}

.page-subtitle {
    font-size: 1rem;
    color: var(--text-secondary);
    max-width: 720px;
}

.header-search-form {
    display: flex;
    gap: 12px;
    align-items: center;
    background: rgba(21, 21, 21, 0.7);
    border: 1px solid rgba(250, 147, 23, 0.2);
    border-radius: 999px;
    padding: 8px 12px 8px 20px;
    backdrop-filter: blur(12px);
}

.search-input {
    flex: 1;
    border: none;
    background: transparent;
    color: var(--text-primary);
    font-size: 1rem;
    outline: none;
}

.search-btn {
    background: #FA9317;
    border: none;
    color: #000;
    font-weight: 600;
    padding: 10px 18px;
    border-radius: 999px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.search-btn:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 16px rgba(250, 147, 23, 0.25);
}

.btn-icon {
    font-size: 1rem;
}

.visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}

.search-meta {
    margin-top: 20px;
    color: var(--text-secondary);
    font-size: 0.95rem;
}

.search-content {
    padding: 20px 0 80px;
}

.loading-state,
.empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    padding: 80px 0;
    color: var(--text-secondary);
}

.spinner {
    width: 40px;
    height: 40px;
    border: 4px solid rgba(250, 147, 23, 0.2);
    border-top-color: #FA9317;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

.empty-title {
    font-size: 1.5rem;
    color: var(--text-heading);
    text-align: center;
}

.empty-text {
    max-width: 520px;
    text-align: center;
}

.results-grid {
    display: flex;
    flex-direction: column;
    gap: 48px;
}

.results-section {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.section-header {
    display: flex;
    align-items: center;
    gap: 12px;
}

.section-header h2 {
    margin: 0;
    font-size: 1.5rem;
    color: var(--text-heading);
}

.badge {
    background: rgba(250, 147, 23, 0.15);
    color: #FA9317;
    padding: 4px 12px;
    border-radius: 999px;
    font-weight: 600;
    font-size: 0.85rem;
}

.guides-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.guide-card {
    background: rgba(21, 21, 21, 0.82);
    border: 1px solid rgba(250, 147, 23, 0.18);
    border-radius: 16px;
    padding: 24px;
    backdrop-filter: blur(12px);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.guide-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 30px rgba(250, 147, 23, 0.2);
}

.guide-card-header {
    display: flex;
}

.category-tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 4px 12px;
    border-radius: 999px;
    background: rgba(250, 147, 23, 0.15);
    color: #FA9317;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
}

.category-tag.secondary {
    background: rgba(255, 255, 255, 0.08);
    color: var(--text-secondary);
    text-transform: none;
}

.guide-title {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--text-heading);
}

.guide-description {
    color: var(--text-secondary);
    font-size: 0.95rem;
    line-height: 1.5;
}

.guide-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.tag {
    padding: 4px 10px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.06);
    color: var(--text-secondary);
    font-size: 0.75rem;
}

.guide-footer {
    margin-top: auto;
    display: flex;
    justify-content: flex-end;
    color: #FA9317;
    font-weight: 600;
    font-size: 0.85rem;
}

.mods-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.mod-card {
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    border: 1px solid rgba(250, 147, 23, 0.18);
    background: rgba(24, 24, 24, 0.88);
    overflow: hidden;
    text-decoration: none;
    color: inherit;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.mod-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 18px 40px rgba(250, 147, 23, 0.22);
}

.mod-card-media {
    position: relative;
    aspect-ratio: 16 / 9;
    background: linear-gradient(135deg, rgba(250, 147, 23, 0.35), rgba(24, 24, 24, 0.6));
}

.mod-card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.mod-card-image.placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(255, 255, 255, 0.4);
    font-size: 1.2rem;
}

.mod-card-content {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.mod-title {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--text-heading);
}

.mod-description {
    color: var(--text-secondary);
    line-height: 1.5;
}

.mod-footer {
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
}

.maps-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.map-card {
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(250, 147, 23, 0.2);
    border-radius: 12px;
    overflow: hidden;
    background: rgba(30, 30, 30, 0.8);
    text-decoration: none;
    color: inherit;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.map-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 32px rgba(250, 147, 23, 0.2);
}

.map-image {
    aspect-ratio: 16 / 9;
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
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    flex: 1;
}

.map-title {
    margin: 0;
    color: var(--text-heading);
    font-size: 1.2rem;
    font-weight: 700;
}

.map-description {
    color: var(--text-secondary);
    line-height: 1.6;
    flex: 1;
}

.map-footer {
    color: #FA9317;
    font-weight: 600;
    font-size: 0.9rem;
}

.wiki-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}

.article-card {
    background: rgba(21, 21, 21, 0.6);
    border: 1px solid rgba(250, 147, 23, 0.2);
    border-radius: 10px;
    overflow: hidden;
    text-decoration: none;
    color: inherit;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-bottom: 16px;
}

.article-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 32px rgba(250, 147, 23, 0.3);
}

.card-image-container {
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;
}

.card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.article-card:hover .card-image {
    transform: scale(1.05);
}

.card-title {
    margin: 0 16px;
    font-size: 1.1rem;
    font-weight: 700;
    color: #FA9317;
}

.card-desc {
    margin: 0 16px;
    color: var(--text-secondary);
    font-size: 0.95rem;
}

.card-meta {
    margin: 0 16px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.reward-tag {
    padding: 4px 10px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.08);
    font-size: 0.75rem;
    color: var(--text-secondary);
}

.items-table-container {
    border-radius: 12px;
    border: 1px solid var(--border-color);
    overflow: hidden;
    background: rgba(21, 21, 21, 0.75);
}

.items-table {
    width: 100%;
    border-collapse: collapse;
}

.items-table thead {
    background: rgba(255, 255, 255, 0.04);
}

.items-table th,
.items-table td {
    padding: 16px;
    text-align: left;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    color: var(--text-secondary);
}

.items-table th {
    font-weight: 600;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.item-row {
    cursor: pointer;
    transition: background 0.2s ease;
}

.item-row:hover {
    background: rgba(250, 147, 23, 0.06);
}

.avatar {
    width: 64px;
    height: 64px;
    border-radius: 8px;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.05);
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.item-name {
    font-weight: 700;
    color: var(--text-heading);
    margin-bottom: 4px;
}

.item-desc {
    font-size: 0.85rem;
    color: var(--text-secondary);
}

.type-tag {
    display: inline-flex;
    align-items: center;
    padding: 4px 10px;
    background: rgba(250, 147, 23, 0.15);
    color: #FA9317;
    border-radius: 999px;
    font-size: 0.75rem;
    font-weight: 600;
}

.view-link {
    color: #FA9317;
    font-weight: 600;
}

@media (max-width: 1024px) {
    .page-header {
        padding: 40px 0 20px;
    }

    .page-title {
        font-size: 2rem;
    }

    .header-search-form {
        flex-direction: column;
        align-items: stretch;
        border-radius: 16px;
        padding: 16px;
    }

    .search-btn {
        justify-content: center;
    }

    .items-table-container {
        overflow-x: auto;
    }
}

@media (max-width: 768px) {
    .guides-grid,
    .mods-grid,
    .maps-grid,
    .wiki-grid {
        grid-template-columns: 1fr;
    }

    .page-title {
        font-size: 1.75rem;
    }

    .page-subtitle {
        font-size: 0.95rem;
    }
}
</style>

