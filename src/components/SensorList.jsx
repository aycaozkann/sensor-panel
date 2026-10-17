import SensorCard from './SensorCard'

// Sensör dizisini alır, her biri için bir kart çizer.
function SensorList({ sensorler }) {
  // Hiç kayıt yoksa kullanıcıya ne yapacağını söyleyen bir mesaj göster
  if (sensorler.length === 0) {
    return (
      <p className="rounded-lg border border-dashed border-slate-700 p-8 text-center text-sm text-slate-500">
        Henüz kayıtlı sensör yok. Yukarıdaki formdan ilk sensörünüzü ekleyin.
      </p>
    )
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {sensorler.map((sensor) => (
        <SensorCard key={sensor.id} sensor={sensor} />
      ))}
    </div>
  )
}

export default SensorList
