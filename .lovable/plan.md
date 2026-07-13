
# Küçükler Yapı — SEO ve Dönüşüm Odaklı İyileştirme Planı

Mevcut tasarımı ve yapıyı koruyarak, siteyi Fatih/İstanbul merkezli güçlü bir yapı dekorasyon SEO sitesine dönüştürüyoruz. Fazlalık animasyonlar ve gereksiz kod eklenmeyecek.

---

## 1. Homepage İyileştirmeleri (mevcut yapıyı koruyarak)

Mevcut bileşenler güncellenecek, yenileri eklenecek:

- **HeroSection**: Başlık → "Fatih Merkezli İstanbul Yapı Dekorasyon ve Tadilat Hizmetleri". 3 CTA butonu: WhatsApp (yeşil), Telefon Ara, Teklif Al.
- **AuthorityStrip**: Kısa tutulacak (rakamlar).
- **ServicesGrid (YENİ)**: 10 ana hizmet kartı (Komple ev, Banyo, Mutfak, Boya badana, Alçıpan/asma tavan, Mantolama, Dış cephe boya, Su yalıtımı, Çatı tamiri, Zemin kaplama). Her kart ilgili servis sayfasına link.
- **BeforeAfter (YENİ)**: 3 adet öncesi/sonrası proje karşılaştırması (slider yerine yan yana sabit görsel — hafif).
- **ProjectGallery (YENİ)**: 6-8 görsel grid.
- **Testimonials (YENİ)**: 3 müşteri yorumu.
- **FAQ (YENİ)**: 6 soru (fiyat, süre, garanti, bölge vs.) — FAQ schema ile.
- **QuoteForm (YENİ)**: Ad, telefon, hizmet türü, mesaj → WhatsApp'a yönlendiren form (backend yok, hızlı çözüm).
- **Footer**: Telefon, WhatsApp, hizmet listesi, hizmet bölgeleri (Fatih, Eminönü, Balat, Fındıkzade, Aksaray, Beyazıt, Laleli, Zeytinburnu, Eyüpsultan, Beyoğlu, Bakırköy, Bahçelievler, Başakşehir, Esenler) eklenecek.

Mevcut `ValueProposition`, `FeatureSection`, `BlogSection`, `PreFooterCTA` korunur; içerikler Fatih/tadilat odaklı Türkçe metinlerle güncellenir.

---

## 2. SEO Servis Sayfaları (7 adet)

React Router ile yeni route'lar:

```text
/hizmetler/komple-ev-tadilati
/hizmetler/banyo-tadilati
/hizmetler/mutfak-tadilati
/hizmetler/boya-badana
/hizmetler/mantolama
/hizmetler/su-yalitimi
/hizmetler/cati-tamiri
```

Tek bir `ServicePage` şablonu (props ile içerik), her sayfada:

- **SEO**: `react-helmet-async` ile per-page `<title>`, `<meta description>`, `canonical`, `og:*`, Service + FAQPage JSON-LD schema
- **Yapı**: Tek H1, mantıklı H2/H3
- **Bölümler**: Hizmet açıklaması → Çalışma süreci (5 adım) → Faydalar → SSS (4-5 soru) → İlgili hizmetler (internal linking) → WhatsApp + Teklif Al CTA

---

## 3. Yerel SEO (Local SEO)

- Homepage `index.html`: LocalBusiness JSON-LD schema (Fatih adresi, telefon, çalışma saatleri, `areaServed` listesi)
- Homepage'de "Hizmet Verdiğimiz Bölgeler" bölümü — Fatih öncelikli, komşu ilçeler doğal metin içinde
- Anahtar kelimeler H2/H3 ve paragraflara doğal yerleştirilecek

**Not**: Adres olarak mevcut Esenyurt bilgisini mi kullanacağız yoksa Fatih adresi mi var? Şimdilik **Fatih Merkez** olarak genel yazıyorum, kesin adres bilgisini bize verirseniz güncelleriz. Telefon: 0542 820 95 99.

---

## 4. Teknik SEO

- `react-helmet-async` kurulumu → per-route head yönetimi
- `public/sitemap.xml` → homepage + 7 servis sayfası
- `public/robots.txt` → Sitemap directive
- Tüm görseller `alt` metinleri Türkçe
- Semantic HTML (`<section>`, `<article>`, `<nav>`)
- Lazy loading (`loading="lazy"`) blog ve galeri görsellerinde
- Mevcut ağır animasyonlar (paralaks, sayaç) korunacak ama yeni bölümlerde minimum tutulacak

---

## 5. Dosya Yapısı

**Yeni dosyalar:**
```
src/components/ServicesGrid.tsx
src/components/BeforeAfter.tsx
src/components/ProjectGallery.tsx
src/components/Testimonials.tsx
src/components/FAQ.tsx
src/components/QuoteForm.tsx
src/components/WhatsAppFloat.tsx    (sabit sağ alt buton, tüm sayfalarda)
src/pages/ServicePage.tsx           (tek şablon)
src/data/services.ts                (7 servis içeriği)
src/data/faq.ts
```

**Güncellenen dosyalar:**
```
src/App.tsx                 (Helmet provider + servis rotaları)
src/main.tsx                (HelmetProvider)
src/pages/Index.tsx         (yeni bölümler eklenir)
src/components/HeroSection.tsx (yeni başlık + 3 CTA)
src/components/Footer.tsx   (hizmet bölgeleri)
src/components/Navigation.tsx (Hizmetler dropdown)
index.html                  (title, description, LocalBusiness JSON-LD)
public/robots.txt
public/sitemap.xml (YENİ)
```

---

## 6. Kapsam Dışı (Sonraya Bırakılan)

- İlçe bazlı ayrı sayfalar (`/tadilat/fatih` vs.) — Adım 3'te belirtildiği üzere sonraya
- Blog yazıları çoğaltma
- Admin panel / CMS
- Gerçek backend (form şimdilik WhatsApp'a yönlendirir)

---

Onay verirseniz uygulamaya başlıyorum. Görseller için mevcut asset'leri kullanıp, eksik olanlar için yeni görseller üretirim (öncesi/sonrası, galeri).
