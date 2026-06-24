(function(){
  const cfg = window.OPB_CONFIG || {};
  const rawUrl = String(cfg.SUPABASE_URL || '').trim();
  const key = String(cfg.SUPABASE_PUBLISHABLE_KEY || '').trim();
  function cleanSupabaseUrl(value){
    if(!value) return '';
    return value
      .replace(/\/rest\/v1\/?$/,'')
      .replace(/\/auth\/v1\/?$/,'')
      .replace(/\/storage\/v1\/?$/,'')
      .replace(/\/+$/,'');
  }
  const url = cleanSupabaseUrl(rawUrl);
  const ready = Boolean(url && key && !url.includes('BURAYA_') && /^https:\/\/[^/]+\.supabase\.co$/.test(url));
  window.OPB_SUPABASE_URL = url;
  window.OPB_SUPABASE_READY = ready;
  window.OPB_HAS_SUPABASE = ready && window.supabase;
  window.opbDb = ready && window.supabase ? window.supabase.createClient(url, key, {
    auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
  }) : null;
})();
