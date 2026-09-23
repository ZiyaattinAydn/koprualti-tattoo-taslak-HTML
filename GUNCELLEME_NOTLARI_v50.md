# Köprüaltı v50 · Doodle Kırpma ve Tekrarlama Düzeltmeleri

## Ne değişti?
- **Tasarım görseli değil, doğrudan çalışan proje kodu:** 9 HTML sayfası, CSS ve JS güncellendi; orijinal tasarım, navigasyon, logo, randevu sistemi ve footer korunuyor.
- `doodle asset 1–4.png` kaynak dosyalarından bağımsız bileşenleri maskeleyerek ayırdık; `doktor doodle asset.png` ve `doodle asset 5.png` bağımsız özgün çalışmalar olarak kullanıldı.
- Eski, dikdörtgen içinden kırpılırken başka tasarımların ucunu da içine alan sorunlu varlıklar artık kullanılmıyor. Yeni kesimler **şeffaf alfa maskeli**; komşu figür parçası veya beyaz/dikdörtgen arka plan yok.
- Kaynak görselde iki farklı nesnenin yan yana bulunduğu hatalı seçimler ayrıştırıldı; görsel bütünlüğü yeterli olmayan üç eski desen havuzdan çıkarıldı.
- **58 ayrı özgün motif** için koyu zeminde açık, açık zeminde koyu iki WebP varyantı hazırlandı. `symbols-k6` ve `classic-blackletter` sadece açık yüzeylerde kullanılabilir.
- Eski iki bağımsız doodle betiği silindi. `js/doodles-v50.js` artık tek kaynak; `css/doodles-v50.css` sadece süs katmanının stilini düzenliyor.
- Her bölümde aynı çizim ve aynı ailenin ikinci varyantı (ör. üç ayrı kırlangıç) yan yana gelmiyor; yan yana bölümlerde aynı figür kullanılmıyor.
- Yerleşim deterministik; sayfa yenilemede değişmez. Motifler kenarların **yanında içerikteki güvenli boşluklarda** da görünebilir. Yazı, görsel, form veya eylem düğmelerini örtmez. Tam parçalar kullanılır, sayfa sınırında özensiz kesilmez.
- Yavaş animasyon; görünmeyen bölümlerde durur. Hareket azaltma tercihi olanlarda animasyon yok, mobilde süsleme seyrek.

## Nasıl değiştirilir?
- **Yoğunluk ve sayfa bazlı desen tercihi:** `js/doodles-v50.js` (özellikle `plans`, `preferences` ve `goal`).
- **Opaklık ve hareket:** `js/doodles-v50.js` motif oluşturma bölümü ve `css/doodles-v50.css`.
- **Kesilmiş özgün figürler:** `assets/doodles/*-ink.webp` (açık zemin) ve `*-chalk.webp` (koyu zemin). Tam liste `assets/doodles/catalog.json`.

**Önemli:** Bu prototipteki dosyalar lokaldir. GitHub güncellenmedi. Önceki v47/v48 doodle kodlarının artık kullanılmaması kasıtlıdır.
