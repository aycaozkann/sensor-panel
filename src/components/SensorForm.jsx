import { useState } from 'react'
import { DURUMLAR, PROTOKOLLER } from '../interfaces/sensor'

// Formun boş hali. Ekleme sonrası forma geri dönmek için de kullanıyoruz.
const BOS_FORM = {
  ad: '',
  tip: '',
  protokol: PROTOKOLLER[0],
  lokasyon: '',
  durum: DURUMLAR[0],
}

// onEkle: Dashboard'dan gelen fonksiyon. Form doldurulunca ona veriyi veriyoruz.
function SensorForm({ onEkle }) {
  const [form, setForm] = useState(BOS_FORM)

  // Her input değiştiğinde ilgili alanı günceller (name = form'daki alan adı)
  function degisti(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function gonder(e) {
    e.preventDefault() // sayfanın yenilenmesini engeller
    onEkle({
      ...form,
      ad: form.ad.trim(),
      tip: form.tip.trim(),
      lokasyon: form.lokasyon.trim(),
    })
    setForm(BOS_FORM) // formu temizle
  }

  const inputSinif =
    'w-full rounded-md bg-slate-900 border border-slate-600 px-3 py-2 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400'
  const etiketSinif = 'block text-xs font-medium text-slate-400 mb-1'

  return (
    <form
      onSubmit={gonder}
      className="rounded-lg border border-slate-700 bg-slate-800 p-5 grid gap-4 sm:grid-cols-2"
    >
      <h2 className="sm:col-span-2 text-lg font-semibold text-cyan-400">
        Yeni Sensör Ekle
      </h2>

      <div>
        <label className={etiketSinif} htmlFor="ad">Sensör Adı</label>
        <input
          id="ad"
          name="ad"
          value={form.ad}
          onChange={degisti}
          required
          placeholder="Örn: Depo Sıcaklık Sensörü"
          className={inputSinif}
        />
      </div>

      <div>
        <label className={etiketSinif} htmlFor="tip">Tip / Model</label>
        <input
          id="tip"
          name="tip"
          value={form.tip}
          onChange={degisti}
          required
          placeholder="Örn: SHT35 Sıcaklık/Nem"
          className={inputSinif}
        />
      </div>

      <div>
        <label className={etiketSinif} htmlFor="protokol">Protokol</label>
        <select
          id="protokol"
          name="protokol"
          value={form.protokol}
          onChange={degisti}
          className={inputSinif}
        >
          {PROTOKOLLER.map((p) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
      </div>

      <div>
        <label className={etiketSinif} htmlFor="lokasyon">Lokasyon</label>
        <input
          id="lokasyon"
          name="lokasyon"
          value={form.lokasyon}
          onChange={degisti}
          required
          placeholder="Örn: Üretim Hattı 2"
          className={inputSinif}
        />
      </div>

      <div>
        <label className={etiketSinif} htmlFor="durum">Durum</label>
        <select
          id="durum"
          name="durum"
          value={form.durum}
          onChange={degisti}
          className={inputSinif}
        >
          {DURUMLAR.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
      </div>

      <div className="flex items-end">
        <button
          type="submit"
          className="w-full rounded-md bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-cyan-400"
        >
          Sensör Ekle
        </button>
      </div>
    </form>
  )
}

export default SensorForm
