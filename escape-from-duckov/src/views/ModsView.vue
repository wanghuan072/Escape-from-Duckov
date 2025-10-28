<template>
    <div class="mods-view">
        <!-- Mods Header -->
        <section class="page-header">
            <div class="container">
                <div class="page-header-content">
                    <div class="page-header-text">
                        <h1 class="page-title">Escape from Duckov Mods</h1>
                        <p class="page-subtitle">Enhance your gameplay with community-created modifications and custom content</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Mods Content -->
        <section class="mods-content">
            <div class="container">
                <div class="mods-grid">
                    <div 
                        v-for="mod in mods" 
                        :key="mod.id" 
                        class="mod-card"
                        @click="goToMod(mod.addressBar)"
                    >
                        <div class="mod-card-header">
                            <span class="category-tag">{{ mod.category.toUpperCase() }}</span>
                        </div>
                        <h3 class="mod-title">{{ mod.title }}</h3>
                        <p class="mod-description">{{ mod.description }}</p>
                        <div class="mod-tags">
                            <span v-for="tag in mod.tags" :key="tag" class="tag">{{ tag }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { mods } from '../data/mods/mods.js'

const router = useRouter()

const goToMod = (addressBar) => {
    router.push(`/mods${addressBar}`)
}
</script>

<style scoped>
.mods-view {
    min-height: 100vh;
}

.mods-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
}

.mod-card {
    background: rgba(30, 30, 30, 0.8);
    border-radius: 8px;
    border: 1px solid rgba(250, 147, 23, 0.2);
    padding: 24px;
    transition: all 0.3s ease;
    cursor: pointer;
    backdrop-filter: blur(10px);
    position: relative;
    overflow: hidden;
}

.mod-card:hover {
    transform: translateY(-4px);
    border-color: rgba(250, 147, 23, 0.4);
    box-shadow: 0 8px 32px rgba(250, 147, 23, 0.2);
}

.mod-card-header {
    margin-bottom: 16px;
}

.category-tag {
    background: transparent;
    border: 1px solid #FA9317;
    color: #FA9317;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.5px;
}

.mod-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-heading);
    margin-bottom: 12px;
    line-height: 1.3;
}

.mod-description {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 20px;
    font-size: 0.95rem;
}

.mod-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 0;
}

.tag {
    background: transparent;
    border: 1px solid rgba(250, 147, 23, 0.3);
    color: var(--text-secondary);
    padding: 4px 10px;
    border-radius: 16px;
    font-size: 0.75rem;
    font-weight: 500;
    transition: all 0.3s ease;
}

.mod-card:hover .tag {
    border-color: rgba(250, 147, 23, 0.6);
    color: #FA9317;
}

@media (max-width: 768px) {
    .mods-grid {
        grid-template-columns: 1fr;
        gap: 20px;
    }
    
    .mod-card {
        padding: 20px;
    }
    
    .mod-title {
        font-size: 1.25rem;
    }
}
</style>