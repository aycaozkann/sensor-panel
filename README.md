# Akıllı Sensör ve Cihaz Yönetim Arayüzü

Endüstriyel sensörleri (örn. I2C haberleşmeli SHT35 sıcaklık/nem sensörü, ESP32 modülleri) takip etmek için geliştirilmiş bir donanım envanter paneli. TNC Group web geliştirme eğitimi kapsamında hazırlanmıştır. Backend yoktur, veriler tarayıcının LocalStorage alanında saklanır.

## Özellikler

- **Ekle:** Form ile yeni sensör ekleme (ad, tip, protokol, lokasyon, durum)
- **Listele:** Kayıtlı sensörleri kart yapısında görüntüleme
- **Güncelle:** Sensörün durumunu (Aktif / Bakımda / Arızalı) değiştirme
- **Sil:** Onay alarak sensörü silme
- **Özet sayaçlar:** Toplam / Aktif / Bakımda / Arızalı sayıları
- **Kalıcı veri:** Sayfa yenilense de kayıtlar korunur
- Koyu endüstriyel tema, durum renkleri: Aktif = yeşil, Bakımda = sarı, Arızalı = kırmızı

## Kullanılan Teknolojiler

- [React](https://react.dev/) (JavaScript)
- [Vite](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite` eklentisi)
- LocalStorage (veri saklama)

## Kurulum

Node.js yüklü olmalıdır.

```bash
# 1. Bağımlılıkları yükle
npm install

# 2. Geliştirme sunucusunu başlat
npm run dev

# 3. (İsteğe bağlı) Yayın için derle
npm run build
```

Geliştirme sunucusu varsayılan olarak http://localhost:5173 adresinde açılır.

## Klasör Yapısı

```
src/
├── components/   SensorForm, SensorList, SensorCard, SummaryCards
├── pages/        Dashboard
├── interfaces/   sensor.js (veri modeli, durum ve protokol listeleri)
└── hooks/        useLocalStorage.js
```

## Veri Modeli

| Alan | Açıklama |
| --- | --- |
| `id` | Benzersiz kimlik |
| `ad` | Sensör adı |
| `tip` | Tip / model (örn. SHT35) |
| `protokol` | I2C, UART, SPI, WiFi, Bluetooth, Modbus |
| `lokasyon` | Sensörün bulunduğu yer |
| `durum` | Aktif / Bakımda / Arızalı |
| `eklenmeTarihi` | Eklenme zamanı (ISO biçiminde) |

## Ekran Görüntüsü

<!-- Ekran görüntüsünü docs/ekran-goruntusu.png olarak kaydedip aşağıdaki satırı açın -->
<!-- ![Panel ekran görüntüsü](docs/ekran-goruntusu.png) -->

_Ekran görüntüsü buraya eklenecek._

## Notlar

Geliştirmede Claude Code'dan yardım alındı.
