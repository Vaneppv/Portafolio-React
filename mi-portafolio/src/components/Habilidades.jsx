function Habilidades({ habilidades }) {
  return (
    <section
      id="habilidades"
      className="section skills"
      aria-labelledby="skills-title"
      tabIndex={-1}
    >
      <div className="container">
        <header className="skills__header">
          <p className="section__eyebrow">Conocimientos</p>
          <h2 id="skills-title" className="section__title">
            Habilidades
          </h2>
          <p className="section__intro">
            Herramientas y tecnologías que aplico en el desarrollo de interfaces,
            aplicaciones web y resolución de problemas.
          </p>
        </header>

        <div className="skills__grid">
          {habilidades.map((grupo) => (
            <article key={grupo.area} className="skills__group">
              <h3 className="skills__group-title">{grupo.area}</h3>
              <ul className="skills__list" role="list">
                {grupo.items.map((item) => (
                  <li key={item}>
                    <span className="chip">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Habilidades
