<template>
    <div class="weapons-view">
        <div class="container">
            <div class="page-header">
                <h1 class="page-title">Escape From Duckov - All Weapons</h1>
                <p class="page-subtitle">Complete weapon database with stats, damage, and specifications!</p>
            </div>

            <div class="table-container">
                <table class="weapons-table">
                    <thead>
                        <tr>
                            <th class="weapon-image-col">Image</th>
                            <th class="weapon-name-col">Weapon Name</th>
                            <th class="weapon-type-col">Type</th>
                            <th class="weapon-stats-col">Stats</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="weapon in weaponsData" :key="weapon.id" @click="goToWeaponDetail(weapon)" class="weapon-row">
                            <td class="weapon-image-cell">
                                <div class="weapon-avatar">
                                    <img :src="weapon.imageUrl" :alt="weapon.imageAlt" class="weapon-image">
                                </div>
                            </td>
                            <td class="weapon-name-cell">{{ weapon.title }}</td>
                            <td class="weapon-type-cell">{{ weapon.type || '-' }}</td>
                            <td class="weapon-stats-cell">
                                <ul class="stats-list" v-if="weapon.stats && weapon.stats.length > 0">
                                    <li v-for="stat in weapon.stats" :key="stat" class="stat-item">{{ stat }}</li>
                                </ul>
                                <ul class="stats-list" v-else-if="weapon.rewards && weapon.rewards.length > 0">
                                    <li v-for="reward in weapon.rewards" :key="reward" class="stat-item">{{ reward }}</li>
                                </ul>
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
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useWikiData } from '../../composables/useWikiData.js'

const router = useRouter()
const { data: weaponsData, loadData } = useWikiData('weapons')

onMounted(() => {
    loadData()
})

const goToWeaponDetail = (weapon) => {
    const weaponId = weapon.addressBar.replace('/', '')
    router.push(`/wiki/weapons/${weaponId}`)
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

.weapons-table {
    width: 100%;
    border-collapse: collapse;
}

.weapons-table th {
    background-color: var(--bg-secondary);
    color: var(--text-heading);
    font-weight: 600;
    padding: 16px;
    text-align: left;
    border-bottom: 2px solid var(--border-color);
    font-size: 0.875rem;
}

.weapon-name-col {
    width: 200px;
}

.weapon-image-col {
    width: 120px;
}

.weapon-type-col {
    width: 150px;
}

.weapon-stats-col {
    min-width: 300px;
}

.weapon-image-cell {
    text-align: center;
    padding: 12px;
}

.weapon-avatar {
    display: flex;
    justify-content: center;
    align-items: center;
}

.weapon-image {
    width: 80px;
    height: 80px;
    border-radius: 4px;
    object-fit: cover;
}

.weapon-stats-cell {
    padding: 12px;
}

.stats-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.stat-item {
    color: #FFD700;
    font-size: 0.875rem;
    margin-bottom: 4px;
    padding-left: 8px;
    position: relative;
}

.stat-item::before {
    content: '•';
    color: #FFD700;
    position: absolute;
    left: 0;
}

.weapon-row {
    cursor: pointer;
    transition: background-color 0.2s ease;
}

.weapon-row:hover {
    background-color: var(--bg-card-hover);
}

.weapons-table td {
    padding: 16px;
    border-bottom: 1px solid var(--border-color);
    color: var(--text-primary);
    background-color: var(--bg-card);
}

.weapons-table tbody tr:nth-child(even) td {
    background-color: rgba(21, 21, 21, 0.6);
}

.weapons-table tbody tr:hover td {
    background-color: var(--bg-card-hover);
}

.weapon-name-cell {
    font-weight: 600;
    color: var(--text-heading);
    font-size: 1rem;
}

.weapon-type-cell {
    color: var(--text-secondary);
    font-size: 0.9rem;
}

.info-cell {
    color: var(--text-secondary);
    font-size: 0.9rem;
    line-height: 1.5;
}

/* Medium screens (≤1024px) */
@media (max-width: 1024px) {
    .weapon-stats-col {
        min-width: 200px;
    }
    
    .weapon-image-col {
        width: 80px;
    }
    
    .weapon-name-col {
        width: 120px;
    }
    
    .weapon-type-col {
        width: 100px;
    }
    
    .weapons-table th,
    .weapons-table td {
        padding: 12px 8px;
        font-size: 0.85rem;
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
    
    .weapon-name-cell {
        font-size: 12px;
    }
    
    .weapon-type-cell {
        font-size: 12px;
    }
    
    .stat-item {
        font-size: 12px;
    }

    /* Layout Adjustments */
    .weapons-table th,
    .weapons-table td {
        padding: 6px 4px;
        font-size: 12px;
    }

    .weapon-image-col {
        width: 60px;
    }

    .weapon-name-col {
        width: 100px;
    }
    
    .weapon-type-col {
        width: 80px;
    }

    .weapon-stats-col {
        min-width: 150px;
    }
    
    .weapon-image {
        width: 40px;
        height: 40px;
    }
    
    .stat-item {
        font-size: 12px;
        margin-bottom: 2px;
        padding-left: 6px;
    }
}
</style>

