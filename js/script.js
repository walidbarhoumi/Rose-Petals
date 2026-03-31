// DOM elements
const grid = document.getElementById('perfume-grid');
const searchInput = document.getElementById('search');
const typeFilter = document.getElementById('filter-type');
const modeFilter = document.getElementById('filter-mode');
const themeToggle = document.getElementById('theme-toggle');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const modalName = document.getElementById('modal-name');
const modalType = document.getElementById('modal-type');
const modalMode = document.getElementById('modal-mode');
const modalPrice = document.getElementById('modal-price');
const modalDescription = document.getElementById('modal-description');
const modalFirst = document.getElementById('modal-first');
const modalHeart = document.getElementById('modal-heart');
const resultCount = document.getElementById('result-count');
const featuredRow = document.getElementById('featured-row');
const closeBtn = document.querySelector('.close');

let lastActiveElement = null;
let typewriterTimer = null;
let isTypewriterRunning = false;
let cursorGlow = null;
let cursorTarget = { x: 0, y: 0 };
let cursorCurrent = { x: 0, y: 0 };
const cursorGlowSize = 220;
let currentTypingEl = null;

const heroReelText = document.getElementById('hero-reel-text');
const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const cartToggle = document.getElementById('cart-toggle');
const cartCountEl = document.getElementById('cart-count');
const cartDrawer = document.getElementById('cart-drawer');
const cartCloseBtn = document.getElementById('cart-close');
const cartItemsEl = document.getElementById('cart-items');
const cartSubtotalEl = document.getElementById('cart-subtotal');
const cartClearBtn = document.getElementById('cart-clear');
const cartCheckoutBtn = document.getElementById('cart-checkout');
const modalAddCartBtn = document.getElementById('modal-add-cart');
const modalWishlistBtn = document.getElementById('modal-wishlist');
const toastHost = document.getElementById('toast-host');

let currentModalPerfume = null;
let cart = {};
let wishlist = new Set();
let cartDrawerOpen = false;
let toastTimer = null;

function pulseElement(el) {
    if (!el) return;
    el.classList.remove('pulse');
    // Force animation restart.
    void el.offsetWidth;
    el.classList.add('pulse');
}

function attachHoverSpotlight(el) {
    if (!el) return;
    if (prefersReducedMotion) return;

    el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / Math.max(1, rect.width)) * 100;
        const y = ((e.clientY - rect.top) / Math.max(1, rect.height)) * 100;
        el.style.setProperty('--mx', `${x}%`);
        el.style.setProperty('--my', `${y}%`);
        // Tilt for a premium “glass” feel.
        const rx = (50 - y) / 14; // deg scale
        const ry = (x - 50) / 14; // deg scale
        el.style.setProperty('--rx', `${rx}deg`);
        el.style.setProperty('--ry', `${ry}deg`);
    });
}

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    initHeroMood();
    initCursorGlow();
    document.body.classList.add('page-enter');
    window.setTimeout(() => document.body.classList.remove('page-enter'), 1400);
    populateFilters();
    loadPersistedData();
    renderPerfumes(perfumes);
    renderFeatured(perfumes);
    updateCartUI();
    setupEventListeners();
    initScrollReveals();
});

function initTheme() {
    // Default to whatever is already set in HTML/CSS.
    const saved = localStorage.getItem('theme');
    if (!saved) return;

    const shouldBeDark = saved === 'dark';
    document.body.classList.toggle('dark', shouldBeDark);
    document.body.classList.toggle('light', !shouldBeDark);
}

function loadPersistedData() {
    try {
        const savedCart = localStorage.getItem('cart');
        cart = savedCart ? JSON.parse(savedCart) : {};
    } catch (e) {
        cart = {};
    }

    try {
        const savedWishlist = localStorage.getItem('wishlist');
        const arr = savedWishlist ? JSON.parse(savedWishlist) : [];
        wishlist = new Set(Array.isArray(arr) ? arr : []);
    } catch (e) {
        wishlist = new Set();
    }
}

function persistCart() {
    try {
        localStorage.setItem('cart', JSON.stringify(cart));
    } catch (e) {
        // ignore
    }
}

function persistWishlist() {
    try {
        localStorage.setItem('wishlist', JSON.stringify([...wishlist]));
    } catch (e) {
        // ignore
    }
}

function isWishlisted(perfumeId) {
    return wishlist.has(perfumeId);
}

function getCartCount() {
    return Object.values(cart).reduce((sum, qty) => sum + (Number(qty) || 0), 0);
}

function getCartSubtotal() {
    let subtotal = 0;
    for (const [idStr, qty] of Object.entries(cart)) {
        const qtyNum = Number(qty) || 0;
        const id = Number(idStr);
        const p = perfumes.find(x => x.id === id);
        if (!p) continue;
        subtotal += (p.price || 0) * qtyNum;
    }
    return subtotal;
}

function setCartCountUI() {
    if (!cartCountEl) return;
    cartCountEl.textContent = String(getCartCount());
}

function openCartDrawer() {
    if (!cartDrawer) return;
    cartDrawerOpen = true;
    cartDrawer.setAttribute('aria-hidden', 'false');
    cartDrawer.classList.add('open');
    updateCartUI();
}

function closeCartDrawer() {
    if (!cartDrawer) return;
    cartDrawerOpen = false;
    cartDrawer.setAttribute('aria-hidden', 'true');
    cartDrawer.classList.remove('open');
}

function toggleWishlist(perfume) {
    const id = perfume.id;
    if (isWishlisted(id)) wishlist.delete(id);
    else wishlist.add(id);
    persistWishlist();
    // Update current modal button if open for this perfume.
    if (currentModalPerfume && currentModalPerfume.id === id) {
        updateModalWishlistUI();
    }
    renderPerfumes(getFilteredPerfumes());
    renderFeatured(getFilteredPerfumes());

    showToast(isWishlisted(id) ? 'Enregistré dans la wishlist' : 'Retiré de la wishlist');
}

function addToCart(perfume, qty = 1) {
    if (!perfume || typeof perfume.id !== 'number') return;
    const id = perfume.id;
    cart[id] = (Number(cart[id]) || 0) + (Number(qty) || 0);
    if (cart[id] <= 0) delete cart[id];
    persistCart();
    setCartCountUI();
    updateCartUI();

    if (qty > 0) showToast('Ajouté au panier');
}

function addToCartById(id, delta) {
    const p = perfumes.find(x => x.id === id);
    if (!p) return;
    addToCart(p, delta);
}

function removeFromCartById(id) {
    if (id in cart) {
        delete cart[id];
        persistCart();
        updateCartUI();
        setCartCountUI();
    }
}

function updateCartUI() {
    setCartCountUI();
    if (!cartItemsEl) return;

    const entries = Object.entries(cart)
        .map(([idStr, qty]) => ({ id: Number(idStr), qty: Number(qty) || 0 }))
        .filter(x => x.qty > 0);

    if (entries.length === 0) {
        cartItemsEl.innerHTML = `<div class="cart-empty">Votre panier est vide. Ajoutez un parfum pour commencer.</div>`;
        cartSubtotalEl.textContent = '$0';
        return;
    }

    cartItemsEl.innerHTML = entries.map(({ id, qty }, idx) => {
        const p = perfumes.find(x => x.id === id);
        if (!p) return '';
        return `
            <div class="cart-item" data-cart-id="${id}" style="animation-delay:${idx * 60}ms">
                <div class="cart-item-media">
                    <img src="${sanitizeImageUrl(p.image)}" alt="${p.name}" loading="lazy">
                </div>
                <div class="cart-item-body">
                    <div class="cart-item-name">${p.name}</div>
                    <div class="cart-item-price">${formatMoney(p.price)}</div>
                    <div class="cart-item-qty">
                        <button class="qty-btn qty-minus" type="button" aria-label="Decrease quantity" data-action="minus" data-id="${id}">−</button>
                        <span class="qty-value">${qty}</span>
                        <button class="qty-btn qty-plus" type="button" aria-label="Increase quantity" data-action="plus" data-id="${id}">+</button>
                    </div>
                    <button class="cart-item-remove" type="button" data-id="${id}">Retirer</button>
                </div>
            </div>
        `;
    }).join('');

    cartSubtotalEl.textContent = formatMoney(getCartSubtotal());
}

function formatMoney(value) {
    const num = Number(value) || 0;
    return `$${num}`;
}

function updateModalWishlistUI() {
    if (!modalWishlistBtn) return;
    if (!currentModalPerfume) {
        modalWishlistBtn.textContent = 'Enregistrer';
        return;
    }
    const saved = isWishlisted(currentModalPerfume.id);
    modalWishlistBtn.textContent = saved ? 'Enregistré' : 'Enregistrer';
}

// Populate filter dropdowns
function populateFilters() {
    const types = [...new Set(perfumes.map(p => p.type))].sort();
    const modes = [...new Set(perfumes.map(p => p.mode))].sort();
    
    types.forEach(type => {
        const option = document.createElement('option');
        option.value = type;
        option.textContent = type;
        typeFilter.appendChild(option);
    });
    
    modes.forEach(mode => {
        const option = document.createElement('option');
        option.value = mode;
        option.textContent = mode;
        modeFilter.appendChild(option);
    });
}

function sanitizeImageUrl(url) {
    // Your data.js currently contains `&amp;` inside URLs, which browsers treat as literal text.
    // Decode it back to `&` so Unsplash query params work.
    return (url || '').replace(/&amp;/g, '&');
}

function getFallbackImageDataUri() {
    const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#667eea"/>
      <stop offset="1" stop-color="#764ba2"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#g)"/>
  <circle cx="640" cy="120" r="90" fill="rgba(255,255,255,0.18)"/>
  <text x="50%" y="55%" text-anchor="middle" font-family="Arial, sans-serif" font-size="36" fill="white" fill-opacity="0.95">
    Perfume Image
  </text>
</svg>`;
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function initHeroMood() {
    if (!heroReelText) return;
    if (prefersReducedMotion) {
        // Keep whatever is in HTML.
        return;
    }

    const moods = [
        'Velours & Éclat',
        'Floraux de minuit',
        'Lueur d\'agrumes',
        'Oud & Fumée',
        'Rêve sur peau chaude',
        'Éclats frais dans le verre'
    ];

    let i = 0;
    heroReelText.textContent = moods[i];
    setInterval(() => {
        i = (i + 1) % moods.length;
        heroReelText.classList.remove('mood-spark');
        // Force restart so the animation always plays.
        void heroReelText.offsetWidth;
        heroReelText.classList.add('mood-spark');
        heroReelText.textContent = moods[i];
    }, 3200);
}

function initCursorGlow() {
    if (prefersReducedMotion) return;
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return; // Disable on touch/mobile

    cursorGlow = document.createElement('div');
    cursorGlow.className = 'cursor-glow';
    document.body.appendChild(cursorGlow);

    const onMove = (e) => {
        cursorTarget.x = e.clientX;
        cursorTarget.y = e.clientY;
        cursorGlow.style.opacity = '1';
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseleave', () => {
        cursorGlow.style.opacity = '0';
    });

    let rafId;
    const tick = () => {
        cursorCurrent.x += (cursorTarget.x - cursorCurrent.x) * 0.12;
        cursorCurrent.y += (cursorTarget.y - cursorCurrent.y) * 0.12;
        if (cursorGlow) {
            cursorGlow.style.transform = `translate3d(${cursorCurrent.x - cursorGlowSize / 2}px, ${cursorCurrent.y - cursorGlowSize / 2}px, 0)`;
        }
        rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    // Throttle: Pause if tab inactive
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) cancelAnimationFrame(rafId);
        else rafId = requestAnimationFrame(tick);
    });
}

function getStorySnippet(description) {
    const text = (description || '').trim();
    if (!text) return '';
    if (text.length <= 62) return text;
    return text.slice(0, 59) + '...';
}

function buildFirstNote(type) {
    const t = type || 'une ouverture lumineuse';
    return `Une ouverture ${t.toLowerCase()} qui arrive comme un premier regard.`;
}

function buildHeartNote(mode) {
    const m = mode || 'votre signature';
    return `Au cœur, ${m.toLowerCase()} prolonge l’ambiance.`;
}

function stopTypewriter() {
    if (typewriterTimer) clearTimeout(typewriterTimer);
    typewriterTimer = null;
    isTypewriterRunning = false;
    if (currentTypingEl) currentTypingEl.classList.remove('typing');
    currentTypingEl = null;
}

function setTypewriterText(el, fullText) {
    if (!el) return;
    stopTypewriter();

    const text = (fullText || '').trim();
    if (!text) {
        el.textContent = '';
        return;
    }

    if (prefersReducedMotion) {
        el.textContent = text;
        return;
    }

    el.textContent = '';
    isTypewriterRunning = true;
    currentTypingEl = el;
    el.classList.add('typing');

    let idx = 0;
    const speedMs = 12;

    const step = () => {
        if (!isTypewriterRunning) return;
        idx += 1;
        el.textContent = text.slice(0, idx);
        if (idx < text.length) {
            typewriterTimer = setTimeout(step, speedMs);
        } else {
            isTypewriterRunning = false;
            typewriterTimer = null;
            if (currentTypingEl) currentTypingEl.classList.remove('typing');
            currentTypingEl = null;
        }
    };

    typewriterTimer = setTimeout(step, speedMs);
}

function showToast(message) {
    if (!toastHost) return;
    if (!message) return;

    toastHost.classList.remove('show');
    toastHost.textContent = message;
    // restart animation
    void toastHost.offsetWidth;
    toastHost.classList.add('show');

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        toastHost.classList.remove('show');
    }, 2200);
}

function spawnSparkleBurst(x, y, kind = 'pink') {
    if (prefersReducedMotion) return;
    if (!x || !y) return;
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const count = isTouch ? 4 : 8; // Reduce on mobile
    const colors = kind === 'purple'
        ? ['rgba(123, 77, 255, 0.95)', 'rgba(255, 79, 174, 0.55)']
        : ['rgba(255, 79, 174, 0.95)', 'rgba(123, 77, 255, 0.55)'];

    for (let i = 0; i < count; i++) {
        const s = document.createElement('span');
        s.className = 'sparkle';
        s.style.left = `${x}px`;
        s.style.top = `${y}px`;
        s.style.background = `radial-gradient(circle, ${colors[0]} 0%, ${colors[1]} 45%, transparent 70%)`;
        const dx = (Math.random() - 0.5) * (isTouch ? 120 : 180);
        const dy = (Math.random() - 0.5) * (isTouch ? 120 : 180);
        const rot = (Math.random() - 0.5) * 260;
        s.style.setProperty('--dx', `${dx}px`);
        s.style.setProperty('--dy', `${dy}px`);
        s.style.setProperty('--rot', `${rot}deg`);
        const size = 4 + Math.random() * 6;
        s.style.width = `${size}px`;
        s.style.height = `${size}px`;
        document.body.appendChild(s);
        setTimeout(() => {
            s.remove();
        }, 720);
    }
    // Haptic feedback on capable devices
    if (navigator.vibrate && isTouch) {
        navigator.vibrate(50);
    }
}

function initScrollReveals() {
    if (prefersReducedMotion) return;

    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window) || els.length === 0) {
        els.forEach(el => el.classList.add('is-visible'));
        return;
    }

    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.01, rootMargin: '0px 0px 10% 0px' });

    els.forEach(el => io.observe(el));
}

// Render perfumes
function renderPerfumes(perfumesToShow) {
    grid.innerHTML = '';

    if (resultCount) {
        const n = perfumesToShow.length;
        resultCount.textContent = `${n} parfums trouvés`;
        pulseElement(resultCount);
    }
    
    if (perfumesToShow.length === 0) {
        const noResults = document.createElement('div');
        noResults.className = 'no-results';
        noResults.textContent = 'Aucun parfum ne correspond à vos critères.';
        grid.appendChild(noResults);
        return;
    }
    
    perfumesToShow.forEach((perfume, idx) => {
        const card = createPerfumeCard(perfume, idx);
        grid.appendChild(card);
    });

    // Re-register new cards for scroll reveal.
    grid.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
}

function renderFeatured(perfumesToConsider) {

    if (!featuredRow) return;

    const topPicks = [...perfumesToConsider]
        .sort((a, b) => (b.price || 0) - (a.price || 0))
        .slice(0, 4);

    featuredRow.innerHTML = '';
    topPicks.forEach((perfume, idx) => {
        const card = createFeaturedCard(perfume, idx);
        featuredRow.appendChild(card);
    });


    featuredRow.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
}

function createFeaturedCard(perfume, index) {
    const imageUrl = sanitizeImageUrl(perfume.image);
    const wished = isWishlisted(perfume.id);
    const wishChar = wished ? '♥' : '♡';

    const card = document.createElement('div');
    card.className = 'featured-card';
    card.setAttribute('role', 'button');
    card.tabIndex = 0;
    card.setAttribute('aria-label', `Voir les détails de ${perfume.name}`);

    card.addEventListener('click', () => openModal(perfume));
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openModal(perfume);
        }
    });

    const tagText = index === 0 ? 'Coup de coeur' : index === 1 ? 'Sélection' : 'À découvrir';
    const storySnippet = getStorySnippet(perfume.description);

    card.classList.add('reveal');
    card.innerHTML = `
        <div class="featured-media">
            <img src="${imageUrl}" alt="${perfume.name}" loading="lazy">
            <div class="featured-media-overlay" aria-hidden="true"></div>
            <div class="featured-tag">${tagText}</div>
        </div>
        <div class="featured-body">
            <div class="featured-name">${perfume.name}</div>
            ${storySnippet ? `<div class="featured-story">${storySnippet}</div>` : ``}
            <div class="featured-badges">
                <span class="badge badge-type">${perfume.type}</span>
                <span class="badge badge-mode">${perfume.mode}</span>
            </div>
            <div class="featured-price-row">
                <span class="card-price-pill">$${perfume.price}</span>
            </div>
            <div class="featured-action-row">
                <button class="quick-add-cart" type="button" data-cart-id="${perfume.id}">Ajouter au panier</button>
                <button class="wish-btn" type="button" data-wish-id="${perfume.id}" aria-pressed="${wished ? 'true' : 'false'}">${wishChar}</button>
            </div>
            <button class="view-btn featured-view-btn" type="button">Voir les détails</button>
        </div>
    `;

    const img = card.querySelector('img');
    if (img) {
        img.onerror = () => { 

            img.onerror = null; 
            img.src = getFallbackImageDataUri(); 
        };
    }

    const viewBtn = card.querySelector('.featured-view-btn');
    if (viewBtn) {
        viewBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();
            openModal(perfume);
        });
    }

    const quickAdd = card.querySelector('.quick-add-cart');
    if (quickAdd) {
        quickAdd.addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();
            addToCart(perfume, 1);
            openCartDrawer();
            spawnSparkleBurst(e.clientX, e.clientY, 'pink');
            quickAdd.classList.remove('btn-pop');
            void quickAdd.offsetWidth;
            quickAdd.classList.add('btn-pop');
        });
    }

    const wishBtn = card.querySelector('.wish-btn');
    if (wishBtn) {
        wishBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();
            toggleWishlist(perfume);
            spawnSparkleBurst(e.clientX, e.clientY, 'purple');
            wishBtn.classList.remove('heart-burst');
            void wishBtn.offsetWidth;
            wishBtn.classList.add('heart-burst');
        });
    }

    attachHoverSpotlight(card);

    return card;
}

// Create perfume card
function createPerfumeCard(perfume, idx = 0) {
    const imageUrl = sanitizeImageUrl(perfume.image);
    const card = document.createElement('div');
    card.className = 'perfume-card';
    card.classList.add('card-animate');
    card.classList.add('reveal');
    card.style.animationDelay = `${idx * 55}ms`;
    card.setAttribute('role', 'button');
    card.tabIndex = 0;
    card.setAttribute('aria-label', `Voir les détails de ${perfume.name}`);
    card.addEventListener('click', () => openModal(perfume));
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openModal(perfume);
        }
    });

    const wished = isWishlisted(perfume.id);
    const wishChar = wished ? '♥' : '♡';
    
    card.innerHTML = `
        <div class="card-image">
            <img src="${imageUrl}" alt="${perfume.name}" loading="lazy">
        </div>
        <div class="card-content">
            <div class="card-name-row">
                <div class="card-name">${perfume.name}</div>
            </div>
            ${getStorySnippet(perfume.description) ? `<div class="card-story">${getStorySnippet(perfume.description)}</div>` : ``}
            <div class="card-badges">
                <span class="badge badge-type">${perfume.type}</span>
                <span class="badge badge-mode">${perfume.mode}</span>
            </div>
            <div class="card-price-row">
                <span class="card-price-pill">$${perfume.price}</span>
            </div>
            <div class="card-action-row">
                <button class="quick-add-cart" type="button" data-cart-id="${perfume.id}">Ajouter</button>
                <button class="wish-btn" type="button" data-wish-id="${perfume.id}" aria-pressed="${wished ? 'true' : 'false'}">${wishChar}</button>
            </div>
            <button class="view-btn" type="button">Voir les détails</button>
        </div>
    `;
    
    // Add an image fallback (Unsplash can sometimes fail or be blocked).
    const img = card.querySelector('img');
    if (img) {
        img.onerror = () => { img.onerror = null; img.src = getFallbackImageDataUri(); };
    }

    const viewBtn = card.querySelector('.view-btn');
    if (viewBtn) {
        viewBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();
            openModal(perfume);
        });
    }

    const quickAdd = card.querySelector('.quick-add-cart');
    if (quickAdd) {
        quickAdd.addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();
            addToCart(perfume, 1);
            openCartDrawer();
            spawnSparkleBurst(e.clientX, e.clientY, 'pink');
            quickAdd.classList.remove('btn-pop');
            void quickAdd.offsetWidth;
            quickAdd.classList.add('btn-pop');
        });
    }

    const wishBtn = card.querySelector('.wish-btn');
    if (wishBtn) {
        wishBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();
            toggleWishlist(perfume);
            spawnSparkleBurst(e.clientX, e.clientY, 'purple');
            wishBtn.classList.remove('heart-burst');
            void wishBtn.offsetWidth;
            wishBtn.classList.add('heart-burst');
        });
    }

    attachHoverSpotlight(card);
    
    return card;
}

// Filter and search perfumes
function getFilteredPerfumes() {
    const searchTerm = (searchInput.value || '').trim().toLowerCase();
    const selectedType = typeFilter.value;
    const selectedMode = modeFilter.value;

    const normalize = (s) =>
        (s || '')
            .toString()
            .normalize('NFD')
            .replace(/\p{Diacritic}/gu, '')
            .toLowerCase();
    
    return perfumes.filter(perfume => {
        const matchesSearch = normalize(perfume.name).includes(normalize(searchTerm));
        const matchesType = !selectedType || perfume.type === selectedType;
        const matchesMode = !selectedMode || perfume.mode === selectedMode;
        
        return matchesSearch && matchesType && matchesMode;
    });
}

// Event listeners
function setupEventListeners() {
    // Search and filter
    searchInput.addEventListener('input', handleFilter);
    typeFilter.addEventListener('change', handleFilter);
    modeFilter.addEventListener('change', handleFilter);
    
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);

    // Cart drawer
    if (cartToggle) cartToggle.addEventListener('click', openCartDrawer);
    if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCartDrawer);
    if (cartDrawer) {
        cartDrawer.addEventListener('click', (e) => {
            const t = e.target;
            if (t && t.getAttribute && t.getAttribute('data-cart-close') === 'true') {
                closeCartDrawer();
            }
        });
    }
    if (cartClearBtn) {
        cartClearBtn.addEventListener('click', () => {
            cart = {};
            persistCart();
            updateCartUI();
        });
    }
    if (cartCheckoutBtn) {
        cartCheckoutBtn.addEventListener('click', () => {
            // Front-end only demo
            alert('La commande est une démo dans ce projet front-end.');
        });
    }

    if (cartItemsEl) {
        cartItemsEl.addEventListener('click', (e) => {
            const target = e.target;
            if (!target || !target.getAttribute) return;
            const idStr = target.getAttribute('data-id');
            if (!idStr) return;
            const id = Number(idStr);
            const action = target.getAttribute('data-action');
            if (action === 'plus') addToCartById(id, 1);
            else if (action === 'minus') addToCartById(id, -1);
            else if (target.classList.contains('cart-item-remove')) removeFromCartById(id);
        });
    }

    if (modalAddCartBtn) {
        modalAddCartBtn.addEventListener('click', () => {
            if (!currentModalPerfume) return;
            addToCart(currentModalPerfume, 1);
            openCartDrawer();
            modalAddCartBtn.classList.remove('btn-pop');
            void modalAddCartBtn.offsetWidth;
            modalAddCartBtn.classList.add('btn-pop');
            const r = modalAddCartBtn.getBoundingClientRect();
            spawnSparkleBurst(r.left + r.width / 2, r.top + r.height / 2, 'pink');
        });
    }

    if (modalWishlistBtn) {
        modalWishlistBtn.addEventListener('click', () => {
            if (!currentModalPerfume) return;
            toggleWishlist(currentModalPerfume);
            modalWishlistBtn.classList.remove('btn-pop');
            void modalWishlistBtn.offsetWidth;
            modalWishlistBtn.classList.add('btn-pop');
            const r = modalWishlistBtn.getBoundingClientRect();
            spawnSparkleBurst(r.left + r.width / 2, r.top + r.height / 2, 'purple');
        });
    }
    
// Contact links enhancements - Enhanced with global effects
    document.addEventListener('click', (e) => {
        const link = e.target.closest('.contact-link');
        if (!link) return;
        e.preventDefault();
        
        // Multi-sparkle burst
        const rect = link.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        for(let i = 0; i < 3; i++) {
            setTimeout(() => spawnSparkleBurst(centerX + (Math.random()-0.5)*100, centerY + (Math.random()-0.5)*100, 'purple'), i*100);
        }
        
        // Screen flash
        document.body.style.setProperty('--flash', '1');
        setTimeout(() => document.body.style.setProperty('--flash', '0'), 300);
        
        link.classList.remove('btn-pop');
        void link.offsetWidth;
        link.classList.add('btn-pop');
        
        // Global mood boost
        heroReelText?.classList.add('mood-spark');
        
        // Navigate
        setTimeout(() => window.open(link.href, '_blank'), 400);
    });
    
    // Global contact hover effect
    document.addEventListener('mousemove', (e) => {
        const link = e.target.closest('.contact-link');
        if (link) {
            document.body.classList.add('contact-hover');
        } else {
            document.body.classList.remove('contact-hover');
        }
    });
    
    // Modal close
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    
    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
    
    // Attach hover spotlight to contact links
    attachHoverSpotlightToContacts();
}


function attachHoverSpotlightToContacts() {
    const links = document.querySelectorAll('.contact-link');
    links.forEach(link => attachHoverSpotlight(link));
}


function handleFilter() {
    const filtered = getFilteredPerfumes();
    renderPerfumes(filtered);
    renderFeatured(filtered);
}

function toggleTheme() {
    const isDark = document.body.classList.toggle('dark');
    document.body.classList.toggle('light', !isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

function openModal(perfume) {
    lastActiveElement = document.activeElement;
    currentModalPerfume = perfume;

    modalImage.src = sanitizeImageUrl(perfume.image);
    modalImage.alt = perfume.name;
    modalName.textContent = perfume.name;
    modalType.textContent = perfume.type;
    modalMode.textContent = perfume.mode;
    modalPrice.textContent = `$${perfume.price}`;

    if (modalFirst) modalFirst.textContent = buildFirstNote(perfume.type);
    if (modalHeart) modalHeart.textContent = buildHeartNote(perfume.mode);

    setTypewriterText(
        modalDescription,
        perfume.description ? perfume.description : 'Aucune description ajoutée pour le moment. (Vous pouvez la modifier dans js/data.js)'
    );

    updateModalWishlistUI();

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus management for keyboard users.
    if (closeBtn && typeof closeBtn.focus === 'function') closeBtn.focus();

    // Modal image fallback.
    modalImage.onerror = () => { 

        modalImage.onerror = null; 
        modalImage.src = getFallbackImageDataUri(); 
    };
}

function closeModal() {
    stopTypewriter();
    currentModalPerfume = null;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = 'auto';

    if (lastActiveElement && typeof lastActiveElement.focus === 'function') {
        lastActiveElement.focus();
    }
}
