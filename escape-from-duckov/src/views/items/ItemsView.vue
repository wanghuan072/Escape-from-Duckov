<template>
    <div class="items-view">
        <div class="container">
            <div class="page-header">
                <h1 class="page-title">Escape from Duckov Items</h1>
                <p class="page-subtitle">Comprehensive Escape from Duckov database of weapons, equipment, ammunition, keys, and fish. Browse firearms, melee weapons, armor, helmets, ammunition, keys, fish, and protective gear. Find stats, descriptions, and details for every item in Duckov's arsenal.</p>
            </div>

            <div class="category-grid">
                <!-- Weapons Card -->
                <a href="/items/weapons" class="category-card card">
                    <div class="card-top">
                        <div class="card-title-wrap">
                            <h3 class="card-title">Weapons</h3>
                            <span class="item-count">{{ weaponsCount }} items</span>
                        </div>
                        <p class="card-desc">Firearms, melee tools, and everything you need for direct encounters.</p>
                        <div class="featured-gear">
                            <div class="featured-label">Featured Gear</div>
                            <div class="featured-list">{{ weaponsFeatured || '—' }}</div>
                        </div>
                        <div class="tag-list">
                            <span class="tag">Combat</span>
                            <span class="tag">Damage</span>
                            <span class="tag">Gear</span>
                        </div>
                    </div>
                    <div class="card-bottom">
                        <span class="explore">Explore category</span>
                        <span class="arrow">›</span>
                    </div>
                </a>

                <!-- Equipment Card -->
                <a href="/items/equipment" class="category-card card">
                    <div class="card-top">
                        <div class="card-title-wrap">
                            <h3 class="card-title">Equipment</h3>
                            <span class="item-count">{{ equipmentCount }} items</span>
                        </div>
                        <p class="card-desc">Protective gear and tactical wear to survive longer runs.</p>
                        <div class="featured-gear">
                            <div class="featured-label">Featured Gear</div>
                            <div class="featured-list">{{ equipmentFeatured || '—' }}</div>
                        </div>
                        <div class="tag-list">
                            <span class="tag">Defense</span>
                            <span class="tag">Gear</span>
                            <span class="tag">Survival</span>
                        </div>
                    </div>
                    <div class="card-bottom">
                        <span class="explore">Explore category</span>
                        <span class="arrow">›</span>
                    </div>
                </a>

                <!-- Ammunition Card -->
                <a href="/items/ammunition" class="category-card card">
                    <div class="card-top">
                        <div class="card-title-wrap">
                            <h3 class="card-title">Ammunition</h3>
                            <span class="item-count">{{ ammunitionCount }} items</span>
                        </div>
                        <p class="card-desc">Pistol rounds, rifle cartridges, shotgun shells, and all types of ammunition for your weapons.</p>
                        <div class="featured-gear">
                            <div class="featured-label">Featured Gear</div>
                            <div class="featured-list">{{ ammunitionFeatured || '—' }}</div>
                        </div>
                        <div class="tag-list">
                            <span class="tag">Ammo</span>
                            <span class="tag">Caliber</span>
                            <span class="tag">Compatibility</span>
                        </div>
                    </div>
                    <div class="card-bottom">
                        <span class="explore">Explore category</span>
                        <span class="arrow">›</span>
                    </div>
                </a>

                <!-- Keys Card -->
                <a href="/items/key" class="category-card card">
                    <div class="card-top">
                        <div class="card-title-wrap">
                            <h3 class="card-title">Keys</h3>
                            <span class="item-count">{{ keysCount }} items</span>
                        </div>
                        <p class="card-desc">Access cards, keycards, and security keys to unlock doors, containers, and restricted areas.</p>
                        <div class="featured-gear">
                            <div class="featured-label">Featured Gear</div>
                            <div class="featured-list">{{ keysFeatured || '—' }}</div>
                        </div>
                        <div class="tag-list">
                            <span class="tag">Access</span>
                            <span class="tag">Keys</span>
                            <span class="tag">Security</span>
                        </div>
                    </div>
                    <div class="card-bottom">
                        <span class="explore">Explore category</span>
                        <span class="arrow">›</span>
                    </div>
                </a>

                <!-- Fish Card -->
                <a href="/items/fish" class="category-card card">
                    <div class="card-top">
                        <div class="card-title-wrap">
                            <h3 class="card-title">Fish</h3>
                            <span class="item-count">{{ fishCount }} items</span>
                        </div>
                        <p class="card-desc">All fish species, fishing spots, baits, and fishing mechanics with habits and location information.</p>
                        <div class="featured-gear">
                            <div class="featured-label">Featured Gear</div>
                            <div class="featured-list">{{ fishFeatured || '—' }}</div>
                        </div>
                        <div class="tag-list">
                            <span class="tag">Fishing</span>
                            <span class="tag">Fish</span>
                            <span class="tag">Baits</span>
                        </div>
                    </div>
                    <div class="card-bottom">
                        <span class="explore">Explore category</span>
                        <span class="arrow">›</span>
                    </div>
                </a>
            </div>
        </div>
    </div>

</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useItemsData } from '../../composables/useItemsData.js'

const { data: weapons, loadData: loadWeapons } = useItemsData('weapons')
const { data: equipment, loadData: loadEquipment } = useItemsData('equipment')
const { data: ammunition, loadData: loadAmmunition } = useItemsData('ammunition')
const { data: keys, loadData: loadKeys } = useItemsData('key')
const { data: fish, loadData: loadFish } = useItemsData('fish')

onMounted(async () => {
    await Promise.all([
        loadWeapons('weapons'),
        loadEquipment('equipment'),
        loadAmmunition('ammunition'),
        loadKeys('key'),
        loadFish('fish')
    ])
})

const toFeatured = (list) => (list || []).slice(0, 3).map(i => i.title).join(', ')
const weaponsCount = computed(() => (weapons?.value || []).length)
const equipmentCount = computed(() => (equipment?.value || []).length)
const ammunitionCount = computed(() => (ammunition?.value || []).length)
const keysCount = computed(() => (keys?.value || []).length)
const fishCount = computed(() => (fish?.value || []).length)
const weaponsFeatured = computed(() => toFeatured(weapons?.value))
const equipmentFeatured = computed(() => toFeatured(equipment?.value))
const ammunitionFeatured = computed(() => toFeatured(ammunition?.value))
const keysFeatured = computed(() => toFeatured(keys?.value))
const fishFeatured = computed(() => toFeatured(fish?.value))
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

.category-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
}

.category-card {
    position: relative;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    background: linear-gradient(135deg, rgba(21, 21, 21, 0.6) 0%, rgba(21, 21, 21, 0.4) 100%);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    transition: all 0.25s ease;
    outline: none;
    -webkit-tap-highlight-color: transparent;
}

.category-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(250, 147, 23, 0.25);
    border-color: #FA9317;
    background: linear-gradient(135deg, rgba(21, 21, 21, 0.8) 0%, rgba(21, 21, 21, 0.6) 100%);
}


.card-title-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 8px;
}

.card-title {
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--text-heading);
    margin: 0;
}

.item-count {
    padding: 4px 10px;
    font-size: 0.75rem;
    color: var(--text-heading);
    background: rgba(77, 166, 255, 0.15);
    border: 1px solid rgba(77, 166, 255, 0.35);
    border-radius: 999px;
}

.card-desc {
    color: var(--text-secondary);
    margin: 0 0 14px 0;
    line-height: 1.6;
}

.featured-gear {
    background: rgba(250, 147, 23, 0.06);
    border: 1px solid rgba(250, 147, 23, 0.25);
    border-radius: 10px;
    padding: 12px 14px;
    margin-bottom: 14px;
}

.featured-label {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: .06em;
    color: #FA9317;
    margin-bottom: 6px;
}

.featured-list {
    color: var(--text-primary);
    font-size: 0.9rem;
}

.tag-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 6px;
}

.tag {
    display: inline-block;
    padding: 4px 10px;
    font-size: 0.75rem;
    border-radius: 999px;
    background: rgba(77, 166, 255, 0.12);
    color: var(--text-primary);
    border: 1px solid rgba(77, 166, 255, 0.25);
}

.card-bottom {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    padding-top: 10px;
    border-top: 1px solid var(--border-color);
    margin-top: 10px;
}

.explore {
    font-weight: 700;
}

.arrow {
    font-size: 18px;
    line-height: 1;
}

@media (max-width: 1024px) {
    .category-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .page-title {
        font-size: 24px;
        margin-bottom: 10px;
    }

    .page-subtitle {
        font-size: 12px;
    }

    .category-grid {
        grid-template-columns: 1fr;
    }
}
</style>
