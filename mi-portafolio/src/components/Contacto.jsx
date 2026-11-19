function IconoCorreo() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}

function IconoGitHub() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.5 9.5 0 0 1 12 6.8c.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  )
}

function IconoLinkedIn() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
    </svg>
  )
}

function formatearEnlace(url) {
  try {
    const { hostname, pathname } = new URL(url)
    const host = hostname.replace(/^www\./, '')
    const ruta = decodeURIComponent(pathname).replace(/\/$/, '')
    return `${host}${ruta}`
  } catch {
    return url
  }
}

function Contacto({ contacto = {} }) {
  const medios = [
    contacto.email && {
      id: 'email',
      etiqueta: 'Correo',
      valor: contacto.email,
      href: `mailto:${contacto.email}`,
      externo: false,
      icono: <IconoCorreo />,
    },
    contacto.github && {
      id: 'github',
      etiqueta: 'GitHub',
      valor: formatearEnlace(contacto.github),
      href: contacto.github,
      externo: true,
      icono: <IconoGitHub />,
    },
    contacto.linkedin && {
      id: 'linkedin',
      etiqueta: 'LinkedIn',
      valor: formatearEnlace(contacto.linkedin),
      href: contacto.linkedin,
      externo: true,
      icono: <IconoLinkedIn />,
    },
  ].filter(Boolean)

  return (
    <section
      id="contacto"
      className="section contact"
      aria-labelledby="contact-title"
    >
      <div className="container">
        <div className="contact__panel">
          <header className="contact__header">
            <p className="section__eyebrow">Contacto</p>
            <h2 id="contact-title" className="section__title">
              Hablemos
            </h2>
            <p className="section__intro">
              ¿Tienes un proyecto en mente o una oportunidad para compartir?
              Escríbeme por cualquiera de estos medios.
            </p>
          </header>

          {medios.length > 0 ? (
            <ul className="contact__grid">
              {medios.map((medio) => (
                <li key={medio.id}>
                  <a
                    className="contact-card"
                    href={medio.href}
                    target={medio.externo ? '_blank' : undefined}
                    rel={medio.externo ? 'noopener noreferrer' : undefined}
                  >
                    <span className="contact-card__icon" aria-hidden="true">
                      {medio.icono}
                    </span>
                    <span className="contact-card__body">
                      <span className="contact-card__label">
                        {medio.etiqueta}
                      </span>
                      <span className="contact-card__value">
                        {medio.valor}
                      </span>
                    </span>
                    {medio.externo && (
                      <>
                        <svg
                          className="contact-card__arrow"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                          focusable="false"
                        >
                          <path d="M7 17 17 7M8 7h9v9" />
                        </svg>
                        <span className="visually-hidden">
                          {' '}
                          (se abre en una nueva pestaña)
                        </span>
                      </>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="contact__empty">
              No hay medios de contacto disponibles.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contacto
