<template>
  <header class="app-header" :class="{ 'scrolled': isScrolled }">
    <div class="container">
      <nav class="navbar">
        <div class="logo">
          <h1>Escape from Duckov</h1>
        </div>
        <ul class="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/guides">Guides</a></li>
          <li><a href="/wiki">Wiki</a></li>
          <li><a href="/maps">Maps</a></li>
          <li><a href="/mods">Mods</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.app-header {
  background-color: transparent;
  border-bottom: 1px solid var(--border-color);
  position: sticky;
  top: 0;
  z-index: 100;
  transition: all 0.3s ease;
  backdrop-filter: blur(0px);
}

.app-header.scrolled {
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  border-bottom-color: rgba(250, 147, 23, 0.3);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
}

.logo h1 {
  font-size: 1.25rem;
  color: var(--text-heading);
  font-weight: 700;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 24px;
  align-items: center;
}

.nav-links a {
  color: var(--text-secondary);
  font-size: 0.875rem;
  transition: color 0.2s ease;
}

.nav-links a:hover,
.nav-links a.active {
  color: var(--text-primary);
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    gap: 16px;
  }

  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
  }
}
</style>
