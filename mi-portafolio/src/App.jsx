import './App.css'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import Habilidades from './components/Habilidades'
import Hero from './components/Hero'
import Proyectos from './components/Proyectos'
import Trayectoria from './components/Trayectoria'
import { portafolioData } from './data/portafolioData'

function App() {
  const { perfil, habilidades, trayectoria, proyectos, contacto } = portafolioData

  return (
    <div className="app-shell">
      <main id="contenido" className="app-main">
        <Hero perfil={perfil} />
        <Habilidades habilidades={habilidades} />
        <Trayectoria trayectoria={trayectoria} />
        <Proyectos proyectos={proyectos} />
        <Contacto contacto={contacto} />
      </main>
      <Footer perfil={perfil} />
    </div>
  )
}

export default App
