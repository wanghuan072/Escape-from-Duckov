<template>
    <div class="items-category-view">
        <div class="container">
            <div class="page-header">
                <h1 class="page-title">{{ t('ItemsEquipmentPage.title') }}</h1>
                <p class="page-subtitle">{{ t('ItemsEquipmentPage.subtitle') }}</p>
            </div>

            <h2 class="group-title">{{ t('ItemsEquipmentPage.headgearTitle') }}</h2>
            <div class="table-container">
                <table class="items-table">
                    <thead>
                        <tr>
                            <th class="image-col">{{ t('ItemsEquipmentPage.table.image') }}</th>
                            <th class="name-col">{{ t('ItemsEquipmentPage.table.name') }}</th>
                            <th class="desc-col">{{ t('ItemsEquipmentPage.table.desc') }}</th>
                            <th class="type-col">{{ t('ItemsEquipmentPage.table.type') }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in headgearItems" :key="item.id" @click="onRowClick(item)"
                            :class="['item-row', { 'disabled': item.showDetail === false }]">
                            <td class="image-cell">
                                <div class="avatar"><img :src="item.imageUrl" :alt="item.imageAlt" class="image">
                                </div>
                            </td>
                            <td class="name-cell">
                                <h3 class="name-main">{{ item.title }}</h3>
                            </td>
                            <td class="desc-cell">
                                <span class="desc-text">{{ item.description || '-' }}</span>
                            </td>
                            <td class="type-cell">
                                <span class="type-tag" v-if="item.type">{{ item.type }}</span>
                                <span v-else>-</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 class="group-title">{{ t('ItemsEquipmentPage.otherTitle') }}</h2>
            <div class="table-container">
                <table class="items-table">
                    <thead>
                        <tr>
                            <th class="image-col">{{ t('ItemsEquipmentPage.table.image') }}</th>
                            <th class="name-col">{{ t('ItemsEquipmentPage.table.name') }}</th>
                            <th class="desc-col">{{ t('ItemsEquipmentPage.table.desc') }}</th>
                            <th class="type-col">{{ t('ItemsEquipmentPage.table.type') }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in otherEquipmentItems" :key="item.id" @click="onRowClick(item)"
                            :class="['item-row', { 'disabled': item.showDetail === false }]">
                            <td class="image-cell">
                                <div class="avatar"><img :src="item.imageUrl" :alt="item.imageAlt" class="image">
                                </div>
                            </td>
                            <td class="name-cell">
                                <h3 class="name-main">{{ item.title }}</h3>
                            </td>
                            <td class="desc-cell">
                                <span class="desc-text">{{ item.description || '-' }}</span>
                            </td>
                            <td class="type-cell">
                                <span class="type-tag" v-if="item.type">{{ item.type }}</span>
                                <span v-else>-</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 class="group-title">{{ t('ItemsEquipmentPage.bodyTitle') }}</h2>
            <div class="table-container">
                <table class="items-table">
                    <thead>
                        <tr>
                            <th class="image-col">{{ t('ItemsEquipmentPage.table.image') }}</th>
                            <th class="name-col">{{ t('ItemsEquipmentPage.table.name') }}</th>
                            <th class="desc-col">{{ t('ItemsEquipmentPage.table.desc') }}</th>
                            <th class="type-col">{{ t('ItemsEquipmentPage.table.type') }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in bodyItems" :key="item.id" @click="onRowClick(item)"
                            :class="['item-row', { 'disabled': item.showDetail === false }]">
                            <td class="image-cell">
                                <div class="avatar"><img :src="item.imageUrl" :alt="item.imageAlt" class="image">
                                </div>
                            </td>
                            <td class="name-cell">
                                <h3 class="name-main">{{ item.title }}</h3>
                            </td>
                            <td class="desc-cell">
                                <span class="desc-text">{{ item.description || '-' }}</span>
                            </td>
                            <td class="type-cell">
                                <span class="type-tag" v-if="item.type">{{ item.type }}</span>
                                <span v-else>-</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!--  -->
            <h2 class="group-title">{{ t('ItemsEquipmentPage.backpackTitle') }}</h2>
            <div class="table-container">
                <table class="items-table">
                    <thead>
                        <tr>
                            <th class="image-col">{{ t('ItemsEquipmentPage.table.image') }}</th>
                            <th class="name-col">{{ t('ItemsEquipmentPage.table.name') }}</th>
                            <th class="desc-col">{{ t('ItemsEquipmentPage.table.desc') }}</th>
                            <th class="type-col">{{ t('ItemsEquipmentPage.table.type') }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in backpackItems" :key="item.id" @click="onRowClick(item)"
                            :class="['item-row', { 'disabled': item.showDetail === false }]">
                            <td class="image-cell">
                                <div class="avatar"><img :src="item.imageUrl" :alt="item.imageAlt" class="image">
                                </div>
                            </td>
                            <td class="name-cell">
                                <h3 class="name-main">{{ item.title }}</h3>
                            </td>
                            <td class="desc-cell">
                                <span class="desc-text">{{ item.description || '-' }}</span>
                            </td>
                            <td class="type-cell">
                                <span class="type-tag" v-if="item.type">{{ item.type }}</span>
                                <span v-else>-</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!--  -->
            <h2 class="group-title">{{ t('ItemsEquipmentPage.earphoneTitle') }}</h2>
            <div class="table-container">
                <table class="items-table">
                    <thead>
                        <tr>
                            <th class="image-col">{{ t('ItemsEquipmentPage.table.image') }}</th>
                            <th class="name-col">{{ t('ItemsEquipmentPage.table.name') }}</th>
                            <th class="desc-col">{{ t('ItemsEquipmentPage.table.desc') }}</th>
                            <th class="type-col">{{ t('ItemsEquipmentPage.table.type') }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in earphoneItems" :key="item.id" @click="onRowClick(item)"
                            :class="['item-row', { 'disabled': item.showDetail === false }]">
                            <td class="image-cell">
                                <div class="avatar"><img :src="item.imageUrl" :alt="item.imageAlt" class="image">
                                </div>
                            </td>
                            <td class="name-cell">
                                <h3 class="name-main">{{ item.title }}</h3>
                            </td>
                            <td class="desc-cell">
                                <span class="desc-text">{{ item.description || '-' }}</span>
                            </td>
                            <td class="type-cell">
                                <span class="type-tag" v-if="item.type">{{ item.type }}</span>
                                <span v-else>-</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useItemsData } from '../../composables/useItemsData.js'
import { getLocalizedPath } from '../../utils/routeUtils'

const route = useRoute()
const { t, locale } = useI18n()
const { data: itemsData, loadData } = useItemsData('equipment')

// 显式分组：Headgear、Body、Other Equipment
const norm = (t) => String(t || '').toLowerCase()
const isHeadgear = (t) => norm(t).includes('head') || norm(t).includes('helmet')
const isBody = (t) => norm(t).includes('body') || norm(t).includes('armor')
const isBackpack = (t) => norm(t).includes('backpack')
const isEarphone = (t) => norm(t).includes('earphone')

const headgearItems = computed(() => (itemsData?.value || []).filter(i => isHeadgear(i.type)))
const bodyItems = computed(() => (itemsData?.value || []).filter(i => isBody(i.type)))
const backpackItems = computed(() => (itemsData?.value || []).filter(i => isBackpack(i.type)))
const earphoneItems = computed(() => (itemsData?.value || []).filter(i => isEarphone(i.type)))
const otherEquipmentItems = computed(() => (itemsData?.value || []).filter(i => !isHeadgear(i.type) && !isBody(i.type) && !isBackpack(i.type) && !isEarphone(i.type)))

onMounted(() => {
    loadData('equipment')
})

// 监听语言变化，重新加载数据
watch(locale, () => {
    loadData('equipment')
})

// 从路径检测语言
const detectLanguageFromPath = (path) => {
    const supportedLanguages = ['en', 'de', 'fr', 'es', 'ja', 'ko', 'ru', 'pt', 'zh']
    for (const lang of supportedLanguages) {
        if (lang === 'en') continue
        if (path.startsWith(`/${lang}/`) || path === `/${lang}`) {
            return lang
        }
    }
    return 'en'
}

const onRowClick = (item) => {
    if (item && item.showDetail === false) return
    const id = (item.addressBar || '').replace('/', '')
    if (!id) return
    // 优先从当前路由路径检测语言，确保与 URL 一致
    const pathLang = detectLanguageFromPath(route.path)
    const targetLang = pathLang !== 'en' ? pathLang : (locale.value || 'en')
    const path = getLocalizedPath(`/items/equipment/${id}`, targetLang)
    window.location.href = path
}
</script>

<style scoped>
.group-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-heading);
    margin: 24px 0 12px;
    line-height: 1.2;
}

.page-title {
    font-size: 2.0rem;
    font-weight: 700;
    color: var(--text-heading);
    margin-bottom: 12px;
}

.page-subtitle {
    font-size: 1rem;
    color: var(--text-primary);
}

.table-container {
    overflow-x: auto;
    border-radius: 8px;
    background-color: var(--bg-card);
    border: 1px solid var(--border-color);
}

.items-table {
    width: 100%;
    border-collapse: collapse;
}

.items-table th {
    background-color: var(--bg-secondary);
    color: var(--text-heading);
    font-weight: 600;
    padding: 16px;
    text-align: left;
    border-bottom: 2px solid var(--border-color);
    font-size: 0.875rem;
}

.image-col {
    width: 120px;
}

.name-col {
    width: 220px;
}

.desc-col {
    min-width: 360px;
}

.type-col {
    width: 160px;
}

.image-cell {
    text-align: center;
    padding: 12px;
}

.avatar {
    display: flex;
    justify-content: center;
    align-items: center;
}

.image {
    width: 64px;
    height: 64px;
    border-radius: 8px;
    object-fit: cover;
    border: 1px solid var(--border-color);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
}

.name-main {
    font-weight: 800;
    color: var(--text-heading);
    letter-spacing: .2px;
    font-size: 16px;
}

.desc-cell {
    padding: 12px;
    color: var(--text-secondary);
}

.desc-text {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-clamp: 3;
}

.type-cell {
    padding: 12px;
}

.type-tag {
    display: inline-block;
    padding: 4px 10px;
    font-size: 0.75rem;
    border-radius: 999px;
    background: rgba(77, 166, 255, 0.12);
    color: var(--text-primary);
    border: 1px solid rgba(77, 166, 255, 0.25);
}

.item-row {
    cursor: pointer;
    transition: background-color 0.2s ease, transform 0.2s ease;
}

.item-row:hover {
    background-color: var(--bg-card-hover);
}

.item-row:hover .name-main {
    color: #FA9317;
}

.item-row td {
    vertical-align: middle;
    border-bottom: 1px solid var(--border-color);
}

.item-row:hover td:first-child {
    box-shadow: inset 4px 0 0 #FA9317;
}

@media (max-width: 768px) {
    .page-title {
        font-size: 24px;
        margin-bottom: 10px;
    }

    .page-subtitle {
        font-size: 12px;
    }

    .items-table th,
    .items-table td {
        padding: 6px 4px;
        font-size: 12px;
    }

    .image {
        width: 40px;
        height: 40px;
    }
    .name-main{
        font-size: 14px;
    }
}
</style>
