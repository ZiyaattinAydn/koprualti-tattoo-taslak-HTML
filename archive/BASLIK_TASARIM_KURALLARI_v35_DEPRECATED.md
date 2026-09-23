# Köprüaltı — Kalıcı Başlık Tasarım Kuralı

**Onaylanan yazı karakteri:** Rye (Google Fonts). Doktor başlığına ait referans görseldeki dekoratif serif budur. Bütün sayfalardaki `h1–h6`, hizmet isimleri ve büyük dekoratif metin başlıklarında aynı karakter kullanılır. Normal paragraflar, menüler, butonlar, formlar ve orijinal logo kendi tipografilerini korur.

**Öncelik:** Başlık fontunu sonraki güncellemelerde değiştirme. Tek kaynak: `css/baslik-kimligi-v35.css`, bu dosya tüm diğer CSS dosyalarından sonra yüklenir. Geniş harfli Rye ile taşma olmaması için büyük başlıklar `clamp()` ile masaüstü/tablet/mobil uyumlu ölçeklenir. Var olan büyük harfli başlıklar, özellikle `1993'TEN BERİ.`, **kesinlikle küçük harfe çevrilmez.** Referanstaki `Doktor` özel isim yazılışı korunur.

**İleride:** Yeni sayfa eklendiğinde `<head>` içindeki Google Fonts Montserrat + Rye bağlantısını ve en son `css/baslik-kimligi-v35.css` bağlantısını ekle. Yeni CSS katmanı yazarken Rye fontunu başka aileyle değiştiren kural ekleme.

Bu sürüm yalnızca site geneli başlık kimliğini değiştirir; mevcut site akışı, footer, görseller, renk paleti, menü ve randevu formu korunmuştur. GitHub'a otomatik işlem yapılmamıştır.
