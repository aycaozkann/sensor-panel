import useLocalStorage from '../hooks/useLocalStorage'
import { sensorOlustur } from '../interfaces/sensor'
import SensorForm from '../components/SensorForm'
import SensorList from '../components/SensorList'

function Dashboard() {
  // Tüm sensörler burada tutulur ve LocalStorage'a otomatik kaydedilir
  const [sensorler, setSensorler] = useLocalStorage('sensorler', [])

  // Formdan gelen veriyle yeni sensör üretip listenin sonuna ekler
  function sensorEkle(formVerisi) {
    setSensorler([...sensorler, sensorOlustur(formVerisi)])
  }

  return (
    <div className="mx-auto max-w-5xl p-6 space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-cyan-400">
          Akıllı Sensör ve Cihaz Yönetim Arayüzü
        </h1>
        <p className="text-sm text-slate-400">
          Endüstriyel sensör ve cihaz envanter paneli
        </p>
      </header>

      <SensorForm onEkle={sensorEkle} />

      <SensorList sensorler={sensorler} />
    </div>
  )
}

export default Dashboard
