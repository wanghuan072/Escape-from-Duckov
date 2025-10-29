<template>
    <div class="home-view">
        <!-- Hero Section -->
        <section class="hero hero-background">
            <div class="container">
                <div class="hero-content">
                    <div class="hero-text">
                        <h1 class="hero-title">
                            <template v-for="(char, index) in titleChars">
                                <span v-if="char !== '\n'" :key="`span-${index}`"
                                    :style="{ animationDelay: `${index * 0.05}s` }">{{ char }}</span>
                                <br v-else :key="`br-${index}`" />
                            </template>
                        </h1>
                        <p class="hero-subtitle">Escape from Duckov is a PVE indie survival RPG — in a duck's world!.
                            Scavenge for resources,
                            build your hideout, and upgrade your gear in the world of Duckov. Start from nothing and
                            rise to the top. Outwit
                            hostile ducks, survive, or make it out alive.</p>
                        <a href="https://store.steampowered.com" class="btn btn-steam" target="_blank">
                            <div class="icon">
                                <svg t="1761617030408" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="4538" width="200" height="200">
                                    <path
                                        d="M511.104 0C242.261333 0 21.802667 207.36 0.938667 470.912l274.432 113.408a144.512 144.512 0 0 1 81.578666-25.173333c2.688 0 5.333333 0.170667 8.021334 0.256l122.069333-176.725334V380.16a193.194667 193.194667 0 0 1 193.024-193.024c106.410667 0 193.024 86.656 193.024 193.152s-86.613333 193.066667-193.024 193.066667h-4.48l-173.909333 124.202666c0 2.218667 0.170667 4.48 0.170666 6.784a144.725333 144.725333 0 0 1-144.64 144.896 145.578667 145.578667 0 0 1-142.122666-116.352L18.602667 651.52C79.445333 866.432 276.736 1024 511.104 1024c282.752 0 511.957333-229.248 511.957333-512S793.813333 0 511.104 0zM321.706667 776.96l-62.848-26.026667c11.178667 23.168 30.464 42.624 56.064 53.333334a108.842667 108.842667 0 0 0 142.378666-141.824 108.672 108.672 0 0 0-138.88-60.288l64.981334 26.88a80.128 80.128 0 0 1-61.653334 147.925333H321.706667z m487.04-396.928a128.810667 128.810667 0 0 0-128.64-128.64 128.64 128.64 0 1 0 128.64 128.64z m-224.981334-0.213333a96.597333 96.597333 0 1 1 193.322667 0 96.725333 96.725333 0 0 1-96.682667 96.64 96.597333 96.597333 0 0 1-96.64-96.64z"
                                        fill="#ffffff" p-id="4539"></path>
                                </svg>
                            </div>
                            Play on Steam
                        </a>
                    </div>
                    <div class="hero-video">
                        <div class="video-player">
                            <div class="video-thumbnail" v-if="!isVideoPlaying">
                                <img src="/images/video-bg.webp" alt="Escape From Duckov Trailer" class="video-preview">
                                <div class="play-button" @click="playVideo">
                                    <span class="play-icon">▶</span>
                                </div>
                                <div class="video-overlay">
                                    <!-- <div class="video-title">ESCAPE FROM DUCKOV</div> -->
                                </div>
                            </div>
                            <div class="video-iframe" v-if="isVideoPlaying">
                                <iframe src="https://www.youtube.com/embed/JxHopm6cQnc" frameborder="0" allowfullscreen
                                    class="video-frame">
                                </iframe>
                                <button class="close-video" @click="closeVideo">×</button>
                            </div>
                            <div class="video-info">
                                <div class="video-header">
                                    <span class="video-icon">🎮</span>
                                    <span class="video-channel">Escape From Duckov - Official</span>
                                </div>
                                <div class="video-footer">
                                    <div class="video-label">OFFICIAL TRAILER</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- What is Escape from Duckov -->
        <section class="what-is">
            <div class="container">
                <div class="what-is-content">
                    <div class="what-is-image">
                        <img src="/images/about-01.webp" alt="Escape From Duckov Gameplay" class="gameplay-screenshot">
                    </div>
                    <div class="what-is-text">
                        <h2 class="section-title">What is Escape From Duckov?</h2>
                        <div class="what-is-description">
                            <p>Step into the whimsical yet treacherous world of Duckov, where survival meets absurdity
                                in this
                                indie RPG adventure. You're not just another survivor—you're a duck thrust into a
                                post-apocalyptic landscape where feathers fly and danger quacks around every corner.</p>
                            <p>From humble beginnings as a clueless waterfowl to becoming the ultimate survivor, your
                                journey
                                through Duckov's twisted reality will test your wits, reflexes, and ability to adapt.
                                Every
                                decision matters, every resource counts, and every enemy encounter could be your last
                                waddle.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="what-is-content">
                    <div class="what-is-image">
                        <img src="/images/about-02.webp" alt="Escape From Duckov Gameplay" class="gameplay-screenshot">
                    </div>
                    <div class="what-is-text">
                        <h2 class="section-title">Dangerous Territories Await</h2>
                        <div class="what-is-description">
                            <p>Navigate through five distinct zones, each with its own personality and perils. From the
                                radioactive Ground Zero to the industrial maze of Warehouse District, every location
                                tells a
                                story of what went wrong in Duckov's world.</p>
                            <p>The extraction timer isn't just a countdown—it's your lifeline. Push your luck for better
                                rewards
                                or play it safe with basic supplies. In Duckov, fortune favors the bold, but survival
                                favors the
                                smart. Will you risk it all for legendary loot or settle for safety?</p>
                        </div>
                    </div>
                </div>
                <div class="what-is-content">
                    <div class="what-is-image">
                        <img src="/images/about-03.webp" alt="Escape From Duckov Gameplay" class="gameplay-screenshot">
                    </div>
                    <div class="what-is-text">
                        <h2 class="section-title">Arsenal of Feathered Fury</h2>
                        <div class="what-is-description">
                            <p>Choose your weapon of choice from an extensive arsenal spanning from makeshift clubs to
                                high-tech
                                firearms. The weapon modification system lets you customize every aspect of your
                                gear—because
                                when you're fighting for survival, every advantage counts.</p>
                            <p>Face off against cunning AI enemies that adapt to your tactics. These aren't mindless
                                drones—they're intelligent adversaries that will flank, ambush, and outmaneuver you if
                                you're
                                not careful. Master the art of duck combat and prove that feathers can be deadly.</p>
                        </div>
                    </div>
                </div>
                <div class="what-is-content">
                    <div class="what-is-image">
                        <img src="/images/about-04.webp" alt="Escape From Duckov Gameplay" class="gameplay-screenshot">
                    </div>
                    <div class="what-is-text">
                        <h2 class="section-title">From Nest to Fortress</h2>
                        <div class="what-is-description">
                            <p>Transform your humble hideout into an impenetrable fortress through deep progression
                                systems.
                                Every upgrade matters, every blueprint unlocks new possibilities, and every successful
                                raid
                                brings you closer to becoming the ultimate survivor.</p>
                            <p>Develop your skills across multiple trees—whether you prefer the precision of ranged
                                combat, the
                                brutality of melee encounters, or the strategic depth of character attributes. In
                                Duckov,
                                there's no one-size-fits-all approach to survival.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Maps Section -->
        <section class="maps-section" id="maps">
            <div class="container">
                <h2 class="section-title">Explore Duckov's Zones</h2>
                <p class="section-subtitle">Navigate through dangerous territories, from abandoned industrial areas to
                    the
                    treacherous Ground Zero.</p>
                <div class="maps-grid">
                    <div class="map-card card">
                        <a href="/maps">
                            <div class="map-image">
                                <img src="/images/map-01.webp" alt="Ground Zero" class="map-screenshot">
                            </div>
                            <div class="map-content">
                                <h3>Ground Zero</h3>
                                <p>The heart of the cataclysm. Highest risk, highest reward.</p>
                            </div>
                        </a>

                    </div>
                    <div class="map-card card">
                        <a href="/maps">
                            <div class="map-image">
                                <img src="/images/map-02.webp" alt="Warehouse District" class="map-screenshot">
                            </div>
                            <div class="map-content">
                                <h3>Warehouse District</h3>
                                <p>Abandoned factories and storage facilities filled with guarded loot.</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="text-center">
                    <a href="#" class="btn btn-primary">View All Maps →</a>
                </div>
            </div>
        </section>

        <!-- Duckov Wiki Section -->
        <section class="hideout-section">
            <div class="container">
                <h2 class="section-title">Discover Duckov's Secrets</h2>
                <p class="section-subtitle">Unlock quests, collect notes, and master every aspect of the Duckov world
                    through
                    our comprehensive wiki.</p>
                <div class="guides-grid">
                    <a href="/escape-from-duckov-quests" class="guide-card-link card">
                        <div class="guide-image">
                            <img src="/images/wiki-01.webp" alt="Quests Guide" class="guide-img">
                        </div>
                        <div class="guide-content">
                            <h3>Quests</h3>
                            <p>Complete your missions and track progress through all available quests.</p>
                        </div>
                    </a>
                    <a href="/escape-from-duckov-notes" class="guide-card-link card">
                        <div class="guide-image">
                            <img src="/images/wiki-02.webp" alt="Notes Guide" class="guide-img">
                        </div>
                        <div class="guide-content">
                            <h3>Notes</h3>
                            <p>Collect all 56 notes scattered throughout the dangerous territories.</p>
                        </div>
                    </a>
                </div>
                <div class="text-center">
                    <a href="/wiki" class="btn btn-primary">Explore All Guides →</a>
                </div>
            </div>
        </section>

        <!-- Guides Section -->
        <section class="guides-section" id="guides">
            <div class="container">
                <h2 class="section-title">Essential Guides</h2>
                <div class="guides-grid">
                    <div class="guide-card card">
                        <div class="guide-header">
                            <span class="guide-badge">Beginner</span>
                        </div>
                        <h3>Getting Started in Duckov</h3>
                        <p>Learn the basics: how to bust out of prison, complete your first missions, and start building
                            your
                            hideout from the ground up.</p>
                    </div>
                    <div class="guide-card card">
                        <div class="guide-header">
                            <span class="guide-badge">Strategy</span>
                        </div>
                        <h3>Surviving the Storm</h3>
                        <p>A comprehensive guide on preparing for and surviving the periodic Storm events that threaten
                            to end
                            your run.</p>
                    </div>
                    <div class="guide-card card">
                        <div class="guide-header">
                            <span class="guide-badge">Advanced</span>
                        </div>
                        <h3>Hideout Optimization</h3>
                        <p>Maximize your hideout efficiency, prioritize station upgrades, and understand which NPCs to
                            recruit
                            for the best gear.</p>
                    </div>
                </div>
                <div class="text-center">
                    <a href="#" class="btn btn-primary">View All Guides →</a>
                </div>
            </div>
        </section>

        <!-- Game Information -->
        <section class="single-player">
            <div class="container">
                <h2 class="section-title">Game Information</h2>
                <p class="section-subtitle">Everything you need to know about Escape from Duckov</p>
                <div class="game-info-content">
                    <div class="game-left">
                        <div class="info-card">
                            <div class="info-header">
                                <h3>Game Details</h3>
                            </div>
                            <div class="info-items">
                                <div class="info-item">
                                    <span class="item-label">Name</span>
                                    <span class="item-value">Escape from Duckov</span>
                                </div>
                                <div class="info-item">
                                    <span class="item-label">Genre</span>
                                    <span class="item-value">Action, Adventure, Indie, RPG</span>
                                </div>
                                <div class="info-item">
                                    <span class="item-label">Developer</span>
                                    <span class="item-value">Team Soda</span>
                                </div>
                                <div class="info-item">
                                    <span class="item-label">Publisher</span>
                                    <span class="item-value">bilibili</span>
                                </div>
                                <div class="info-item">
                                    <span class="item-label">Release Date</span>
                                    <span class="item-value">October 16, 2025</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="game-right">
                        <div class="info-card">
                            <div class="info-header">
                                <h3>Languages</h3>
                            </div>
                            <div class="language-table">
                                <div class="table-header">
                                    <span class="col-language">Language</span>
                                    <span class="col-interface">Interface</span>
                                    <span class="col-audio">Full Audio</span>
                                    <span class="col-subtitles">Subtitles</span>
                                </div>
                                <div class="table-body">
                                    <div class="table-row">
                                        <span class="col-language">Simplified Chinese</span>
                                        <span class="col-interface">✓</span>
                                        <span class="col-audio"></span>
                                        <span class="col-subtitles">✓</span>
                                    </div>
                                    <div class="table-row">
                                        <span class="col-language">English</span>
                                        <span class="col-interface">✓</span>
                                        <span class="col-audio"></span>
                                        <span class="col-subtitles">✓</span>
                                    </div>
                                    <div class="table-row">
                                        <span class="col-language">Traditional Chinese</span>
                                        <span class="col-interface">✓</span>
                                        <span class="col-audio"></span>
                                        <span class="col-subtitles">✓</span>
                                    </div>
                                    <div class="table-row">
                                        <span class="col-language">Japanese</span>
                                        <span class="col-interface">✓</span>
                                        <span class="col-audio"></span>
                                        <span class="col-subtitles">✓</span>
                                    </div>
                                    <div class="table-row">
                                        <span class="col-language">German</span>
                                        <span class="col-interface">✓</span>
                                        <span class="col-audio"></span>
                                        <span class="col-subtitles">✓</span>
                                    </div>
                                    <div class="table-row">
                                        <span class="col-language">Russian</span>
                                        <span class="col-interface">✓</span>
                                        <span class="col-audio"></span>
                                        <span class="col-subtitles">✓</span>
                                    </div>
                                    <div class="table-row">
                                        <span class="col-language">Spanish - Latin America</span>
                                        <span class="col-interface">✓</span>
                                        <span class="col-audio"></span>
                                        <span class="col-subtitles">✓</span>
                                    </div>
                                    <div class="table-row">
                                        <span class="col-language">Korean</span>
                                        <span class="col-interface">✓</span>
                                        <span class="col-audio"></span>
                                        <span class="col-subtitles">✓</span>
                                    </div>
                                    <div class="table-row">
                                        <span class="col-language">French</span>
                                        <span class="col-interface">✓</span>
                                        <span class="col-audio"></span>
                                        <span class="col-subtitles">✓</span>
                                    </div>
                                    <div class="table-row">
                                        <span class="col-language">Portuguese - Brazil</span>
                                        <span class="col-interface">✓</span>
                                        <span class="col-audio"></span>
                                        <span class="col-subtitles">✓</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Reviews Section -->
        <section class="reviews-section">
            <div class="container">
                <h2 class="section-title">Player Reviews</h2>
                <p class="section-subtitle">What players are saying about Escape from Duckov</p>
                <div class="reviews-grid">
                    <div class="review-card card">
                        <div class="review-header">
                            <div class="reviewer-info">
                                <div class="reviewer-avatar">
                                    <img src="/images/review-01.webp" alt="boko" class="reviewer-avatar-img">
                                </div>
                                <div class="reviewer-details">
                                    <h4>boko</h4>
                                    <div class="review-rating">
                                        <span class="stars">★★★★★</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="review-content">
                            <p>"Absolutely amazing game! The duck world is so immersive and the survival mechanics are
                                perfectly
                                balanced. I've spent over 50 hours already and still discovering new things. The hideout
                                building system is incredible!"</p>
                        </div>
                    </div>

                    <div class="review-card card">
                        <div class="review-header">
                            <div class="reviewer-info">
                                <div class="reviewer-avatar">
                                    <img src="/images/review-01.webp" alt="edythe" class="reviewer-avatar-img">
                                </div>
                                <div class="reviewer-details">
                                    <h4>Edythe</h4>
                                    <div class="review-rating">
                                        <span class="stars">★★★★★</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="review-content">
                            <p>"Genuinely fun, but wished it comes with at least official gamepad controls for steam
                                deck"</p>
                        </div>
                    </div>

                    <div class="review-card card">
                        <div class="review-header">
                            <div class="reviewer-info">
                                <div class="reviewer-avatar">
                                    <img src="/images/review-01.webp" alt="steakyb" class="reviewer-avatar-img">
                                </div>
                                <div class="reviewer-details">
                                    <h4>SteakyB</h4>
                                    <div class="review-rating">
                                        <span class="stars">★★★★☆</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="review-content">
                            <p>"10/10 only needs co-op to be in the main game and not a mod and its perfect"</p>
                        </div>
                    </div>

                    <div class="review-card card">
                        <div class="review-header">
                            <div class="reviewer-info">
                                <div class="reviewer-avatar">🏗️</div>
                                <div class="reviewer-details">
                                    <h4>BuilderPro</h4>
                                    <div class="review-rating">
                                        <span class="stars">★★★★★</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="review-content">
                            <p>"The hideout building is incredible! I love how you can customize every aspect of your
                                base. The
                                crafting system is deep and rewarding. This game has become my go-to for relaxing after
                                work."
                            </p>
                        </div>
                    </div>

                    <div class="review-card card">
                        <div class="review-header">
                            <div class="reviewer-info">
                                <div class="reviewer-avatar">🗺️</div>
                                <div class="reviewer-details">
                                    <h4>ExplorerDuck</h4>
                                    <div class="review-rating">
                                        <span class="stars">★★★★★</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="review-content">
                            <p>"The maps are beautifully designed with tons of secrets to discover. Each raid feels
                                different
                                thanks to the dynamic loot and weather systems. The extraction timer adds perfect
                                tension!"</p>
                        </div>
                    </div>

                    <div class="review-card card">
                        <div class="review-header">
                            <div class="reviewer-info">
                                <div class="reviewer-avatar">🎯</div>
                                <div class="reviewer-details">
                                    <h4>StealthMaster</h4>
                                    <div class="review-rating">
                                        <span class="stars">★★★★☆</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="review-content">
                            <p>"Great stealth mechanics and tactical gameplay. The AI is smart and the maps offer
                                multiple
                                approaches to objectives. Love the risk/reward system - makes every decision matter!"
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ Section -->
        <section class="faq-section">
            <div class="container">
                <h2 class="section-title">Frequently Asked Questions</h2>
                <div class="faq-list">
                    <div class="faq-item card">
                        <h3>Is Escape from Duckov just a Tarkov clone?</h3>
                        <p>Not at all. While it draws inspiration from the extraction shooter genre, Escape from Duckov
                            is a
                            complete single-player experience with its own story, progression systems, and unique
                            mechanics like
                            the periodic Storm events.</p>
                    </div>
                    <div class="faq-item card">
                        <h3>What happens when I die?</h3>
                        <p>On Balanced difficulty, you drop your inventory where you died—one chance to recover it. On
                            Extreme
                            difficulty, death means permanent loss. Lower difficulties are more forgiving with minimal
                            consequences.</p>
                    </div>
                    <div class="faq-item card">
                        <h3>Can I play this offline?</h3>
                        <p>Absolutely! The game is designed as a complete offline experience with no online
                            requirements, PvP,
                            or daily wipes. Play at your own pace without any multiplayer stress.</p>
                    </div>
                    <div class="faq-item card">
                        <h3>How long is the game?</h3>
                        <p>The main campaign offers 50+ hours of content, with extensive replayability through dynamic
                            loot,
                            multiple difficulty settings, and the continuous challenge of surviving the Storm events.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const titleChars = ref([
    'E', 's', 'c', 'a', 'p', 'e', ' ', 'f', 'r', 'o', 'm', ' ', 'D', 'u', 'c', 'k', 'o', 'v', '\n',
    'F', 'a', 'n', 's', ' ', 'C', 'o', 'm', 'm', 'u', 'n', 'i', 't', 'y'
])

const isVideoPlaying = ref(false)

const playVideo = () => {
    isVideoPlaying.value = true
}

const closeVideo = () => {
    isVideoPlaying.value = false
}
</script>

<style scoped>
/* Section spacing for HomeView */
section {
    padding: 40px 0;
    position: relative;
    z-index: 1;
}

.hero {
    padding: 80px 0;
}

.hero-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
}

.hero-text {
    padding-right: 24px;
}

.hero-title {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 24px;
    line-height: 1.1;
    color: var(--secondary-color);
    text-align: left;
}

.hero-title span {
    display: inline-block;
    opacity: 0;
    animation: letterReveal 0.6s forwards;
    background: linear-gradient(135deg, #ffffff 0%, #FA9317 50%, var(--secondary-color) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.hero-subtitle {
    font-size: 1.125rem;
    color: var(--text-secondary);
    margin-bottom: 32px;
    line-height: 1.6;
    text-align: left;
}

.steam-icon {
    width: 20px;
    height: 20px;
    margin-right: 8px;
    fill: white;
}

.btn-steam {
    background: linear-gradient(135deg, #1b2838 0%, #2a475e 100%);
    color: white;
    border: 1px solid #3c5a78;
    box-shadow: 0 4px 12px rgba(27, 40, 56, 0.3);
}

.btn-steam .icon {
    width: 30px;
    height: 30px;
    margin-right: 8px;
    fill: white;
}

.btn-steam:hover {
    background: linear-gradient(135deg, #2a475e 0%, #3c5a78 100%);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(27, 40, 56, 0.4);
    border-color: #4a6b8a;
}

.hero-video {
    position: relative;
}

.video-player {
    background: var(--card-bg);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    border: 1px solid var(--border-color);
}

.video-thumbnail {
    position: relative;
    aspect-ratio: 16/9;
    overflow: hidden;
}

.video-preview {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.play-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80px;
    height: 80px;
    background: rgba(255, 0, 0, 0.9);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
}

.play-button:hover {
    background: rgba(255, 0, 0, 1);
    transform: translate(-50%, -50%) scale(1.1);
}

.play-icon {
    color: white;
    font-size: 24px;
    margin-left: 4px;
}

.video-info {
    padding: 15px;
}

.video-overlay {
    position: absolute;
    top: 20px;
    left: 20px;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
}

.video-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 4px;
}

.video-iframe {
    position: relative;
    aspect-ratio: 16/9;
    overflow: hidden;
}

.video-frame {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 12px 12px 0 0;
}

.close-video {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    z-index: 10;
}

.close-video:hover {
    background: rgba(0, 0, 0, 0.9);
    transform: scale(1.1);
}

.video-header {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    font-size: 0.9rem;
    color: var(--text-secondary);
}

.video-icon {
    margin-right: 8px;
}

.video-footer {
    border-top: 1px solid var(--border-color);
    padding-top: 12px;
}

.video-label {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text-heading);
    margin-bottom: 8px;
}

/* What is Section */
.what-is-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    margin-bottom: 30px;
}

.what-is-content:nth-child(even) {
    direction: rtl;
}

.what-is-content:nth-child(even)>* {
    direction: ltr;
}

.what-is-text {
    overflow: hidden;
}

.what-is-text .section-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #FA9317;
    margin-bottom: 24px;
    text-align: left;
}

.what-is-description p {
    font-size: 1.125rem;
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 16px;
}

.what-is-image {
    position: relative;
}

.what-is-image img {
    width: 100%;
    height: auto;
    object-fit: cover;
}

.gameplay-screenshot {
    width: 80%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    border: 1px solid var(--border-color);
}


.feature-card {
    text-align: center;
    transition: all 0.3s ease;
}

.feature-card:hover .icon-large {
    transform: scale(1.1) rotate(5deg);
    filter: drop-shadow(0 0 10px rgba(250, 147, 23, 0.5));
}

.feature-card h3 {
    font-size: 1.25rem;
    margin-bottom: 12px;
    color: var(--text-heading);
}

.feature-card p {
    color: var(--text-secondary);
    line-height: 1.6;
}

.maps-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 24px;
    margin-bottom: 32px;
}

.map-card {
    padding: 0;
    text-align: center;
    background: linear-gradient(135deg, rgba(21, 21, 21, 0.6) 0%, rgba(21, 21, 21, 0.4) 100%);
    overflow: hidden;
}

.map-card:hover {
    background: linear-gradient(135deg, rgba(21, 21, 21, 0.8) 0%, rgba(21, 21, 21, 0.6) 100%);
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(250, 147, 23, 0.3);
}

.map-image {
    width: 100%;
    aspect-ratio: 16/9;
    overflow: hidden;
}

.map-screenshot {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.map-card:hover .map-screenshot {
    transform: scale(1.05);
}

.map-content {
    padding: 24px;
}

.map-content h3 {
    font-size: 1.5rem;
    background: linear-gradient(135deg, var(--text-heading) 0%, #FA9317 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 12px;
}

.map-content p {
    color: var(--text-secondary);
    line-height: 1.6;
}

.btn-primary {
    background: linear-gradient(135deg, var(--secondary-color) 0%, #e67e22 100%);
    color: white;
    border: 2px solid var(--secondary-color);
    padding: 16px 32px;
    font-size: 1.125rem;
    font-weight: 700;
    border-radius: 8px;
    box-shadow: 0 4px 16px rgba(240, 136, 62, 0.3);
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-block;
    text-align: center;
}

.btn-primary:hover {
    background: linear-gradient(135deg, #e67e22 0%, var(--secondary-color) 100%);
    border-color: #e67e22;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(240, 136, 62, 0.4);
    color: white;
}

.text-link {
    color: var(--primary-color);
    font-size: 1rem;
    font-weight: 600;
}

.feature-card .icon-large {
    font-size: 3rem;
    margin-bottom: 16px;
    display: block;
    text-align: center;
    transition: all 0.3s ease;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
}

.legacy-card {
    text-align: center;
}

.legacy-card h3 {
    font-size: 1.5rem;
    margin-bottom: 12px;
}

.legacy-card p {
    color: var(--text-secondary);
    line-height: 1.6;
}

.world-card {
    text-align: center;
}

.world-card h3 {
    font-size: 1.25rem;
    margin-bottom: 12px;
}

.world-card p {
    color: var(--text-secondary);
    line-height: 1.6;
}

.game-info-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
}

.game-left {
    display: flex;
    flex-direction: column;
}

.game-right {
    display: flex;
    flex-direction: column;
}

.languages-full {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
}

.languages-full .info-card {
    width: 100%;
}

.info-card,
.requirements-card {
    background: var(--card-bg);
    padding: 24px;
    border-radius: 12px;
    border: 1px solid var(--border-color);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
}

.info-card:hover,
.requirements-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 32px rgba(250, 147, 23, 0.2);
    border-color: #FA9317;
}

.info-header,
.req-header {
    margin-bottom: 20px;
    padding-bottom: 12px;
    border-bottom: 2px solid var(--border-color);
}

.info-header h3,
.req-header h3 {
    font-size: 1.25rem;
    color: var(--secondary-color);
    font-weight: 600;
    margin: 0;
}

.info-items {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.info-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    background: rgba(250, 147, 23, 0.05);
    border-radius: 8px;
    border-left: 3px solid #FA9317;
    transition: all 0.3s ease;
}

.info-item:hover {
    background: rgba(250, 147, 23, 0.1);
    transform: translateX(4px);
}

.item-label {
    font-size: 0.875rem;
    color: var(--text-secondary);
    font-weight: 500;
}

.item-value {
    font-size: 1rem;
    color: var(--text-heading);
    font-weight: 600;
    text-align: right;
}

.language-table {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid var(--border-color);
}

.table-header {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    background: rgba(250, 147, 23, 0.1);
    border-bottom: 1px solid var(--border-color);
}

.table-header span {
    padding: 12px 16px;
    font-weight: 600;
    color: var(--text-heading);
    font-size: 0.9rem;
    text-align: center;
}

.col-language {
    text-align: left !important;
}

.table-body {
    display: flex;
    flex-direction: column;
}

.table-row {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    transition: background 0.3s ease;
}

.table-row:last-child {
    border-bottom: none;
}

.table-row:hover {
    background: rgba(250, 147, 23, 0.05);
}

.table-row span {
    padding: 12px 16px;
    color: var(--text-primary);
    font-size: 0.9rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}

.table-row .col-language {
    text-align: left;
    justify-content: flex-start;
}

.col-interface,
.col-audio,
.col-subtitles {
    color: #FA9317;
    font-weight: 600;
}

.requirements-table {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid var(--border-color);
}

.req-table-header {
    display: grid;
    grid-template-columns: 1fr 2fr 2fr;
    background: rgba(240, 136, 62, 0.1);
    border-bottom: 1px solid var(--border-color);
}

.req-table-header span {
    padding: 12px 16px;
    font-weight: 600;
    color: var(--text-heading);
    font-size: 0.9rem;
    text-align: center;
}

.req-col-spec {
    text-align: left !important;
}

.req-table-body {
    display: flex;
    flex-direction: column;
}

.req-table-row {
    display: grid;
    grid-template-columns: 1fr 2fr 2fr;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    transition: background 0.3s ease;
}

.req-table-row:last-child {
    border-bottom: none;
}

.req-table-row:hover {
    background: rgba(240, 136, 62, 0.05);
}

.req-table-row span {
    padding: 12px 16px;
    color: var(--text-primary);
    font-size: 0.9rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}

.req-table-row .req-col-spec {
    text-align: left;
    justify-content: flex-start;
    font-weight: 600;
    color: var(--text-heading);
}

.guides-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 24px;
}

.guide-card {
    padding: 32px 24px;
}

.guide-header {
    margin-bottom: 16px;
}

.guide-badge {
    display: inline-block;
    padding: 4px 12px;
    background: linear-gradient(135deg, rgba(240, 136, 62, 0.2) 0%, rgba(250, 147, 23, 0.2) 100%);
    color: var(--secondary-color);
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 600;
    border: 1px solid rgba(240, 136, 62, 0.3);
    box-shadow: 0 2px 8px rgba(240, 136, 62, 0.2);
}

.guide-card h3 {
    font-size: 1.25rem;
    margin-bottom: 12px;
}

.guide-card p {
    color: var(--text-secondary);
    line-height: 1.6;
}

.faq-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}

.faq-item {
    padding: 24px;
}

.faq-item h3 {
    font-size: 1.125rem;
    margin-bottom: 12px;
    color: #FA9317;
    font-weight: 600;
}

.faq-item p {
    color: var(--text-secondary);
    line-height: 1.6;
}

.faq-item:hover {
    border-color: #FA9317;
    background-color: rgba(21, 21, 21, 0.8);
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(250, 147, 23, 0.2);
}

/* Reviews Section */
.reviews-section {
    padding: 80px 0;
}

.reviews-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 24px;
    max-width: 1200px;
    margin: 0 auto;
}

.review-card {
    padding: 24px;
    transition: all 0.3s ease;
}

.review-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(250, 147, 23, 0.2);
    border-color: #FA9317;
}

.review-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 16px;
}

.reviewer-info {
    display: flex;
    align-items: center;
    gap: 12px;
}

.reviewer-avatar {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, #FA9317 0%, var(--secondary-color) 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    border: 2px solid var(--border-color);
    overflow: hidden;
}

.reviewer-avatar-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.reviewer-details h4 {
    font-size: 1rem;
    color: var(--text-heading);
    margin: 0 0 4px 0;
    font-weight: 600;
}

.review-rating {
    display: flex;
    align-items: center;
    gap: 8px;
}

.stars {
    color: #ffd700;
    font-size: 0.9rem;
}



/* Animations */
@keyframes letterReveal {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-50px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateX(50px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}




/* Hideout Section */
.hideout-section {
    padding: 80px 0;
}

.guides-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
    margin-bottom: 30px;
}

.guide-card-link {
    text-decoration: none;
    display: block;
    overflow: hidden;
    padding: 0;
}

.guide-image {
    width: 100%;
    height: 200px;
    overflow: hidden;
}

.guide-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.guide-card-link:hover .guide-img {
    transform: scale(1.1);
}

.guide-content {
    padding: 24px;
}

.guide-content h3 {
    font-size: 1.5rem;
    background: linear-gradient(135deg, var(--text-heading) 0%, #FA9317 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 12px;
}

.guide-content p {
    color: var(--text-secondary);
    line-height: 1.6;
}

.hideout-card {
    text-align: center;
}

.hideout-card h3 {
    font-size: 1.25rem;
    margin-bottom: 12px;
}

.hideout-card p {
    color: var(--text-secondary);
    line-height: 1.6;
}

/* Stats */
.stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    margin-top: 48px;
}

.stat-item {
    text-align: center;
}

.stat-item h3 {
    font-size: 2.5rem;
    color: var(--secondary-color);
    margin-bottom: 8px;
    background: linear-gradient(135deg, var(--secondary-color) 0%, var(--accent-blue) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.stat-item p {
    color: var(--text-secondary);
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

@media (max-width: 768px) {
    .hero-title {
        font-size: 2.5rem;
    }

    .hero-subtitle {
        font-size: 1.125rem;
    }

    .game-info-content {
        grid-template-columns: 1fr;
        gap: 32px;
    }

    .single-player-content {
        grid-template-columns: 1fr;
        text-align: center;
    }

    .stats {
        grid-template-columns: 1fr;
        gap: 24px;
    }
}
</style>
