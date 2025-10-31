<template>
  <div class="legal-page">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <div class="page-header-content">
          <div class="page-header-text">
            <h1 class="page-title">{{ t('PrivacyPolicyPage.title') }}</h1>
            <p class="page-subtitle">{{ t('PrivacyPolicyPage.subtitle') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Privacy Policy Content -->
    <section class="legal-content">
      <div class="container">
        <div class="legal-document">
          <p class="last-updated">{{ t('PrivacyPolicyPage.lastUpdated') }}</p>
          
          <section>
            <h2>{{ t('PrivacyPolicyPage.generalInfo.title') }}</h2>
            <p>
              {{ t('PrivacyPolicyPage.generalInfo.p1') }}
            </p>
            <p>
              {{ t('PrivacyPolicyPage.generalInfo.p2') }}
            </p>
            <p>
              {{ t('PrivacyPolicyPage.generalInfo.p3') }} <a href="mailto:wyong@duckovgame.com">wyong@duckovgame.com</a>.
            </p>
          </section>

          <section>
            <h2>{{ t('PrivacyPolicyPage.dataCollection.title') }}</h2>

            <h3>{{ t('PrivacyPolicyPage.dataCollection.provided.title') }}</h3>
            <p>{{ t('PrivacyPolicyPage.dataCollection.provided.text') }}</p>
            <ul>
                <li v-for="item in t('PrivacyPolicyPage.dataCollection.provided.items')" :key="item">{{ item }}</li>
            </ul>

            <h3>{{ t('PrivacyPolicyPage.dataCollection.automated.title') }}</h3>
            <p>{{ t('PrivacyPolicyPage.dataCollection.automated.text') }}</p>
            <ul>
                <li v-for="item in t('PrivacyPolicyPage.dataCollection.automated.items')" :key="item">{{ item }}</li>
            </ul>

            <h3>{{ t('PrivacyPolicyPage.dataCollection.thirdParty.title') }}</h3>
            <p>{{ t('PrivacyPolicyPage.dataCollection.thirdParty.text') }}</p>
          </section>

          <section>
            <h2>{{ t('PrivacyPolicyPage.legalBasis.title') }}</h2>
            <p>{{ t('PrivacyPolicyPage.legalBasis.text') }}</p>
            <ul>
                <li v-for="item in t('PrivacyPolicyPage.legalBasis.items')" :key="item">{{ item }}</li>
            </ul>
            <p>{{ t('PrivacyPolicyPage.legalBasis.p2') }}</p>
            <p><em>Note:</em> {{ t('PrivacyPolicyPage.legalBasis.note') }}</p>
          </section>

          <section>
            <h2>{{ t('PrivacyPolicyPage.dataRetention.title') }}</h2>
            <p>{{ t('PrivacyPolicyPage.dataRetention.text') }}</p>
          </section>

          <section>
            <h2>{{ t('PrivacyPolicyPage.gdpr.title') }}</h2>
            <p>{{ t('PrivacyPolicyPage.gdpr.text') }}</p>
            <ul>
                <li v-for="item in t('PrivacyPolicyPage.gdpr.items')" :key="item">{{ item }}</li>
            </ul>
            <p>{{ t('PrivacyPolicyPage.gdpr.p2') }}</p>
          </section>

          <section>
            <h2>{{ t('PrivacyPolicyPage.rights.title') }}</h2>
            <p>{{ t('PrivacyPolicyPage.rights.text1') }} <a href="mailto:wyong@duckovgame.com">wyong@duckovgame.com</a>
                {{ t('PrivacyPolicyPage.rights.text2') }}</p>
          </section>

          <section>
            <h2>{{ t('PrivacyPolicyPage.cookies.title') }}</h2>

            <h3>{{ t('PrivacyPolicyPage.cookies.what.title') }}</h3>
            <p>{{ t('PrivacyPolicyPage.cookies.what.text') }}</p>

            <h3>{{ t('PrivacyPolicyPage.cookies.types.title') }}</h3>
            <ul>
                <li><strong>{{ t('PrivacyPolicyPage.cookies.types.first') }}</strong></li>
                <li><strong>{{ t('PrivacyPolicyPage.cookies.types.third') }}</strong></li>
            </ul>

            <h3>{{ t('PrivacyPolicyPage.cookies.use.title') }}</h3>
            <p>{{ t('PrivacyPolicyPage.cookies.use.text') }}</p>

            <h3>{{ t('PrivacyPolicyPage.cookies.manage.title') }}</h3>
            <p>{{ t('PrivacyPolicyPage.cookies.manage.text') }}</p>
          </section>

          <section>
            <h2>{{ t('PrivacyPolicyPage.security.title') }}</h2>
            <p>{{ t('PrivacyPolicyPage.security.text') }}</p>
          </section>

          <section>
            <h2>{{ t('PrivacyPolicyPage.contact.title') }}</h2>
            <p>{{ t('PrivacyPolicyPage.contact.text') }}</p>
            <ul>
                <li>{{ t('PrivacyPolicyPage.contact.email') }} <a href="mailto:wyong@duckovgame.com">wyong@duckovgame.com</a></li>
                <li>{{ t('PrivacyPolicyPage.contact.website') }} <a href="https://duckovgame.com">duckovgame.com</a></li>
            </ul>
          </section>
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

.last-updated {
  font-size: 0.9rem;
  color: var(--text-secondary);
  font-style: italic;
  text-align: center;
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--border-color);
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
