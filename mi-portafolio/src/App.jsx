import './App.css'
import Hero from './components/Hero'
import { portafolioData } from './data/portafolioData'

function App() {
  const { perfil } = portafolioData

  return (
    <div className="app-shell">
      <main id="contenido" className="app-main">
        <Hero perfil={perfil} />
      </main>
    </div>
  )
}

export default App
