# Köprüaltı Tasarım v47 — Orijinal Doodle Entegrasyonu

Bu sürüm, **v46 HTML/CSS/JS taslağı** üzerine kuruldu. Yeni bir resim veya çizim üretilmedi; kullanıcının gönderdiği gerçek doodle asset'leri tek tek **kırpıldı** ve farklı sayfa kompozisyonlarına uygulandı. GitHub üzerinde hiçbir işlem yapılmadı.

## Hangi sayfada ne var?

- **Anasayfa:** Hero üzerinde sakin figürler; beyaz manifestoda gerçek kırpılmış siyah mürekkep gül, K6, kuş, kobra, ay-güneş ve çiçek; portfolyo ve Doktor bölümlerinde daha silik doodle'lar; mor gelenek bölümünde çok hafif baskı.
- **Hakkımızda:** Kırık beyaz, çizgili arşiv zeminine kırlangıç, taç, mücevher, dikenli çember, gül, pusula ve kobra; büyük başlık ve zaman çizelgesi korunur.
- **Sanatçılar:** Doktor alanında fotoğrafa dokunmadan kenarda Medusa ve chopper üzerindeki Doktor doodle'ı; Cansın, Su, Birsu için farklı çiçek, kuş ve hayvan çizimleri. Profil metinleri ve sanatçı isim fontu aynı kaldı.
- **Doktor'un profili:** Medusa, motorlu Doktor ve diğer küçük çizimler; geçici galeri değişmedi.
- **Atam:** Saygılı, düşük kontrastlı gül, kırlangıç, hilal, zambak ve çapa motifleri. Portre, kupür ve açıklamalar değiştirilmedi.
- **Şubeler:** Siyah girişte kuş ve yılan, kartların çevresindeki açık zeminde gül/pusula. Harita bağlantıları aynen çalışır.
- **Portfolyo:** Açık zemine K6 ve ikinci siyah blackletter motifinin yanı sıra çiçek ve göksel semboller.
- **Hizmetler:** Başlık ve akordeon etrafında seyrek doodle'lar. Açılabilir hizmet detayları ve görselleri değişmedi.
- **Randevu:** Formu örtmeyen düşük kontrastlı mor zemin süsleri; mevcut üç aşamalı akış korundu.

## Uygulama

- `assets/doodles/`: Dört gerçek flash sayfasından ayrılan **60** farklı figür ve iki bağımsız figür (**Doktor / Medusa**) olmak üzere **62 ayrı motif**, açık zemine özel `-ink.webp` ve koyu zemine özel `-chalk.webp` versiyonları. Ayrıntılı liste `assets/doodles/CROPS.json` içindedir.
- `css/doodles-v47.css`: Dekoratif katman, hafif 11px/20–28 sn hareket, etkileşimi engellemeyen `pointer-events: none`, responsive görünürlük ve `prefers-reduced-motion` desteği.
- `js/doodles-v47.js`: Dokuz sayfa için ayrı motif/koordinat listeleri; sadece ekranda görünen bölümlerin animasyonunu oynatır. Figür sayısını/yerini/opaklığını buradan değiştirebilirsin. JS sadece süsleme amaçlıdır; sitenin geri kalanını değiştirmez.
- **Header ve footer düzeni korunmuştur.** Form hâlâ prototip; gerçek randevu gönderimi henüz bağlı değildir.

## Nasıl açılır?

Zip'i bir klasöre çıkar ve `index.html` dosyasını tarayıcıda aç. Diğer sayfalara mevcut navigasyondan geçebilirsin. Dosyalar ve asset'ler aynı klasör yapısıyla kalmalıdır; sadece tek HTML dosyasını taşımayın.

## Test

Dokuz sayfanın tamamında masaüstü, altı önemli sayfada mobil görünüm kontrol edildi. 15 kontrolde doodle resimleri eksik çıkmadı, JavaScript hatası ve yatay taşma gözlenmedi. Gerçek harici fontların ağ erişimi olmadan yüklenmesi tarayıcıya bağlıdır.
