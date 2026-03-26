// ===== Product Data =====
const products = [
    { id: 1, brand: "Calvin Klein", name: "Slim Fit Wool Blend Blazer", originalPrice: 249, salePrice: 89, discount: 64, badge: "hot", emoji: "🧥", sizes: ["S","M","L","XL"] },
    { id: 2, brand: "Nike", name: "Air Max 90 Premium Sneakers", originalPrice: 159, salePrice: 79, discount: 50, badge: "-50%", emoji: "👟", sizes: ["38","39","40","41","42","43","44"] },
    { id: 3, brand: "Tommy Hilfiger", name: "Essential Down Puffer Jacket", originalPrice: 299, salePrice: 119, discount: 60, badge: "-60%", emoji: "🧥", sizes: ["S","M","L"] },
    { id: 4, brand: "Levi's", name: "501 Original Fit Jeans — Dark Wash", originalPrice: 119, salePrice: 49, discount: 59, badge: "-59%", emoji: "👖", sizes: ["28","30","32","34","36"] },
    { id: 5, brand: "Adidas", name: "Ultraboost 22 Running Shoes", originalPrice: 189, salePrice: 94, discount: 50, badge: "hot", emoji: "👟", sizes: ["39","40","41","42","43","44","45"] },
    { id: 6, brand: "Ralph Lauren", name: "Classic Oxford Shirt — White", originalPrice: 129, salePrice: 52, discount: 60, badge: "-60%", emoji: "👔", sizes: ["S","M","L","XL","XXL"] },
    { id: 7, brand: "Hugo Boss", name: "Slim Fit Stretch Cotton Chinos", originalPrice: 149, salePrice: 59, discount: 60, badge: "-60%", emoji: "👖", sizes: ["30","32","34","36"] },
    { id: 8, brand: "The North Face", name: "Thermoball Eco Jacket", originalPrice: 229, salePrice: 99, discount: 57, badge: "-57%", emoji: "🧥", sizes: ["S","M","L","XL"] },
    { id: 9, brand: "Zara Home", name: "Linen Blend Throw Blanket", originalPrice: 69, salePrice: 29, discount: 58, badge: "limited", emoji: "🛋️", sizes: ["One Size"] },
    { id: 10, brand: "Michael Kors", name: "Jet Set Crossbody Bag — Black", originalPrice: 199, salePrice: 79, discount: 60, badge: "-60%", emoji: "👜", sizes: ["One Size"] },
    { id: 11, brand: "Guess", name: "Sequin Cocktail Mini Dress", originalPrice: 159, salePrice: 64, discount: 60, badge: "new", emoji: "👗", sizes: ["XS","S","M","L"] },
    { id: 12, brand: "Puma", name: "RS-X Reinvention Sneakers", originalPrice: 129, salePrice: 58, discount: 55, badge: "-55%", emoji: "👟", sizes: ["38","39","40","41","42","43"] },
];

// ===== AI Response Templates =====
const aiResponses = {
    greeting: `Hi there! 👋 I'm your Lounge AI Assistant. I can help you find the perfect items, recommend sizes, track orders, and put together outfits. What can I help you with?`,

    blackDress: {
        text: `Great choice! I found some stunning options for a cocktail party. Here are my top picks under €80:`,
        products: [
            { emoji: "👗", brand: "Guess", name: "Sequin Cocktail Mini Dress", price: "€64", original: "€159" },
            { emoji: "👗", brand: "Calvin Klein", name: "Satin Wrap Midi Dress", price: "€72", original: "€189" },
            { emoji: "👗", brand: "Mango", name: "Fitted V-Neck Knit Dress", price: "€39", original: "€79" },
        ],
        followUp: "All are within your budget and perfect for a cocktail party! Would you like me to help with sizing or check availability?"
    },

    sizing: {
        text: `Based on your EU 38, here's my recommendation for our top items. I've analyzed fit data from thousands of customers:`,
        card: "size-rec",
        followUp: "The fit can vary by brand. Would you like me to check a specific item?"
    },

    sneakers: {
        text: `Here are the hottest sneakers on sale right now — selling fast! 🔥`,
        products: [
            { emoji: "👟", brand: "Nike", name: "Air Max 90 Premium", price: "€79", original: "€159" },
            { emoji: "👟", brand: "Adidas", name: "Ultraboost 22 Running", price: "€94", original: "€189" },
            { emoji: "👟", brand: "Puma", name: "RS-X Reinvention", price: "€58", original: "€129" },
        ],
        followUp: "The Nike Air Max 90 is our #1 seller today! Want me to check your size?"
    },

    orderTracking: {
        text: `Found your most recent order! Here's the status:`,
        card: "order-track",
        followUp: "Your package is on the way! Expected delivery is tomorrow. Need anything else?"
    },

    interview: {
        text: `For a job interview, I recommend a polished but not overdressed look. Here's a complete outfit I put together:`,
        products: [
            { emoji: "🧥", brand: "Calvin Klein", name: "Slim Fit Wool Blazer", price: "€89", original: "€249" },
            { emoji: "👔", brand: "Ralph Lauren", name: "Classic Oxford Shirt", price: "€52", original: "€129" },
            { emoji: "👖", brand: "Hugo Boss", name: "Slim Fit Stretch Chinos", price: "€59", original: "€149" },
        ],
        followUp: "Total outfit cost: **€200** (originally €527 — you save 62%!). This combo screams professional confidence. Want to add all to cart?"
    },

    fallback: [
        `That's a great question! Let me help. Could you tell me a bit more about what you're looking for — style, occasion, budget?`,
        `I'd love to help with that! Are you looking for something specific, or would you like me to suggest some options?`,
        `Interesting! I can search our current flash sale for you. Could you give me a few more details like preferred brands or price range?`,
    ]
};

// ===== Render Product Grid =====
function renderProducts() {
    const grid = document.getElementById('productGrid');
    grid.innerHTML = products.map(p => `
        <div class="product-card" data-id="${p.id}">
            <div class="product-image">
                <span class="placeholder-img">${p.emoji}</span>
                <span class="product-badge ${p.badge === 'hot' ? 'hot' : p.badge === 'new' ? 'new' : p.badge === 'limited' ? 'limited' : ''}">${p.badge === 'hot' ? '🔥 Hot' : p.badge === 'new' ? 'New' : p.badge === 'limited' ? 'Limited' : p.badge}</span>
                <button class="product-wishlist" onclick="event.stopPropagation(); this.classList.toggle('active')">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                </button>
            </div>
            <div class="product-info">
                <div class="product-brand">${p.brand}</div>
                <div class="product-name">${p.name}</div>
                <div class="product-prices">
                    <span class="price-sale">€${p.salePrice}</span>
                    <span class="price-original">€${p.originalPrice}</span>
                    <span class="price-discount">-${p.discount}%</span>
                </div>
                <div class="product-sizes">${p.sizes.map(s => `<span class="size-tag">${s}</span>`).join('')}</div>
            </div>
        </div>
    `).join('');

    // Card click → modal
    grid.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', () => {
            const product = products.find(p => p.id === +card.dataset.id);
            openModal(product);
        });
    });
}

// ===== Product Modal =====
function openModal(product) {
    const overlay = document.getElementById('modalOverlay');
    const body = document.getElementById('modalBody');
    body.innerHTML = `
        <div class="modal-product-image">${product.emoji}</div>
        <div class="modal-product-brand">${product.brand}</div>
        <div class="modal-product-name">${product.name}</div>
        <div class="modal-prices">
            <span class="sale">€${product.salePrice}</span>
            <span class="original">€${product.originalPrice}</span>
            <span class="price-discount">-${product.discount}%</span>
        </div>
        <div class="modal-sizes">
            ${product.sizes.map((s, i) => `<button class="modal-size-btn ${i === 1 ? 'selected' : ''}">${s}</button>`).join('')}
        </div>
        <div class="modal-actions">
            <button class="btn-add-cart">Add to Cart</button>
            <button class="btn-ask-ai" onclick="askAIAboutProduct('${product.brand}', '${product.name}')">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a3 3 0 0 0-3 3v1H6a2 2 0 0 0-2 2v2a2 2 0 0 0 1 1.73V18a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6.27A2 2 0 0 0 20 10V8a2 2 0 0 0-2-2h-3V5a3 3 0 0 0-3-3z"/><circle cx="9" cy="11" r="1" fill="currentColor"/><circle cx="15" cy="11" r="1" fill="currentColor"/><path d="M9 15h6" stroke-linecap="round"/></svg>
                Ask AI
            </button>
        </div>
    `;

    // Size selection
    body.querySelectorAll('.modal-size-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            body.querySelectorAll('.modal-size-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
        });
    });

    overlay.classList.add('open');
}

function askAIAboutProduct(brand, name) {
    document.getElementById('modalOverlay').classList.remove('open');
    openAIPanel();
    sendMessage(`Tell me more about the ${brand} ${name} — is it worth buying?`);
}

// ===== AI Panel =====
const fab = document.getElementById('aiFab');
const panel = document.getElementById('aiPanel');
const closeBtn = document.getElementById('aiClose');
const input = document.getElementById('aiInput');
const sendBtn = document.getElementById('aiSend');
const messagesEl = document.getElementById('aiMessages');
const quickActionsEl = document.getElementById('quickActions');

let chatStarted = false;

function openAIPanel() {
    panel.classList.add('open');
    fab.classList.add('hidden');
    if (!chatStarted) {
        addBotMessage(aiResponses.greeting);
        chatStarted = true;
    }
    input.focus();
}

function closeAIPanel() {
    panel.classList.remove('open');
    fab.classList.remove('hidden');
}

fab.addEventListener('click', openAIPanel);
closeBtn.addEventListener('click', closeAIPanel);

// ===== Messaging =====
function addMessage(text, type) {
    const msg = document.createElement('div');
    msg.classList.add('message', type);
    msg.innerHTML = text;
    messagesEl.appendChild(msg);
    messagesEl.scrollTop = messagesEl.scrollHeight;
    return msg;
}

function addBotMessage(text) { return addMessage(text, 'bot'); }
function addUserMessage(text) { return addMessage(text, 'user'); }

function showTyping() {
    const msg = addMessage('<div class="typing"><span></span><span></span><span></span></div>', 'bot');
    msg.id = 'typingIndicator';
    return msg;
}
function hideTyping() {
    const t = document.getElementById('typingIndicator');
    if (t) t.remove();
}

function renderProductCards(products) {
    return products.map(p => `
        <div class="chat-product-card">
            <div class="chat-product-thumb">${p.emoji}</div>
            <div class="chat-product-info">
                <div class="brand">${p.brand}</div>
                <div class="name">${p.name}</div>
                <div class="price">${p.price} <span class="original">${p.original}</span></div>
                <button class="chat-add-btn">+ Add to Cart</button>
            </div>
        </div>
    `).join('');
}

function renderSizeRec() {
    return `
        <div class="size-rec-card">
            <div class="rec-title">📏 Size Recommendation for EU 38</div>
            <div class="size-options">
                <span class="size-option">XS</span>
                <span class="size-option recommended">S</span>
                <span class="size-option">M</span>
                <span class="size-option">L</span>
                <span class="size-option">XL</span>
            </div>
            <p style="font-size:11px; color:#6b7280; margin-top:8px;">
                Based on 2,340 customers with similar measurements. 87% found <strong>S</strong> to be the best fit.
            </p>
        </div>
    `;
}

function renderOrderTracking() {
    return `
        <div class="order-track-card">
            <div class="order-id">Order #ZL-2026-48291 · March 24, 2026</div>
            <div class="track-steps">
                <div class="track-step done">
                    <div class="track-dot">✓</div>
                    <div class="track-label">Order confirmed <span class="track-date">Mar 24, 10:15</span></div>
                </div>
                <div class="track-step done">
                    <div class="track-dot">✓</div>
                    <div class="track-label">Payment processed <span class="track-date">Mar 24, 10:16</span></div>
                </div>
                <div class="track-step done">
                    <div class="track-dot">✓</div>
                    <div class="track-label">Shipped from warehouse <span class="track-date">Mar 25, 08:30</span></div>
                </div>
                <div class="track-step current">
                    <div class="track-dot">●</div>
                    <div class="track-label">In transit — Berlin sorting center <span class="track-date">Mar 26, 06:45</span></div>
                </div>
                <div class="track-step">
                    <div class="track-dot"></div>
                    <div class="track-label">Delivered <span class="track-date">Expected: Mar 27</span></div>
                </div>
            </div>
        </div>
    `;
}

function processMessage(text) {
    const lower = text.toLowerCase();

    if (lower.includes('black dress') || lower.includes('cocktail') || lower.includes('party dress')) {
        return aiResponses.blackDress;
    }
    if (lower.includes('size') || lower.includes('sizing') || lower.includes('eu 38') || lower.includes('fit')) {
        return aiResponses.sizing;
    }
    if (lower.includes('sneaker') || lower.includes('shoes') || lower.includes('trainers')) {
        return aiResponses.sneakers;
    }
    if (lower.includes('track') || lower.includes('order') || lower.includes('delivery') || lower.includes('shipping')) {
        return aiResponses.orderTracking;
    }
    if (lower.includes('interview') || lower.includes('office') || lower.includes('professional') || lower.includes('work outfit')) {
        return aiResponses.interview;
    }
    if (lower.includes('tell me more') || lower.includes('worth buying')) {
        return {
            text: `Great eye! This is one of our best-selling items in the current flash sale. Here's what customers love about it:

✅ **Premium quality** — rated 4.6/5 by 1,200+ buyers
✅ **True to size** — 91% say it fits as expected
✅ **Great value** — one of the biggest discounts this season
⚠️ **Low stock** — only 3 left in popular sizes

I'd say it's definitely worth it at this price. Want me to help pick the right size?`,
        };
    }
    if (lower.includes('add all') || lower.includes('add to cart') || lower.includes('buy')) {
        return {
            text: `Done! 🛒 I've added all 3 items to your cart.

**Your cart total: €200** (saving €327!)

Would you like to:
• Proceed to checkout
• Keep browsing for more deals
• Apply a promo code`,
        };
    }
    if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey') || lower.includes('привет')) {
        return { text: aiResponses.greeting };
    }

    // Fallback
    return { text: aiResponses.fallback[Math.floor(Math.random() * aiResponses.fallback.length)] };
}

function sendMessage(text) {
    if (!text.trim()) return;

    addUserMessage(text);
    quickActionsEl.style.display = 'none';

    showTyping();

    const delay = 800 + Math.random() * 1200;
    setTimeout(() => {
        hideTyping();
        const response = processMessage(text);

        addBotMessage(response.text);

        if (response.products) {
            const cardsMsg = addBotMessage(renderProductCards(response.products));
            cardsMsg.style.maxWidth = '95%';
        }

        if (response.card === 'size-rec') {
            const recMsg = addBotMessage(renderSizeRec());
            recMsg.style.maxWidth = '95%';
        }

        if (response.card === 'order-track') {
            const trackMsg = addBotMessage(renderOrderTracking());
            trackMsg.style.maxWidth = '95%';
        }

        if (response.followUp) {
            setTimeout(() => {
                addBotMessage(response.followUp);
            }, 600);
        }
    }, delay);
}

// Send events
sendBtn.addEventListener('click', () => {
    sendMessage(input.value);
    input.value = '';
});
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        sendMessage(input.value);
        input.value = '';
    }
});

// Quick actions
quickActionsEl.querySelectorAll('.quick-action').forEach(btn => {
    btn.addEventListener('click', () => {
        sendMessage(btn.dataset.prompt);
    });
});

// ===== Modal close =====
document.getElementById('modalClose').addEventListener('click', () => {
    document.getElementById('modalOverlay').classList.remove('open');
});
document.getElementById('modalOverlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        document.getElementById('modalOverlay').classList.remove('open');
    }
});

// ===== Countdown Timer =====
function startCountdown() {
    let total = 2 * 3600 + 47 * 60 + 33;
    const el = document.getElementById('countdown');
    setInterval(() => {
        if (total <= 0) return;
        total--;
        const h = String(Math.floor(total / 3600)).padStart(2, '0');
        const m = String(Math.floor((total % 3600) / 60)).padStart(2, '0');
        const s = String(total % 60).padStart(2, '0');
        el.textContent = `${h}:${m}:${s}`;
    }, 1000);
}

// ===== Init =====
renderProducts();
startCountdown();
