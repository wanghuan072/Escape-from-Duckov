<template>
  <div class="legal-page">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <div class="page-header-content">
          <div class="page-header-text">
            <h1 class="page-title">Contact Us</h1>
            <p class="page-subtitle">Get in touch with our team</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Us Content -->
    <section class="legal-content">
      <div class="container">
        <div class="legal-document">
          <h2>Get in Touch</h2>
          <p>We'd love to hear from you! Whether you have questions about our services, suggestions for improvement, or
              just want to say hello, we're here to help.</p>

          <h2>Contact Information</h2>
          <p><strong>Email:</strong> <a href="mailto:wyong@duckovgame.com">wyong@duckovgame.com</a></p>
          <p>We typically respond within 24 hours.</p>

          <h2>Response Time</h2>
          <ul>
            <li><strong>Monday - Friday:</strong> Within 24 hours</li>
            <li><strong>Weekends:</strong> Within 48 hours</li>
          </ul>

          <h2>What We Can Help With</h2>
          <ul>
            <li><strong>Account or Access Issues:</strong> Help with login, membership, or subscription problems</li>
            <li><strong>Website Feedback:</strong> Suggestions for improving DuckovGame (duckovgame.com)</li>
            <li><strong>Content Requests:</strong> Ideas for new articles, guides, or resources</li>
            <li><strong>Technical Support:</strong> Assistance with site functionality</li>
            <li><strong>Partnership Inquiries:</strong> Collaboration opportunities</li>
            <li><strong>General Questions:</strong> Anything else related to DuckovGame and our services</li>
          </ul>

          <h2>Before You Contact Us</h2>
          <p>To help us provide the best assistance, please include the following details in your email:</p>
          <ul>
            <li>Your specific question or issue</li>
            <li>Any error messages (if applicable)</li>
            <li>Steps you've already tried</li>
            <li>Your device and browser information (if relevant)</li>
          </ul>

          <h2>Frequently Asked Questions</h2>
          <ul>
            <li><strong>How often is your content updated?</strong><br>We update our resources regularly to ensure
                accuracy and freshness.</li>
            <li><strong>Is your content safe and reliable?</strong><br>Yes, all information we provide is verified and
                sourced responsibly.</li>
            <li><strong>Can I suggest new content?</strong><br>Absolutely! We welcome your ideas and contributions—just
                send them our way.</li>
          </ul>

          <h2>Business Hours</h2>
          <p>Our team is available Monday through Friday, 9:00 AM to 6:00 PM (EST). While we may respond outside these
              hours, please allow up to 24–48 hours for replies during weekends and holidays.</p>

          <h2>Privacy</h2>
          <p>We respect your privacy and will never share your personal information with third parties. All
              communications are kept confidential and used only to provide you with the best possible service.</p>

          <h2>Thank You</h2>
          <p>Thank you for being part of the DuckovGame community! Your feedback and support help us continue to provide the
              best experience for our users worldwide.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Contact Us page component
</script>

<style scoped>
.legal-page {
  min-height: 100vh;
  background: var(--bg-primary);
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
