const OPB = {
  cartKey: 'opb_cart_v1',
  state: { settings:null, payment:null, categories:[], products:[] }
};

function fmtPrice(value, currency='TL'){
  const n = Number(value || 0);
  return n.toLocaleString('tr-TR', { minimumFractionDigits: 0, maximumFractionDigits: 2 }) + ' ' + currency;
}
function qs(sel, root=document){ return root.querySelector(sel); }
function qsa(sel, root=document){ return [...root.querySelectorAll(sel)]; }
function param(name){ return new URLSearchParams(location.search).get(name); }
function esc(value){
  return String(value ?? '').replace(/[&<>'\"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','\"':'&quot;'}[ch]));
}
function slugify(str){
  return String(str || '').toLowerCase().trim()
    .replace(/ğ/g,'g').replace(/ü/g,'u').replace(/ş/g,'s').replace(/ı/g,'i').replace(/ö/g,'o').replace(/ç/g,'c')
    .replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'');
}
function normalizePhone(phone){ return String(phone || '').replace(/\D/g,'').replace(/^90/,'').replace(/^0/,''); }
function whatsappUrl(message='Merhaba, ürün hakkında bilgi almak istiyorum.'){
  const p = normalizePhone(OPB.state.settings?.whatsapp || OPB.state.settings?.phone || '05346666942');
  return `https://wa.me/90${p}?text=${encodeURIComponent(message)}`;
}
function toast(message){
  let t = qs('.toast');
  if(!t){ t=document.createElement('div'); t.className='toast'; document.body.appendChild(t); }
  t.textContent = message; t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'), 2800);
}
async function loadSettings(){
  const fallback = window.OPB_FALLBACK;
  OPB.state.settings = fallback.settings;
  OPB.state.payment = fallback.payment;
  if(window.opbDb){
    const [{data:settings,error:sErr},{data:payment,error:pErr}] = await Promise.all([
      window.opbDb.from('site_settings').select('*').eq('id',1).maybeSingle(),
      window.opbDb.from('payment_settings').select('*').eq('id',1).maybeSingle()
    ]);
    if(!sErr && settings) OPB.state.settings = settings;
    if(!pErr && payment) OPB.state.payment = payment;
  }
  applySettings();
}
async function loadCategories(){
  OPB.state.categories = window.OPB_FALLBACK.categories;
  if(window.opbDb){
    const {data,error} = await window.opbDb.from('categories').select('*').eq('is_active',true).order('sort_order',{ascending:true});
    if(!error && data?.length) OPB.state.categories = data;
  }
  return OPB.state.categories;
}
async function loadProducts(options={}){
  OPB.state.products = window.OPB_FALLBACK.products;
  if(window.opbDb){
    let query = window.opbDb
      .from('products')
      .select('*, categories(name, slug)')
      .eq('is_active',true)
      .order('created_at',{ascending:false});
    if(options.featured) query = query.eq('is_featured', true);
    if(options.categoryId) query = query.eq('category_id', options.categoryId);
    const {data,error} = await query;
    if(!error && data){
      OPB.state.products = data.map(p => ({...p, category_name:p.categories?.name || ''}));
    }
  }
  return OPB.state.products;
}
function applySettings(){
  const s = OPB.state.settings || window.OPB_FALLBACK.settings;
  document.title = document.title.replace('Oto Parça Bul', s.site_name || 'Oto Parça Bul');
  qsa('[data-site-name]').forEach(el => el.textContent = s.site_name || 'Oto Parça Bul');
  qsa('[data-slogan]').forEach(el => el.textContent = s.slogan || 'Aradığınız oto yedek parça güvenle kapınızda');
  qsa('[data-phone]').forEach(el => el.textContent = s.phone || s.whatsapp || '0534 666 6942');
  qsa('[data-city]').forEach(el => el.textContent = s.city || '');
  qsa('[data-address]').forEach(el => el.textContent = s.address || 'Adres admin panelden eklenecek');
  qsa('[data-email]').forEach(el => el.textContent = s.email || 'E-posta admin panelden eklenecek');
  qsa('[data-about-text]').forEach(el => el.textContent = s.about_text || '');
  qsa('[data-hero-title]').forEach(el => el.textContent = s.hero_title || 'Oto Yedek Parçada Güvenilir Adres');
  qsa('[data-hero-subtitle]').forEach(el => el.textContent = s.hero_subtitle || 'Aracınıza uygun yedek parçaları güvenle bulun.');
  qsa('[data-wa-link]').forEach(el => el.href = whatsappUrl(el.dataset.waMessage || 'Merhaba, ürün hakkında bilgi almak istiyorum.'));
  qsa('[data-logo]').forEach(img => { img.src = s.logo_url || 'assets/img/logo.png'; });
  if(s.banner_url){ document.documentElement.style.setProperty('--hero-bg', `url("${s.banner_url}")`); }
}
function getCart(){
  try{return JSON.parse(localStorage.getItem(OPB.cartKey) || '[]')}catch{return []}
}
function saveCart(cart){ localStorage.setItem(OPB.cartKey, JSON.stringify(cart)); updateCartCount(); }
function updateCartCount(){
  const count = getCart().reduce((a,i)=>a+Number(i.quantity||1),0);
  qsa('[data-cart-count]').forEach(el => el.textContent = count);
}
function addToCart(product, qty=1){
  const cart = getCart();
  const existing = cart.find(i => i.id === product.id);
  if(existing){ existing.quantity = Number(existing.quantity||1) + Number(qty||1); }
  else{
    cart.push({
      id: product.id, name: product.name, slug: product.slug, price: Number(product.price||0), currency: product.currency || 'TL',
      image: product.main_image_url || '', vehicle_brand: product.vehicle_brand || '', vehicle_model: product.vehicle_model || '', quantity: Number(qty||1)
    });
  }
  saveCart(cart); toast('Ürün sepete eklendi.');
}
function clearCart(){ localStorage.removeItem(OPB.cartKey); updateCartCount(); }
function cartTotal(){ return getCart().reduce((a,i)=>a+(Number(i.price||0)*Number(i.quantity||1)),0); }
function statusLabel(status){
  const map = {in_stock:'Stokta var', out_of_stock:'Stok yok', pre_order:'Ön sipariş'};
  return map[status] || status || 'Stokta var';
}
function stockClass(status){ return status === 'out_of_stock' ? 'out' : status === 'pre_order' ? 'pre' : ''; }
function conditionLabel(value){
  const map = {new:'Sıfır', used:'Çıkma', original:'Orijinal', aftermarket:'Yan sanayi', refurbished:'Yenilenmiş'};
  return map[value] || value || '-';
}
function productImageHtml(product){
  return product.main_image_url ? `<img src="${product.main_image_url}" alt="${product.name}">` : `<div class="no-img">⚙️</div>`;
}
function productCard(product){
  return `<article class="card product-card">
    <a href="urun-detay.html?slug=${encodeURIComponent(product.slug)}" class="product-img">
      ${productImageHtml(product)}
      <div class="product-badges"><span class="stock ${stockClass(product.stock_status)}">${statusLabel(product.stock_status)}</span>${product.is_featured ? '<span class="featured">Öne çıkan</span>' : ''}</div>
    </a>
    <div class="product-body">
      <p class="product-title"><a href="urun-detay.html?slug=${encodeURIComponent(product.slug)}">${product.name}</a></p>
      <div class="product-meta"><span>${product.vehicle_brand || 'Genel'}</span><span>•</span><span>${product.vehicle_model || 'Uyum teyitli'}</span></div>
      <p class="muted">${product.short_description || 'Ürün detayları için inceleyin.'}</p>
      <div class="price-row"><span class="price">${fmtPrice(product.price, product.currency)}</span>${product.old_price ? `<span class="old-price">${fmtPrice(product.old_price, product.currency)}</span>` : ''}</div>
      <div class="product-actions">
        <a class="btn light" href="urun-detay.html?slug=${encodeURIComponent(product.slug)}">Detay</a>
        <button class="btn accent" data-add-cart="${product.id}">Sepete Ekle</button>
      </div>
    </div>
  </article>`;
}
function categoryCard(cat){
  return `<a class="card category-card" href="urunler.html?kategori=${encodeURIComponent(cat.slug)}">
    <span class="cat-icon">🔧</span>
    <span><h3>${cat.name}</h3><p>${cat.description || 'Kategori ürünlerini görüntüleyin.'}</p></span>
  </a>`;
}
function bindAddCart(){
  qsa('[data-add-cart]').forEach(btn => btn.addEventListener('click', () => {
    const p = OPB.state.products.find(x => String(x.id) === String(btn.dataset.addCart));
    if(p) addToCart(p, 1);
  }));
}
function setupHeader(){
  const toggle = qs('[data-mobile-toggle]');
  const menu = qs('[data-menu]');
  if(toggle && menu) toggle.addEventListener('click',()=>menu.classList.toggle('open'));
  const path = location.pathname.split('/').pop() || 'index.html';
  qsa('.menu a').forEach(a => {
    const href = a.getAttribute('href');
    if(href === path || (path === '' && href === 'index.html')) a.classList.add('active');
  });
  updateCartCount();
}
function showSetupWarning(){
  if(window.OPB_SUPABASE_READY) return;
  const holder = qs('[data-setup-warning]');
  if(holder){ holder.innerHTML = `<div class="setup-warning">Supabase bağlantısı için <b>assets/js/config.js</b> içindeki SUPABASE_URL alanına proje URL'ni yapıştırman gerekiyor. Site şu an demo verilerle çalışıyor.</div>`; }
}
function initReveal(){
  const els = qsa('.section .card, .product-card, .category-card, .section-head, .filters, .product-detail, .cart-layout, .checkout-layout');
  els.forEach(el => el.classList.add('reveal'));
  const io = new IntersectionObserver(entries => entries.forEach(entry => {
    if(entry.isIntersecting){ entry.target.classList.add('show'); io.unobserve(entry.target); }
  }), {threshold:.08});
  els.forEach(el => io.observe(el));
}
function initShared(){
  setupHeader();
  showSetupWarning();
  loadSettings().then(()=>{ updateCartCount(); initReveal(); });
}
document.addEventListener('DOMContentLoaded', initShared);
