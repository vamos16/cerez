function renderCart(){
  const root = qs('[data-cart-items]');
  const summary = qs('[data-cart-summary]');
  const cart = getCart();
  if(!root || !summary) return;
  if(!cart.length){
    root.innerHTML = `<div class="card empty"><h3>Sepet boş</h3><p>Ürünleri inceleyip sepete ekleyebilirsiniz.</p><a class="btn accent" href="urunler.html">Ürünlere Git</a></div>`;
    summary.innerHTML = `<div class="summary-row total"><span>Toplam</span><span>0 TL</span></div>`;
    return;
  }
  root.innerHTML = `<div class="card">${cart.map(item => `<div class="cart-item">
    <a class="cart-thumb" href="urun-detay.html?slug=${item.slug}">${item.image ? `<img src="${item.image}" alt="${item.name}">` : '⚙️'}</a>
    <div><b>${item.name}</b><div class="muted">${item.vehicle_brand || ''} ${item.vehicle_model || ''}</div><div class="price">${fmtPrice(item.price,item.currency)}</div></div>
    <div class="cart-controls"><input class="input" type="number" min="1" value="${item.quantity}" data-cart-qty="${item.id}"><button class="small-btn danger" data-cart-remove="${item.id}">Sil</button></div>
  </div>`).join('')}</div>`;
  summary.innerHTML = `<div class="summary-row"><span>Ürün adedi</span><strong>${cart.reduce((a,i)=>a+Number(i.quantity||1),0)}</strong></div><div class="summary-row"><span>Ara toplam</span><strong>${fmtPrice(cartTotal())}</strong></div><div class="summary-row total"><span>Toplam</span><span>${fmtPrice(cartTotal())}</span></div><a class="btn accent" style="width:100%;margin-top:14px" href="odeme.html">Ödemeye Geç</a><button class="btn ghost" style="width:100%;margin-top:10px" data-clear-cart>Sepeti Temizle</button>`;
  qsa('[data-cart-qty]').forEach(inp => inp.addEventListener('input',()=>{
    const next = getCart().map(i => i.id === inp.dataset.cartQty ? {...i, quantity: Math.max(1, Number(inp.value||1))} : i);
    saveCart(next); renderCart();
  }));
  qsa('[data-cart-remove]').forEach(btn => btn.addEventListener('click',()=>{
    saveCart(getCart().filter(i => i.id !== btn.dataset.cartRemove)); renderCart();
  }));
  qs('[data-clear-cart]')?.addEventListener('click',()=>{ clearCart(); renderCart(); });
}
document.addEventListener('DOMContentLoaded', renderCart);
