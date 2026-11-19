export function obtenerImagenes(proyecto) {
  let imagenes = []

  if (Array.isArray(proyecto.imagenes)) {
    imagenes = proyecto.imagenes
  } else if (proyecto.imagen) {
    imagenes = [{ src: proyecto.imagen, alt: proyecto.altImagen }]
  }

  return imagenes
    .filter((imagen) => Boolean(imagen?.src))
    .map((imagen) => ({
      src: imagen.src,
      alt: imagen.alt || `Captura del proyecto ${proyecto.titulo}`,
    }))
}

export function obtenerIniciales(titulo) {
  return titulo
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((parte) => parte[0])
    .join('')
    .toUpperCase()
}
