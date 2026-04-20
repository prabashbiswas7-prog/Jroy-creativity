/* ═══════════════════════════════════════════════════
   JRoy Creativity — Nav & Footer HTML Injector
═══════════════════════════════════════════════════ */

function injectNav(activePage) {
  const html = `
  <nav class="nav" id="mainNav">
    <a href="index.html" class="nav-logo">
      <div class="nav-logo-emblem">
        J<span class="nav-logo-slash"></span>R
      </div>
      <div class="nav-logo-wordmark"><b>JR</b>oy Creativity</div>
    </a>
    <ul class="nav-menu">
      <li><a href="index.html"    data-page="index"   ${activePage==='home'   ?'class="active"':''}>Home</a></li>
      <li><a href="design.html"   data-page="design"  ${activePage==='design' ?'class="active"':''}>Design</a></li>
      <li><a href="shop.html"     data-page="shop"    ${activePage==='shop'   ?'class="active"':''}>Shop</a></li>
      <li><a href="contact.html"  data-page="contact" ${activePage==='contact'?'class="active"':''}>Contact</a></li>
    </ul>
    <a href="${JROY.waLink('Hi! I\'d like to hire JRoy Creativity.')}" target="_blank" class="nav-hire btn">Hire Me</a>
    <button class="nav-burger" id="navBurger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </nav>
  <div class="nav-mobile" id="navMobile">
    <a href="index.html"   data-page="index">Home</a>
    <a href="design.html"  data-page="design">Design</a>
    <a href="shop.html"    data-page="shop">Shop</a>
    <a href="contact.html" data-page="contact">Contact</a>
    <a href="${JROY.waLink('Hi! I\'d like to hire JRoy Creativity.')}" target="_blank" class="mobile-hire">Hire Me →</a>
  </div>`;
  document.body.insertAdjacentHTML('afterbegin', html);
}

function injectFooter() {
  const html = `
  <footer class="footer">
    <div class="footer-grid">
      <div>
        <div class="footer-brand"><span>JR</span>oy Creativity</div>
        <p class="footer-tagline">Where creative design meets timeless jewellery. Every detail is intentional.</p>
        <div class="footer-socials">
          <a class="footer-social-btn" href="${JROY.instagram}" target="_blank">ig</a>
          <a class="footer-social-btn" href="${JROY.waLink('Hi!')}" target="_blank">wa</a>
          <a class="footer-social-btn" href="mailto:${JROY.email}">@</a>
        </div>
      </div>
      <div>
        <div class="footer-col-head">Navigate</div>
        <ul class="footer-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="design.html">Design Services</a></li>
          <li><a href="shop.html">Shop Jewellery</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-col-head">Contact</div>
        <ul class="footer-links">
          <li><a href="${JROY.waLink('Hi! I found you on your website.')}" target="_blank">WhatsApp Us</a></li>
          <li><a href="mailto:${JROY.email}">Email Us</a></li>
          <li><a href="${JROY.instagram}" target="_blank">Instagram</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span class="footer-copy">© 2026 JRoy Creativity. All rights reserved.</span>
      <span class="footer-copy">Designed with ♥</span>
    </div>
  </footer>`;
  document.body.insertAdjacentHTML('beforeend', html);
}
