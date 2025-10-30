<template>
    <div class="quests-view">
        <div class="container">
            <div class="page-header">
                <h1 class="page-title">Escape From Duckov - All Quests</h1>
                <p class="page-subtitle">Quest checklist for Duckov with requirements & objectives maps!</p>
            </div>

            <div class="table-container">
                <table class="quests-table">
                    <thead>
                        <tr>
                            <th class="npc-col">NPC</th>
                            <th class="quest-name-col">Quest Name</th>
                            <th class="rewards-col">Rewards</th>
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
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useWikiData } from '../../composables/useWikiData.js'

const router = useRouter()
const { data: questsData, loadData } = useWikiData('quests')

onMounted(() => {
    loadData()
})

const onRowClick = (quest) => {
    if (quest && quest.showDetail === false) return
    const questId = (quest.addressBar || '').replace('/', '')
    if (!questId) return
    router.push(`/wiki/quests/${questId}`)
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
