# Köprüaltı Tattoo & Piercing — v56 / final statik kaynak

## Faz 3 düzenlemeleri

- Önceki dokuz sayfa ve iki yeni şube sayfasının ortak navigasyonu, dosya yolları, görsel açıklamaları, bağlantı hedefleri ve klavye kontrol nitelikleri tarandı. 11 sayfada eksik yerel görsel, CSS veya JS dosyası bulunmadı.
- Dar ekran için portfolyo kontrolleri, sanatçı ve arşiv başlıkları, Hizmetler akordeonu, randevu adımları, şube kartları, modal ve footer üzerinde hedefli `css/final-responsive-v56.css` kuralları eklendi. İstenmeyen taşmayı genel `overflow-x:hidden` ile gizlemek yerine ilgili bileşenlerde `min-width`, sarma ve ızgara sınırları düzeltildi.
- v53 Rye başlık eşleşmeleri ve Montserrat metin sistemi korunmuştur. Mobilde başlık boyutları gerektiğinde küçülür; başlıkların tamamı Rye'ye çevrilmedi.
- Mobilde bölüm başına doodle üst sınırı 4'ten 2'ye, yıldız üst sınırı 9'dan 5'e; tablette sırasıyla 10'dan 7'ye ve 18'den 12'ye indirildi. Mevcut motif/başlık çakışma denetimi korunur. Sekme gizlenince CSS animasyonları duraklar. Orijinal doodle varlıklarının iki ton varyantı da dosyada mevcut.
- Menü ve açılır Hizmetler bağlantısı Escape ile kapanır; mobil menünün `aria-expanded` durumu eşlenir. Randevu adımlarında odak, `aria-current` ve seçimlerde `aria-pressed` eşlenir. Hizmetler akordeonunda `aria-expanded`/`aria-controls` eklenip kapalı içerik `inert` yapılır; dar ekranda açık bölümün içeriği kesilmez.
- Portfolyo JS yalnızca portfolyoda, lightbox JS yalnızca içerik görseli olan sayfalarda, şube CSS yalnızca şube sayfalarında, cursor CSS/JS yalnızca anasayfada yüklenir. Mobil veya azaltılmış hareket ile açılan sayfada cursor canvas bağlamı oluşturulmaz.
- Açık zeminlerde birkaç küçük metnin kontrastı artırıldı. Logo, doodle, yıldız ve Google Maps bağlantıları lightbox dışında kaldı.
- `NEXTJS_GECIS_PLANI.md` eklendi. Bu teslimde Next.js uygulaması veya backend yoktur.

## Doğrulama

- 11 HTML sayfası yerel HTTP üzerinde `200` döndü; bütün yerel linkler ve dosyalar `200` döndü. Her sayfada header, footer ve randevu/şube bağlantıları kontrol edildi. Benzersiz ID, etiket hedefi, `aria-controls`, `alt` ve `button type` denetimleri geçti.
- Portfolyo testinde tüm türler, birden fazla tür, her sanatçı seçeneği, eşleşen kart, boş sonuç, Tüm sanatçılar ve sıfırlama kod düzeyinde test edildi. Gerçek içerikte uygulama/sanatçı ataması doğrulanmamış arşiv kartları hâlâ doğru biçimde boş sonuç verir.
- Lightbox açma, kapatma, Escape, dışarı tıklama, odak ve kaydırma geri yükleme davranışları; ana sayfa canvas alanı, sol tuşa basma/bırakma, solma, alandan çıkma, sekme gizleme ve ses dosyası olmadan kontrolün devre dışı kalması sınandı.
- Randevu adımları, hizmet seçimi, şube query parametresi, Hizmetler akordeonu, mobil menü ve Hizmetler dropdown'u kod düzeyinde sınandı. Şube Yol Tarifi bağlantıları v54'teki Google Maps hedefleriyle byte düzeyinde karşılaştırıldı.
- **Sınır:** Bu çalıştırma ortamındaki etkileşimli tarayıcı yerel statik siteyi açamadığı için 1440, 1280, 1024, 768, 430, 390 ve 360 pikselde gerçek ekran görüntüsü/taşma ölçümü yapılamadı. Yukarıdaki kurallar ve statik/JS kontrolleri bu görsel testin yerine geçirilmemelidir. Dış Google Maps sitesinin son yönlendirmesi ve fiziksel mobil cihaz davranışı da canlı sınanmadı.

## Dosya organizasyonu

- Temel görünüm: mevcut `css/style.css`, tarihli başlık/header/footer dosyaları korunur.
- Portfolyo/lightbox: `js/portfolio-v54.js`, `js/lightbox-v54.js`, `css/portfolio-lightbox-v54.css`.
- Şubeler: `css/branches-v55.css` ve `sube-*.html`.
- Giriş etkileşimi: `js/tattoo-cursor-v55.js`, `css/tattoo-cursor-v55.css`.
- Ortak son düzenlemeler: `js/app.js`, `js/doodles-v50.js`, `css/final-responsive-v56.css`.

Statik siteyi bir sunucuyla aç: `python3 -m http.server 8000`. Tarayıcıda `http://localhost:8000/` adresinden başlanır. Gerçek stüdyo çekimleri, sanatçı atıfları ve lisanslı ses dosyası geldiğinde ilgili veri alanları doğrulanarak değiştirilebilir.
