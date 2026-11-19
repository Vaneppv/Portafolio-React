import { obtenerImagenes } from '../utils/proyecto'

function obtenerIniciales(titulo) {
  return titulo
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((parte) => parte[0])
    .join('')
    .toUpperCase()
}

function Proyectos({ proyectos }) {
  return (
    <section
      id="proyectos"
      className="section projects"
      aria-labelledby="projects-title"
    >
      <div className="container">
        <header className="projects__header">
          <p className="section__eyebrow">Trabajo seleccionado</p>
          <h2 id="projects-title" className="section__title">
            Proyectos
          </h2>
          <p className="section__intro">
            Aplicaciones web creadas para resolver necesidades concretas, desde
            la interfaz hasta la lógica de datos.
          </p>
        </header>

        {proyectos.length === 0 ? (
          <p className="projects__empty">
            Todavía no hay proyectos publicados.
          </p>
        ) : (
          <ul className="projects__grid">
            {proyectos.map((proyecto) => {
              const [portada] = obtenerImagenes(proyecto)

              return (
                <li key={proyecto.id}>
                  <article className="project-card">
                    <div className="project-card__media">
                      {portada ? (
                        <img
                          className="project-card__image"
                          src={portada.src}
                          alt={portada.alt}
                          loading="lazy"
                          decoding="async"
                        />
                      ) : (
                        <div
                          className="project-card__fallback"
                          aria-hidden="true"
                        >
                          {obtenerIniciales(proyecto.titulo)}
                        </div>
                      )}
                    </div>

                    <div className="project-card__body">
                      <h3 className="project-card__title">{proyecto.titulo}</h3>
                      <p className="project-card__description">
                        {proyecto.descripcionCorta}
                      </p>
                      <ul
                        className="project-card__tech"
                        aria-label={`Tecnologías de ${proyecto.titulo}`}
                      >
                        {(proyecto.tecnologias ?? []).map((tecnologia) => (
                          <li key={tecnologia}>
                            <span className="chip">{tecnologia}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </section>
  )
}

export default Proyectos
