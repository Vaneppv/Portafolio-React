import { obtenerIniciales } from '../utils/proyecto'

function Footer({ perfil }) {
  const anio = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__identity">
          <span className="site-footer__brand" aria-hidden="true">
            {obtenerIniciales(perfil.nombre)}
          </span>
          <p className="site-footer__credit">
            {anio} {perfil.nombre}.
          </p>
        </div>

        <a className="site-footer__top" href="#perfil">
          Volver arriba
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
            <path d="M12 19V5M6 11l6-6 6 6" />
          </svg>
        </a>
      </div>
    </footer>
  )
}

export default Footer
