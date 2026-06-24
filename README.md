# Oto Parça Bul - GitHub Pages + Supabase Site

Bu paket GitHub Pages'e direkt yüklenebilir statik site dosyalarıdır. Ürün, kategori, ödeme/IBAN, sipariş, dekont ve admin panel verileri Supabase üzerinden çalışır.

## Hazır Bilgiler

- Site adı: Oto Parça Bul
- Admin e-posta: vamos0443@gmail.com
- Admin Auth User ID: d4ac2a2d-55ec-4d4d-aec9-062913f6484f
- Supabase base URL: https://fsoszhyccevnjapmjrah.supabase.co
- WhatsApp: 0534 666 6942

> Not: Supabase'de görünen `https://fsoszhyccevnjapmjrah.supabase.co/rest/v1/` API endpoint adresidir. Site kodunda doğru kullanım base URL olan `https://fsoszhyccevnjapmjrah.supabase.co` şeklindedir. Bu pakette düzeltilmiş hali eklidir.

## 1) Supabase SQL Kurulumu

Supabase panelinde:

1. SQL Editor > New query
2. `database/schema.sql` dosyasındaki kodun tamamını yapıştır
3. Run bas

Bu işlem şu yapıları kurar:

- admin_users
- site_settings
- payment_settings
- categories
- products
- orders
- order_items
- contact_messages
- product-images storage bucket
- site-assets storage bucket
- payment-receipts storage bucket
- RLS güvenlik kuralları
- demo oto yedek parça kategorileri ve ürünleri

## 2) Admin Kullanıcısı

Admin panel girişinde e-posta:

```text
vamos0443@gmail.com
```

Şifreyi Supabase > Authentication > Users bölümünde sen belirlersin.

Admin yetkisi için Auth Users içinde bu kullanıcının ID değeri şu olmalıdır ya da `admin_users` tablosunda doğru ID/mail kaydı olmalıdır:

```text
d4ac2a2d-55ec-4d4d-aec9-062913f6484f
```

Kontrol SQL'i:

```sql
select * from public.admin_users;
```

## 3) GitHub'a Yükleme

ZIP içindeki dosyaları repo köküne yükle:

```text
index.html
urunler.html
urun-detay.html
sepet.html
odeme.html
hakkimizda.html
iletisim.html
admin.html
assets/
database/
.nojekyll
README.md
```

Sonra GitHub repo içinde:

```text
Settings > Pages > Deploy from a branch > main > /root > Save
```

## 4) Admin Panel

Site açıldıktan sonra admin panel:

```text
/admin.html
```

Buradan yönetilebilir:

- Ürün ekleme/silme/düzenleme
- Ürün görseli yükleme
- Fiyat ve stok değiştirme
- Kategori ekleme/silme/düzenleme
- IBAN/banka/alıcı adı değiştirme
- Site adı, slogan, telefon, adres, sosyal medya değiştirme
- Siparişleri ve dekontları görme
- Sipariş durumunu değiştirme
- İletişim mesajlarını görme

## 5) Görsel Kullanımı

Bu pakette gönderdiğin logo ve kapak görselleri yerel dosya olarak eklendi:

```text
assets/img/logo.png
assets/img/logo.webp
assets/img/banner.png
assets/img/banner.webp
```

Site animasyonlu logo ve koyu turuncu oto parça temasına göre ayarlandı.

## 6) Önemli Güvenlik Notu

`service_role`, `secret key` veya gizli anahtarları bu siteye koyma. Bu paket sadece public/publishable key ile çalışacak şekilde hazırlanmıştır.
