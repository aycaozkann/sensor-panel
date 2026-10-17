// Üstteki özet sayaçlar: Toplam / Aktif / Bakımda / Arızalı
function SummaryCards({ sensorler }) {
  // Her durumdaki sensör sayısını filter ile buluyoruz
  const sayac = (durum) => sensorler.filter((s) => s.durum === durum).length

  const kutular = [
    { baslik: 'Toplam', sayi: sensorler.length, renk: 'text-cyan-400 border-cyan-500/40' },
    { baslik: 'Aktif', sayi: sayac('Aktif'), renk: 'text-emerald-400 border-emerald-500/40' },
    { baslik: 'Bakımda', sayi: sayac('Bakımda'), renk: 'text-yellow-400 border-yellow-500/40' },
    { baslik: 'Arızalı', sayi: sayac('Arızalı'), renk: 'text-red-400 border-red-500/40' },
  ]

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {kutular.map((k) => (
        <div
          key={k.baslik}
          className={`rounded-lg border bg-slate-800 p-4 border-l-4 ${k.renk}`}
        >
          <p className="text-xs uppercase tracking-wider text-slate-400">{k.baslik}</p>
          <p className="text-3xl font-bold">{k.sayi}</p>
        </div>
      ))}
    </div>
  )
}

export default SummaryCards
