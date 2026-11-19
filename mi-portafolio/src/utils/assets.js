const BASE_URL = import.meta.env.BASE_URL

export function resolverRutaPublica(ruta) {
  if (!ruta) {
    return ruta
  }

  if (/^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(ruta)) {
    return ruta
  }

  return `${BASE_URL}${ruta.replace(/^\//, '')}`
}
