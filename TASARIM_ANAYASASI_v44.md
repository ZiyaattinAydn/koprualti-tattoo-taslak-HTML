# Köprüaltı — Tipografi tasarım anayasası (v44)

**Ana referans:** Hizmetler sayfasındaki *Ne yapıyoruz?* başlığı. Büyük, tok, keskin, kolay okunan Montserrat 800; negatif harf aralığı çok kontrollü. Fotoğraf ve metin hiyerarşisi marka kimliğini taşır; her söze dekoratif font yüklemeyiz.

## Kalıcı kararlar

1. **Ana başlıklar / bölümler:** Montserrat ExtraBold. İri ama en az 1.05 satır yüksekliği; üst üste binen, kesişen harf veya outlined harf yok. Tek ölçü sistemi ve mobil küçülme. Hizmetler sayfası görsel referanstır.
2. **Rye / Köprüaltı karakteri:** Sadece Doktor'un isimleri, Atam ana başlığı ve bir görsel içindeki Atatürk imzası gibi hikâye/karakter taşıyan noktalarda. Normal sayfa başlığına, hizmet adına, sloganlara, form başlığına ve sanatçı Cansın/Su/Birsu isimlerine yayma.
3. **Renk:** Tek koyu Köprüaltı moru `#65336f`; koyu siyah zemindeki renkli büyük tipografi erişilebilir olması için daha açık aynı ailenin `#c19ac9` tonu. Kırık beyaz + mürekkep siyahı temeli. Mor neon **yalnız footer'da**. Header düz siyah.
4. **Düzen:** Başlıklar ile küçük üst etiket arasında nefes. Büyük harfli tarih `1993'TEN BERİ.` biçiminde kalır. Logo **orijinal logodur**; K6 yalnızca easter egg. Menü ve footer düzenini tipografi güncellemesi değiştirme.
5. **Geliştirme:** İlk aşama düz HTML/CSS/JS, Next.js geçişi değil. Randevu formunun mevcut üç adımı ve JS davranışı korunur. GitHub kullanıcı istemedikçe değiştirilmez.
6. **Geri alma:** Bu sürüm yalnız `css/tipografi-v44.css` ve ana sayfanın hafıza manşeti işaretlemesini günceller. Önceki ZIP dosyası v43 olarak korunur.

## Sayfa bazında stil

| Bölüm | Başlık sistemi | Rye? |
| --- | --- | --- |
| Anasayfa / hero | İki satır net sans. Mor yalnız ikinci satır | Hayır |
| Anasayfa / hafıza | 4 temiz satır; renkli vurgu, outline yok | Hayır |
| Portfolyo ve Hizmetler | Hizmetler referansı: sade sans + küçük numaralar | Hayır |
| Hakkımızda | `1993'TEN BERİ.` güçlü sans | Hayır |
| Sanatçılar | Sayfa adı sans; Doktor adı Rye, diğerleri sans | Yalnız Doktor |
| Atam | Ana isim Rye; açıklayıcı alt başlıklar sans | Ana isim |
| Şubeler | İki başlık da güçlü sans | Hayır |
| Randevu Al | 3 satır dengeli sans; form başlıkları daha küçük sans | Hayır |
