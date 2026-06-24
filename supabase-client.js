:root{
  --bg:#f5f7fb;
  --panel:#ffffff;
  --text:#0f172a;
  --muted:#64748b;
  --line:#e2e8f0;
  --brand:#0b1f3a;
  --brand2:#123a6f;
  --accent:#d90429;
  --accent2:#ef233c;
  --success:#16a34a;
  --warning:#f59e0b;
  --danger:#dc2626;
  --shadow:0 18px 45px rgba(15,23,42,.10);
  --radius:22px;
}
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0;font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif;background:var(--bg);color:var(--text);line-height:1.6}
a{color:inherit;text-decoration:none}
img{max-width:100%;display:block}
button,input,select,textarea{font:inherit}
.container{width:min(1180px,92%);margin-inline:auto}
.topbar{background:var(--brand);color:#dce8ff;font-size:14px}
.topbar .container{display:flex;gap:16px;justify-content:space-between;align-items:center;padding:9px 0;flex-wrap:wrap}
.topbar a{color:#fff;font-weight:700}
.header{background:rgba(255,255,255,.90);backdrop-filter:blur(14px);border-bottom:1px solid var(--line);position:sticky;top:0;z-index:50}
.nav{display:flex;align-items:center;justify-content:space-between;gap:20px;padding:14px 0}
.logo{display:flex;align-items:center;gap:10px;font-weight:900;color:var(--brand);letter-spacing:-.03em}
.logo img{width:44px;height:44px;border-radius:14px;box-shadow:0 10px 24px rgba(11,31,58,.2)}
.logo span{font-size:22px}
.menu{display:flex;align-items:center;gap:6px}
.menu a{padding:10px 12px;border-radius:12px;color:#263447;font-weight:700;font-size:15px}
.menu a:hover,.menu a.active{background:#eef4ff;color:var(--brand)}
.header-actions{display:flex;align-items:center;gap:10px}
.btn{border:0;border-radius:14px;background:var(--brand);color:#fff;padding:12px 17px;font-weight:800;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;gap:8px;transition:.18s ease;box-shadow:0 12px 28px rgba(11,31,58,.18)}
.btn:hover{transform:translateY(-1px);background:var(--brand2)}
.btn.accent{background:var(--accent)}
.btn.accent:hover{background:var(--accent2)}
.btn.light{background:#fff;color:var(--brand);border:1px solid var(--line);box-shadow:none}
.btn.ghost{background:transparent;color:var(--brand);border:1px solid var(--line);box-shadow:none}
.btn.success{background:var(--success)}
.btn.danger{background:var(--danger)}
.cart-pill{position:relative}
.cart-count{position:absolute;top:-8px;right:-8px;background:var(--accent);color:#fff;border-radius:999px;min-width:20px;height:20px;display:grid;place-items:center;font-size:12px;font-weight:900;border:2px solid #fff}
.mobile-toggle{display:none;background:#fff;border:1px solid var(--line);border-radius:12px;padding:9px 11px;font-weight:900}
.hero{position:relative;overflow:hidden;background:radial-gradient(circle at 10% 10%,#1b4d89 0,#0b1f3a 38%,#07172c 100%);color:#fff}
.hero::after{content:"";position:absolute;inset:auto -12% -34% auto;width:520px;height:520px;border-radius:50%;background:rgba(217,4,41,.32);filter:blur(30px)}
.hero .container{position:relative;z-index:2;display:grid;grid-template-columns:1.12fr .88fr;gap:38px;align-items:center;padding:78px 0 56px}
.badge{display:inline-flex;align-items:center;gap:8px;border:1px solid rgba(255,255,255,.25);background:rgba(255,255,255,.10);color:#fff;border-radius:999px;padding:8px 12px;font-weight:800;font-size:14px}
.hero h1{font-size:clamp(38px,5vw,64px);line-height:1.02;margin:18px 0 16px;letter-spacing:-.05em}
.hero p{font-size:18px;color:#d9e6ff;max-width:650px;margin:0 0 26px}
.hero-actions{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:28px}
.hero-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;max-width:620px}
.stat{background:rgba(255,255,255,.10);border:1px solid rgba(255,255,255,.16);border-radius:18px;padding:15px}
.stat strong{display:block;font-size:24px;color:#fff}
.stat span{font-size:13px;color:#d9e6ff}
.hero-card{background:rgba(255,255,255,.10);border:1px solid rgba(255,255,255,.18);border-radius:30px;padding:22px;box-shadow:0 30px 80px rgba(0,0,0,.28)}
.hero-card-inner{background:#fff;color:var(--text);border-radius:24px;padding:18px}
.search-box{display:grid;gap:10px}
.input,.select,textarea{width:100%;border:1px solid var(--line);background:#fff;border-radius:14px;padding:13px 14px;color:var(--text);outline:none}
.input:focus,.select:focus,textarea:focus{border-color:#93b4e5;box-shadow:0 0 0 4px rgba(18,58,111,.08)}
.section{padding:66px 0}
.section-head{display:flex;align-items:end;justify-content:space-between;gap:20px;margin-bottom:26px}
.section-title{margin:0;font-size:clamp(28px,3vw,42px);letter-spacing:-.04em;color:var(--brand)}
.section-subtitle{margin:8px 0 0;color:var(--muted);max-width:700px}
.grid{display:grid;gap:18px}
.grid-2{grid-template-columns:repeat(2,1fr)}
.grid-3{grid-template-columns:repeat(3,1fr)}
.grid-4{grid-template-columns:repeat(4,1fr)}
.card{background:var(--panel);border:1px solid var(--line);border-radius:var(--radius);padding:20px;box-shadow:0 8px 26px rgba(15,23,42,.05)}
.category-card{display:flex;gap:14px;align-items:center;min-height:110px;transition:.18s ease}
.category-card:hover{transform:translateY(-2px);box-shadow:var(--shadow)}
.cat-icon{width:54px;height:54px;border-radius:18px;display:grid;place-items:center;background:#eef4ff;color:var(--brand);font-size:25px;flex:0 0 auto}
.category-card h3{margin:0 0 4px;font-size:18px;color:var(--brand)}
.category-card p{margin:0;color:var(--muted);font-size:14px}
.product-card{padding:0;overflow:hidden;transition:.18s ease;display:flex;flex-direction:column}
.product-card:hover{transform:translateY(-3px);box-shadow:var(--shadow)}
.product-img{height:210px;background:linear-gradient(135deg,#eff6ff,#f8fafc);display:grid;place-items:center;position:relative;border-bottom:1px solid var(--line)}
.product-img img{width:100%;height:100%;object-fit:cover}
.no-img{width:82px;height:82px;border-radius:26px;background:var(--brand);color:#fff;display:grid;place-items:center;font-size:34px;box-shadow:0 16px 35px rgba(11,31,58,.24)}
.product-badges{position:absolute;top:12px;left:12px;right:12px;display:flex;gap:8px;justify-content:space-between;align-items:start}
.stock{border-radius:999px;padding:6px 10px;font-size:12px;font-weight:900;background:#dcfce7;color:#166534}
.stock.out{background:#fee2e2;color:#991b1b}.stock.pre{background:#fef3c7;color:#92400e}
.featured{border-radius:999px;padding:6px 10px;font-size:12px;font-weight:900;background:var(--accent);color:#fff}
.product-body{padding:18px;display:flex;flex-direction:column;gap:10px;flex:1}
.product-title{font-weight:900;color:var(--brand);font-size:18px;line-height:1.3;margin:0}
.product-meta{color:var(--muted);font-size:14px;display:flex;gap:6px;flex-wrap:wrap}
.price-row{display:flex;align-items:center;gap:8px;margin-top:auto}
.price{font-size:22px;font-weight:950;color:var(--accent)}
.old-price{text-decoration:line-through;color:#94a3b8;font-weight:700}
.product-actions{display:grid;grid-template-columns:1fr auto;gap:8px;margin-top:8px}
.page-hero{background:linear-gradient(135deg,var(--brand),#102f58);color:#fff;padding:54px 0}
.page-hero h1{font-size:clamp(34px,4vw,52px);margin:0 0 10px;letter-spacing:-.04em}.page-hero p{margin:0;color:#dce8ff;max-width:760px}
.filters{background:#fff;border:1px solid var(--line);border-radius:24px;padding:16px;display:grid;grid-template-columns:1.3fr 1fr 1fr auto;gap:10px;margin-bottom:22px;box-shadow:0 8px 26px rgba(15,23,42,.04)}
.product-detail{display:grid;grid-template-columns:.95fr 1.05fr;gap:28px;align-items:start}
.detail-image{background:#fff;border:1px solid var(--line);border-radius:28px;overflow:hidden;box-shadow:var(--shadow)}
.detail-image .product-img{height:440px;border:0}
.detail-info h1{margin:0 0 12px;color:var(--brand);font-size:clamp(30px,3vw,48px);letter-spacing:-.04em;line-height:1.08}
.info-list{display:grid;gap:10px;margin:20px 0}
.info-item{display:flex;justify-content:space-between;gap:16px;border-bottom:1px dashed var(--line);padding-bottom:10px}.info-item span{color:var(--muted)}.info-item strong{text-align:right}
.qty-row{display:flex;gap:10px;align-items:center;margin:18px 0}.qty-row input{max-width:100px}
.cart-layout{display:grid;grid-template-columns:1fr 360px;gap:22px;align-items:start}
.cart-item{display:grid;grid-template-columns:72px 1fr auto;gap:14px;align-items:center;border-bottom:1px solid var(--line);padding:14px 0}.cart-item:last-child{border:0}.cart-thumb{width:72px;height:72px;border-radius:16px;overflow:hidden;background:#eef4ff;display:grid;place-items:center}.cart-thumb img{width:100%;height:100%;object-fit:cover}.cart-controls{display:flex;align-items:center;gap:8px}.cart-controls input{width:68px;text-align:center}
.summary{position:sticky;top:92px}.summary-row{display:flex;justify-content:space-between;gap:12px;border-bottom:1px solid var(--line);padding:11px 0}.summary-row.total{font-size:22px;font-weight:950;color:var(--accent);border:0}.empty{text-align:center;padding:50px 20px;color:var(--muted)}
.checkout-layout{display:grid;grid-template-columns:1fr 420px;gap:22px;align-items:start}.payment-box{background:#0b1f3a;color:#fff;border-radius:24px;padding:20px}.iban{background:rgba(255,255,255,.10);border:1px dashed rgba(255,255,255,.45);border-radius:16px;padding:14px;font-weight:950;word-break:break-all;letter-spacing:.02em}.notice{background:#fff7ed;border:1px solid #fed7aa;color:#9a3412;border-radius:16px;padding:14px}.ok-box{background:#ecfdf5;border:1px solid #bbf7d0;color:#166534;border-radius:16px;padding:15px}.err-box{background:#fef2f2;border:1px solid #fecaca;color:#991b1b;border-radius:16px;padding:15px}.setup-warning{background:#fff7ed;border:1px solid #fdba74;color:#9a3412;padding:12px;border-radius:16px;margin:16px 0;font-weight:800}
.footer{background:#07172c;color:#cbd5e1;padding:42px 0 24px}.footer h3,.footer h4{color:#fff}.footer-grid{display:grid;grid-template-columns:1.2fr repeat(3,1fr);gap:24px}.footer a{display:block;color:#cbd5e1;margin:8px 0}.footer-bottom{border-top:1px solid rgba(255,255,255,.10);margin-top:26px;padding-top:18px;display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap}
.admin-shell{display:grid;grid-template-columns:270px 1fr;min-height:100vh;background:#f8fafc}.admin-sidebar{background:#07172c;color:#fff;padding:22px;position:sticky;top:0;height:100vh}.admin-sidebar .logo{color:#fff;margin-bottom:22px}.admin-menu{display:grid;gap:8px}.admin-menu button{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.10);color:#fff;border-radius:14px;padding:12px;text-align:left;font-weight:800;cursor:pointer}.admin-menu button.active,.admin-menu button:hover{background:var(--accent)}.admin-main{padding:26px}.admin-top{display:flex;justify-content:space-between;gap:16px;align-items:center;margin-bottom:20px}.login-card{width:min(440px,92%);margin:70px auto;background:#fff;border:1px solid var(--line);border-radius:28px;padding:26px;box-shadow:var(--shadow)}.form-grid{display:grid;gap:12px}.form-2{grid-template-columns:repeat(2,1fr)}.form-3{grid-template-columns:repeat(3,1fr)}.field label{display:block;font-weight:850;margin:0 0 6px;color:#263447}.admin-section{display:none}.admin-section.active{display:block}.table-wrap{overflow:auto;background:#fff;border:1px solid var(--line);border-radius:20px}table{width:100%;border-collapse:collapse;min-width:780px}th,td{text-align:left;border-bottom:1px solid var(--line);padding:12px;vertical-align:top}th{background:#f8fafc;color:#334155;font-size:13px;text-transform:uppercase;letter-spacing:.04em}td .mini-img{width:54px;height:54px;border-radius:12px;object-fit:cover;background:#eef4ff}.row-actions{display:flex;gap:6px;flex-wrap:wrap}.small-btn{border:1px solid var(--line);background:#fff;border-radius:10px;padding:7px 9px;font-size:13px;font-weight:850;cursor:pointer}.small-btn.danger{color:#b91c1c}.small-btn.primary{color:var(--brand)}.toast{position:fixed;right:20px;bottom:20px;background:#07172c;color:#fff;border-radius:16px;padding:13px 16px;box-shadow:var(--shadow);z-index:100;display:none}.toast.show{display:block}.hidden{display:none!important}.muted{color:var(--muted)}.mt{margin-top:18px}.mb{margin-bottom:18px}
@media(max-width:940px){.hero .container,.product-detail,.cart-layout,.checkout-layout,.admin-shell{grid-template-columns:1fr}.hero-card{order:-1}.grid-3,.grid-4{grid-template-columns:repeat(2,1fr)}.filters{grid-template-columns:1fr 1fr}.footer-grid{grid-template-columns:1fr 1fr}.admin-sidebar{position:relative;height:auto}.admin-menu{grid-template-columns:repeat(2,1fr)}}
@media(max-width:720px){.mobile-toggle{display:block}.menu{display:none;position:absolute;left:4%;right:4%;top:74px;background:#fff;border:1px solid var(--line);border-radius:20px;padding:10px;box-shadow:var(--shadow);flex-direction:column;align-items:stretch}.menu.open{display:flex}.header-actions .btn.light{display:none}.hero .container{padding:52px 0 40px}.hero-stats,.grid-2,.grid-3,.grid-4,.filters,.form-2,.form-3,.footer-grid{grid-template-columns:1fr}.section{padding:46px 0}.cart-item{grid-template-columns:58px 1fr}.cart-item>div:last-child{grid-column:1/-1}.checkout-layout{gap:16px}.admin-main{padding:16px}.admin-top{align-items:start;flex-direction:column}.section-head{align-items:start;flex-direction:column}.product-actions{grid-template-columns:1fr}.logo span{font-size:18px}}

/* ============================================================
   OTO PARÇA BUL - final premium dark/orange theme
   ============================================================ */
:root{
  --bg:#0a0d10;
  --panel:#111820;
  --text:#f7efe1;
  --muted:#a9b2b8;
  --line:rgba(255,255,255,.12);
  --brand:#0e151b;
  --brand2:#17232d;
  --accent:#ff7a00;
  --accent2:#ff9b28;
  --teal:#1e6d78;
  --success:#16a34a;
  --warning:#f59e0b;
  --danger:#dc2626;
  --shadow:0 24px 70px rgba(0,0,0,.42);
  --radius:24px;
}
body{
  background:
    radial-gradient(circle at 18% -8%, rgba(255,122,0,.16), transparent 34%),
    radial-gradient(circle at 100% 20%, rgba(30,109,120,.15), transparent 30%),
    linear-gradient(180deg,#07090b 0%,#0a0d10 42%,#0f1419 100%);
  color:var(--text);
}
body::before{
  content:"";position:fixed;inset:0;pointer-events:none;z-index:-1;
  background-image:linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px);
  background-size:44px 44px;mask-image:radial-gradient(circle at top,black,transparent 75%);
}
.topbar{background:#06080a;border-bottom:1px solid rgba(255,122,0,.22);color:#e7d9c5}.topbar a{color:#ffbf77}.header{background:rgba(7,9,11,.82);border-bottom:1px solid rgba(255,255,255,.10);box-shadow:0 14px 40px rgba(0,0,0,.28)}
.logo span{color:#fff;text-shadow:0 0 20px rgba(255,122,0,.28)}.logo img{width:54px;height:54px;border-radius:16px;object-fit:cover;animation:logoFloat 4.6s ease-in-out infinite;box-shadow:0 0 0 1px rgba(255,122,0,.32),0 14px 34px rgba(255,122,0,.18)}
.menu a{color:#e9e0d1}.menu a:hover,.menu a.active{background:rgba(255,122,0,.12);color:#ffb36a}.btn{background:linear-gradient(135deg,#111820,#243442);border:1px solid rgba(255,255,255,.10);box-shadow:0 14px 32px rgba(0,0,0,.28)}.btn:hover{background:linear-gradient(135deg,#182430,#2d4352)}.btn.accent{background:linear-gradient(135deg,#ff7a00,#f04e00);color:#101010;border-color:rgba(255,255,255,.18);box-shadow:0 16px 34px rgba(255,122,0,.22)}.btn.accent:hover{background:linear-gradient(135deg,#ff9b28,#ff6a00)}.btn.light{background:#f7efe1;color:#14120f;border-color:#fff;box-shadow:0 14px 28px rgba(0,0,0,.18)}.btn.ghost{color:#f7efe1;border-color:rgba(255,255,255,.18)}.cart-count{background:#ff7a00;color:#111;border-color:#101214}.mobile-toggle{background:#111820;color:#fff;border-color:rgba(255,255,255,.14)}
.hero{min-height:610px;background:#080a0d;color:#fff;isolation:isolate}.hero::before{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(6,8,10,.95) 0%,rgba(6,8,10,.75) 44%,rgba(6,8,10,.38) 100%),url('../img/banner.png') center/cover no-repeat;z-index:0}.hero::after{inset:auto -10% -40% auto;background:rgba(255,122,0,.35);filter:blur(70px)}.hero .container{grid-template-columns:1fr .86fr;padding:96px 0 76px}.badge{border-color:rgba(255,122,0,.35);background:rgba(255,122,0,.12);color:#ffd8ad}.hero h1{max-width:760px;text-transform:uppercase;text-shadow:0 16px 38px rgba(0,0,0,.46)}.hero p{color:#e8dfcf}.hero-card{background:linear-gradient(180deg,rgba(255,255,255,.10),rgba(255,255,255,.05));border:1px solid rgba(255,255,255,.15);backdrop-filter:blur(12px);position:relative;overflow:hidden}.hero-card::before{content:"";position:absolute;inset:-1px;background:linear-gradient(135deg,rgba(255,122,0,.55),transparent 34%,rgba(30,109,120,.44));opacity:.48;pointer-events:none}.hero-card-inner{position:relative;background:rgba(7,9,11,.86);color:#f7efe1;border:1px solid rgba(255,255,255,.10)}.hero-card-inner h2{margin-top:0}.hero-logo-img{position:relative;z-index:1;width:225px;max-width:70%;margin:0 auto 16px;border-radius:28px;filter:drop-shadow(0 24px 48px rgba(0,0,0,.55));animation:logoFloat 4.6s ease-in-out infinite}.input,.select,textarea{background:rgba(255,255,255,.94);color:#111820;border-color:rgba(255,255,255,.18)}.input:focus,.select:focus,textarea:focus{border-color:#ff9b28;box-shadow:0 0 0 4px rgba(255,122,0,.16)}
.stat{background:rgba(255,255,255,.10);border-color:rgba(255,255,255,.16);backdrop-filter:blur(9px)}.stat strong{color:#ffb36a}.stat span{color:#e6dccb}.section-title{color:#fff}.section-subtitle,.muted{color:var(--muted)}.card{background:linear-gradient(180deg,rgba(255,255,255,.08),rgba(255,255,255,.045));border:1px solid rgba(255,255,255,.12);box-shadow:0 12px 34px rgba(0,0,0,.20);color:#f7efe1;backdrop-filter:blur(8px)}.card h2,.card h3,.card h4{color:#fff}.category-card:hover,.product-card:hover{border-color:rgba(255,122,0,.36);box-shadow:0 22px 55px rgba(255,122,0,.12)}.cat-icon{background:rgba(255,122,0,.13);color:#ff9b28;border:1px solid rgba(255,122,0,.26)}.category-card h3,.product-title,.detail-info h1{color:#fff}.product-img{background:linear-gradient(135deg,#151f29,#0c1116);border-bottom-color:rgba(255,255,255,.10)}.no-img{background:linear-gradient(135deg,#ff7a00,#1e6d78);color:#111}.price{color:#ff8d1a}.stock{background:rgba(22,163,74,.16);color:#72f19c;border:1px solid rgba(22,163,74,.32)}.stock.out{background:rgba(220,38,38,.15);color:#ff9a9a}.stock.pre{background:rgba(245,158,11,.15);color:#ffd88a}.featured{background:#ff7a00;color:#111}.old-price{color:#89939a}.page-hero{background:linear-gradient(90deg,rgba(7,9,11,.95),rgba(7,9,11,.65)),url('../img/banner.png') center/cover no-repeat;border-bottom:1px solid rgba(255,122,0,.22);padding:72px 0}.filters,.table-wrap{background:rgba(255,255,255,.07);border-color:rgba(255,255,255,.12)}.detail-image{background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.12)}.info-item{border-bottom-color:rgba(255,255,255,.12)}.payment-box{background:linear-gradient(135deg,#101820,#182938);border:1px solid rgba(255,122,0,.25);box-shadow:0 20px 55px rgba(0,0,0,.28)}.iban{background:rgba(255,122,0,.12);border-color:rgba(255,122,0,.45);color:#ffd7a5}.notice{background:rgba(255,122,0,.10);border-color:rgba(255,122,0,.30);color:#ffe1bd}.ok-box{background:rgba(22,163,74,.12);border-color:rgba(22,163,74,.34);color:#b8ffd1}.err-box{background:rgba(220,38,38,.12);border-color:rgba(220,38,38,.34);color:#ffc0c0}.setup-warning{background:rgba(255,122,0,.12);border-color:rgba(255,122,0,.38);color:#ffd7a5}.footer{background:#050607;border-top:1px solid rgba(255,122,0,.18)}.footer a,.footer p{color:#cbbfac}.footer h3,.footer h4{color:#fff}.admin-shell{background:#0a0d10}.admin-sidebar{background:#050607;border-right:1px solid rgba(255,122,0,.18)}.admin-menu button{background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.12)}.admin-menu button.active,.admin-menu button:hover{background:#ff7a00;color:#111}.admin-main h1{color:#fff}.login-card{background:linear-gradient(180deg,rgba(255,255,255,.09),rgba(255,255,255,.05));border-color:rgba(255,255,255,.13)}th{background:#111820;color:#ffb36a}td,th{border-bottom-color:rgba(255,255,255,.10)}table{color:#f7efe1}.small-btn{background:#111820;color:#f7efe1;border-color:rgba(255,255,255,.14)}.small-btn.primary{color:#ffb36a}.small-btn.danger{color:#ff9999}.toast{background:#ff7a00;color:#111;font-weight:900}
.section .card p{color:#cbbfac}.footer-bottom{border-top-color:rgba(255,255,255,.10)}
.logo img,.hero-logo-img{will-change:transform,filter}@keyframes logoFloat{0%,100%{transform:translateY(0) scale(1);filter:drop-shadow(0 20px 42px rgba(0,0,0,.46))}50%{transform:translateY(-7px) scale(1.015);filter:drop-shadow(0 30px 58px rgba(255,122,0,.25))}}
.product-card,.category-card,.card,.btn{transition:transform .2s ease,box-shadow .2s ease,border-color .2s ease,background .2s ease}.reveal{opacity:0;transform:translateY(18px);transition:opacity .55s ease,transform .55s ease}.reveal.show{opacity:1;transform:translateY(0)}
.brand-strip{display:flex;gap:10px;flex-wrap:wrap}.brand-chip{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12);border-radius:999px;padding:8px 12px;color:#e9dcc8;font-weight:800}
@media(max-width:940px){.hero .container{grid-template-columns:1fr}.hero-card{order:0}.hero-logo-img{width:180px}.hero::before{background:linear-gradient(180deg,rgba(6,8,10,.92),rgba(6,8,10,.78)),url('../img/banner.png') center/cover no-repeat}}
@media(max-width:720px){.menu{background:#090c0f}.hero{min-height:auto}.hero .container{padding:58px 0 42px}.logo img{width:46px;height:46px}.hero-logo-img{width:150px}.topbar .container{justify-content:center;text-align:center}}
:root{--hero-bg:url('../img/banner.png')}
.hero::before{background:linear-gradient(90deg,rgba(6,8,10,.95) 0%,rgba(6,8,10,.75) 44%,rgba(6,8,10,.38) 100%),var(--hero-bg) center/cover no-repeat}
.page-hero{background:linear-gradient(90deg,rgba(7,9,11,.95),rgba(7,9,11,.65)),var(--hero-bg) center/cover no-repeat}
@media(max-width:940px){.hero::before{background:linear-gradient(180deg,rgba(6,8,10,.92),rgba(6,8,10,.78)),var(--hero-bg) center/cover no-repeat}}
