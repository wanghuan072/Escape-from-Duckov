<template>
    <div class="maps-view">
        <!-- Maps Header -->
        <section class="page-header">
            <div class="container">
                <div class="page-header-content">
                    <div class="page-header-text">
                        <h1 class="page-title">Duckov Zones & Maps</h1>
                        <p class="page-subtitle">Explore detailed layouts and strategies for every location in Escape from Duckov.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Maps Content -->
        <section class="maps-content">
            <div class="container">
                <div class="maps-list">
                    <!-- Bunker Map -->
                    <div class="map-item">
                        <div class="map-header">
                            <h2 class="map-title">Bunker</h2>
                            <p class="map-description">Your safe haven and base of operations. Manage your inventory, upgrade equipment, and plan your next expedition.</p>
                        </div>
                        <div class="map-iframe-container">
                            <iframe src="https://mapgenie.io/escape-from-duckov/maps/bunker?embed=light" height="500" style="position: relative; width: 100%;"></iframe>
                        </div>
                    </div>

                    <!-- Ground Zero Map -->
                    <div class="map-item">
                        <div class="map-header">
                            <h2 class="map-title">Ground Zero</h2>
                            <p class="map-description">The starting area for new survivors. Contains basic loot, early quest objectives, and relatively safe exploration opportunities.</p>
                        </div>
                        <div class="map-iframe-container">
                            <iframe src="https://mapgenie.io/escape-from-duckov/maps/ground-zero?embed=light" height="500" style="position: relative; width: 100%;"></iframe>
                        </div>
                    </div>

                    <!-- Farm Map -->
                    <div class="map-item">
                        <div class="map-header">
                            <h2 class="map-title">Farm</h2>
                            <p class="map-description">Agricultural area with valuable resources and moderate danger. Perfect for mid-game progression and resource gathering.</p>
                        </div>
                        <div class="map-iframe-container">
                            <iframe src="https://mapgenie.io/escape-from-duckov/maps/farm?embed=light" height="500" style="position: relative; width: 100%;"></iframe>
                        </div>
                    </div>

                    <!-- Warehouse Map -->
                    <div class="map-item">
                        <div class="map-header">
                            <h2 class="map-title">Warehouse</h2>
                            <p class="map-description">Industrial storage facility with high-value loot and increased enemy presence. Requires careful planning and adequate equipment.</p>
                        </div>
                        <div class="map-iframe-container">
                            <iframe src="https://mapgenie.io/escape-from-duckov/maps/warehouse?embed=light" height="500" style="position: relative; width: 100%;"></iframe>
                        </div>
                    </div>

                    <!-- J-Lab Map -->
                    <div class="map-item">
                        <div class="map-header">
                            <h2 class="map-title">J-Lab</h2>
                            <p class="map-description">High-tech research facility with advanced equipment and dangerous experiments. Only for experienced survivors with top-tier gear.</p>
                        </div>
                        <div class="map-iframe-container">
                            <iframe src="https://mapgenie.io/escape-from-duckov/maps/j-lab?embed=light" height="500" style="position: relative; width: 100%;"></iframe>
                        </div>
                    </div>

                    <!-- Storm Area Map -->
                    <div class="map-item">
                        <div class="map-header">
                            <h2 class="map-title">Storm Area</h2>
                            <p class="map-description">The most dangerous zone in Duckov. Extreme weather conditions, elite enemies, and legendary loot await the bravest survivors.</p>
                        </div>
                        <div class="map-iframe-container">
                            <iframe src="https://mapgenie.io/escape-from-duckov/maps/storm-area?embed=light" height="500" style="position: relative; width: 100%;"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
// Maps page placeholder
</script>

<style scoped>
.maps-view {
    min-height: 100vh;
}

.maps-list {
    max-width: 1200px;
    margin: 0 auto;
}

.map-item {
    background: var(--card-bg);
    border-radius: 16px;
    border: 1px solid var(--border-color);
    margin-bottom: 40px;
    overflow: hidden;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.map-item:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
    border-color: rgba(250, 147, 23, 0.3);
}

.map-item:last-child {
    margin-bottom: 0;
}

.map-header {
    padding: 32px 40px;
    background: linear-gradient(135deg, rgba(250, 147, 23, 0.05) 0%, transparent 50%);
    border-bottom: 1px solid rgba(250, 147, 23, 0.1);
}

.map-title {
    font-size: 2rem;
    font-weight: 700;
    color: var(--text-heading);
    margin-bottom: 12px;
    background: linear-gradient(135deg, var(--text-heading) 0%, #FA9317 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.map-description {
    font-size: 1.1rem;
    color: var(--text-secondary);
    line-height: 1.6;
    margin: 0;
}

.map-iframe-container {
    position: relative;
    width: 100%;
    background: #f8f9fa;
    border-radius: 0 0 16px 16px;
    overflow: hidden;
}

.map-iframe-container iframe {
    display: block;
    border: none;
    border-radius: 0 0 16px 16px;
}

@media (max-width: 768px) {
    .map-header {
        padding: 24px 20px;
    }
    
    .map-title {
        font-size: 1.5rem;
    }
    
    .map-description {
        font-size: 1rem;
    }
    
    .map-item {
        margin-bottom: 30px;
    }
}
</style>

