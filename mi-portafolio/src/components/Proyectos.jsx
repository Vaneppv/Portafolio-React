import { useState } from 'react'
import ProyectoModal from './ProyectoModal'
import { obtenerImagenes, obtenerIniciales } from '../utils/proyecto'

function Proyectos({ proyectos }) {
  const [proyectoActivo, setProyectoActivo] = useState(null)

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
                      <div className="project-card__actions">
                        <button
                          type="button"
                          className="btn btn--ghost"
                          onClick={() => setProyectoActivo(proyecto)}
                          aria-haspopup="dialog"
                          aria-label={`Ver detalles de ${proyecto.titulo}`}
                        >
                          Ver detalles
                        </button>
                      </div>
                    </div>
                  </article>
                </li>
              )
            })}
          </ul>
        )}
      </div>

      {proyectoActivo && (
        <ProyectoModal
          proyecto={proyectoActivo}
          onClose={() => setProyectoActivo(null)}
        />
      )}
    </section>
  )
}

export default Proyectos
