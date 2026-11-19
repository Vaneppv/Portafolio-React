import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { obtenerImagenes, obtenerIniciales } from '../utils/proyecto'

function ProyectoModal({ proyecto, onClose }) {
  const [imagenActiva, setImagenActiva] = useState(0)
  const imagenes = obtenerImagenes(proyecto)
  const modalRef = useRef(null)
  const closeButtonRef = useRef(null)

  useEffect(() => {
    const elementoAnterior = document.activeElement
    const overflowOriginal = document.body.style.overflow
    const overflowHtmlOriginal = document.documentElement.style.overflow

    closeButtonRef.current?.focus()
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = overflowOriginal
      document.documentElement.style.overflow = overflowHtmlOriginal
      elementoAnterior?.focus?.()
    }
  }, [])

  useEffect(() => {
    function manejarTeclado(event) {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }

      if (event.key !== 'Tab') {
        return
      }

      const enfocables = modalRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])',
      )

      if (!enfocables || enfocables.length === 0) {
        event.preventDefault()
        return
      }

      if (!modalRef.current?.contains(document.activeElement)) {
        event.preventDefault()
        enfocables[0].focus()
        return
      }

      const primero = enfocables[0]
      const ultimo = enfocables[enfocables.length - 1]

      if (event.shiftKey && document.activeElement === primero) {
        event.preventDefault()
        ultimo.focus()
      } else if (!event.shiftKey && document.activeElement === ultimo) {
        event.preventDefault()
        primero.focus()
      }
    }

    document.addEventListener('keydown', manejarTeclado)
    return () => document.removeEventListener('keydown', manejarTeclado)
  }, [onClose])

  const imagenActual = imagenes[imagenActiva]

  function manejarFondo(event) {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }

  return createPortal(
    <div className="project-modal" onClick={manejarFondo}>
      <div
        className="project-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        aria-describedby="project-modal-description"
        ref={modalRef}
      >
        <button
          ref={closeButtonRef}
          type="button"
          className="project-modal__close"
          onClick={onClose}
          aria-label="Cerrar detalles del proyecto"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            aria-hidden="true"
            focusable="false"
          >
            <path d="m6 6 12 12M18 6 6 18" />
          </svg>
        </button>

        <div className="project-modal__gallery">
          {imagenActual ? (
            <img
              className="project-modal__image"
              src={imagenActual.src}
              alt={imagenActual.alt}
              decoding="async"
            />
          ) : (
            <div className="project-modal__gallery-fallback" aria-hidden="true">
              {obtenerIniciales(proyecto.titulo)}
            </div>
          )}

          {imagenes.length > 1 && (
            <>
              <p className="project-modal__counter" aria-live="polite">
                Imagen {imagenActiva + 1} de {imagenes.length}
              </p>
              <div
                className="project-modal__thumbs"
                role="group"
                aria-label="Miniaturas del proyecto"
              >
                {imagenes.map((imagen, indice) => (
                  <button
                    key={imagen.src}
                    type="button"
                    className="project-modal__thumb"
                    onClick={() => setImagenActiva(indice)}
                    aria-label={`Ver imagen ${indice + 1} de ${imagenes.length}: ${imagen.alt}`}
                    aria-pressed={indice === imagenActiva}
                  >
                    <img src={imagen.src} alt="" loading="lazy" />
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        <div className="project-modal__content">
          <p className="project-modal__eyebrow">Detalle del proyecto</p>
          <h2 id="project-modal-title" className="project-modal__title">
            {proyecto.titulo}
          </h2>
          <p
            id="project-modal-description"
            className="project-modal__description"
          >
            {proyecto.descripcionAmpliada || proyecto.descripcionCorta}
          </p>

          {(proyecto.tecnologias ?? []).length > 0 && (
            <>
              <h3 className="project-modal__subtitle">Tecnologías</h3>
              <ul
                className="project-modal__tech"
                aria-label={`Tecnologías de ${proyecto.titulo}`}
              >
                {proyecto.tecnologias.map((tecnologia) => (
                  <li key={tecnologia}>
                    <span className="chip">{tecnologia}</span>
                  </li>
                ))}
              </ul>
            </>
          )}

          {(proyecto.linkDemo || proyecto.linkCodigo) && (
            <div className="project-modal__actions">
              {proyecto.linkDemo && (
                <a
                  className="btn btn--primary"
                  href={proyecto.linkDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver demo
                  <span className="visually-hidden">
                    {' '}
                    (se abre en una nueva pestaña)
                  </span>
                </a>
              )}
              {proyecto.linkCodigo && (
                <a
                  className="btn btn--ghost"
                  href={proyecto.linkCodigo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver código
                  <span className="visually-hidden">
                    {' '}
                    (se abre en una nueva pestaña)
                  </span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body,
  )
}

export default ProyectoModal
