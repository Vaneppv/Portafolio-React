function Trayectoria({ trayectoria }) {
  return (
    <section
      id="trayectoria"
      className="section timeline-section"
      aria-labelledby="timeline-title"
      tabIndex={-1}
    >
      <div className="container">
        <header className="timeline__header">
          <p className="section__eyebrow">Formación y experiencia</p>
          <h2 id="timeline-title" className="section__title">
            Trayectoria
          </h2>
          <p className="section__intro">
            Mi recorrido académico y profesional entre la ingeniería y el
            desarrollo de software.
          </p>
        </header>

        <ol className="timeline" role="list">
          {trayectoria.map((etapa) => (
            <li key={etapa.id} className="timeline__item">
              <article className="timeline__card">
                <span className="timeline__period">{etapa.periodo}</span>
                <h3 className="timeline__title">{etapa.titulo}</h3>
                <p className="timeline__institution">{etapa.institucion}</p>
                <p className="timeline__description">{etapa.descripcion}</p>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Trayectoria
