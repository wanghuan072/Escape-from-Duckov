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
                        <tr v-for="quest in questsData" :key="quest.id" @click="goToQuestDetail(quest)" class="quest-row">
                            <td class="npc-cell">
                                <div class="npc-avatar">
                                    <img :src="quest.imageUrl" :alt="quest.imageAlt" class="npc-image">
                                </div>
                            </td>
                            <td class="quest-name-cell">{{ quest.title }}</td>
                            <td class="rewards-cell">
                                <ul class="rewards-list">
                                    <li v-for="reward in quest.rewards" :key="reward" class="reward-item">{{ reward }}</li>
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
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const questsData = ref([])

onMounted(async () => {
    try {
        const questsModule = await import('../../data/wiki/quests/quests.js')
        questsData.value = questsModule.default || []
    } catch (error) {
        console.error('Failed to load quests data:', error)
        questsData.value = []
    }
})

const goToQuestDetail = (quest) => {
    const questId = quest.addressBar.replace('/', '')
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
    margin-bottom: 8px;
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

.quest-name-col {
    width: 200px;
}

.npc-col {
    width: 120px;
}

.rewards-col {
    min-width: 300px;
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
    width: 40px;
    height: 40px;
    border-radius: 4px;
    object-fit: cover;
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
    transition: background-color 0.2s ease;
}

.quest-row:hover {
    background-color: var(--bg-card-hover);
}

.quests-table td {
    padding: 16px;
    border-bottom: 1px solid var(--border-color);
    color: var(--text-primary);
    background-color: var(--bg-card);
}

.quests-table tbody tr:nth-child(even) td {
    background-color: rgba(21, 21, 21, 0.6);
}

.quests-table tbody tr:hover td {
    background-color: var(--bg-card-hover);
}

.quest-name-cell {
    font-weight: 600;
    color: var(--text-heading);
    font-size: 1rem;
}

.info-cell {
    color: var(--text-secondary);
    font-size: 0.9rem;
    line-height: 1.5;
}

@media (max-width: 1024px) {
    .rewards-col {
        min-width: 250px;
    }
    
    .npc-col {
        width: 100px;
    }
    
    .quest-name-col {
        width: 150px;
    }
}

@media (max-width: 768px) {
    .page-title {
        font-size: 1.75rem;
    }

    .page-subtitle {
        font-size: 1rem;
    }

    .quests-table th,
    .quests-table td {
        padding: 8px 6px;
        font-size: 0.8rem;
    }

    .npc-col {
        width: 80px;
    }

    .quest-name-col {
        width: 120px;
    }

    .rewards-col {
        min-width: 200px;
    }
    
    .npc-image {
        width: 30px;
        height: 30px;
    }
    
    .reward-item {
        font-size: 0.8rem;
    }
}
</style>