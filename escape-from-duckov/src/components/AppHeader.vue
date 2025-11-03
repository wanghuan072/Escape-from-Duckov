<template>
  <header class="app-header" :class="{ 'scrolled': isScrolled }">
    <div class="container">
      <nav class="navbar">
        <a :href="getLocalizedPathForCurrentLang('/')" class="logo">
          <img src="/images/logo.png" alt="Escape from Duckov" class="logo-image">
          <span class="logo-text">Escape from Duckov</span>
        </a>
        <ul class="nav-links">
          <li><a :href="getLocalizedPathForCurrentLang('/')">Home</a></li>
          <li><a :href="getLocalizedPathForCurrentLang('/guides')">Guides</a></li>
          <li><a :href="getLocalizedPathForCurrentLang('/wiki')">Wiki</a></li>
          <li><a :href="getLocalizedPathForCurrentLang('/items')">Items</a></li>
          <li><a :href="getLocalizedPathForCurrentLang('/maps')">Maps</a></li>
          <li><a :href="getLocalizedPathForCurrentLang('/mods')">Mods</a></li>
        </ul>
        
        <!-- 语言选择器 -->
        <div class="language-switcher">
          <div class="language-dropdown" @click="toggleLanguageDropdown">
            <span class="current-language">{{ getLanguageDisplayName(currentLocale) }}</span>
            <span class="dropdown-arrow">▼</span>
          </div>
          <ul class="language-menu" :class="{ 'open': isLanguageDropdownOpen }">
            <li v-for="lang in supportedLanguages" :key="lang">
              <a href="#" @click.prevent="switchLanguage(lang)" :class="{ 'active': currentLocale === lang }">
                {{ getLanguageDisplayName(lang) }}
              </a>
            </li>
          </ul>
        </div>
        
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
        <a :href="getLocalizedPathForCurrentLang('/')" class="mobile-logo" @click="closeMenu">
          <img src="/images/logo.png" alt="Escape from Duckov" class="mobile-logo-image">
          <span class="mobile-logo-text">Escape from Duckov</span>
        </a>
        <button class="close-menu-btn" @click="closeMenu">×</button>
      </div>
      <nav class="mobile-nav">
        <ul class="mobile-nav-links">
          <li><a :href="getLocalizedPathForCurrentLang('/')" @click="closeMenu">Home</a></li>
          <li><a :href="getLocalizedPathForCurrentLang('/guides')" @click="closeMenu">Guides</a></li>
          <li><a :href="getLocalizedPathForCurrentLang('/wiki')" @click="closeMenu">Wiki</a></li>
          <li><a :href="getLocalizedPathForCurrentLang('/items')" @click="closeMenu">Items</a></li>
          <li><a :href="getLocalizedPathForCurrentLang('/maps')" @click="closeMenu">Maps</a></li>
          <li><a :href="getLocalizedPathForCurrentLang('/mods')" @click="closeMenu">Mods</a></li>
          
          <!-- 移动端语言选择器 -->
          <li class="mobile-language-item">
            <div class="mobile-language-dropdown" @click="toggleMobileLanguageDropdown">
              <span>{{ getLanguageDisplayName(currentLocale) }}</span>
              <span class="dropdown-arrow">▼</span>
            </div>
            <ul class="mobile-language-menu" :class="{ 'open': isMobileLanguageDropdownOpen }">
              <li v-for="lang in supportedLanguages" :key="lang">
                <a href="#" @click.prevent="switchLanguage(lang)" :class="{ 'active': currentLocale === lang }">
                  {{ getLanguageDisplayName(lang) }}
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { supportedLanguages } from '../i18n'
import { switchLanguagePath, getLocalizedPath } from '../utils/routeUtils'

const route = useRoute()
const router = useRouter()
const { locale } = useI18n()

const isScrolled = ref(false)
const isMenuOpen = ref(false)
const isLanguageDropdownOpen = ref(false)
const isMobileLanguageDropdownOpen = ref(false)

const currentLocale = computed(() => locale.value)

// 语言显示名称映射
const languageNames = {
  en: 'English',
  de: 'Deutsch',
  fr: 'Français',
  es: 'Español',
  ja: '日本語',
  ko: '한국어',
  ru: 'Русский',
  pt: 'Português',
  zh: '中文'
}

const getLanguageDisplayName = (lang) => {
  return languageNames[lang] || lang.toUpperCase()
}

// 从路径检测语言（与路由守卫一致）
const detectLanguageFromRoutePath = (path) => {
  for (const lang of supportedLanguages) {
    if (lang === 'en') continue
    if (path.startsWith(`/${lang}/`) || path === `/${lang}`) {
      return lang
    }
  }
  return 'en'
}

// 获取当前语言的路径（优先从 URL 路径检测）
const getLocalizedPathForCurrentLang = (path) => {
  // 优先从当前路由路径检测语言，确保与 URL 一致
  const pathLang = detectLanguageFromRoutePath(route.path)
  const targetLang = pathLang !== 'en' ? pathLang : currentLocale.value
  return getLocalizedPath(path, targetLang)
}

const toggleLanguageDropdown = () => {
  isLanguageDropdownOpen.value = !isLanguageDropdownOpen.value
}

const toggleMobileLanguageDropdown = () => {
  isMobileLanguageDropdownOpen.value = !isMobileLanguageDropdownOpen.value
}

const switchLanguage = (lang) => {
  isLanguageDropdownOpen.value = false
  isMobileLanguageDropdownOpen.value = false
  isMenuOpen.value = false
  
  const targetPath = switchLanguagePath(route.path, lang)
  window.location.href = targetPath
}

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
  if (event.key === 'Escape') {
    if (isMenuOpen.value) {
      closeMenu()
    }
    if (isLanguageDropdownOpen.value) {
      isLanguageDropdownOpen.value = false
    }
    if (isMobileLanguageDropdownOpen.value) {
      isMobileLanguageDropdownOpen.value = false
    }
  }
}

const handleClickOutside = (event) => {
  const languageSwitcher = event.target.closest('.language-switcher')
  if (!languageSwitcher && isLanguageDropdownOpen.value) {
    isLanguageDropdownOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('keydown', handleEscapeKey)
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('keydown', handleEscapeKey)
  document.removeEventListener('click', handleClickOutside)
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

/* Language Switcher */
.language-switcher {
  position: relative;
  margin-left: 24px;
}

.language-dropdown {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.language-dropdown:hover {
  background: rgba(255, 255, 255, 0.1);
}

.current-language {
  color: var(--text-primary);
  font-size: 0.875rem;
}

.dropdown-arrow {
  color: var(--text-secondary);
  font-size: 0.75rem;
  transition: transform 0.2s ease;
}

.language-menu {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 150px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  list-style: none;
  padding: 8px 0;
  margin: 0;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.2s ease;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.language-menu.open {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.language-menu li {
  margin: 0;
}

.language-menu a {
  display: block;
  padding: 10px 16px;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.875rem;
  transition: all 0.2s ease;
}

.language-menu a:hover,
.language-menu a.active {
  color: var(--text-primary);
  background: rgba(250, 147, 23, 0.1);
}

/* Mobile Language Switcher */
.mobile-language-item {
  border-bottom: none !important;
  padding: 0;
}

.mobile-language-dropdown {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  color: var(--text-secondary);
  cursor: pointer;
}

.mobile-language-menu {
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.mobile-language-menu.open {
  max-height: 300px;
}

.mobile-language-menu li {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.mobile-language-menu a {
  display: block;
  padding: 12px 20px;
  padding-left: 40px;
  color: var(--text-secondary);
  text-decoration: none;
  transition: all 0.2s ease;
}

.mobile-language-menu a:hover,
.mobile-language-menu a.active {
  color: var(--text-primary);
  background-color: rgba(250, 147, 23, 0.1);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .nav-links {
    display: none;
  }
  
  .language-switcher {
    margin-left: 16px;
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
