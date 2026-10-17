import { DURUMLAR } from '../interfaces/sensor'

// Duruma göre rozet renkleri.
// Tailwind sınıfları tam yazılmalı (parça parça birleştirilirse Tailwind bulamaz).
const DURUM_RENKLERI = {
  Aktif: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/40',
  Bakımda: 'bg-yellow-500/15 text-yellow-400 border-yellow-500/40',
  Arızalı: 'bg-red-500/15 text-red-400 border-red-500/40',
}

// Tek bir sensörü kart olarak gösterir. sensor: listedeki bir sensör nesnesi.
// onDurumDegistir(id, yeniDurum) ve onSil(id) Dashboard'dan gelir.
function SensorCard({ sensor, onDurumDegistir, onSil }) {
  // ISO formatındaki tarihi "17.10.2026" gibi Türkçe biçime çevirir
  const tarih = new Date(sensor.eklenmeTarihi).toLocaleDateString('tr-TR')

  return (
    <div className="rounded-lg border border-slate-700 bg-slate-800 p-4 space-y-3">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold text-slate-100">{sensor.ad}</h3>
        <span
          className={`shrink-0 rounded-full border px-2 py-0.5 text-xs font-medium ${DURUM_RENKLERI[sensor.durum]}`}
        >
          {sensor.durum}
        </span>
      </div>

      <dl className="grid grid-cols-2 gap-y-1 text-sm">
        <dt className="text-slate-500">Tip</dt>
        <dd className="text-slate-300">{sensor.tip}</dd>
        <dt className="text-slate-500">Protokol</dt>
        <dd className="text-slate-300">{sensor.protokol}</dd>
        <dt className="text-slate-500">Lokasyon</dt>
        <dd className="text-slate-300">{sensor.lokasyon}</dd>
        <dt className="text-slate-500">Eklenme</dt>
        <dd className="text-slate-300">{tarih}</dd>
      </dl>

      <div className="flex items-center gap-2 pt-2 border-t border-slate-700">
        <select
          value={sensor.durum}
          onChange={(e) => onDurumDegistir(sensor.id, e.target.value)}
          aria-label="Durumu değiştir"
          className="flex-1 rounded-md bg-slate-900 border border-slate-600 px-2 py-1 text-sm text-slate-100 focus:outline-none focus:border-cyan-400"
        >
          {DURUMLAR.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
        <button
          onClick={() => onSil(sensor.id)}
          className="rounded-md border border-red-500/40 px-3 py-1 text-sm text-red-400 hover:bg-red-500/15"
        >
          Sil
        </button>
      </div>
    </div>
  )
}

export default SensorCard
