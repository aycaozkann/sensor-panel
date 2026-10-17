import { useState, useEffect } from 'react'

// useState gibi kullanılır, ek olarak değeri tarayıcının LocalStorage'ına kaydeder.
// Kullanım: const [sensorler, setSensorler] = useLocalStorage('sensorler', [])
function useLocalStorage(anahtar, baslangicDegeri) {
  const [deger, setDeger] = useState(() => {
    // Sayfa ilk açıldığında LocalStorage'da kayıtlı veri var mı bakıyoruz
    try {
      const kayitli = localStorage.getItem(anahtar)
      return kayitli ? JSON.parse(kayitli) : baslangicDegeri
    } catch {
      // Bozuk veri varsa uygulama çökmesin, başlangıç değerine dön
      return baslangicDegeri
    }
  })

  // deger her değiştiğinde LocalStorage'a yazıyoruz
  useEffect(() => {
    localStorage.setItem(anahtar, JSON.stringify(deger))
  }, [anahtar, deger])

  return [deger, setDeger]
}

export default useLocalStorage
