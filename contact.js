document.addEventListener('DOMContentLoaded', async () => {
  await Promise.all([loadCategories(), loadProducts()]);
  const slug = param('slug');
  const product = OPB.state.products.find(p => p.slug === slug) || OPB.state.products[0];
  const root = qs('[data-product-detail]');
  if(!root){ return; }
  if(!product){ root.innerHTML = `<div class="card empty">Ürün bulunamadı.</div>`; return; }
  document.title = `${product.name} | Oto Parça Bul`;
  root.innerHTML = `<div class="detail-image"><div class="product-img">${productImageHtml(product)}<div class="product-badges"><span class="stock ${stockClass(product.stock_status)}">${statusLabel(product.stock_status)}</span>${product.is_featured ? '<span class="featured">Öne çıkan</span>' : ''}</div></div></div>
  <div class="detail-info card">
    <div class="product-meta"><span>${product.category_name || product.categories?.name || 'Oto Yedek Parça'}</span></div>
    <h1>${product.name}</h1>
    <p class="muted">${product.short_description || ''}</p>
    <div class="price-row"><span class="price">${fmtPrice(product.price, product.currency)}</span>${product.old_price ? `<span class="old-price">${fmtPrice(product.old_price, product.currency)}</span>` : ''}</div>
    <div class="info-list">
      <div class="info-item"><span>Stok</span><strong>${statusLabel(product.stock_status)} ${product.stock_quantity ? `(${product.stock_quantity} adet)` : ''}</strong></div>
      <div class="info-item"><span>Araç Markası</span><strong>${product.vehicle_brand || '-'}</strong></div>
      <div class="info-item"><span>Araç Modeli</span><strong>${product.vehicle_model || '-'}</strong></div>
      <div class="info-item"><span>Yıl Aralığı</span><strong>${product.vehicle_years || '-'}</strong></div>
      <div class="info-item"><span>OEM Kodu</span><strong>${product.oem_code || '-'}</strong></div>
      <div class="info-item"><span>Parça Durumu</span><strong>${conditionLabel(product.part_condition)}</strong></div>
      <div class="info-item"><span>Stok Kodu</span><strong>${product.sku || '-'}</strong></div>
    </div>
    <p>${product.description || 'Ürün detayları ve uyumluluk için WhatsApp üzerinden destek alabilirsiniz.'}</p>
    <div class="qty-row"><label for="qty"><b>Adet</b></label><input id="qty" class="input" type="number" min="1" value="1"></div>
    <div class="hero-actions">
      <button class="btn accent" data-detail-cart>Sepete Ekle</button>
      <a class="btn light" href="${whatsappUrl(`${product.name} ürünü hakkında bilgi almak istiyorum.`)}" target="_blank">WhatsApp'tan Sor</a>
    </div>
  </div>`;
  qs('[data-detail-cart]').addEventListener('click',()=>addToCart(product, Number(qs('#qty').value || 1)));
});
