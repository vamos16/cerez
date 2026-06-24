document.addEventListener('DOMContentLoaded', async () => {
  await Promise.all([loadCategories(), loadProducts()]);
  const catGrid = qs('[data-home-categories]');
  if(catGrid) catGrid.innerHTML = OPB.state.categories.slice(0,8).map(categoryCard).join('');
  const featured = OPB.state.products.filter(p => p.is_featured).slice(0,6);
  const products = featured.length ? featured : OPB.state.products.slice(0,6);
  const prodGrid = qs('[data-featured-products]');
  if(prodGrid) { prodGrid.innerHTML = products.map(productCard).join(''); bindAddCart(); }

  const quickSearch = qs('[data-quick-search]');
  if(quickSearch){
    quickSearch.addEventListener('submit', (e)=>{
      e.preventDefault();
      const fd = new FormData(quickSearch);
      const marka = fd.get('marka') || '';
      const model = fd.get('model') || '';
      const parca = fd.get('parca') || '';
      location.href = `urunler.html?arama=${encodeURIComponent([marka,model,parca].filter(Boolean).join(' '))}`;
    });
  }
});
