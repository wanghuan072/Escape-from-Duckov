<template>
  <footer class="app-footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <div class="footer-logo">
            <img src="/images/logo.png" alt="Escape from Duckov" class="logo-image">
            <span class="logo-text">Escape from Duckov</span>
          </div>
          <p>{{ t('Footer.description') }}</p>
          <div class="social-links">
            <a href="https://www.facebook.com/profile.php?id=61583231274732" target="_blank" class="social-link">
              <svg t="1762158353754" class="icon" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="2664" width="200" height="200">
                <path
                  d="M725.333333 149.333333a21.333333 21.333333 0 0 0-21.333333-21.333333H597.333333a203.52 203.52 0 0 0-213.333333 192v115.2H277.333333a21.333333 21.333333 0 0 0-21.333333 21.333333v110.933334a21.333333 21.333333 0 0 0 21.333333 21.333333H384v285.866667a21.333333 21.333333 0 0 0 21.333333 21.333333h128a21.333333 21.333333 0 0 0 21.333334-21.333333v-285.866667h111.786666a21.333333 21.333333 0 0 0 20.906667-15.786667l30.72-110.933333a21.333333 21.333333 0 0 0-20.48-26.88H554.666667V320a42.666667 42.666667 0 0 1 42.666666-38.4h106.666667a21.333333 21.333333 0 0 0 21.333333-21.333333z"
                  fill="#ffffff" p-id="2665"></path>
              </svg>
            </a>
            <a href="https://x.com/M1FC7w9QW048571/status/1984148632967479731" target="_blank" class="social-link">
              <svg t="1762158384601" class="icon" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="4626" width="200" height="200">
                <path
                  d="M778.41 96h141.142L611.2 448.427 973.952 928H689.92L467.456 637.141 212.906 928H71.68l329.813-376.96L53.504 96h291.243l201.088 265.856z m-49.535 747.52h78.208L302.25 176.043h-83.926z"
                  fill="#ffffff" p-id="4627"></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="footer-links">
          <div class="link-column">
            <h4>{{ t('Footer.quickLinks') }}</h4>
            <ul>
              <li><a :href="getLocalizedPathForCurrentLang('/guides')">{{ t('Footer.links.guides') }}</a></li>
              <li><a :href="getLocalizedPathForCurrentLang('/wiki')">{{ t('Footer.links.wiki') }}</a></li>
              <li><a :href="getLocalizedPathForCurrentLang('/items')">{{ t('Footer.links.items') }}</a></li>
              <li><a :href="getLocalizedPathForCurrentLang('/maps')">{{ t('Footer.links.maps') }}</a></li>
              <li><a :href="getLocalizedPathForCurrentLang('/mods')">{{ t('Footer.links.mods') }}</a></li>
            </ul>
          </div>
          <div class="link-column">
            <h4>{{ t('Footer.legal') }}</h4>
            <ul>
              <li><a :href="getLocalizedPathForCurrentLang('/privacy-policy')">{{ t('Footer.links.privacyPolicy') }}</a>
              </li>
              <li><a :href="getLocalizedPathForCurrentLang('/terms-of-service')">{{ t('Footer.links.termsOfService')
              }}</a></li>
              <li><a :href="getLocalizedPathForCurrentLang('/copyright')">{{ t('Footer.links.copyright') }}</a></li>
              <li><a :href="getLocalizedPathForCurrentLang('/about-us')">{{ t('Footer.links.aboutUs') }}</a></li>
              <li><a :href="getLocalizedPathForCurrentLang('/contact-us')">{{ t('Footer.links.contactUs') }}</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="copyright">{{ t('Footer.copyright') }}</p>
        <p>{{ t('Footer.disclaimer') }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { getLocalizedPath } from '../utils/routeUtils'
import { detectLanguageFromPath } from '../i18n'

const { t, locale } = useI18n()
const route = useRoute()

// 获取当前语言的路径
const getLocalizedPathForCurrentLang = (path) => {
  const pathLang = detectLanguageFromPath(route.path)
  const targetLang = pathLang !== 'en' ? pathLang : (locale.value || 'en')
  return getLocalizedPath(path, targetLang)
}
</script>

<style scoped>
.app-footer {
  background-color: transparent;
  border-top: 1px solid var(--border-color);
  padding: 48px 0 24px;
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  margin-bottom: 32px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
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

.social-links {
  display: flex;
  gap: 16px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: 1px solid #aaa;
  border-radius: 50%;
  padding: 8px;
  transition: all 0.3s ease;
}

.social-link:hover {
  background-color: var(--background-secondary);
  color: var(--text-primary);
  transform: translateY(-2px);
}

.footer-brand p {
  color: var(--text-secondary);
  font-size: 0.875rem;
  margin-bottom: 20px;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}

.link-column h4 {
  font-size: 0.875rem;
  margin-bottom: 12px;
  color: var(--text-heading);
}

.link-column ul {
  list-style: none;
}

.link-column ul li {
  margin-bottom: 8px;
}

.link-column ul li a {
  color: var(--text-secondary);
  font-size: 0.875rem;
  transition: color 0.2s ease;
}

.link-column ul li a:hover {
  color: var(--text-primary);
}

.footer-bottom {
  padding-top: 24px;
  border-top: 1px solid var(--border-color);
  text-align: center;
}

.footer-bottom p {
  color: var(--text-secondary);
  font-size: 0.75rem;
  margin-bottom: 4px;
}

.copyright {
  color: var(--text-secondary);
  font-size: 0.75rem;
}

@media (max-width: 768px) {
  .app-footer {
    padding: 20px 0 10px;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .link-column h4 {
    font-size: 14px;
    margin-bottom: 10px;
  }

  .link-column ul li {
    margin-bottom: 5px;
    line-height: 20px;
  }

  .link-column ul li a {
    font-size: 12px;
  }

  .footer-bottom p {
    font-size: 12px;
  }

  .copyright {
    font-size: 12px;
  }
}
</style>
