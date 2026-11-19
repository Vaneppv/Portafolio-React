import './App.css'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import Habilidades from './components/Habilidades'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Proyectos from './components/Proyectos'
import Trayectoria from './components/Trayectoria'
import { portafolioData } from './data/portafolioData'

function App() {
  const { perfil, habilidades, trayectoria, proyectos, contacto } = portafolioData

  return (
    <div className="app-shell">
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>

      <header className="site-header">
        <Navbar perfil={perfil} />
      </header>

      <main id="contenido" className="app-main" tabIndex={-1}>
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
