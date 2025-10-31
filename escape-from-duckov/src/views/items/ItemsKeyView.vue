<template>
    <div class="items-category-view">
        <div class="container">
            <div class="page-header">
                <h1 class="page-title">Escape from Duckov Keys</h1>
                <p class="page-subtitle">Complete Escape from Duckov keys database featuring J-Lab certificates, access cards, factory keys, dormitory keys, and location-specific keys. Browse Level 1-3 J-Lab certificates, colored access cards, sanatorium keys, cellar keys, and special tickets. Find descriptions, locations, and access information for every key, card, and certificate in Duckov.</p>
            </div>

            <div class="table-container">
                <table class="items-table">
                    <thead>
                        <tr>
                            <th class="image-col">Image</th>
                            <th class="name-col">Name</th>
                            <th class="desc-col">Description</th>
                            <th class="type-col">Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in allKeys" :key="item.id" @click="onRowClick(item)"
                            :class="['item-row', { 'disabled': item.showDetail === false }]">
                            <td class="image-cell">
                                <div class="avatar"><img :src="item.imageUrl" :alt="item.imageAlt" class="image"></div>
                            </td>
                            <td class="name-cell">
                                <div class="name-main">{{ item.title }}</div>
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
import { onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useItemsData } from '../../composables/useItemsData.js'

const router = useRouter()
const { data: itemsData, loadData } = useItemsData('key')

const allKeys = computed(() => itemsData?.value || [])

onMounted(() => {
    loadData('key')
})

const onRowClick = (item) => {
    if (item && item.showDetail === false) return
    const id = (item.addressBar || '').replace('/', '')
    if (!id) return
    router.push(`/items/key/${id}`)
}
</script>

<style scoped>
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
}
</style>

