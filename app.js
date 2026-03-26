// ===================================================================
// DATA
// ===================================================================

const campaigns = {
    today: [
        { id: "ck",  brand: "Calvin Klein",    desc: "Minimalist essentials",              discount: 65, bg: "linear-gradient(135deg, #1a1a2e, #16213e)", ends: "23:59", isNew: true },
        { id: "nik", brand: "Nike",            desc: "Sportswear & Sneakers",              discount: 55, bg: "linear-gradient(135deg, #0f0f0f, #1a1a1a)", ends: "23:59", isNew: true },
        { id: "th",  brand: "Tommy Hilfiger",  desc: "American Classics",                  discount: 60, bg: "linear-gradient(135deg, #0c2340, #1d4776)", ends: "23:59" },
        { id: "hb",  brand: "Hugo Boss",       desc: "Business & Casual",                  discount: 55, bg: "linear-gradient(135deg, #2c2c2c, #1a1a1a)", ends: "23:59" },
        { id: "rl",  brand: "Ralph Lauren",    desc: "Preppy & Timeless",                  discount: 60, bg: "linear-gradient(135deg, #1b2838, #2d4a5e)", ends: "23:59" },
        { id: "adi", brand: "Adidas",          desc: "Sports Performance",                 discount: 50, bg: "linear-gradient(135deg, #1a1a1a, #333333)", ends: "23:59" },
    ],
    ending: [
        { id: "lev", brand: "Levi's",          desc: "Denim Icons",                        discount: 60, bg: "linear-gradient(135deg, #3d1c02, #6b3a1f)", ends: "02:00" },
        { id: "tnf", brand: "The North Face",  desc: "Outdoor Performance",                discount: 55, bg: "linear-gradient(135deg, #1a3a1a, #2d5a2d)", ends: "04:00" },
        { id: "mk",  brand: "Michael Kors",    desc: "Bags & Accessories",                 discount: 65, bg: "linear-gradient(135deg, #3d2b1f, #5c4033)", ends: "06:00" },
        { id: "gue", brand: "Guess",           desc: "Glamorous Styles",                   discount: 60, bg: "linear-gradient(135deg, #4a1942, #2d1b4e)", ends: "08:00" },
    ],
    coming: [
        { id: "ver", brand: "Versace Jeans",   desc: "Bold Italian Style",                 discount: 70, bg: "linear-gradient(135deg, #1a1a00, #333300)", starts: "Morgen 07:00" },
        { id: "ck2", brand: "CK Underwear",    desc: "Basics & Loungewear",                discount: 55, bg: "linear-gradient(135deg, #0a0a0a, #2a2a2a)", starts: "Morgen 07:00" },
        { id: "pu",  brand: "Puma",            desc: "Sportstyle Collection",              discount: 50, bg: "linear-gradient(135deg, #1a0a0a, #3a1a1a)", starts: "Morgen 07:00" },
        { id: "mng", brand: "Mango",           desc: "Contemporary Fashion",               discount: 60, bg: "linear-gradient(135deg, #2a1a0a, #4a3a2a)", starts: "Morgen 07:00" },
        { id: "zh",  brand: "Zara Home",       desc: "Home & Living",                      discount: 55, bg: "linear-gradient(135deg, #1a1a1a, #3a3a3a)", starts: "Do. 07:00" },
    ]
};

const productsByCampaign = {
    ck: [
        { id: 1, brand: "Calvin Klein", name: "Slim Fit Wollblend Blazer",        was: 249, now: 87,  emoji: "🧥", color: "#f5f0eb", sizes: ["S","M","L","XL"] },
        { id: 2, brand: "Calvin Klein", name: "Logo Baumwoll T-Shirt",            was: 59,  now: 21,  emoji: "👕", color: "#f0f0f5", sizes: ["XS","S","M","L","XL"] },
        { id: 3, brand: "Calvin Klein", name: "Slim Fit Stretch Jeans",           was: 129, now: 45,  emoji: "👖", color: "#eef0f5", sizes: ["28","30","32","34","36"] },
        { id: 4, brand: "Calvin Klein", name: "Satin Wrap Midi Kleid",            was: 189, now: 66,  emoji: "👗", color: "#f5eef0", sizes: ["34","36","38","40"] },
        { id: 5, brand: "Calvin Klein", name: "Leder Gürtel Logo Schnalle",       was: 79,  now: 28,  emoji: "👔", color: "#f0eeeb", sizes: ["85","90","95","100"] },
        { id: 6, brand: "Calvin Klein", name: "Crossbody Tasche",                 was: 139, now: 49,  emoji: "👜", color: "#f5f5f0", sizes: ["One Size"] },
    ],
    nik: [
        { id: 7,  brand: "Nike", name: "Air Max 90 Premium",                      was: 159, now: 72,  emoji: "👟", color: "#f5f0f0", sizes: ["38","39","40","41","42","43","44"] },
        { id: 8,  brand: "Nike", name: "Dri-FIT Running Shirt",                   was: 49,  now: 22,  emoji: "👕", color: "#f0f5f0", sizes: ["S","M","L","XL"] },
        { id: 9,  brand: "Nike", name: "Tech Fleece Jogger",                      was: 109, now: 49,  emoji: "👖", color: "#f0f0f5", sizes: ["S","M","L","XL"] },
        { id: 10, brand: "Nike", name: "Air Force 1 Low",                         was: 119, now: 54,  emoji: "👟", color: "#f5f5f0", sizes: ["39","40","41","42","43","44","45"] },
        { id: 11, brand: "Nike", name: "Windrunner Jacke",                        was: 129, now: 58,  emoji: "🧥", color: "#eef0f5", sizes: ["S","M","L","XL"] },
        { id: 12, brand: "Nike", name: "Heritage Rucksack",                       was: 45,  now: 20,  emoji: "🎒", color: "#f0f0f0", sizes: ["One Size"] },
    ],
    th: [
        { id: 13, brand: "Tommy Hilfiger", name: "Essential Down Puffer",          was: 299, now: 120, emoji: "🧥", color: "#eef0f5", sizes: ["S","M","L","XL"] },
        { id: 14, brand: "Tommy Hilfiger", name: "Core Oxford Hemd",              was: 99,  now: 40,  emoji: "👔", color: "#f5f0f0", sizes: ["S","M","L","XL","XXL"] },
        { id: 15, brand: "Tommy Hilfiger", name: "Slim Fit Chinos",               was: 119, now: 48,  emoji: "👖", color: "#f0f5f0", sizes: ["30","32","34","36"] },
        { id: 16, brand: "Tommy Hilfiger", name: "Logo Sweatshirt",               was: 129, now: 52,  emoji: "👕", color: "#f5f5f0", sizes: ["S","M","L","XL"] },
    ],
    hb: [
        { id: 17, brand: "Hugo Boss", name: "Slim Fit Stretch Chinos",            was: 149, now: 67,  emoji: "👖", color: "#f0f0f5", sizes: ["30","32","34","36"] },
        { id: 18, brand: "Hugo Boss", name: "Regular Fit Anzughemd",              was: 119, now: 54,  emoji: "👔", color: "#f5f5f0", sizes: ["38","39","40","41","42"] },
        { id: 19, brand: "Hugo Boss", name: "Woll Kaschmir Pullover",             was: 199, now: 90,  emoji: "🧥", color: "#f0eeeb", sizes: ["S","M","L","XL"] },
        { id: 20, brand: "Hugo Boss", name: "Leder Sneaker",                      was: 229, now: 103, emoji: "👟", color: "#f5f0f0", sizes: ["40","41","42","43","44"] },
    ],
    rl: [
        { id: 21, brand: "Ralph Lauren", name: "Classic Fit Oxford Hemd",          was: 129, now: 52,  emoji: "👔", color: "#f0f5f0", sizes: ["S","M","L","XL","XXL"] },
        { id: 22, brand: "Ralph Lauren", name: "Cable Knit Pullover",             was: 179, now: 72,  emoji: "🧥", color: "#f5f0eb", sizes: ["S","M","L","XL"] },
        { id: 23, brand: "Ralph Lauren", name: "Slim Fit Polo",                   was: 119, now: 48,  emoji: "👕", color: "#eef0f5", sizes: ["S","M","L","XL"] },
    ],
    adi: [
        { id: 24, brand: "Adidas", name: "Ultraboost 22 Running",                 was: 189, now: 95,  emoji: "👟", color: "#f5f0f0", sizes: ["39","40","41","42","43","44","45"] },
        { id: 25, brand: "Adidas", name: "3-Stripes Trainingshose",               was: 69,  now: 35,  emoji: "👖", color: "#f0f0f5", sizes: ["S","M","L","XL"] },
        { id: 26, brand: "Adidas", name: "Essentials Hoodie",                     was: 79,  now: 40,  emoji: "👕", color: "#f0f5f0", sizes: ["S","M","L","XL"] },
    ],
    lev: [
        { id: 27, brand: "Levi's", name: "501 Original Fit Jeans",                was: 119, now: 48,  emoji: "👖", color: "#f0eeeb", sizes: ["28","30","32","34","36"] },
        { id: 28, brand: "Levi's", name: "Trucker Jeansjacke",                    was: 139, now: 56,  emoji: "🧥", color: "#f5f0eb", sizes: ["S","M","L","XL"] },
    ],
    tnf: [
        { id: 29, brand: "The North Face", name: "Thermoball Eco Jacke",          was: 229, now: 103, emoji: "🧥", color: "#eef5ee", sizes: ["S","M","L","XL"] },
        { id: 30, brand: "The North Face", name: "Resolve Regenjacke",            was: 149, now: 67,  emoji: "🧥", color: "#f0f0f5", sizes: ["S","M","L","XL"] },
    ],
    mk: [
        { id: 31, brand: "Michael Kors", name: "Jet Set Crossbody Tasche",        was: 199, now: 70,  emoji: "👜", color: "#f5f0eb", sizes: ["One Size"] },
        { id: 32, brand: "Michael Kors", name: "Runway Chronograph Uhr",          was: 279, now: 98,  emoji: "⌚", color: "#f0f0f5", sizes: ["One Size"] },
    ],
    gue: [
        { id: 33, brand: "Guess", name: "Pailletten Cocktail Mini Kleid",         was: 159, now: 64,  emoji: "👗", color: "#f5eef5", sizes: ["XS","S","M","L"] },
        { id: 34, brand: "Guess", name: "Logo Umhängetasche",                     was: 119, now: 48,  emoji: "👜", color: "#f5f0f0", sizes: ["One Size"] },
    ],
};

// Fill missing campaigns with generic products
Object.keys(campaigns).forEach(section => {
    campaigns[section].forEach(c => {
        if (!productsByCampaign[c.id]) {
            productsByCampaign[c.id] = [
                { id: 100+Math.random()*900|0, brand: c.brand, name: "Premium Artikel", was: 199, now: 79, emoji: "🛍️", color: "#f0f0f5", sizes: ["S","M","L"] }
            ];
        }
    });
});

// ===================================================================
// RENDER CAMPAIGNS
// ===================================================================

const clockSvg = `<svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`;

function renderCampaignCard(c) {
    return `
        <div class="campaign-card" onclick="openCampaign('${c.id}', '${c.brand}', ${c.discount})">
            <div class="campaign-bg" style="background: ${c.bg}">
                <div class="campaign-overlay"></div>
                ${c.isNew ? '<div class="campaign-new-badge">Neu</div>' : ''}
                <div class="campaign-content">
                    <div class="campaign-brand">${c.brand}</div>
                    <div class="campaign-desc">${c.desc}</div>
                    <div class="campaign-meta">
                        <span class="campaign-discount">Bis zu -${c.discount}%</span>
                        <span class="campaign-timer">${clockSvg} ${c.ends ? 'Endet in ' + c.ends : c.starts || ''}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderCampaigns() {
    const main = document.getElementById('mainCampaigns');
    main.innerHTML = `
        <div class="section-header">
            <h2 class="section-title">Startet heute</h2>
            <span class="section-count">${campaigns.today.length} Aktionen</span>
        </div>
        <div class="campaign-grid hero">
            ${campaigns.today.slice(0, 2).map(renderCampaignCard).join('')}
        </div>
        <div class="campaign-grid standard">
            ${campaigns.today.slice(2).map(renderCampaignCard).join('')}
        </div>

        <div class="section-header">
            <h2 class="section-title">Endet bald</h2>
            <span class="section-count">${campaigns.ending.length} Aktionen</span>
        </div>
        <div class="campaign-grid standard">
            ${campaigns.ending.map(renderCampaignCard).join('')}
        </div>

        <div class="section-header">
            <h2 class="section-title">Kommt bald</h2>
            <span class="section-count">${campaigns.coming.length} Aktionen</span>
        </div>
        <div class="campaign-grid small">
            ${campaigns.coming.map(renderCampaignCard).join('')}
        </div>
    `;
}

// ===================================================================
// CAMPAIGN DETAIL (PRODUCTS)
// ===================================================================

let currentCampaignId = null;

function openCampaign(id, brand, discount) {
    currentCampaignId = id;
    const products = productsByCampaign[id] || [];

    document.getElementById('mainCampaigns').classList.add('hidden');
    document.getElementById('mainProducts').classList.remove('hidden');

    document.getElementById('productViewHeader').innerHTML = `
        <button class="pvh-back" onclick="showCampaigns()">
            <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <span class="pvh-brand">${brand}</span>
        <span class="pvh-meta">${products.length} Artikel</span>
        <span class="pvh-discount">Bis zu -${discount}%</span>
    `;

    const grid = document.getElementById('productGrid');
    grid.innerHTML = products.map(p => {
        const off = Math.round((1 - p.now / p.was) * 100);
        return `
            <div class="product-card" onclick="openProductModal(${p.id}, '${currentCampaignId}')">
                <div class="product-img" style="background: ${p.color}">
                    <span class="product-img-emoji">${p.emoji}</span>
                    <span class="product-discount-badge">-${off}%</span>
                    <button class="product-fav" onclick="event.stopPropagation(); this.classList.toggle('liked')">
                        <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                    </button>
                </div>
                <div class="product-info">
                    <div class="product-brand">${p.brand}</div>
                    <div class="product-name">${p.name}</div>
                    <div class="product-prices">
                        <span class="price-now">${p.now.toFixed(2)} €</span>
                        <span class="price-was">${p.was.toFixed(2)} €</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // Filter chips
    document.querySelectorAll('.filter-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
        });
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showCampaigns() {
    document.getElementById('mainProducts').classList.add('hidden');
    document.getElementById('mainCampaigns').classList.remove('hidden');
    currentCampaignId = null;
}

// ===================================================================
// PRODUCT MODAL
// ===================================================================

function openProductModal(productId, campaignId) {
    const products = productsByCampaign[campaignId] || [];
    const p = products.find(x => x.id === productId);
    if (!p) return;

    const off = Math.round((1 - p.now / p.was) * 100);
    const body = document.getElementById('modalBody');
    body.innerHTML = `
        <div class="modal-product-img" style="background: ${p.color}">${p.emoji}</div>
        <div class="modal-brand">${p.brand}</div>
        <div class="modal-name">${p.name}</div>
        <div class="modal-prices">
            <span class="now">${p.now.toFixed(2)} €</span>
            <span class="was">${p.was.toFixed(2)} €</span>
            <span class="off">-${off}%</span>
        </div>
        <div class="modal-sizes">
            ${p.sizes.map((s, i) => `<button class="modal-size-btn ${i === 1 ? 'selected' : ''}">${s}</button>`).join('')}
        </div>
        <div class="modal-actions">
            <button class="btn-cart">In den Warenkorb</button>
            <button class="btn-ai" onclick="askAIAbout('${p.brand}', '${p.name}')">
                <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                AI fragen
            </button>
        </div>
    `;

    body.querySelectorAll('.modal-size-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            body.querySelectorAll('.modal-size-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
        });
    });

    document.getElementById('modalOverlay').classList.add('open');
}

function askAIAbout(brand, name) {
    document.getElementById('modalOverlay').classList.remove('open');
    openAIPanel();
    sendMessage(`Erzähl mir mehr über ${brand} ${name} — lohnt sich der Kauf?`);
}

document.getElementById('modalClose').addEventListener('click', () => {
    document.getElementById('modalOverlay').classList.remove('open');
});
document.getElementById('modalOverlay').addEventListener('click', e => {
    if (e.target === e.currentTarget) e.currentTarget.classList.remove('open');
});

// ===================================================================
// AI ASSISTANT
// ===================================================================

const fab = document.getElementById('aiFab');
const panel = document.getElementById('aiPanel');
const messagesEl = document.getElementById('aiMessages');
const inputEl = document.getElementById('aiInput');
const quickActionsEl = document.getElementById('quickActions');

let chatStarted = false;

function openAIPanel() {
    panel.classList.add('open');
    fab.classList.add('hidden');
    if (!chatStarted) {
        addBot(`Hallo! 👋 Ich bin dein Lounge AI Assistant. Ich helfe dir bei der Suche nach den besten Deals, Größenberatung, Bestellverfolgung und Outfit-Zusammenstellung. Wie kann ich helfen?`);
        chatStarted = true;
    }
    inputEl.focus();
}
function closeAIPanel() {
    panel.classList.remove('open');
    fab.classList.remove('hidden');
}

fab.addEventListener('click', openAIPanel);
document.getElementById('aiClose').addEventListener('click', closeAIPanel);

function addMsg(html, type) {
    const el = document.createElement('div');
    el.classList.add('msg', type);
    el.innerHTML = html;
    messagesEl.appendChild(el);
    messagesEl.scrollTop = messagesEl.scrollHeight;
    return el;
}
function addBot(html) { return addMsg(html, 'bot'); }
function addUser(html) { return addMsg(html, 'user'); }

function showTyping() {
    const el = addMsg('<div class="typing-dots"><span></span><span></span><span></span></div>', 'bot');
    el.id = 'typing';
    return el;
}
function hideTyping() {
    const el = document.getElementById('typing');
    if (el) el.remove();
}

// -- Chat product cards
function chatProducts(items) {
    return items.map(p => `
        <div class="chat-item">
            <div class="chat-item-img">${p.emoji}</div>
            <div class="chat-item-info">
                <div class="chat-item-brand">${p.brand}</div>
                <div class="chat-item-name">${p.name}</div>
                <div class="chat-item-price">${p.price} <span class="was">${p.original}</span></div>
                <button class="chat-cart-btn">In den Warenkorb</button>
            </div>
        </div>
    `).join('');
}

function chatSizeRec() {
    return `
        <div class="size-card">
            <div class="size-card-title">Größenempfehlung für EU 38</div>
            <div class="size-pills">
                <span class="size-pill">XS</span>
                <span class="size-pill best">S</span>
                <span class="size-pill">M</span>
                <span class="size-pill">L</span>
                <span class="size-pill">XL</span>
            </div>
            <div class="size-note">Basierend auf 2.340 Kunden mit ähnlichen Maßen. 87% empfanden <strong>S</strong> als perfekte Passform.</div>
        </div>
    `;
}

function chatOrderTrack() {
    return `
        <div class="track-card">
            <div class="track-order-id">Bestellung #ZL-2026-48291 · 24. März 2026</div>
            <div class="track-step done"><div class="track-dot">✓</div><div class="track-text">Bestellung bestätigt <small>24. Mär, 10:15</small></div></div>
            <div class="track-step done"><div class="track-dot">✓</div><div class="track-text">Zahlung verarbeitet <small>24. Mär, 10:16</small></div></div>
            <div class="track-step done"><div class="track-dot">✓</div><div class="track-text">Aus dem Lager versendet <small>25. Mär, 08:30</small></div></div>
            <div class="track-step active"><div class="track-dot">●</div><div class="track-text">Unterwegs — Sortierzentrum Berlin <small>26. Mär, 06:45</small></div></div>
            <div class="track-step"><div class="track-dot"></div><div class="track-text">Zugestellt <small>Voraussichtlich: 27. Mär</small></div></div>
        </div>
    `;
}

// -- Response logic
const responses = {
    dress: {
        text: "Tolle Wahl! Hier sind meine Top-Empfehlungen für eine Cocktailparty unter 80 €:",
        items: [
            { emoji: "👗", brand: "Guess",        name: "Pailletten Cocktail Mini Kleid", price: "64,00 €", original: "159,00 €" },
            { emoji: "👗", brand: "Calvin Klein",  name: "Satin Wrap Midi Kleid",          price: "66,00 €", original: "189,00 €" },
            { emoji: "👗", brand: "Mango",         name: "Fitted V-Neck Strickkleid",      price: "39,00 €", original: "79,00 €" },
        ],
        followUp: "Alle innerhalb deines Budgets und perfekt für eine Cocktailparty! Soll ich bei der Größe helfen?"
    },
    size: {
        text: "Basierend auf EU 38 habe ich die Passform-Daten von tausenden Kunden analysiert:",
        widget: "size",
        followUp: "Die Passform kann je nach Marke variieren. Soll ich einen bestimmten Artikel prüfen?"
    },
    sneaker: {
        text: "Hier sind die beliebtesten Sneaker im Sale — sie gehen schnell weg!",
        items: [
            { emoji: "👟", brand: "Nike",   name: "Air Max 90 Premium",    price: "72,00 €", original: "159,00 €" },
            { emoji: "👟", brand: "Adidas", name: "Ultraboost 22 Running", price: "95,00 €", original: "189,00 €" },
            { emoji: "👟", brand: "Puma",   name: "RS-X Reinvention",      price: "58,00 €", original: "129,00 €" },
        ],
        followUp: "Die Nike Air Max 90 sind heute unser Bestseller! Soll ich deine Größe prüfen?"
    },
    order: {
        text: "Deine letzte Bestellung gefunden! Hier ist der Status:",
        widget: "track",
        followUp: "Dein Paket ist unterwegs! Voraussichtliche Zustellung morgen. Brauchst du sonst noch etwas?"
    },
    outfit: {
        text: "Für ein Vorstellungsgespräch empfehle ich einen eleganten, aber nicht overdressed Look. Hier ist ein komplettes Outfit:",
        items: [
            { emoji: "🧥", brand: "Calvin Klein",  name: "Slim Fit Wollblend Blazer",  price: "87,00 €",  original: "249,00 €" },
            { emoji: "👔", brand: "Ralph Lauren",   name: "Classic Oxford Hemd",         price: "52,00 €",  original: "129,00 €" },
            { emoji: "👖", brand: "Hugo Boss",      name: "Slim Fit Stretch Chinos",     price: "67,00 €",  original: "149,00 €" },
        ],
        followUp: "Gesamtkosten: <strong>206 €</strong> (statt 527 € — du sparst 61%!). Dieser Look strahlt professionelles Selbstbewusstsein aus. Alles in den Warenkorb?"
    },
    worth: {
        text: `Guter Blick! Das ist einer unserer Bestseller im aktuellen Flash Sale. Das sagen die Kunden:

✅ <strong>Premium-Qualität</strong> — 4,6/5 Sterne von 1.200+ Käufern
✅ <strong>Passt wie angegeben</strong> — 91% bestätigen die Passform
✅ <strong>Toller Preis</strong> — einer der größten Rabatte der Saison
⚠️ <strong>Fast ausverkauft</strong> — nur noch 3 in beliebten Größen

Definitiv lohnenswert zu diesem Preis. Soll ich die richtige Größe finden?`
    },
    cart: {
        text: `Erledigt! 🛒 Alle 3 Artikel sind im Warenkorb.

<strong>Warenkorb: 206 €</strong> (du sparst 321 €!)

Was möchtest du als nächstes?
• Zur Kasse
• Weiter stöbern
• Gutscheincode eingeben`
    },
    greeting: {
        text: "Hallo! 👋 Ich bin dein Lounge AI Assistant. Ich helfe dir bei der Suche nach den besten Deals, Größenberatung, Bestellverfolgung und Outfit-Zusammenstellung. Wie kann ich helfen?"
    },
    fallback: [
        "Gute Frage! Kannst du mir etwas mehr dazu sagen — Stil, Anlass oder Budget?",
        "Da helfe ich gerne! Suchst du etwas Bestimmtes oder soll ich Vorschläge machen?",
        "Ich kann in unseren aktuellen Sales suchen. Hast du bevorzugte Marken oder ein Budget?",
    ]
};

function matchResponse(text) {
    const t = text.toLowerCase();
    if (/kleid|dress|cocktail|party/.test(t))           return responses.dress;
    if (/größe|size|eu\s*38|passt|sizing/.test(t))      return responses.size;
    if (/sneaker|schuh|shoe|trainer/.test(t))            return responses.sneaker;
    if (/bestell|order|track|lieferung|paket/.test(t))   return responses.order;
    if (/outfit|interview|vorstellung|büro|office/.test(t)) return responses.outfit;
    if (/lohnt|worth|mehr über|erzähl/.test(t))          return responses.worth;
    if (/warenkorb|cart|kauf|buy|add/.test(t))           return responses.cart;
    if (/hallo|hello|hi|hey|привет|moin/.test(t))       return responses.greeting;
    return { text: responses.fallback[Math.random() * responses.fallback.length | 0] };
}

function sendMessage(text) {
    if (!text.trim()) return;
    addUser(text);
    quickActionsEl.style.display = 'none';

    showTyping();
    const delay = 700 + Math.random() * 1000;
    setTimeout(() => {
        hideTyping();
        const r = matchResponse(text);
        addBot(r.text);

        if (r.items) {
            const m = addBot(chatProducts(r.items));
            m.style.maxWidth = '95%';
        }
        if (r.widget === 'size') {
            const m = addBot(chatSizeRec());
            m.style.maxWidth = '95%';
        }
        if (r.widget === 'track') {
            const m = addBot(chatOrderTrack());
            m.style.maxWidth = '95%';
        }
        if (r.followUp) {
            setTimeout(() => addBot(r.followUp), 500);
        }
    }, delay);
}

document.getElementById('aiSend').addEventListener('click', () => { sendMessage(inputEl.value); inputEl.value = ''; });
inputEl.addEventListener('keydown', e => { if (e.key === 'Enter') { sendMessage(inputEl.value); inputEl.value = ''; } });
quickActionsEl.querySelectorAll('.ai-chip').forEach(btn => {
    btn.addEventListener('click', () => sendMessage(btn.dataset.prompt));
});

// ===================================================================
// INIT
// ===================================================================
renderCampaigns();
