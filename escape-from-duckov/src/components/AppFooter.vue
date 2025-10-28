<template>
  <footer class="app-footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <div class="footer-logo">
            <img src="/images/logo.png" alt="Escape from Duckov" class="logo-image">
            <span class="logo-text">Escape from Duckov</span>
          </div>
          <p>Guides, wiki, and community tools crafted by players.</p>
        </div>
        <div class="footer-links">
          <div class="link-column">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#guides">Guides</a></li>
              <li><a href="#wiki">Wiki</a></li>
              <li><a href="#maps">Maps</a></li>
              <li><a href="#mods">Mods</a></li>
            </ul>
          </div>
          <div class="link-column">
            <h4>Legal</h4>
            <ul>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms-of-service">Terms of Service</a></li>
              <li><a href="/copyright">Copyright</a></li>
              <li><a href="/about-us">About Us</a></li>
              <li><a href="/contact-us">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="copyright">© 2025 duckovgame.com. All rights reserved.</p>
        <p>duckovgame.com is not affiliated with, endorsed by, or connected to the original or its publishers. This is an independent fan site created for informational purposes only. All trademarks and copyrights belong to their respective owners.</p>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

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

.footer-logo{
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


.footer-brand p {
  color: var(--text-secondary);
  font-size: 0.875rem;
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
  .footer-content {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  
  .footer-links {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}
</style>
