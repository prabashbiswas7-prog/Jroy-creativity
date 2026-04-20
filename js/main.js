/* ═══════════════════════════════════════════════════
   JRoy Creativity — Shared JS
═══════════════════════════════════════════════════ */

// ── CONFIG ────────────────────────────────────────
const JROY = {
  wa: '919876543210',            // ← Replace with real WhatsApp number (country code + number)
  waBase: 'https://wa.me/',
  instagram: 'https://instagram.com/jroycreativity',
  email: 'hello@jroycreativity.com',
};

JROY.waLink = (msg) => `${JROY.waBase}${JROY.wa}?text=${encodeURIComponent(msg)}`;

// ── PRODUCTS DB ───────────────────────────────────
const PRODUCTS = [
  // Earrings
  {
    id: 'luna-drop',
    name: 'Luna Drop',
    cat: 'earrings',
    catLabel: 'Earrings',
    price: 850,
    badge: 'New',
    icon: '◈',
    bg: '#f1e4e4',
    desc: 'Delicate crescent-shaped drops in gold-toned alloy. Lightweight for all-day wear. Perfect for office, evenings, and everything in between.',
    material: 'Gold-toned alloy',
    weight: '4g per pair',
    size: 'Drop length: 2.5 cm',
    care: 'Wipe with soft dry cloth. Avoid water and perfume.',
    related: ['gold-hoop', 'petal-studs', 'twisted-drops'],
  },
  {
    id: 'gold-hoop',
    name: 'Classic Gold Hoop',
    cat: 'earrings',
    catLabel: 'Earrings',
    price: 650,
    badge: '',
    icon: '◉',
    bg: '#f5ead8',
    desc: 'Timeless slim hoops in warm gold finish. A wardrobe essential that works with every outfit, every day.',
    material: 'Gold-plated brass',
    weight: '5g per pair',
    size: 'Diameter: 3 cm',
    care: 'Store in a dry place. Avoid contact with water.',
    related: ['luna-drop', 'twisted-drops', 'pearl-ear'],
  },
  {
    id: 'twisted-drops',
    name: 'Twisted Drops',
    cat: 'earrings',
    catLabel: 'Earrings',
    price: 750,
    badge: 'Popular',
    icon: '⊛',
    bg: '#ede8f5',
    desc: 'Elegant twisted bar drops with a brushed gold finish. Adds a modern edge to any look.',
    material: 'Brushed gold alloy',
    weight: '3.5g per pair',
    size: 'Length: 3 cm',
    care: 'Wipe with dry cloth. Avoid perfume contact.',
    related: ['luna-drop', 'gold-hoop', 'petal-studs'],
  },
  {
    id: 'petal-studs',
    name: 'Petal Studs',
    cat: 'earrings',
    catLabel: 'Earrings',
    price: 480,
    badge: 'Bestseller',
    icon: '✿',
    bg: '#f1e4e4',
    desc: 'Tiny petal-shaped studs with a pearl-like centre. Minimalist, feminine, and endlessly wearable.',
    material: 'Alloy with pearl bead',
    weight: '2g per pair',
    size: 'Diameter: 1 cm',
    care: 'Keep away from moisture.',
    related: ['gold-hoop', 'luna-drop', 'twisted-drops'],
  },
  // Rings
  {
    id: 'twisted-band',
    name: 'Twisted Band',
    cat: 'rings',
    catLabel: 'Rings',
    price: 1200,
    badge: 'Popular',
    icon: '○',
    bg: '#ede8f5',
    desc: 'A sculptural twisted band ring in polished gold. Minimal yet striking — the perfect statement piece that never shouts.',
    material: 'Gold-plated brass',
    weight: '6g',
    size: 'Available: 5–9 (US)',
    care: 'Remove before washing hands. Avoid chemical exposure.',
    related: ['signet-ring', 'stacking-set', 'leaf-ring'],
  },
  {
    id: 'signet-ring',
    name: 'Signet Ring',
    cat: 'rings',
    catLabel: 'Rings',
    price: 980,
    badge: '',
    icon: '◇',
    bg: '#e8f0ed',
    desc: 'Classic flat-top signet in brushed gold. Worn alone or stacked — always intentional.',
    material: 'Brushed gold alloy',
    weight: '7g',
    size: 'Available: 5–10 (US)',
    care: 'Polish with microfibre cloth.',
    related: ['twisted-band', 'stacking-set', 'leaf-ring'],
  },
  {
    id: 'stacking-set',
    name: 'Stacking Set',
    cat: 'rings',
    catLabel: 'Rings',
    price: 1450,
    badge: 'New',
    icon: '⊕',
    bg: '#f5ead8',
    desc: 'Three slim stacking rings — plain, textured, and beaded — designed to wear together or separately.',
    material: 'Mixed gold alloy',
    weight: '9g (set)',
    size: 'Available: 5–9 (US)',
    care: 'Store individually to avoid scratching.',
    related: ['twisted-band', 'signet-ring', 'leaf-ring'],
  },
  {
    id: 'leaf-ring',
    name: 'Leaf Wrap Ring',
    cat: 'rings',
    catLabel: 'Rings',
    price: 890,
    badge: '',
    icon: '❧',
    bg: '#e8f0ed',
    desc: 'An organic open-band ring shaped like a wrapped leaf. Nature-inspired and quietly beautiful.',
    material: 'Oxidised gold alloy',
    weight: '5g',
    size: 'Adjustable',
    care: 'Avoid water. Pat dry if wet.',
    related: ['twisted-band', 'stacking-set', 'signet-ring'],
  },
  // Necklace
  {
    id: 'layered-chain',
    name: 'Layered Chain',
    cat: 'necklace',
    catLabel: 'Necklace',
    price: 1400,
    badge: 'New',
    icon: '∞',
    bg: '#f1e4e4',
    desc: 'A two-layer gold chain set — one delicate, one slightly heavier — that arrives pre-layered and always looks effortless.',
    material: 'Gold-plated stainless steel',
    weight: '10g',
    size: '16" + 18"',
    care: 'Keep dry. Store in pouch.',
    related: ['pearl-pendant', 'coin-choker', 'bar-necklace'],
  },
  {
    id: 'pearl-pendant',
    name: 'Pearl Pendant',
    cat: 'necklace',
    catLabel: 'Necklace',
    price: 1100,
    badge: '',
    icon: '✦',
    bg: '#f5ead8',
    desc: 'A single freshwater pearl on a fine gold chain. Understated luxury at its purest.',
    material: 'Freshwater pearl, gold-filled chain',
    weight: '6g',
    size: '18" chain',
    care: 'Pearl is delicate — avoid perfume and water.',
    related: ['layered-chain', 'coin-choker', 'bar-necklace'],
  },
  {
    id: 'coin-choker',
    name: 'Coin Choker',
    cat: 'necklace',
    catLabel: 'Necklace',
    price: 950,
    badge: 'Popular',
    icon: '⊙',
    bg: '#ede8f5',
    desc: 'A flat hammered coin charm on a velvet choker. Pairs perfectly with open-neck tops and dresses.',
    material: 'Hammered gold alloy, velvet cord',
    weight: '8g',
    size: '14" adjustable',
    care: 'Avoid moisture. Untie gently.',
    related: ['pearl-pendant', 'layered-chain', 'bar-necklace'],
  },
  {
    id: 'bar-necklace',
    name: 'Bar Necklace',
    cat: 'necklace',
    catLabel: 'Necklace',
    price: 820,
    badge: '',
    icon: '—',
    bg: '#f1e4e4',
    desc: 'A slim horizontal bar pendant. Can be engraved (ask via WhatsApp). Simple, clean, meaningful.',
    material: 'Gold-plated steel',
    weight: '5g',
    size: '16" chain',
    care: 'Store flat. Avoid chemicals.',
    related: ['pearl-pendant', 'coin-choker', 'layered-chain'],
  },
  // Casual Use
  {
    id: 'stud-set',
    name: 'Everyday Stud Set',
    cat: 'casual',
    catLabel: 'Casual Use',
    price: 450,
    badge: 'Bestseller',
    icon: '◆',
    bg: '#ede8f5',
    desc: 'A set of 5 minimalist studs — square, circle, triangle, star, and dot. Daily rotation sorted.',
    material: 'Alloy',
    weight: '6g (set)',
    size: 'Varies per piece',
    care: 'Store in included mini case.',
    related: ['daily-bracelet', 'thread-earrings', 'anklet'],
  },
  {
    id: 'daily-bracelet',
    name: 'Daily Bracelet',
    cat: 'casual',
    catLabel: 'Casual Use',
    price: 600,
    badge: '',
    icon: '⊗',
    bg: '#e8f0ed',
    desc: 'A slim adjustable bracelet with a small charm. Durable enough for everyday, pretty enough for always.',
    material: 'Waxed cord, gold alloy charm',
    weight: '4g',
    size: 'Adjustable — fits all',
    care: 'Water resistant, but avoid soaking.',
    related: ['stud-set', 'thread-earrings', 'anklet'],
  },
  {
    id: 'thread-earrings',
    name: 'Thread Earrings',
    cat: 'casual',
    catLabel: 'Casual Use',
    price: 380,
    badge: '',
    icon: '∿',
    bg: '#f5ead8',
    desc: 'Super-lightweight silk thread earrings with a small gold end bead. Perfect for college, work, and casual outings.',
    material: 'Silk thread, gold bead',
    weight: '1g per pair',
    size: 'Length: 8 cm',
    care: 'Keep dry.',
    related: ['stud-set', 'daily-bracelet', 'anklet'],
  },
  {
    id: 'anklet',
    name: 'Gold Anklet',
    cat: 'casual',
    catLabel: 'Casual Use',
    price: 520,
    badge: 'New',
    icon: '◌',
    bg: '#f1e4e4',
    desc: 'A simple gold-toned anklet with tiny charm drops. Subtle and summery.',
    material: 'Gold alloy chain',
    weight: '5g',
    size: 'Adjustable 9"–10"',
    care: 'Remove before swimming.',
    related: ['daily-bracelet', 'stud-set', 'thread-earrings'],
  },
];

// ── HELPERS ───────────────────────────────────────
function getProductById(id) {
  return PRODUCTS.find(p => p.id === id) || null;
}
function getProductsByCategory(cat) {
  if (cat === 'all') return PRODUCTS;
  return PRODUCTS.filter(p => p.cat === cat);
}
function getRelated(product) {
  return (product.related || []).map(id => getProductById(id)).filter(Boolean);
}

// ── WA ICON ───────────────────────────────────────
function waSVG() {
  return `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>`;
}

// ── PRODUCT CARD HTML ─────────────────────────────
function renderProductCard(p) {
  return `
  <a href="product.html?id=${p.id}" class="product-card">
    <div class="product-card-img" style="background:${p.bg}">
      <span class="product-card-icon">${p.icon}</span>
      ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
    </div>
    <div class="product-card-body">
      <div class="product-cat-label">${p.catLabel}</div>
      <div class="product-name">${p.name}</div>
      <div class="product-footer">
        <span class="product-price">₹${p.price.toLocaleString('en-IN')}</span>
        <a href="${JROY.waLink('Hi! I\'m interested in ' + p.name)}" 
           target="_blank" class="product-wa-btn" onclick="event.stopPropagation()"
           title="Order on WhatsApp">${waSVG()}</a>
      </div>
    </div>
  </a>`;
}

// ── NAV INIT ──────────────────────────────────────
function initNav() {
  const nav = document.getElementById('mainNav');
  const burger = document.getElementById('navBurger');
  const mobileMenu = document.getElementById('navMobile');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  // Active link
  document.querySelectorAll('.nav-menu a, .nav-mobile a[data-page]').forEach(a => {
    if (a.dataset.page && currentPage.includes(a.dataset.page)) {
      a.classList.add('active');
    }
  });

  // Scroll shadow
  window.addEventListener('scroll', () => {
    nav?.classList.toggle('scrolled', window.scrollY > 10);
  });

  // Mobile menu toggle
  burger?.addEventListener('click', () => {
    burger.classList.toggle('open');
    mobileMenu?.classList.toggle('open');
  });
}

document.addEventListener('DOMContentLoaded', initNav);
