# Akıllı Sensör ve Cihaz Yönetim Paneli

TNC Group Web Geliştirme Eğitimi kapsamında geliştirdiğim bu proje, endüstriyel sahada kullanılan sensörlerin (SHT35 sıcaklık/nem sensörü, ESP32 modülleri vb.) envanter ve durum takibini yapmak için tasarlanmış bir web uygulamasıdır. 

Veriler tarayıcı hafızasında (`LocalStorage`) tutulduğu için sayfa yenilense bile kaybolmaz ve harici bir sunucuya ihtiyaç duymaz.

## Canlı Demo ve Ekran Görüntüsü

Projeyi canlı olarak incelemek için: **[Canlı Demo Linki (Netlify linkini buraya yapıştır)]**

<img width="516" height="539" alt="sensor-panel" src="https://github.com/user-attachments/assets/8a6f702f-60b7-46de-ab55-802c39cb942c" />


## Neler Yapılabiliyor? (CRUD İşlemleri)

- **Cihaz Ekleme:** Sensör adı, modeli, haberleşme protokolü (I2C, UART, SPI vb.), bulunduğu konum ve güncel durumu girilerek envantere yeni kayıt eklenebilir.
- **Listeleme ve Özet:** Kayıtlı tüm cihazlar kartlar halinde listelenir. Üst kısımdaki özet panelinden toplam, aktif, bakımda veya arızalı cihaz sayıları anlık takip edilebilir.
- **Durum Güncelleme:** Sahadaki duruma göre sensörlerin statüsü *Aktif (Yeşil)*, *Bakımda (Sarı)* veya *Arızalı (Kırmızı)* olarak tek tıkla değiştirilebilir.
- **Kayıt Silme:** Envanterden çıkarılan cihazlar onay alınarak listeden silinebilir.

## Kullanılan Teknolojiler ve Mimari

Projeyi geliştirirken modern frontend araçlarını kullandım:
- **React (Vite)** - Hızlı ve bileşen (component) tabanlı arayüz geliştirme
- **Tailwind CSS** - Endüstriyel koyu tema ve responsive (mobil uyumlu) tasarım
- **LocalStorage API** - Verilerin tarayıcıda kalıcı olarak saklanması

### Klasör Yapısı

Yönergeye uygun olarak projeyi modüler bir yapıda kurguladım:

```text
src/
├── components/   # SensorForm, SensorList, SensorCard, SummaryCards bileşenleri
├── pages/        # Ana ekranı oluşturan Dashboard sayfası
├── interfaces/   # Veri modeli, protokol ve durum sabitleri (sensor.js)
└── hooks/        # LocalStorage yönetimi için özel hook (useLocalStorage.js)
