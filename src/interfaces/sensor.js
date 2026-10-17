// Bir sensörün sahip olduğu alanlar:
// id, ad, tip, protokol, lokasyon, durum, eklenmeTarihi

// Seçilebilecek durumlar (formda ve filtrelerde bu liste kullanılacak)
export const DURUMLAR = ['Aktif', 'Bakımda', 'Arızalı']

// Seçilebilecek haberleşme protokolleri
export const PROTOKOLLER = ['I2C', 'UART', 'SPI', 'WiFi', 'Bluetooth', 'Modbus']

// Yeni sensör nesnesi üretir.
// id ve eklenmeTarihi otomatik oluşur, yeni sensör varsayılan olarak "Aktif" başlar.
export function sensorOlustur({ ad, tip, protokol, lokasyon, durum = 'Aktif' }) {
  return {
    id: crypto.randomUUID(),
    ad,
    tip,
    protokol,
    lokasyon,
    durum,
    eklenmeTarihi: new Date().toISOString(),
  }
}
