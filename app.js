/* =============================================
   DEMLIK LOUNGE — APP.JS
   ============================================= */

'use strict';

// ─── Constants ───────────────────────────────
const WA_NUMBER = '994559406018';
const MENU_IMG = 'images/menu-hero.jpg';
const PAGE_SCROLL_MAP = {};
let currentPage = 'home';
let currentModalProduct = null;
let currentVacancy = null;
let cart = [];

// ─── DATA ─────────────────────────────────────

const menuData = {
  sorbalar: [
    { id: 'so1', name: 'Toyuq Şorbası', desc: 'Ləziz ev toyuq şorbası.', price: 3.00, weight: '', img: MENU_IMG },
    { id: 'so2', name: 'Tomat Şorbası', desc: 'Təzə tomatdan hazırlanmış şorba.', price: 2.99, weight: '', img: MENU_IMG },
    { id: 'so3', name: 'Mərci Şorbası', desc: 'Qiymətli mərci şorbası.', price: 2.99, weight: '', img: MENU_IMG },
    { id: 'so4', name: 'Göbələk Şorbası', desc: 'Meşə göbələklərindən hazırlanan şorba.', price: 3.99, weight: '', img: MENU_IMG },
    { id: 'so5', name: 'Göy Şorbası', desc: 'Təzə göyərtidən hazırlanan şorba.', price: 2.99, weight: '', img: MENU_IMG },
    { id: 'so6', name: 'Düşbərə', desc: 'Ənənəvi Azərbaycan düşbərəsi.', price: 3.99, weight: '', img: MENU_IMG }
  ],
  salatlar: [
    { id: 'sa1', name: 'Sezar Salatı Toyuq İlə', desc: 'Klassik Sezar salatı toyuq ilə.', price: 7.99, weight: '', img: MENU_IMG },
    { id: 'sa2', name: 'Sezar Salatı Krevet İlə', desc: 'Klassik Sezar salatı krevet ilə.', price: 9.99, weight: '', img: MENU_IMG },
    { id: 'sa3', name: 'Yunan Salatı', desc: 'Ənənəvi Yunan salatı.', price: 4.99, weight: '', img: MENU_IMG },
    { id: 'sa4', name: 'Çoban Salatı', desc: 'Təzə tərəvəzli çoban salatı.', price: 4.99, weight: '', img: MENU_IMG },
    { id: 'sa5', name: 'Pitaxt Salatı', desc: 'Xüsusi pitaxt salatı.', price: 4.99, weight: '', img: MENU_IMG },
    { id: 'sa6', name: 'Mimoza', desc: 'Dadlı Mimoza salatı.', price: 5.99, weight: '', img: MENU_IMG },
    { id: 'sa7', name: 'Toyuq Salatı', desc: 'Toyuq əti ilə hazırlanmış salat.', price: 6.99, weight: '', img: MENU_IMG },
    { id: 'sa8', name: 'Ət Salatı', desc: 'Ət ilə zəngin salat.', price: 9.99, weight: '', img: MENU_IMG },
    { id: 'sa9', name: 'Tuna Salatı', desc: 'Tuna balığı ilə hazırlanmış salat.', price: 10.99, weight: '', img: MENU_IMG }
  ],
  'qarnirlər': [
    { id: 'qa1', name: 'Düyü', desc: 'Bişmiş ağ düyü.', price: 2.99, weight: '', img: MENU_IMG },
    { id: 'qa2', name: 'Qarabaşaq', desc: 'Bişmiş qarabaşaq.', price: 2.99, weight: '', img: MENU_IMG },
    { id: 'qa3', name: 'Kartof Fri', desc: 'Qızardılmış kartof.', price: 2.99, weight: '', img: MENU_IMG },
    { id: 'qa4', name: 'Kartof Püresi', desc: 'Kremli kartof püresi.', price: 2.99, weight: '', img: MENU_IMG },
    { id: 'qa5', name: 'Kənd Sayağı Kartof', desc: 'Kənd üslubunda bişirilmiş kartof.', price: 3.99, weight: '', img: MENU_IMG },
    { id: 'qa6', name: 'Qrildə Tərəvəz', desc: 'Qrildə bişirilmiş müxtəlif tərəvəzlər.', price: 3.99, weight: '', img: MENU_IMG }
  ],
  sendvic: [
    { id: 'sv1', name: 'Klab Sendviç', desc: 'Klassik klab sendviç.', price: 8.99, weight: '', img: MENU_IMG },
    { id: 'sv2', name: 'Toyuq Burger', desc: 'Ləziz toyuq burger.', price: 8.99, weight: '', img: MENU_IMG },
    { id: 'sv3', name: 'Çiz Burger', desc: 'Pendir ilə burger.', price: 9.99, weight: '', img: MENU_IMG },
    { id: 'sv4', name: 'Şaurma', desc: 'Ənənəvi şaurma.', price: 4.99, weight: '', img: MENU_IMG },
    { id: 'sv5', name: 'Dönər (Toyuq)', desc: 'Toyuq ilə dönər.', price: 3.99, weight: '', img: MENU_IMG }
  ],
  pizzalar: [
    { id: 'pz1', name: 'Marqarita', desc: 'Klassik Marqarita pizza.', price: 9.99, weight: '', img: MENU_IMG, badge: 'Klassik' },
    { id: 'pz2', name: 'Toyuq Pizza', desc: 'Toyuq əti ilə pizza.', price: 10.99, weight: '', img: MENU_IMG },
    { id: 'pz3', name: 'Ətli Pizza', desc: 'Müxtəlif ət növləri ilə pizza.', price: 11.99, weight: '', img: MENU_IMG, badge: 'Populyar' },
    { id: 'pz4', name: 'BBQ Pizza', desc: 'BBQ sousu ilə pizza.', price: 12.99, weight: '', img: MENU_IMG },
    { id: 'pz5', name: 'Qarışıq Pizza', desc: 'Müxtəlif ingredientli pizza.', price: 13.99, weight: '', img: MENU_IMG, badge: 'Xüsusi' }
  ],
  lahmacun: [
    { id: 'lh1', name: 'Lahmacun Sadə', desc: 'Ənənəvi sadə lahmacun.', price: 2.99, weight: '', img: MENU_IMG },
    { id: 'lh2', name: 'Lahmacun Pendirli', desc: 'Pendir əlavəli lahmacun.', price: 2.99, weight: '', img: MENU_IMG },
    { id: 'lh3', name: 'Pide Qiymali', desc: 'Qiyma ilə pide.', price: 6.99, weight: '', img: MENU_IMG },
    { id: 'lh4', name: 'Pide Kaşarlı', desc: 'Kaşar peyniri ilə pide.', price: 7.99, weight: '', img: MENU_IMG },
    { id: 'lh5', name: 'Pide Qarışıq', desc: 'Müxtəlif ingredientli pide.', price: 8.99, weight: '', img: MENU_IMG }
  ],
  istiYemek: [
    { id: 'iy1', name: 'Tuşonka', desc: 'Ənənəvi tuşonka yemeği.', price: 11.99, weight: '', img: MENU_IMG },
    { id: 'iy2', name: 'Tabaka', desc: 'Xüsusi tabaka toyuq.', price: 14.99, weight: '', img: MENU_IMG, badge: 'Populyar' },
    { id: 'iy3', name: 'Küküi', desc: 'Ləziz küküi.', price: 5.99, weight: '', img: MENU_IMG },
    { id: 'iy4', name: 'Toyuq Langeti (Qarnirli)', desc: 'Qarnir ilə toyuq langeti.', price: 11.99, weight: '', img: MENU_IMG },
    { id: 'iy5', name: 'Toyuq Langeti', desc: 'Klassik toyuq langeti.', price: 9.99, weight: '', img: MENU_IMG },
    { id: 'iy6', name: 'Nar Qovurma', desc: 'Nar ilə qovurma.', price: 13.99, weight: '', img: MENU_IMG },
    { id: 'iy7', name: 'Quzu Qovurma', desc: 'Quzu əti ilə qovurma.', price: 16.99, weight: '', img: MENU_IMG },
    { id: 'iy8', name: 'Stroqanoff (Ət)', desc: 'Ət ilə Stroqanoff.', price: 11.99, weight: '', img: MENU_IMG },
    { id: 'iy9', name: 'Stroqanoff (Toyuq)', desc: 'Toyuq ilə Stroqanoff.', price: 10.99, weight: '', img: MENU_IMG },
    { id: 'iy10', name: 'Qaymaqlı Dana', desc: 'Qaymaq sousu ilə dana əti.', price: 11.99, weight: '', img: MENU_IMG },
    { id: 'iy11', name: 'Çoban Qovurma', desc: 'Ənənəvi çoban qovurma.', price: 14.99, weight: '', img: MENU_IMG }
  ],
  elaveler: [
    { id: 'el1', name: 'Qutab (Ət)', desc: 'Ət ilə qutab.', price: 3.00, weight: '', img: MENU_IMG },
    { id: 'el2', name: 'Qutab (Göy)', desc: 'Göyərti ilə qutab.', price: 1.50, weight: '', img: MENU_IMG },
    { id: 'el3', name: 'Qutab (Pendirli)', desc: 'Pendir ilə qutab.', price: 1.50, weight: '', img: MENU_IMG },
    { id: 'el4', name: 'Piroqki (Ət)', desc: 'Ət ilə piroqki.', price: 2.00, weight: '', img: MENU_IMG },
    { id: 'el5', name: 'Piroqki (Kartof)', desc: 'Kartof ilə piroqki.', price: 1.50, weight: '', img: MENU_IMG },
    { id: 'el6', name: 'Piroqki (Kiyərə)', desc: 'Kiyərə ilə piroqki.', price: 1.50, weight: '', img: MENU_IMG }
  ]
};

const faqData = [
  {
    q: 'Rezervasiya üçün depozit tələb olunurmu?',
    a: 'Xeyr, rezervasiya tamamilə pulsuzdur. Masa saxlamaq üçün heç bir ödəniş tələb edilmir. Sadəcə gəlmədiyiniz halda xəbər verməyinizi rica edirik.'
  },
  {
    q: 'Nə vaxt açığıq?',
    a: 'Bazar ertəsi – Cümə: 10:00–23:00 | Şənbə: 10:00–24:00 | Bazar: 11:00–23:00.'
  },
  {
    q: 'Allergenləri nəzərə alırsınızmı?',
    a: 'Bəli, biz allergen məlumatlarını çox ciddi qəbul edirik. Sifarişinizi verərkən xüsusi diet tələblərinizi qeyd etdikdə aşpazımız uyğun hazırlayacaq.'
  },
  {
    q: 'Ödəniş üsulları hansılardır?',
    a: 'Nağd pul, bank kartı (Kapital Bank, ABB, PASHA Bank), ANSAN və onlayn ödəniş sistemləri qəbul edilir.'
  },
  {
    q: 'Korporativ sifarişlər mümkündürmü?',
    a: 'Bəli! Şirkətlər, tədbirlər və böyük qruplar üçün xüsusi korporativ menyu və endirim proqramlarımız mövcuddur. WhatsApp vasitəsilə bizimlə əlaqə saxlayın.'
  },
  {
    q: 'Instagram hesabınız varmı?',
    a: 'Bəli! Bizi Instagram-da @demliklounge kimi tapın. Yeni məhsullar, xüsusi təkliflər və məkan haqqında məlumat üçün bizi izləyin.'
  },
  {
    q: 'Restoranın iş saatları necədir?',
    a: 'B.E – Cümə: 10:00–23:00 | Şənbə: 10:00–24:00 | Bazar: 11:00–23:00.'
  },
  {
    q: 'Qruplar üçün masa rezervasiyası mümkündürmü?',
    a: 'Bəli, böyük qruplar üçün xüsusi masalar ayıra bilərik. WhatsApp vasitəsilə bizimlə əvvəlcədən əlaqə saxlayın.'
  }
];

const vacanciesData = [
  {
    id: 'v1',
    icon: '🍵',
    title: 'Ofisiant',
    type: 'Tam Ştat',
    salary: '500 – 800 AZN + bonus',
    schedule: 'Dəyişən növbə (2/2)',
    requirements: 'Ünsiyyət bacarığı, gülərüz xarakter, 18+ yaş',
    desc: 'Demlik Lounge ailəsinə mehriban ofisiant axtarırıq. Müştərilərimizə ən yaxşı xidməti göstərə biləcək şəxs.',
    duties: 'Menyu təqdimi, sifariş qəbulu, müştəri məmnuniyyəti'
  },
  {
    id: 'v2',
    icon: '👨‍🍳',
    title: 'Aşpaz',
    type: 'Tam Ştat',
    salary: '700 – 1100 AZN',
    schedule: 'Dəyişən növbə',
    requirements: 'Aşpazlıq sahəsində ən az 1 il təcrübə, gigiyena sertifikatı',
    desc: 'Menyumuzu zənginləşdirmək üçün peşəkar aşpaz axtarırıq. Kreativlik və keyfiyyətə diqqət vacibdir.',
    duties: 'Menyu maddələrinin hazırlanması, keyfiyyət nəzarəti, mətbəxin idarəsi'
  },
  {
    id: 'v3',
    icon: '👩‍💼',
    title: 'Kassir / Operator',
    type: 'Tam Ştat',
    salary: '600 – 900 AZN',
    schedule: 'Dəyişən növbə',
    requirements: 'Kompüter savadlılığı, ünsiyyət bacarığı, 18+ yaş',
    desc: 'Müştəri xidmətləri üzrə kassir/operator axtarırıq. Qulaqardına vurmamaq, gülərüz olmaq vacibdir.',
    duties: 'Sifarişlərin qəbulu, ödəniş əməliyyatları, müştəri məmnuniyyəti'
  },
  {
    id: 'v4',
    icon: '🧹',
    title: 'Sanitar Texnik',
    type: 'Tam Ştat',
    salary: '500 – 650 AZN',
    schedule: 'Günlük, 09:00–18:00',
    requirements: 'Gigiyena standartları bilikləri, fiziki hazırlıq',
    desc: 'Mətbəx və restoran sahəsinin gigiyena standartlarına uyğun saxlanılması üçün işçi axtarırıq.',
    duties: 'Restoran sahəsinin təmizliyi, sanitariya standartlarına riayət'
  }
];

// ─── PAGE NAVIGATION ───────────────────────────

function showPage(pageId) {
  const oldPage = document.getElementById('page-' + currentPage);
  if (oldPage) {
    PAGE_SCROLL_MAP[currentPage] = window.scrollY;
    oldPage.classList.remove('active');
  }

  currentPage = pageId;

  const newPage = document.getElementById('page-' + pageId);
  if (!newPage) return;
  newPage.classList.add('active');

  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.page === pageId);
  });

  const savedScroll = PAGE_SCROLL_MAP[pageId] || 0;
  window.scrollTo({ top: savedScroll, behavior: 'instant' });
}

function goBack() {
  PAGE_SCROLL_MAP[currentPage] = window.scrollY;
  showPage('home');
}

// ─── MOBILE MENU ───────────────────────────────
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  const overlay = document.getElementById('mobileOverlay');
  const isOpen = menu.classList.contains('open');
  menu.classList.toggle('open', !isOpen);
  overlay.classList.toggle('visible', !isOpen);
  document.body.style.overflow = isOpen ? '' : 'hidden';
}

// ─── CART ─────────────────────────────────────

function toggleCart() {
  const panel = document.getElementById('cartPanel');
  const backdrop = document.getElementById('cartBackdrop');
  const isOpen = panel.classList.contains('open');
  panel.classList.toggle('open', !isOpen);
  backdrop.classList.toggle('visible', !isOpen);
  document.body.style.overflow = isOpen ? '' : 'hidden';
}

function addToCart(productId) {
  const product = findProduct(productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  renderCart();
  bumpCartCount();
  showToast(`${product.name} səbətə əlavə edildi!`);
}

function addToCartFromModal() {
  if (!currentModalProduct) return;
  addToCart(currentModalProduct.id);
  closeProductModalBtn();
}

function findProduct(id) {
  for (const cat of Object.values(menuData)) {
    const found = cat.find(p => p.id === id);
    if (found) return found;
  }
  return null;
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  renderCart();
}

function changeQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(productId);
  else renderCart();
}

function renderCart() {
  const itemsEl = document.getElementById('cartItems');
  const emptyEl = document.getElementById('cartEmpty');
  const footerEl = document.getElementById('cartFooter');
  const countEl = document.getElementById('cartCount');
  const totalEl = document.getElementById('cartTotal');

  const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  countEl.textContent = totalItems;
  totalEl.textContent = totalPrice.toFixed(2) + ' AZN';

  const isEmpty = cart.length === 0;
  emptyEl.style.display = isEmpty ? 'flex' : 'none';
  footerEl.style.display = isEmpty ? 'none' : 'block';

  const existingItems = itemsEl.querySelectorAll('.cart-item');
  existingItems.forEach(el => el.remove());

  cart.forEach(item => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img class="cart-item-img" src="${item.img}" alt="${escHtml(item.name)}" loading="lazy" onerror="this.src='images/menu-hero.jpg'" />
      <div class="cart-item-info">
        <div class="cart-item-name">${escHtml(item.name)}</div>
        <div class="cart-item-price">${(item.price * item.qty).toFixed(2)} AZN</div>
      </div>
      <div class="cart-item-controls">
        <button class="qty-btn" onclick="changeQty('${item.id}',-1)" aria-label="Azalt">−</button>
        <span class="qty-num">${item.qty}</span>
        <button class="qty-btn" onclick="changeQty('${item.id}',1)" aria-label="Artır">+</button>
      </div>
    `;
    itemsEl.insertBefore(div, emptyEl);
  });
}

function bumpCartCount() {
  const el = document.getElementById('cartCount');
  el.classList.remove('bump');
  void el.offsetWidth;
  el.classList.add('bump');
  setTimeout(() => el.classList.remove('bump'), 300);
}

function sendOrder() {
  if (cart.length === 0) return;

  let msg = '🍵 *YENİ SİFARİŞ — Demlik Lounge*\n\n';
  msg += '━━━━━━━━━━━━━━━━━━━━\n';
  cart.forEach((item, idx) => {
    msg += `${idx + 1}. ${item.name}\n   ${item.qty} × ${item.price.toFixed(2)} AZN = ${(item.qty * item.price).toFixed(2)} AZN\n`;
  });
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  msg += '━━━━━━━━━━━━━━━━━━━━\n';
  msg += `💰 *CƏMİ: ${total.toFixed(2)} AZN*\n\n`;
  msg += '📍 Ünvanınızı və ya əlavə istəklərinizi yazın.';

  const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

// ─── MENU RENDERING ───────────────────────────

function renderMenuGrids() {
  Object.entries(menuData).forEach(([cat, items]) => {
    const grid = document.getElementById('grid-' + cat);
    if (!grid) return;
    grid.innerHTML = '';
    items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'menu-card';
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', item.name);

      const badgeHtml = item.badge
        ? `<div style="position:absolute;top:10px;left:10px;background:var(--accent);color:#fff;font-size:11px;font-weight:700;padding:3px 9px;border-radius:100px;z-index:1;">${escHtml(item.badge)}</div>`
        : '';

      card.innerHTML = `
        <div class="menu-card-img">
          ${badgeHtml}
          <img src="${item.img}" alt="${escHtml(item.name)}" loading="lazy" onerror="this.src='images/menu-hero.jpg'" />
        </div>
        <div class="menu-card-body">
          <div class="menu-card-name">${escHtml(item.name)}</div>
          <div class="menu-card-desc">${escHtml(item.desc)}</div>
          <div class="menu-card-footer">
            <span class="menu-card-price">${item.price.toFixed(2)} AZN</span>
            <button class="add-btn" onclick="event.stopPropagation();addToCart('${item.id}')" aria-label="Səbətə əlavə et">+</button>
          </div>
        </div>
      `;

      card.addEventListener('click', () => openProductModal(item));
      card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openProductModal(item); });
      grid.appendChild(card);
    });
  });
}

function switchTab(tabId) {
  document.querySelectorAll('.menu-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.tab === tabId);
  });
  document.querySelectorAll('.menu-section').forEach(s => {
    s.classList.toggle('active', s.id === 'tab-' + tabId);
  });
}

// ─── PRODUCT MODAL ────────────────────────────

function openProductModal(product) {
  currentModalProduct = product;
  document.getElementById('modalImg').src = product.img;
  document.getElementById('modalImg').alt = product.name;
  document.getElementById('modalName').textContent = product.name;
  document.getElementById('modalDesc').textContent = product.desc;
  document.getElementById('modalPrice').textContent = product.price.toFixed(2) + ' AZN';
  document.getElementById('modalWeight').textContent = product.weight || '';
  document.getElementById('productModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProductModal(e) {
  if (e.target === document.getElementById('productModal')) closeProductModalBtn();
}
function closeProductModalBtn() {
  document.getElementById('productModal').classList.remove('open');
  currentModalProduct = null;
  document.body.style.overflow = '';
}

// ─── FAQ RENDERING ────────────────────────────

function renderFaq() {
  const list = document.getElementById('faqList');
  faqData.forEach((item) => {
    const el = document.createElement('div');
    el.className = 'faq-item';
    el.innerHTML = `
      <div class="faq-q" onclick="toggleFaq(this)">
        <span>${escHtml(item.q)}</span>
        <span class="faq-icon">+</span>
      </div>
      <div class="faq-a">
        <div class="faq-a-inner">${escHtml(item.a)}</div>
      </div>
    `;
    list.appendChild(el);
  });
}

function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

// ─── VACANCIES RENDERING ──────────────────────

function renderVacancies() {
  const grid = document.getElementById('vacancyGrid');
  vacanciesData.forEach(v => {
    const card = document.createElement('div');
    card.className = 'vacancy-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.innerHTML = `
      <div class="vacancy-card-icon">${v.icon}</div>
      <div class="vacancy-card-title">${escHtml(v.title)}</div>
      <div class="vacancy-card-type">${escHtml(v.type)}</div>
      <div class="vacancy-card-desc">${escHtml(v.desc)}</div>
      <div class="vacancy-card-arrow">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </div>
    `;
    card.addEventListener('click', () => openVacancyModal(v));
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openVacancyModal(v); });
    grid.appendChild(card);
  });
}

// ─── VACANCY MODAL ────────────────────────────

function openVacancyModal(v) {
  currentVacancy = v;
  document.getElementById('vacancyModalIcon').textContent = v.icon;
  document.getElementById('vacancyModalTitle').textContent = v.title;
  document.getElementById('vacancyModalType').textContent = v.type;

  const detailsEl = document.getElementById('vacancyModalDetails');
  detailsEl.innerHTML = `
    <div class="vacancy-detail-row"><span class="vacancy-detail-label">💰 Maaş:</span><span class="vacancy-detail-value">${escHtml(v.salary)}</span></div>
    <div class="vacancy-detail-row"><span class="vacancy-detail-label">⏰ Qrafik:</span><span class="vacancy-detail-value">${escHtml(v.schedule)}</span></div>
    <div class="vacancy-detail-row"><span class="vacancy-detail-label">📋 Tələblər:</span><span class="vacancy-detail-value">${escHtml(v.requirements)}</span></div>
    <div class="vacancy-detail-row"><span class="vacancy-detail-label">📝 Vəzifələr:</span><span class="vacancy-detail-value">${escHtml(v.duties)}</span></div>
  `;

  document.getElementById('vacancyModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeVacancyModal(e) {
  if (e.target === document.getElementById('vacancyModal')) closeVacancyModalBtn();
}
function closeVacancyModalBtn() {
  document.getElementById('vacancyModal').classList.remove('open');
  currentVacancy = null;
  document.body.style.overflow = '';
}

function applyVacancy() {
  if (!currentVacancy) return;
  const msg = `👋 *Vakansiyaya Müraciət — Demlik Lounge*\n\n🔹 *Vəzifə:* ${currentVacancy.title}\n🔹 *İş rejimi:* ${currentVacancy.type}\n\nSalam! Bu vakansiya ilə maraqlanıram. Əlaqə saxlamaq istəyirəm.`;
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
}

// ─── RESERVATION ─────────────────────────────

function submitReservation(e) {
  e.preventDefault();
  const name   = document.getElementById('resName').value.trim();
  const phone  = document.getElementById('resPhone').value.trim();
  const date   = document.getElementById('resDate').value;
  const time   = document.getElementById('resTime').value;
  const guests = document.getElementById('resGuests').value;
  const note   = document.getElementById('resNote').value.trim();

  if (!name || !phone || !date || !time || !guests) {
    showToast('Zəhmət olmasa bütün məcburi xanaları doldurun!');
    return;
  }

  const formattedDate = formatDate(date);
  let msg = `📅 *REZERVASIYA — Demlik Lounge*\n\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `👤 *Ad, Soyad:* ${name}\n`;
  msg += `📞 *Telefon:* ${phone}\n`;
  msg += `📅 *Tarix:* ${formattedDate}\n`;
  msg += `⏰ *Saat:* ${time}\n`;
  msg += `👥 *Nəfər sayı:* ${guests}\n`;
  if (note) msg += `📝 *Qeyd:* ${note}\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━`;

  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
}

// ─── GALLERY LIGHTBOX ─────────────────────────

function openLightbox(img) {
  const lb = document.getElementById('lightbox');
  document.getElementById('lightboxImg').src = img.src;
  document.getElementById('lightboxImg').alt = img.alt;
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

// ─── TOAST ────────────────────────────────────

function showToast(msg) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2800);
}

// ─── UTILS ────────────────────────────────────

function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function formatDate(dateStr) {
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString('az-AZ', { day: '2-digit', month: 'long', year: 'numeric' });
  } catch {
    return dateStr;
  }
}

// ─── KEYBOARD ACCESSIBILITY ───────────────────

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    if (document.getElementById('productModal').classList.contains('open')) {
      closeProductModalBtn();
    } else if (document.getElementById('vacancyModal').classList.contains('open')) {
      closeVacancyModalBtn();
    } else if (document.getElementById('lightbox').classList.contains('open')) {
      closeLightbox();
    } else if (document.getElementById('cartPanel').classList.contains('open')) {
      toggleCart();
    } else if (document.getElementById('mobileMenu').classList.contains('open')) {
      toggleMenu();
    }
  }
});

// ─── INIT ─────────────────────────────────────

document.addEventListener('DOMContentLoaded', function() {
  renderMenuGrids();
  renderFaq();
  renderVacancies();
  renderCart();

  const today = new Date().toISOString().split('T')[0];
  const resDate = document.getElementById('resDate');
  if (resDate) resDate.min = today;
});
