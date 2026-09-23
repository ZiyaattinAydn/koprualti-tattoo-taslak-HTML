# Köprüaltı Tattoo & Piercing — v54

## Faz 1 değişiklikleri

- Portfolyoda Bütün Tasarımlar, Tattoo, Piercing ve Cover-Up türleri için çoklu seçilebilen, tekrar tıklanarak kaldırılabilen filtreler; Doktor, Cansın, Su ve Birsu için sanatçı seçimi ve tek tıkla sıfırlama eklendi. Seçimler sayfa yenilenmeden birlikte uygulanıyor. Sonuç sayısı ve boş sonuç ekranı bulunuyor.
- Altı mevcut fotoğraf yeni kart düzeninde gösteriliyor. Fotoğraflar stüdyo duvarı/iç mekân arşivi olduğu için doğrulanmamış Tattoo, Piercing, Cover-Up veya sanatçı ataması yapılmadı. Bu tür veya sanatçı seçimleri gerçek fotoğraflar eklenene kadar boş sonuç verir. Arşiv kartlarında “Sanatçı belirtilmemiş” yazıyor.
- Anasayfanın dört arşiv kartı artık portfolyoya yönlendirmek yerine ortak görüntüleyiciyi açıyor. Anasayfadaki Doktor fotoğraf kartının tamamına tıklanabiliyor; fotoğraf ve yazı bölgesi aynı görüntüleyiciyi açıyor. Doktor sayfasındaki eski bağımsız görüntüleyici kaldırıldı; sanatçı, hizmet ve Atam sayfalarındaki uygun içerik fotoğrafları aynı sistemi kullanıyor. Logo, dekorasyon ve şube haritası bağlantıları hariç tutuldu.
- Görüntüleyici açıklama ve mevcutsa tür/sanatçı bilgisi gösteriyor. Kapatma düğmesi, Esc, dışarı tıklama, klavye odağı ve sayfa kaydırma konumunu geri yükleme desteği var.
- v53 Rye/Montserrat başlık düzeni; header, footer, randevu akışı ve dokuz sayfalık yapı korundu. Faz 2/3 kapsamında yeni şube sayfası, imleç animasyonu veya kapsamlı mobil yenileme yapılmadı.

## Dosyalar

- `portfolio.html`, `index.html`, `artist-doktor.html`: filtre, kartlar, arşiv atfı ve tıklama davranışı.
- Diğer HTML sayfaları: ortak CSS/JS yüklemesi; uygun içerik görsellerine görüntüleyici erişimi.
- `js/portfolio-v54.js`: bağımsız filtre mantığı.
- `js/lightbox-v54.js`: ortak görüntüleyici.
- `js/app.js`: eski tekli portfolyo filtresi çıkarıldı.
- `css/portfolio-lightbox-v54.css`: yeni bileşenler ve dar ekran kuralları.
- `css/style.css`: kullanılmayan eski Doktor görüntüleyici stilleri çıkarıldı.

## Doğrulama ve sınırlar

- Dokuz HTML sayfası yerel HTTP üzerinden `200` verdi; mevcut iç navigasyon hedefleri ve tüm yerel görsel/CSS/JS yolları kontrol edildi.
- JavaScript sözdizimi doğrulandı. Filtrelerin açılıp kapanması, çoklu seçimi, sanatçı bileşimi, boş sonuç ve sıfırlama; ayrı davranış testleriyle geçti. Yeni ve doğrulanmış bir Tattoo/Doktor kartı veri olarak eklendiğinde kombinasyonun eşleştiği de sınandı.
- Görüntüleyicinin açılma, kapatma düğmesi, Esc, dışarı tıklama, odak ve kaydırma geri yükleme mantığı kod düzeyindeki testlerle geçti.
- Bu ortamda etkileşimli tarayıcı yerel projeye erişemediği için cihaz/tarayıcı üzerinde görsel mobil taşma, metin çakışması, görüntü kırpılması ve randevu formunun uçtan uca kullanımı doğrulanamadı. Dar ekran CSS kuralları eklendi, ancak görsel test yapıldığı iddia edilmiyor.
- Randevu, Hizmetler ve Sanatçılar sayfaları açıldı; ilgili iç bağlantıları ve dosya referansları sağlam. Var olan form/akordeonun gerçek tarayıcıda etkileşimli regresyon testi yapılamadı.

## Gerçek işler ekleneceği zaman

Portfolyo kartının `data-types` alanına doğrulanmış türlerin boşlukla ayrılmış anahtarlarını (`tattoo`, `piercing`, `coverup`), `data-artist` alanına doğrulanmış sanatçı anahtarını (`doktor`, `cansin`, `su`, `birsu`) yazın. Görüntüleyicinin `data-type` ve `data-artist-label` alanlarını ve görünür kart metnini aynı kaynağa göre güncelleyin. Doğrulanmamış görseli herhangi bir uygulama türüne atamayın.
