import { resolverRutaPublica } from '../utils/assets'

function Hero({ perfil }) {
  const iniciales = perfil.nombre
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((parte) => parte[0])
    .join('')
    .toUpperCase()

  return (
    <section
      id="perfil"
      className="hero section"
      aria-labelledby="hero-title"
      tabIndex={-1}
    >
      <div className="container hero__layout">
        <div className="hero__content">
          <p className="section__eyebrow">Portafolio profesional</p>
          <h1 id="hero-title" className="hero__title">
            {perfil.nombre}
          </h1>
          <p className="hero__role">{perfil.titulo}</p>
          <p className="hero__description">{perfil.descripcion}</p>

          {perfil.ubicacion && (
            <div className="hero__meta">
              <span className="hero__location">
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
                  <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                {perfil.ubicacion}
              </span>
            </div>
          )}

          <div className="hero__actions">
            <a className="btn btn--primary" href="#proyectos">
              Ver proyectos
            </a>
            <a className="btn btn--ghost" href="#contacto">
              Contactarme
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__portrait">
            {perfil.imagen ? (
              <img
                className="hero__image"
                src={resolverRutaPublica(perfil.imagen)}
                alt={
                  perfil.altImagen || `Foto de perfil de ${perfil.nombre}`
                }
                width="200"
                height="200"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            ) : (
              <div className="hero__portrait-fallback" aria-hidden="true">
                {iniciales}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
