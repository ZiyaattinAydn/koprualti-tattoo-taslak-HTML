# Köprüaltı Tattoo & Piercing — Next.js geçiş planı

Bu dosya yalnızca geçiş planıdır; v56 hâlâ çalışan statik HTML/CSS/JavaScript projesidir. Görsel tasarım ve mevcut bağlantı mantığı onaylanmadan backend veya otomatik veri aktarımı yapılmamalıdır.

## Rotalar

| Statik dosya | App Router rotası | İlk veri kaynağı |
| --- | --- | --- |
| `index.html` | `/` | Sabit vitrin metni + yayınlanmış seçkiler |
| `portfolio.html` | `/portfolio` | Yayınlanmış portfolyo öğeleri |
| `artists.html` | `/artists` | Yayınlanmış sanatçı listesi |
| `artist-doktor.html` | `/artists/[slug]` | Sanatçı profili ve doğrulanmış işler |
| `about.html` | `/about` | Kurumsal anlatı / sabit içerik |
| `ataturk.html` | `/ataturk` | Doğrulanmış tarih ve editorial görseller |
| `studios.html` | `/studios` | Şube listesi |
| `sube-alsancak.html`, `sube-karsiyaka.html` | `/studios/[slug]` | Şube verisi ve gelecekteki sahneler |
| `services.html` | `/services` | Hizmet tanımları |
| `appointment.html` | `/appointment` | Form seçimi; gönderim API'si sonraki aşamada |

## Bileşen sınırları

- Ortak kabuk: `Header`, `Footer`, `DoodleLayer`, `StarLayer`, sayfa yerleşimi, font ve tema kuralları. Header menüsü ve Hizmetler açılır menüsü istemci etkileşimi gerektirir.
- Portfolyo: `PortfolioFilters`, `PortfolioCard`, `ArtistSelect`, `ImageLightbox`. Filtre durumunu ve modal odağını küçük Client Component'lerde tut; kart verisini sayfada yayınlanmış kaynaktan geçir.
- Şubeler: `StudioCard`, `StudioIntro`, `StudioPhoto`, gelecekte `StudioScene` ve `DiscoveryHotspot`. Şube kimliği `slug` ile taşınır. v55 iskeletinde oyun kodu yoktur.
- Ana sayfa: `TattooCursorCanvas` yalnızca masaüstü giriş görselinde, hareket azaltma tercihini izleyen Client Component olmalı. Ses için lisanslı yerel varlık gelene kadar devre dışı durum korunmalı.
- Randevu: `AppointmentFlow` ve seçilen hizmet/şube alanları Client Component. Gönderim akışı, doğrulama, onay mesajı ve veri saklama ayrı tasarım kararıdır.
- Sayfa içerikleri ve veri okuma mümkün olduğunca sunucu tarafında kalsın. Tüm `app` ağacını istemci bileşenine çevirmeye gerek yok.

## İçerik ve veri modeli taslağı

Önce küçük JSON kataloglarıyla veri doğrulama yapılabilir; CMS/veritabanı yönetimi onaylandığında taşınır.

| Kaynak / olası tablo | Alanlar | Not |
| --- | --- | --- |
| `studios` | `id`, `slug`, `name`, `district`, `address`, `map_url`, `intro`, `hero_media_id`, `published` | Alsancak ve Karşıyaka; adresleri işletmeyle tekrar teyit et. |
| `artists` | `id`, `slug`, `name`, `bio`, `role`, `portrait_media_id`, `published` | Gerçek sanatçı portfolyosunu teyitsiz atama. |
| `services` | `id`, `slug`, `name`, `description`, `sort_order`, `published` | Tattoo, piercing, cover-up. |
| `portfolio_items` | `id`, `title`, `description`, `media_id`, `application_types`, `artist_id`, `studio_id`, `published`, `sort_order` | Tür ve sanatçı ancak doğrulandıktan sonra doldurulmalı; boş sonuç davranışı korunmalı. |
| `media_assets` | `id`, `path`, `alt_text`, `credit`, `rights_status`, `width`, `height` | Doodle'lar dekoratif, gerçek fotoğraflar içerik olarak ayrı tutulmalı. |
| `appointment_requests` | `id`, `service_slug`, `studio_id`, `idea`, `contact_details`, `status`, `created_at` | Ancak form gerçekten kullanılacaksa; erişim, saklama ve silme kuralları önceden kararlaştırılmalı. |

Gelecekteki mini-game içeriği için `studio_scenes` ve `discovery_hotspots` (`studio_id`, `scene_id`, `x`, `y`, `kind`, `asset_id`, `content`, `published`) gibi ayrı veri düşünülebilir. v56'da hotspot/veri yoktur.

## Görseller ve stil taşıma

- `assets/` içindeki mevcut yerel görseller ve `assets/doodles/` içindeki doğrulanmış motifler `public/assets/` altına taşınabilir; HTML yolları `/assets/...` olarak güncellenir. Her fotoğrafın sahiplik/şube/sanatçı ilişkisi yayın öncesi doğrulanır.
- `css/portfolio-lightbox-v54.css`, `css/branches-v55.css`, `css/tattoo-cursor-v55.css`, `css/final-responsive-v56.css` ayrı davranışların kaynaklarıdır. Tarihli eski stilleri ilk geçişte görsel fark oluşturmadan taşımak, sonra kullanılmayan kuralları ölçerek birleştirmek daha güvenlidir.
- Montserrat ve seçili Rye başlık eşleşmeleri korunur. Özellikle Doktor, Hizmetler, Portfolyo, Şubeler ve arşiv başlıklarını geçiş karşılaştırmasına ekle.

## Backend sınırı

Supabase tercih edilirse kamuya açık sayfalar yalnızca `published` kayıtlarını okumalı; yönetim işlemleri kimliği doğrulanmış yetkili rollerle ve tablo düzeyinde RLS ile sınırlandırılmalı. Hizmet anahtarı istemciye konulmamalı. Randevu iletimi açılmadan önce form doğrulama, spam sınırlandırma, saklama süresi ve fotoğraf yükleme izinleri tasarlanmalı. Statik prototip şu anda veri göndermez.

## Geçiş sırası

1. Statik onaylı ekranlar için karşılaştırma görüntüleri ve içerik envanteri al.
2. App Router sayfalarını ve ortak kabuğu kur; route bağlantılarını taşı.
3. Etkileşimleri ayrı Client Component'lere al; mobil, klavye ve hareket azaltma davranışlarını koru.
4. Doğrulanmış sanatçı/uygulama etiketlerini bir katalogda topla; portfolyoyu o veriyle besle.
5. Yetkili yönetim ve randevu backend'ini ancak ihtiyaç/erişim kuralları netleşince bağla.
6. Statik proje ile yeni uygulamayı bütün sayfalarda karşılaştır, sonra yayın planını belirle.

## Resmî başvuru belgeleri

- Next.js App Router sayfalar ve layout: https://nextjs.org/docs/app/getting-started/layouts-and-pages
- Next.js Server/Client Component sınırı: https://nextjs.org/docs/app/getting-started/server-and-client-components
- Next.js `public` dosya dizini: https://nextjs.org/docs/app/api-reference/file-conventions/public-folder
- Supabase server-side Auth: https://supabase.com/docs/guides/auth/server-side
- Supabase Row Level Security: https://supabase.com/docs/guides/database/postgres/row-level-security
