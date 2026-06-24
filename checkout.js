document.addEventListener('DOMContentLoaded', async () => {
  await Promise.all([loadCategories(), loadProducts()]);
  const catSelect = qs('[data-category-filter]');
  const brandSelect = qs('[data-brand-filter]');
  const searchInput = qs('[data-search-filter]');
  const sortSelect = qs('[data-sort-filter]');
  const grid = qs('[data-products-grid]');
  const count = qs('[data-products-count]');
  const urlCat = param('kategori');
  const urlSearch = param('arama');

  if(catSelect){
    catSelect.innerHTML = `<option value="">Tüm kategoriler</option>` + OPB.state.categories.map(c => `<option value="${c.slug}">${c.name}</option>`).join('');
    if(urlCat) catSelect.value = urlCat;
  }
  if(brandSelect){
    const brands = [...new Set(OPB.state.products.map(p=>p.vehicle_brand).filter(Boolean))].sort((a,b)=>a.localeCompare(b,'tr'));
    brandSelect.innerHTML = `<option value="">Tüm markalar</option>` + brands.map(b => `<option value="${b}">${b}</option>`).join('');
  }
  if(searchInput && urlSearch) searchInput.value = urlSearch;

  function filter(){
    let list = [...OPB.state.products];
    const cat = catSelect?.value || '';
    const brand = brandSelect?.value || '';
    const q = (searchInput?.value || '').toLowerCase().trim();
    const sort = sortSelect?.value || 'newest';
    if(cat){
      const catObj = OPB.state.categories.find(c=>c.slug===cat);
      if(catObj) list = list.filter(p => String(p.category_id) === String(catObj.id) || p.categories?.slug === cat || p.category_name === catObj.name);
    }
    if(brand) list = list.filter(p => (p.vehicle_brand || '') === brand);
    if(q){
      list = list.filter(p => [p.name,p.short_description,p.description,p.vehicle_brand,p.vehicle_model,p.vehicle_years,p.oem_code,p.sku,p.category_name].join(' ').toLowerCase().includes(q));
    }
    if(sort === 'price_asc') list.sort((a,b)=>Number(a.price)-Number(b.price));
    if(sort === 'price_desc') list.sort((a,b)=>Number(b.price)-Number(a.price));
    if(sort === 'name') list.sort((a,b)=>a.name.localeCompare(b.name,'tr'));
    if(count) count.textContent = `${list.length} ürün listeleniyor`;
    if(grid){
      grid.innerHTML = list.length ? list.map(productCard).join('') : `<div class="card empty">Aradığınız kritere uygun ürün bulunamadı. WhatsApp üzerinden parça sorabilirsiniz.</div>`;
      bindAddCart();
    }
  }
  [catSelect,brandSelect,searchInput,sortSelect].forEach(el => el && el.addEventListener('input', filter));
  filter();
});
