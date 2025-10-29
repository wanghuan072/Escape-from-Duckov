<template>
  <div class="legal-page">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <div class="page-header-content">
          <div class="page-header-text">
            <h1 class="page-title">Copyright</h1>
            <p class="page-subtitle">Copyright information and usage guidelines</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Copyright Content -->
    <section class="legal-content">
      <div class="container">
        <div class="legal-document">
          <h2>Copyright Statement</h2>
          <p>
            All content on <strong>DuckovGame</strong>, including but not limited to text, graphics, images,
            videos, and software, is the property of <strong>DuckovGame</strong> and is protected by international
            copyright laws. Unauthorized use, reproduction, or distribution of this content is strictly prohibited.
          </p>

          <h2>What We Own</h2>
          <ul>
            <li><strong>Original Content:</strong> All written content, guides, tutorials, and reviews created by our
                team.</li>
            <li><strong>Website Design:</strong> Layout, styling, user interface, and overall website design elements.
            </li>
            <li><strong>Original Images:</strong> Photographs, screenshots, and graphics created specifically for this
                website.</li>
            <li><strong>Code & Software:</strong> Website code, scripts, and software developed for this platform.
            </li>
          </ul>

          <h2>Third-Party Content</h2>
          <p>
            We respect the intellectual property rights of others. Some content on our website may include references,
            images, or information related to <strong>Escape from Duckov</strong>, which belongs to their respective owners.
          </p>

          <h2>Fair Use Policy</h2>
          <p>
            We support fair use of our content for educational, research, and personal purposes. However, commercial use
            requires explicit permission.
          </p>
          <p><strong>Allowed Uses:</strong></p>
          <ul>
            <li>Personal study and research</li>
            <li>Educational purposes</li>
            <li>Non-commercial sharing</li>
            <li>Criticism and commentary</li>
          </ul>
          <p><strong>Restricted Uses:</strong></p>
          <ul>
            <li>Commercial reproduction</li>
            <li>Mass distribution</li>
            <li>Modification without permission</li>
            <li>Removal of attribution</li>
          </ul>

          <h2>DMCA Compliance</h2>
          <p>
            We comply with the Digital Millennium Copyright Act (DMCA). If you believe your copyrighted work has been
            used without permission, please contact us immediately.
          </p>
          <p><strong>To file a DMCA takedown notice, please include:</strong></p>
          <ul>
            <li>Specific details about the copyrighted material</li>
            <li>Proof that you own the rights to the content</li>
            <li>A formal DMCA takedown notice sent to our designated agent</li>
          </ul>

          <h2>Attribution Requirements</h2>
          <p>
            When using our content under fair use or with permission, proper attribution is required.
          </p>

          <h2>License Requests</h2>
          <p>
            For commercial use, licensing, or other permissions, please contact us with your specific request.
          </p>
          <p><strong>Your request should include:</strong></p>
          <ul>
            <li>Specific content you want to use</li>
            <li>Intended purpose and audience</li>
            <li>Duration of use</li>
            <li>Contact information</li>
          </ul>

          <h2>Contact Information</h2>
          <p>
            Email: <a href="mailto:wyong@duckovgame.com">wyong@duckovgame.com</a>
          </p>

          <h2>Updates to Copyright Notice</h2>
          <p>
            This copyright notice may be updated periodically. The most recent version will always be available on this
            page. Continued use of our website constitutes acceptance of any changes.
          </p>
          <p>
            Check this page regularly for updates to our copyright policy.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Copyright page component
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
