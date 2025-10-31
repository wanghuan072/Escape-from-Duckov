<template>
  <div class="legal-page">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <div class="page-header-content">
          <div class="page-header-text">
            <h1 class="page-title">{{ t('ContactUsPage.title') }}</h1>
            <p class="page-subtitle">{{ t('ContactUsPage.subtitle') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Us Content -->
    <section class="legal-content">
      <div class="container">
        <div class="legal-document">
          <h2>{{ t('ContactUsPage.getInTouch.title') }}</h2>
          <p>{{ t('ContactUsPage.getInTouch.text') }}</p>

          <h2>{{ t('ContactUsPage.contactInfo.title') }}</h2>
          <p><strong>{{ t('ContactUsPage.contactInfo.email') }}</strong> <a href="mailto:wyong@duckovgame.com">wyong@duckovgame.com</a></p>
          <p>{{ t('ContactUsPage.contactInfo.responseTime') }}</p>

          <h2>{{ t('ContactUsPage.responseTime.title') }}</h2>
          <ul>
            <li><strong>{{ t('ContactUsPage.responseTime.weekday') }}</strong></li>
            <li><strong>{{ t('ContactUsPage.responseTime.weekend') }}</strong></li>
          </ul>

          <h2>{{ t('ContactUsPage.helpWith.title') }}</h2>
          <ul>
            <li><strong>{{ t('ContactUsPage.helpWith.account') }}</strong></li>
            <li><strong>{{ t('ContactUsPage.helpWith.feedback') }}</strong></li>
            <li><strong>{{ t('ContactUsPage.helpWith.content') }}</strong></li>
            <li><strong>{{ t('ContactUsPage.helpWith.tech') }}</strong></li>
            <li><strong>{{ t('ContactUsPage.helpWith.partnership') }}</strong></li>
            <li><strong>{{ t('ContactUsPage.helpWith.general') }}</strong></li>
          </ul>

          <h2>{{ t('ContactUsPage.beforeContact.title') }}</h2>
          <p>{{ t('ContactUsPage.beforeContact.text') }}</p>
          <ul>
            <li>{{ t('ContactUsPage.beforeContact.items.question') }}</li>
            <li>{{ t('ContactUsPage.beforeContact.items.error') }}</li>
            <li>{{ t('ContactUsPage.beforeContact.items.steps') }}</li>
            <li>{{ t('ContactUsPage.beforeContact.items.device') }}</li>
          </ul>

          <h2>{{ t('ContactUsPage.faq.title') }}</h2>
          <ul>
            <li><strong>{{ t('ContactUsPage.faq.q1.question') }}</strong><br>{{ t('ContactUsPage.faq.q1.answer') }}</li>
            <li><strong>{{ t('ContactUsPage.faq.q2.question') }}</strong><br>{{ t('ContactUsPage.faq.q2.answer') }}</li>
            <li><strong>{{ t('ContactUsPage.faq.q3.question') }}</strong><br>{{ t('ContactUsPage.faq.q3.answer') }}</li>
          </ul>

          <h2>{{ t('ContactUsPage.businessHours.title') }}</h2>
          <p>{{ t('ContactUsPage.businessHours.text') }}</p>

          <h2>{{ t('ContactUsPage.privacy.title') }}</h2>
          <p>{{ t('ContactUsPage.privacy.text') }}</p>

          <h2>{{ t('ContactUsPage.thankYou.title') }}</h2>
          <p>{{ t('ContactUsPage.thankYou.text') }}</p>
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
