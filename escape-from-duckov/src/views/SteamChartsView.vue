<template>
    <div class="steam-charts-view">
        <section class="page-header">
            <div class="container">
                <div class="hero-grid">
                    <div class="hero-copy">
                        <h1 class="hero-title">{{ t('SteamChartsPage.title') }}</h1>
                        <p class="hero-description">{{ t('SteamChartsPage.hero.description') }}</p>
                        <ul class="hero-points">
                            <li>{{ t('SteamChartsPage.hero.points.live') }}</li>
                            <li>{{ t('SteamChartsPage.hero.points.peak') }}</li>
                            <li>{{ t('SteamChartsPage.hero.points.reviews') }}</li>
                        </ul>
                    </div>
                    <div class="hero-iframe">
                        <div class="iframe-wrapper">
                            <iframe src="https://steamdb.info/embed/?appid=3167020" height="389"
                                style="border:0;overflow:hidden;width:100%" loading="lazy"
                                title="Steam Charts"></iframe>
                        </div>
                        <p class="iframe-note">{{ t('SteamChartsPage.note') }}</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="stats-section">
            <div class="container">
                <div class="stats-grid">
                    <div class="stat-card">
                        <span class="stat-label">{{ t('SteamChartsPage.cards.playersNow.label') }}</span>
                        <span class="stat-value">{{ t('SteamChartsPage.cards.playersNow.value') }}</span>
                        <p class="stat-desc">{{ t('SteamChartsPage.cards.playersNow.desc') }}</p>
                    </div>
                    <div class="stat-card">
                        <span class="stat-label">{{ t('SteamChartsPage.cards.peak24h.label') }}</span>
                        <span class="stat-value">{{ t('SteamChartsPage.cards.peak24h.value') }}</span>
                        <p class="stat-desc">{{ t('SteamChartsPage.cards.peak24h.desc') }}</p>
                    </div>
                    <div class="stat-card">
                        <span class="stat-label">{{ t('SteamChartsPage.cards.positiveReviews.label') }}</span>
                        <span class="stat-value">{{ t('SteamChartsPage.cards.positiveReviews.value') }}</span>
                        <p class="stat-desc">{{ t('SteamChartsPage.cards.positiveReviews.desc') }}</p>
                    </div>
                    <div class="stat-card">
                        <span class="stat-label">{{ t('SteamChartsPage.cards.followers.label') }}</span>
                        <span class="stat-value">{{ t('SteamChartsPage.cards.followers.value') }}</span>
                        <p class="stat-desc">{{ t('SteamChartsPage.cards.followers.desc') }}</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="summary-section">
            <div class="container">
                <div class="summary-card">
                    <h2 class="summary-title">{{ t('SteamChartsPage.summary.title') }}</h2>
                    <p class="summary-text">{{ t('SteamChartsPage.summary.description') }}</p>
                    <ul class="summary-list">
                        <li>{{ t('SteamChartsPage.summary.items.ranking') }}</li>
                        <li>{{ t('SteamChartsPage.summary.items.twitch') }}</li>
                        <li>{{ t('SteamChartsPage.summary.items.owners') }}</li>
                        <li>{{ t('SteamChartsPage.summary.items.community') }}</li>
                    </ul>
                </div>
            </div>
        </section>
    </div>

</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
.steam-charts-view {
    min-height: 100vh;
}

.loading-state {
    min-height: 100vh;
}

.hero-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
    gap: 32px;
    align-items: center;
}

.hero-copy {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
}

.hero-title {
    font-size: 3rem;
    font-weight: 800;
    color: var(--text-heading);
    letter-spacing: 2px;
}

.hero-description {
    font-size: 1.1rem;
    color: var(--text-secondary);
    line-height: 1.5;
}

.hero-points {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 12px;
}

.hero-points li {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 16px;
    border-radius: 12px;
    background: rgba(250, 147, 23, 0.12);
    border: 1px solid rgba(250, 147, 23, 0.2);
    color: var(--text-primary);
    font-size: 0.95rem;
}

.hero-points li::before {
    content: '★';
    color: #FA9317;
    font-size: 0.8rem;
}

.hero-iframe {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.hero-iframe .iframe-wrapper {
    background: rgba(21, 21, 21, 0.85);
    border: 1px solid rgba(250, 147, 23, 0.25);
    border-radius: 18px;
    overflow: hidden;
    box-shadow: 0 18px 40px rgba(250, 147, 23, 0.18);
}

.iframe-note {
    color: var(--text-secondary);
    font-size: 0.9rem;
}

.stats-section {
    padding: 32px 0;
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
}

.stat-card {
    background: rgba(21, 21, 21, 0.82);
    border: 1px solid rgba(250, 147, 23, 0.16);
    border-radius: 14px;
    padding: 20px;
    box-shadow: 0 12px 28px rgba(250, 147, 23, 0.12);
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.stat-label {
    font-size: 0.85rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.6px;
    color: rgba(250, 147, 23, 0.85);
}

.stat-value {
    font-size: 2rem;
    font-weight: 800;
    color: #FA9317;
    letter-spacing: 1px;
}

.stat-desc {
    color: var(--text-secondary);
    font-size: 0.85rem;
    line-height: 1.5;
}

.summary-section {
    padding: 20px 0 80px;
}

.summary-card {
    max-width: 860px;
    margin: 0 auto;
    background: rgba(21, 21, 21, 0.87);
    border: 1px solid rgba(250, 147, 23, 0.22);
    border-radius: 16px;
    padding: 32px;
    box-shadow: 0 20px 44px rgba(250, 147, 23, 0.16);
}

.summary-title {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--text-heading);
    margin-bottom: 16px;
}

.summary-text {
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: 20px;
}

.summary-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 10px;
}

.summary-list li {
    padding: 12px 16px;
    border-radius: 12px;
    background: rgba(250, 147, 23, 0.1);
    border: 1px solid rgba(250, 147, 23, 0.18);
    color: var(--text-primary);
    font-size: 0.95rem;
}

.cta-section {
    padding: 60px 0 100px;
}

.cta-card {
    max-width: 680px;
    margin: 0 auto;
    text-align: center;
    background: rgba(21, 21, 21, 0.85);
    border: 1px solid rgba(250, 147, 23, 0.25);
    border-radius: 16px;
    padding: 32px;
    box-shadow: 0 18px 42px rgba(250, 147, 23, 0.18);
}

.cta-card h3 {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--text-heading);
    margin-bottom: 16px;
}

.cta-card p {
    color: var(--text-secondary);
    margin-bottom: 24px;
}

.cta-actions {
    display: flex;
    justify-content: center;
}

.btn-steam {
    background: linear-gradient(135deg, #1b2838 0%, #2a475e 100%);
    color: white;
    border: 1px solid #3c5a78;
    padding: 0.85rem 1.75rem;
    border-radius: 999px;
    font-weight: 600;
    letter-spacing: 0.6px;
    transition: all 0.3s ease;
    box-shadow: 0 6px 18px rgba(27, 40, 56, 0.35);
}

.btn-steam:hover {
    background: linear-gradient(135deg, #2a475e 0%, #3c5a78 100%);
    transform: translateY(-2px);
    box-shadow: 0 10px 28px rgba(27, 40, 56, 0.45);
}

@media (max-width: 1024px) {
    .charts-hero {
        padding: 64px 0 32px;
    }

    .hero-grid {
        grid-template-columns: 1fr;
        gap: 20px;
    }

    .hero-copy {
        align-items: center;
        text-align: center;
    }

    .hero-description {
        max-width: 100%;
    }

    .hero-points {
        width: 100%;
    }

    .hero-points li {
        justify-content: center;
    }

    .hero-iframe {
        order: -1;
    }

    .stats-grid {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }

    .summary-card {
        padding: 28px;
    }
}

@media (max-width: 768px) {
    .hero-grid{
        gap: 10px;
    }

    .hero-title {
        font-size: 24px;
        text-align: center;
    }

    .hero-copy{
        gap: 10px;
    }

    .hero-description {
        font-size: 12px;
        line-height: 1.2;
        text-align: center;
    }

    .hero-points li {
        font-size: 12px;
        text-align: left;
        padding: 5px 10px;
    }

    .stat-label{
        font-size: 12px;
    }

    .stats-section {
        padding: 10px 0;
    }

    .stats-grid {
        grid-template-columns: 1fr;
        gap: 10px;
    }

    .stat-card {
        text-align: center;
        padding: 10px;
        gap: 5px;
    }

    .stat-value {
        font-size: 20px;
        line-height: 1.2;
    }

    .stat-desc{
        font-size: 12px;
    }

    .summary-section {
        padding: 10px 0;
    }

    .summary-card {
        padding: 10px;
    }

    .summary-title {
        font-size: 20px;
        line-height: 1.2;
        margin-bottom: 10px;
        text-align: center;
    }

    .summary-text{
        font-size: 12px;
        line-height: 1.2;
        margin-bottom: 10px;
    }

    .summary-text {
        text-align: center;
    }

    .summary-list {
        gap: 8px;
    }

    .summary-list li{
        padding: 10px;
        font-size: 12px;
        line-height: 1.2;
    }
}
</style>
