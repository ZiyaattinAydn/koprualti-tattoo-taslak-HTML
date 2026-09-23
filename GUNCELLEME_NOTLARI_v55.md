# Köprüaltı Tattoo & Piercing — v55 / Faz 2

## Yapılanlar

- Şubeler sayfası iki ayrı, açıkça ayrılmış kartla yeniden düzenlendi. Her kartta mevcut stüdyo fotoğrafı, semt, kısa tanıtım, adres, mevcut Google Haritalar adresini açan Yol Tarifi ve kendi sayfasına giden Şubeyi Tanı bağlantısı bulunuyor.
- `sube-alsancak.html` ve `sube-karsiyaka.html` eklendi. İskelet sayfalarda büyük Rye şube adı, mevcut arşiv fotoğrafı, tanıtım, adres, yol tarifi, şube seçili gelen randevu ve geri dönüş bağlantıları bulunuyor. İleride keşif/hotspot verileri için `main[data-studio]` anahtarı var; şimdilik oyun yok.
- Şube kartlarındaki ve sayfalarındaki stüdyo fotoğrafları v54 ortak lightbox ile açılıyor. Harita bağlantıları lightbox'a alınmadı.
- Ana sayfa girişine, yalnızca ince işaretçili masaüstü cihazlarda çalışan sınırlı canvas izi eklendi. Normal hareketin izi kaybolur; basılı sol tuşun izi tuş bırakılana kadar sabit kalır, sonra solar. Link veya düğmeler üzerinde çizim yapılmaz. Canvas içerik tıklamalarını engellemez.
- Sekme gizlenince, sayfa kapanınca, alan terk edilince ve `prefers-reduced-motion` durumunda animasyon kapanır. Mobil/touch cihazlarda efekt yoktur. Çizim başına en fazla 180 parça tutulur ve gerektiğinde `requestAnimationFrame` çalışır.
- Projede lisanslı tattoo machine ses dosyası bulunmadığı için “Ses yakında” kontrolü devre dışıdır. Ses otomatik başlamaz. Daha sonra yerel ve izinli dosya `audio[data-tattoo-sound]` öğesine `src` olarak eklenirse düğme etkinleşir, ses kullanıcı tıklamasıyla ve düşük ses düzeyinde çalar; fare bırakılınca durur.

## Doğrulama

- 11 HTML sayfasının yapısı, yerel kaynakları ve iç bağlantıları kontrol edildi.
- İki eski Google Maps adresinin yeni şube kartlarında aynen korunduğu; yeni sayfalardaki yol tarifi, randevu, geri dönüş ve fotoğraf lightbox bağlantıları doğrulandı.
- Filtre ve lightbox kod düzeyinde yeniden sınandı. Canvas için giriş alanı, basma/bırakma, solma, alanı terk etme ve sekme gizleme davranışları simüle edilerek sınandı.
- Gerçek tarayıcıda görsel breakpoint, fiziksel touch cihaz ve Google Maps sitesinde son yönlendirme kontrolü bu ortamda yapılamadı. Bu sonuçlar doğrulanmış olarak sunulmuyor.

## Önemli dosyalar

`studios.html`, `sube-alsancak.html`, `sube-karsiyaka.html`, `index.html`, `css/branches-v55.css`, `css/tattoo-cursor-v55.css`, `js/tattoo-cursor-v55.js`, `js/doodles-v50.js`.
