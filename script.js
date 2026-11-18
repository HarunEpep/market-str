document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'F12' || e.keyCode === 123) { e.preventDefault(); return false; }
    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C' || e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) { e.preventDefault(); return false; }
    if (e.ctrlKey && (e.key === 'U' || e.keyCode === 85)) { e.preventDefault(); return false; }
});

const WA_NUMBER = '6285731899425'; // Ganti nomor WA lu
const DISCORD_LINK = 'https://discord.gg/e8wyPbbHKS'; // Ganti link Discord lu

const products = [
    { id: 1, name: 'PUBLIC 7 Hari', price: 3000, dur: '7 Hari', type: 'public', icon: 'public', badge: '', stars: 5, reviews: 12, 
      detail: 'Akses keylogger public selama 7 hari. Data masuk ke channel bersama. Cocok buat nyoba dulu.' },
    { id: 2, name: 'PUBLIC 1 Bulan', price: 10000, dur: '1 Bulan', type: 'public', icon: 'public', badge: 'best', stars: 5, reviews: 8, 
      detail: 'Akses keylogger public selama 1 Bulan. Harga lebih hemat untuk durasi lebih lama.' },
    { id: 3, name: 'PUBLIC PERMANENT', price: 25000, dur: 'Permanent', type: 'public', icon: 'public', badge: 'popular', stars: 5, reviews: 1, 
      detail: 'Akses keylogger public SELAMANYA. Sekali bayar, pakai terus. No expired!' },
    { id: 4, name: 'PRIVATE 7 Hari', price: 5000, dur: '7 Hari', type: 'private', icon: 'private', badge: '', stars: 5, reviews: 20, 
      detail: 'Akses keylogger private selama 7 hari. Data cuma lu yang lihat. Dedicated server + prioritas support.' },
    { id: 5, name: 'PRIVATE 1 Bulan', price: 15000, dur: '1 Bulan', type: 'private', icon: 'private', badge: 'best', stars: 5, reviews: 6, 
      detail: 'Akses keylogger private selama 1 bulan penuh. Full privacy, dedicated server, prioritas support.' },
    { id: 6, name: 'PRIVATE PERMANENT', price: 40000, dur: 'Permanent', type: 'private', icon: 'private', badge: 'popular', stars: 5, reviews: 5, 
      detail: 'Akses keylogger private SELAMANYA. Full privacy, dedicated server, prioritas support 24/7. Best value!' },
      
    // 🔥 PRODUK BARU: OPEN PT KEYLOGGER
    { id: 7, name: 'OPEN PT 1 Bulan', price: 40000, dur: '1 Bulan', type: 'pt', icon: 'pt', badge: 'best', stars: 5, reviews: 3, 
      detail: 'Bisa jualan Keylogger Public/Private, Bisa gunakan Bot Server, Balmod.' },
    { id: 8, name: 'OPEN PT PERMANENT', price: 70000, dur: 'Permanent', type: 'pt', icon: 'pt', badge: 'popular', stars: 5, reviews: 2, 
      detail: 'Akses selamanya. Bisa jualan Keylogger Public/Private, Bisa gunakan Bot Server, Balmod.' },
];

const testimonials = [
    { initial: 'R', name: 'Rezz', text: 'gcor tambahin akses ya leeee', stars: 5, rating: '10000/10' },
    { initial: 'R', name: 'Rolland', text: 'Keylogger mantap Aldi Taher burger king', stars: 5, rating: '10/10' },
    { initial: 'F', name: 'FradzSevenTeen', text: 'mantap anjirr, deres bet ress nya ngalir', stars: 5, rating: '10/10' },
    { initial: 'R', name: 'Rolland', text: 'mantap banyak money banyak mobil imfort gua jadi sultan', stars: 5, rating: '10/10' },
    { initial: 'K', name: 'KENZOE', text: 'gacorr deres bet asyu', stars: 5, rating: '10/10' },
    { initial: 'E', name: 'Ente', text: 'Gacor Jadi Sultan Gataa Gua Jierrr', stars: 5, rating: '100/10' },
    { initial: 'B', name: 'Bbanngentot_62597', text: 'Jadi Sultan gua woy', stars: 5, rating: '5/5' },
    { initial: 'S', name: 'Sariez', text: 'aku crotttttt ah ah ah', stars: 5, rating: '10/10' },
    { initial: 'Y', name: 'Yann21', text: 'KAYA GUA NGENTOT', stars: 5, rating: '1000000/10' },
    { initial: 'B', name: 'BggashehLOL', text: 'gg auto kaya', stars: 5, rating: '100000000/10' },
    { initial: 'Z', name: 'Zumar', text: 'modal 5k balmond 98k apa ga gacor lee?', stars: 5, rating: '10/10' },
    { initial: 'A', name: 'Andi', text: 'Admin fast respon, langsung dikasih akses', stars: 5, rating: '5/5' },
    { initial: 'D', name: 'Dika', text: 'Gila sih ini, sekali coba langsung work', stars: 5, rating: '5/5' },
    { initial: 'M', name: 'Mamat', text: 'Amanah banget, gak nyesel beli disini', stars: 5, rating: '5/5' }
];

function renderProducts(filter = 'all') {
    const grid = document.getElementById('productGrid');
    const filtered = filter === 'all' ? products : products.filter(p => p.type === filter);
    
    grid.innerHTML = filtered.map((p) => {
        // Icon PT pakai icon user-tie biar beda
        let iconClass = p.type === 'public' ? 'unlock' : (p.type === 'private' ? 'lock' : 'user-tie');
        
        return `
        <div class="product-card" onclick="orderProduct('${p.name}', ${p.price})">
            ${p.badge === 'best' ? '<span class="badge badge-best">BEST</span>' : ''}
            ${p.badge === 'popular' ? '<span class="badge badge-popular">TOP</span>' : ''}
            <div class="product-icon ${p.type}">
                <i class="fas fa-${iconClass}"></i>
            </div>
            <h4>${p.name}</h4>
            <div class="price">Rp ${p.price.toLocaleString()}</div>
            <div class="dur">${p.dur}</div>
            <div class="stars">
                ${'<i class="fas fa-star"></i>'.repeat(p.stars)} <span>${p.stars}/5 (${p.reviews})</span>
            </div>
            <div class="p-desc">${p.detail}</div>
        </div>
        `;
    }).join('');
}

function orderProduct(name, price) {
    const text = `Halo Bang, saya mau beli *${name}* dengan harga Rp ${price.toLocaleString()}`;
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
}

function filterProducts(type, el) {
    document.querySelectorAll('.cat-chip').forEach(c => c.classList.remove('active'));
    if (el) el.classList.add('active');
    renderProducts(type);
}

function showPage(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.bn-item').forEach(b => b.classList.remove('active'));
    if (page === 'home') {
        document.getElementById('pageHome').classList.add('active');
        document.getElementById('bnHome').classList.add('active');
    } else {
        document.getElementById('pageAbout').classList.add('active');
        document.getElementById('bnAbout').classList.add('active');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showToast(msg) {
    const t = document.getElementById('toast');
    t.innerText = msg;
    t.className = 'toast show';
    setTimeout(() => t.classList.remove('show'), 3000);
}

function loadTestimoni() {
    const grid = document.getElementById('testimoniGrid');
    grid.innerHTML = testimonials.map(t => `
        <div class="testimoni-card">
            <div class="t-user">
                <div class="t-avatar">${t.initial}</div>
                <div class="t-name">${t.name}</div>
            </div>
            <div class="t-text">"${t.text}"</div>
            <div class="t-stars">
                ${'<i class="fas fa-star"></i>'.repeat(t.stars)} <span>${t.rating}</span>
            </div>
        </div>
    `).join('');
}

renderProducts();
loadTestimoni();
