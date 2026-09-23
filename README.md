# Köprüaltı Tattoo & Piercing — Website Prototype

Static HTML/CSS/JavaScript prototype for the Köprüaltı Tattoo & Piercing website. Current handoff: **v48** (the classic black footer and full-width appointment redesign).

## Current scope

- Multi-page site structure
- Köprüaltı visual language: purple, black, broken white
- Original Köprüaltı logo in the header
- Homepage, portfolio, artists, about, Atam, studios, services and appointment pages
- Artist directory with Doktor, Cansın, Su and Birsu placeholders
- Doktor artist detail page with selected-work gallery prototype
- Atatürk signature story page
- Studio location cards linked to map searches
- Full-width editorial appointment page with 3-step prototype (not connected to a live backend)
- Minimal classic black footer; branch directions live on the dedicated studios page, not in the footer
- Local assets only

## Pages

- `index.html`
- `portfolio.html`
- `artists.html`
- `artist-doktor.html`
- `about.html`
- `ataturk.html`
- `studios.html`
- `services.html`
- `appointment.html`

## Tech

- HTML
- CSS
- Vanilla JavaScript
- Montserrat for primary UI typography
- Rye for heritage/editorial accents

## Status

This repository is the current design/prototype stage. Content, professional photography, artist portfolios and production integrations will continue to evolve before the later Next.js migration.

## v35 — Kalıcı başlık kimliği
Bütün sayfa başlıkları, Doktor görselindeki Rye fontuna geçirildi. Tipografi kaynağı: `css/baslik-kimligi-v35.css`. Bu dosyanın Google Fonts Rye bağlantısı ve CSS yüklenme sırası korunmalıdır. Ayrıntılar: `BASLIK_TASARIM_KURALLARI.md`.

## v47 — Doodle arka planları

Gerçek stüdyo doodle'ları ayrı ayrı kırpılarak 9 sayfanın arka planına eklendi. `assets/doodles/catalog.json` mevcut figürleri listeler; güncel düzenleme noktası `js/doodles-v50.js` dosyasıdır. Açık/koyu zemin varyantları ve düşük hareket seçeneği vardır. Detaylı değişiklik listesi: `GUNCELLEME_NOTLARI_v47.md`. Header, footer ve randevu akışı v46 ile aynıdır.


## v48 — Site geneline daha yoğun animasyonlu doodle

Güncel sürüm v50: 58 temizlenmiş orijinal motif, dokuz sayfada tek katmandan yerleştirilir. Önceki v47/v48 kodu yerini `js/doodles-v50.js` ve `css/doodles-v50.css` dosyalarına bıraktı. Ayrıntılar `GUNCELLEME_NOTLARI_v50.md` içinde.

## v50 — Temiz animasyonlu doodle sistemi

59 yerine **58 doğrulanmış ve ayrı ayrı şeffaflık maskesiyle kırpılmış** motif kullanılır. Aynı veya benzer çizimler komşu bölgelerde yinelenmez. Başlıklar ve mevcut tasarım korunur; detaylar `GUNCELLEME_NOTLARI_v50.md` dosyasındadır.


## v53 başlık genişletmesi
- Rye fontu artık Hizmetler sayfasına ek olarak şu başlıklarda da kullanılıyor: `İzmir'de iki nokta.`, `İşi yapan insanlar.`, `Portfolyo`, `KÖPRÜALTI` archive kartı ve `1993'TEN BERİ.`
- Uygulama dosyası: `css/basliklar-rye-v53.css`
