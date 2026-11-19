import { useEffect, useRef, useState } from 'react'
import { obtenerIniciales } from '../utils/proyecto'

const enlaces = [
  { href: '#perfil', etiqueta: 'Perfil' },
  { href: '#habilidades', etiqueta: 'Habilidades' },
  { href: '#trayectoria', etiqueta: 'Trayectoria' },
  { href: '#proyectos', etiqueta: 'Proyectos' },
  { href: '#contacto', etiqueta: 'Contacto' },
]

function Navbar({ perfil }) {
  const [menuAbierto, setMenuAbierto] = useState(false)
  const toggleRef = useRef(null)

  useEffect(() => {
    function manejarTeclado(event) {
      if (event.key === 'Escape' && menuAbierto) {
        event.preventDefault()
        setMenuAbierto(false)
        toggleRef.current?.focus()
      }
    }

    document.addEventListener('keydown', manejarTeclado)
    return () => document.removeEventListener('keydown', manejarTeclado)
  }, [menuAbierto])

  useEffect(() => {
    const media = window.matchMedia('(min-width: 901px)')

    function manejarCambio(event) {
      if (event.matches) {
        setMenuAbierto(false)
      }
    }

    media.addEventListener('change', manejarCambio)
    return () => media.removeEventListener('change', manejarCambio)
  }, [])

  function cerrarMenu() {
    setMenuAbierto(false)
  }

  return (
    <nav className="navbar" aria-label="Navegación principal">
      <div className="container navbar__inner">
        <a
          className="navbar__brand"
          href="#perfil"
          aria-label={`Ir al inicio del portafolio de ${perfil.nombre}`}
          onClick={cerrarMenu}
        >
          <span className="navbar__mark" aria-hidden="true">
            {obtenerIniciales(perfil.nombre)}
          </span>
          <span className="navbar__name">{perfil.nombre}</span>
        </a>

        <button
          ref={toggleRef}
          type="button"
          className="navbar__toggle"
          aria-expanded={menuAbierto}
          aria-controls="navbar-menu"
          aria-label={
            menuAbierto
              ? 'Cerrar menú de navegación'
              : 'Abrir menú de navegación'
          }
          onClick={() => setMenuAbierto((abierto) => !abierto)}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            focusable="false"
          >
            {menuAbierto ? (
              <path d="m6 6 12 12M18 6 6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>

        <ul
          id="navbar-menu"
          className={`navbar__menu${menuAbierto ? ' is-open' : ''}`}
          role="list"
        >
          {enlaces.map((enlace) => (
            <li key={enlace.href}>
              <a
                className="navbar__link"
                href={enlace.href}
                onClick={cerrarMenu}
              >
                {enlace.etiqueta}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
