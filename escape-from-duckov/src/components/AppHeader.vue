<template>
  <header class="app-header" :class="{ 'scrolled': isScrolled }">
    <div class="container">
      <nav class="navbar">
        <div class="logo">
          <img src="/images/logo.png" alt="Escape from Duckov" class="logo-image">
          <span class="logo-text">Escape from Duckov</span>
        </div>
        <ul class="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/guides">Guides</a></li>
          <li><a href="/wiki">Wiki</a></li>
          <li><a href="/maps">Maps</a></li>
          <li><a href="/mods">Mods</a></li>
        </ul>
        <button class="hamburger-btn" @click="toggleMenu" :class="{ 'active': isMenuOpen }">
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>
      </nav>
    </div>
    
    <!-- Mobile Menu Overlay -->
    <div class="mobile-menu-overlay" :class="{ 'active': isMenuOpen }" @click="closeMenu"></div>
    
    <!-- Mobile Menu Drawer -->
    <div class="mobile-menu-drawer" :class="{ 'active': isMenuOpen }">
      <div class="mobile-menu-header">
        <div class="mobile-logo">
          <img src="/images/logo.png" alt="Escape from Duckov" class="mobile-logo-image">
          <span class="mobile-logo-text">Escape from Duckov</span>
        </div>
        <button class="close-menu-btn" @click="closeMenu">×</button>
      </div>
      <nav class="mobile-nav">
        <ul class="mobile-nav-links">
          <li><a href="/" @click="closeMenu">Home</a></li>
          <li><a href="/guides" @click="closeMenu">Guides</a></li>
          <li><a href="/wiki" @click="closeMenu">Wiki</a></li>
          <li><a href="/maps" @click="closeMenu">Maps</a></li>
          <li><a href="/mods" @click="closeMenu">Mods</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (isMenuOpen.value) {
    lockScroll()
  } else {
    unlockScroll()
  }
}

const closeMenu = () => {
  isMenuOpen.value = false
  unlockScroll()
}

const lockScroll = () => {
  document.body.style.overflow = 'hidden'
}

const unlockScroll = () => {
  document.body.style.overflow = ''
}

const handleEscapeKey = (event) => {
  if (event.key === 'Escape' && isMenuOpen.value) {
    closeMenu()
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('keydown', handleEscapeKey)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('keydown', handleEscapeKey)
  unlockScroll()
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

.logo{
  display: flex;
  align-items: center;
  gap: 16px;
}

.logo-image {
  width: 50px;
  height: 50px;
}

.logo-text {
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

/* Hamburger Button */
.hamburger-btn {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;
}

.hamburger-line {
  width: 100%;
  height: 3px;
  background-color: var(--text-primary);
  transition: all 0.3s ease;
  transform-origin: center;
}

.hamburger-btn.active .hamburger-line:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.hamburger-btn.active .hamburger-line:nth-child(2) {
  opacity: 0;
}

.hamburger-btn.active .hamburger-line:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* Mobile Menu Overlay */
.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 9998;
}

.mobile-menu-overlay.active {
  opacity: 1;
  visibility: visible;
}

/* Mobile Menu Drawer */
.mobile-menu-drawer {
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100vh;
  background-color: var(--bg-card);
  border-left: 1px solid var(--border-color);
  transform: translateX(100%);
  transition: transform 0.3s ease;
  z-index: 9999;
  overflow-y: auto;
}

.mobile-menu-drawer.active {
  transform: translateX(0);
}

.mobile-menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid var(--border-color);
}

.mobile-logo {
  display: flex;
  align-items: center;
  gap: 12px;
}

.mobile-logo-image {
  width: 40px;
  height: 40px;
}

.mobile-logo-text {
  font-size: 1rem;
  color: var(--text-heading);
  font-weight: 700;
}

.close-menu-btn {
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: 24px;
  cursor: pointer;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-nav {
  padding: 20px 0;
}

.mobile-nav-links {
  list-style: none;
  margin: 0;
  padding: 0;
}

.mobile-nav-links li {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.mobile-nav-links li:last-child {
  border-bottom: none;
}

.mobile-nav-links a {
  display: block;
  padding: 16px 20px;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.mobile-nav-links a:hover {
  color: var(--text-primary);
  background-color: rgba(250, 147, 23, 0.1);
  padding-left: 30px;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .nav-links {
    display: none;
  }
  
  .hamburger-btn {
    display: flex;
  }
}

@media (max-width: 768px) {
  .logo{
    gap: 10px;
  }
  
  .navbar {
    padding: 12px 0;
  }
  
  .logo-text {
    font-size: 1rem;
  }
  
  .logo-image {
    width: 40px;
    height: 40px;
  }
  
  .mobile-menu-drawer {
    width: 280px;
  }
}

</style>
