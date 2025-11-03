<template>
    <div class="quests-view">
        <div class="container">
            <div class="page-header">
                <h1 class="page-title">{{ t('WikiQuestsPage.title') }}</h1>
                <p class="page-subtitle">{{ t('WikiQuestsPage.subtitle') }}</p>
            </div>

            <div class="table-container">
                <table class="quests-table">
                    <thead>
                        <tr>
                            <th class="npc-col">{{ t('WikiQuestsPage.table.npc') }}</th>
                            <th class="quest-name-col">{{ t('WikiQuestsPage.table.questName') }}</th>
                            <th class="rewards-col">{{ t('WikiQuestsPage.table.rewards') }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="quest in questsData" :key="quest.id" @click="onRowClick(quest)"
                            :class="['quest-row', { 'disabled': quest.showDetail === false }]">
                            <td class="npc-cell">
                                <div class="npc-avatar">
                                    <img :src="quest.imageUrl" :alt="quest.imageAlt" class="npc-image">
                                </div>
                            </td>
                            <td class="quest-name-cell">{{ quest.title }}</td>
                            <td class="rewards-cell">
                                <ul class="rewards-list">
                                    <li v-for="reward in quest.rewards" :key="reward" class="reward-item">{{ reward }}
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useWikiData } from '../../composables/useWikiData.js'
import { getLocalizedPath } from '../../utils/routeUtils'

const route = useRoute()
const { t, locale } = useI18n()
const { data: questsData, loadData } = useWikiData('quests')

onMounted(() => {
    loadData()
})

// 监听语言变化，重新加载数据
watch(locale, () => {
    loadData()
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

const onRowClick = (quest) => {
    if (quest && quest.showDetail === false) return
    const questId = (quest.addressBar || '').replace('/', '')
    if (!questId) return
    // 优先从当前路由路径检测语言，确保与 URL 一致
    const pathLang = detectLanguageFromPath(route.path)
    const targetLang = pathLang !== 'en' ? pathLang : (locale.value || 'en')
    const path = getLocalizedPath(`/wiki/quests/${questId}`, targetLang)
    window.location.href = path
}
</script>

<style scoped>
.page-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--text-heading);
    margin-bottom: 16px;
    line-height: 1.2;
}

.page-subtitle {
    font-size: 1.125rem;
    color: var(--text-primary);
    line-height: 1.6;
}

.table-container {
    overflow-x: auto;
    border-radius: 8px;
    background-color: var(--bg-card);
    border: 1px solid var(--border-color);
}

.quests-table {
    width: 100%;
    border-collapse: collapse;
}

.quests-table th {
    background-color: var(--bg-secondary);
    color: var(--text-heading);
    font-weight: 600;
    padding: 16px;
    text-align: left;
    border-bottom: 2px solid var(--border-color);
    font-size: 0.875rem;
}

.npc-col {
    width: 120px;
}

.quest-name-col {
    width: 240px;
}

.rewards-col {
    min-width: 360px;
}

.npc-cell {
    text-align: center;
    padding: 12px;
}

.npc-avatar {
    display: flex;
    justify-content: center;
    align-items: center;
}

.npc-image {
    width: 64px;
    height: 64px;
    border-radius: 8px;
    object-fit: cover;
    border: 1px solid var(--border-color);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
}

.rewards-cell {
    padding: 12px;
}

.rewards-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.reward-item {
    color: #FFD700;
    font-size: 0.875rem;
    margin-bottom: 4px;
    padding-left: 8px;
    position: relative;
}

.reward-item::before {
    content: '•';
    color: #FFD700;
    position: absolute;
    left: 0;
}

.quest-row {
    cursor: pointer;
    transition: background-color 0.2s ease, transform 0.2s ease;
}

.quest-row:hover {
    background-color: var(--bg-card-hover);
}

.quest-row.disabled {
    cursor: default;
}

.quest-row.disabled:hover td,
.quest-row.disabled:hover {
    background-color: inherit;
}

@media (max-width: 768px) {
    .page-title {
        font-size: 24px;
        margin-bottom: 10px;
    }

    .page-subtitle {
        font-size: 12px;
    }

    .quests-table th,
    .quests-table td {
        padding: 6px 4px;
        font-size: 12px;
    }

    .npc-image {
        width: 40px;
        height: 40px;
    }
}
</style>
