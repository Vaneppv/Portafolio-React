import './App.css'
import Habilidades from './components/Habilidades'
import Hero from './components/Hero'
import Trayectoria from './components/Trayectoria'
import { portafolioData } from './data/portafolioData'

function App() {
  const { perfil, habilidades, trayectoria } = portafolioData

  return (
    <div className="app-shell">
      <main id="contenido" className="app-main">
        <Hero perfil={perfil} />
        <Habilidades habilidades={habilidades} />
        <Trayectoria trayectoria={trayectoria} />
      </main>
    </div>
  )
}

export default App
