<template>
    <div class="wiki-view">
        <div class="container">
            <!-- Header Section -->
            <section class="page-header">
                <div class="page-header-content">
                    <div class="page-header-text">
                        <h1 class="page-title">Escape from Duckov Wiki</h1>
                        <p class="page-subtitle">The unofficial wiki for Escape from Duckov, providing guides, information, and community tools for players.</p>
                    </div>
                </div>
            </section>

            <!-- Important Articles -->
            <section class="articles-section">
                <div class="articles-grid">
                    <a href="/escape-from-duckov-quests" class="article-card">
                        <div class="card-image-container">
                            <img src="/images/wiki-01.webp" alt="Quests" class="card-image">
                        </div>
                        <h3 class="card-title">Quests</h3>
                    </a>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
// No additional logic needed for this static page
</script>

<style scoped>

/* Header styles now use global .page-header classes */

/* Articles Section */
.articles-section {
    margin: 0 auto;
}

.articles-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}

.article-card {
    background-color: rgba(21, 21, 21, 0.6);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(250, 147, 23, 0.2);
    border-radius: 8px;
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease;
    overflow: hidden;
}

.article-card:hover {
    transform: translateY(-4px);
    border-color: #FA9317;
    box-shadow: 0 8px 32px rgba(250, 147, 23, 0.3);
}

.card-image-container {
    width: 100%;
    overflow: hidden;
    font-size: 0;
    background-color: rgba(26, 26, 26, 0.8);
}

.card-image {
    width: 100%;
    aspect-ratio: 16/9;
    transition: transform 0.3s ease;
}

.article-card:hover .card-image {
    transform: scale(1.05);
}

.quests-image {
    background: linear-gradient(135deg, rgba(250, 147, 23, 0.3) 0%, rgba(230, 126, 34, 0.3) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
}

.quests-image::before {
    content: '📋';
    font-size: 3rem;
    opacity: 0.6;
}

.notes-image {
    background: linear-gradient(135deg, rgba(230, 126, 34, 0.3) 0%, rgba(250, 147, 23, 0.3) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
}

.notes-image::before {
    content: '📝';
    font-size: 3rem;
    opacity: 0.6;
}

.card-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #FA9317;
    text-align: center;
    padding: 10px;
    margin: 0;
}

@media (max-width: 768px) {
    .articles-grid {
        grid-template-columns: 1fr;
        gap: 24px;
    }
}
</style>
