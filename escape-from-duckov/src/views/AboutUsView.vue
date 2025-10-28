<template>
  <div class="legal-page">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <div class="page-header-content">
          <div class="page-header-text">
            <h1 class="page-title">About Us</h1>
            <p class="page-subtitle">Learn more about DuckovGame and our mission</p>
          </div>
        </div>
      </div>
    </section>

    <!-- About Us Content -->
    <section class="legal-content">
      <div class="container">
        <div class="legal-document">
          <h2>Who We Are</h2>
          <p>DuckovGame is a leading platform dedicated to providing high-quality content, guides, and resources for
              our community. We are a passionate team of creators, researchers, and enthusiasts who aim to
              deliver accurate, engaging, and valuable information across various fields.</p>

          <h2>Our Mission</h2>
          <p>Our mission is to empower users by offering reliable knowledge, practical strategies, and
              community-driven insights. Whether it's games, technology, lifestyle, or creative resources, we
              strive to become the go-to source for trustworthy and up-to-date content.</p>

          <h2>What We Offer</h2>
          <ul>
            <li><strong>Guides & Tutorials:</strong> Comprehensive resources to help users learn, grow, and
                solve problems.</li>
            <li><strong>Latest Updates:</strong> Regularly refreshed content to ensure relevance and
                accuracy.</li>
            <li><strong>Community Resources:</strong> A hub for collaboration, knowledge sharing, and
                meaningful interaction.</li>
            <li><strong>Special Features:</strong> Exclusive insights, tools, and curated content for our
                audience.</li>
          </ul>

          <h2>Our Commitment</h2>
          <p>We are committed to maintaining a high standard of quality, integrity, and transparency in
              everything we publish. Our team works continuously to verify information, update resources, and
              ensure our platform remains reliable and user-focused.</p>

          <h2>Community Focus</h2>
          <p>At DuckovGame, we believe in the power of community. Our platform is designed to connect people,
              encourage collaboration, and foster a positive environment where everyone can learn and
              contribute.</p>

          <h2>Quality Assurance</h2>
          <p>Accuracy is at the core of what we do. Every piece of content is carefully reviewed and verified
              by our team to ensure it meets the highest standards before being published on DuckovGame (duckovgame.com).</p>

          <h2>Regular Updates</h2>
          <p>We update our resources frequently to keep pace with industry changes, community needs, and user
              feedback. This ensures that our audience always has access to the most relevant and valuable
              information.</p>

          <h2>Contact Us</h2>
          <p>Have questions, suggestions, or feedback? We'd love to hear from you! You can reach us at <a
                  href="mailto:wyong@duckovgame.com">wyong@duckovgame.com</a> and we'll get back to you as soon as
              possible.</p>

          <h2>Join Our Community</h2>
          <p>Stay connected with DuckovGame by following our updates and engaging with the community. Together, we
              can build a stronger, more informed, and more supportive space for everyone.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// About Us page component
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
