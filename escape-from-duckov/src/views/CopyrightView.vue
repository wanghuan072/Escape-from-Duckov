<template>
  <div class="legal-page">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <div class="page-header-content">
          <div class="page-header-text">
            <h1 class="page-title">{{ t('CopyrightPage.title') }}</h1>
            <p class="page-subtitle">{{ t('CopyrightPage.subtitle') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Copyright Content -->
    <section class="legal-content">
      <div class="container">
        <div class="legal-document">
          <h2>{{ t('CopyrightPage.statement.title') }}</h2>
          <p>
            {{ t('CopyrightPage.statement.text') }}
          </p>

          <h2>{{ t('CopyrightPage.whatWeOwn.title') }}</h2>
          <ul>
            <li><strong>{{ t('CopyrightPage.whatWeOwn.items.original') }}</strong></li>
            <li><strong>{{ t('CopyrightPage.whatWeOwn.items.design') }}</strong></li>
            <li><strong>{{ t('CopyrightPage.whatWeOwn.items.images') }}</strong></li>
            <li><strong>{{ t('CopyrightPage.whatWeOwn.items.code') }}</strong></li>
          </ul>

          <h2>{{ t('CopyrightPage.thirdParty.title') }}</h2>
          <p>
            {{ t('CopyrightPage.thirdParty.text') }}
          </p>

          <h2>{{ t('CopyrightPage.fairUse.title') }}</h2>
          <p>
            {{ t('CopyrightPage.fairUse.text') }}
          </p>
          <p><strong>{{ t('CopyrightPage.fairUse.allowed') }}</strong></p>
          <ul>
            <li v-for="(item, index) in allowedItems" :key="index">{{ item }}</li>
          </ul>
          <p><strong>{{ t('CopyrightPage.fairUse.restricted') }}</strong></p>
          <ul>
            <li v-for="(item, index) in restrictedItems" :key="index">{{ item }}</li>
          </ul>

          <h2>{{ t('CopyrightPage.dmca.title') }}</h2>
          <p>
            {{ t('CopyrightPage.dmca.text') }}
          </p>
          <p><strong>{{ t('CopyrightPage.dmca.subtitle') }}</strong></p>
          <ul>
            <li v-for="(item, index) in dmcaItems" :key="index">{{ item }}</li>
          </ul>

          <h2>{{ t('CopyrightPage.attribution.title') }}</h2>
          <p>
            {{ t('CopyrightPage.attribution.text') }}
          </p>

          <h2>{{ t('CopyrightPage.license.title') }}</h2>
          <p>
            {{ t('CopyrightPage.license.text') }}
          </p>
          <p><strong>{{ t('CopyrightPage.license.subtitle') }}</strong></p>
          <ul>
            <li v-for="(item, index) in licenseItems" :key="index">{{ item }}</li>
          </ul>

          <h2>{{ t('CopyrightPage.contact.title') }}</h2>
          <p>
            {{ t('CopyrightPage.contact.email') }} <a href="mailto:wyong@duckovgame.com">wyong@duckovgame.com</a>
          </p>

          <h2>{{ t('CopyrightPage.updates.title') }}</h2>
          <p>
            {{ t('CopyrightPage.updates.p1') }}
          </p>
          <p>
            {{ t('CopyrightPage.updates.p2') }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

// 使用 tm() 获取原始数组值
const allowedItems = computed(() => {
  const items = tm('CopyrightPage.fairUse.allowedItems')
  return Array.isArray(items) ? items : []
})

const restrictedItems = computed(() => {
  const items = tm('CopyrightPage.fairUse.restrictedItems')
  return Array.isArray(items) ? items : []
})

const dmcaItems = computed(() => {
  const items = tm('CopyrightPage.dmca.items')
  return Array.isArray(items) ? items : []
})

const licenseItems = computed(() => {
  const items = tm('CopyrightPage.license.items')
  return Array.isArray(items) ? items : []
})
</script>

<style scoped>
.legal-page {
  min-height: 100vh;
}

.legal-content {
  padding: 80px 0;
}

.legal-document {
  max-width: 900px;
  margin: 0 auto;
  background: var(--card-bg);
  padding: 60px;
  border-radius: 16px;
  border: 1px solid var(--border-color);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  position: relative;
}

.legal-document::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #FA9317 0%, #e67e22 100%);
  border-radius: 16px 16px 0 0;
}

.legal-document section {
  margin-bottom: 32px;
}

.legal-document section:last-child {
  margin-bottom: 0;
}

.legal-document h2 {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text-heading);
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 2px solid rgba(250, 147, 23, 0.3);
  position: relative;
}

.legal-document h2::before {
  content: '';
  position: absolute;
  left: -20px;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 24px;
  background: linear-gradient(135deg, #FA9317 0%, #e67e22 100%);
  border-radius: 2px;
}

.legal-document h3 {
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--text-heading);
  margin: 24px 0 16px 0;
  padding-left: 16px;
  position: relative;
}

.legal-document h3::before {
  content: '▶';
  position: absolute;
  left: 0;
  color: #FA9317;
  font-size: 0.8rem;
}

.legal-document p {
  color: var(--text-primary);
  margin-bottom: 16px;
  font-size: 1rem;
  line-height: 1.6;
}

.legal-document ul {
  margin: 16px 0;
  padding-left: 0;
}

.legal-document li {
  list-style: none;
  position: relative;
  padding: 8px 0 8px 20px;
  color: var(--text-primary);
  font-size: 1rem;
  line-height: 1.5;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.legal-document li::before {
  content: '·';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  color: #FA9317;
  font-weight: bold;
  font-size: 1.2rem;
}

.legal-document strong {
  color: var(--text-heading);
  font-weight: 600;
}

.legal-document em {
  color: var(--text-secondary);
  font-style: italic;
}

.legal-document a {
  color: #FA9317;
  text-decoration: none;
  font-weight: 600;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;
}

.legal-document a:hover {
  color: #e67e22;
  border-bottom-color: #e67e22;
}

@media (max-width: 768px) {
  .legal-document {
    padding: 32px 24px;
  }
  
  .legal-document h2 {
    font-size: 1.5rem;
  }
  
  .legal-document h3 {
    font-size: 1.2rem;
  }
  
  .legal-document p,
  .legal-document li {
    font-size: 0.9rem;
  }
}
</style>
