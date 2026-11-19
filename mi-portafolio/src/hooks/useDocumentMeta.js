import { useEffect } from 'react'
import { resolverRutaPublica } from '../utils/assets'

function actualizarMeta(atributo, valorAtributo, contenido) {
  if (!contenido) {
    return
  }

  let etiqueta = document.head.querySelector(
    `meta[${atributo}="${valorAtributo}"]`,
  )

  if (!etiqueta) {
    etiqueta = document.createElement('meta')
    etiqueta.setAttribute(atributo, valorAtributo)
    document.head.appendChild(etiqueta)
  }

  etiqueta.setAttribute('content', contenido)
}

export function useDocumentMeta(perfil) {
  useEffect(() => {
    if (!perfil) {
      return
    }

    const titulo = `${perfil.nombre} | ${perfil.titulo}`
    const descripcion = perfil.descripcion
    const altImagen =
      perfil.altImagen || `Foto de perfil de ${perfil.nombre}`
    const imagen = perfil.imagen
      ? new URL(resolverRutaPublica(perfil.imagen), window.location.origin).href
      : ''

    document.title = titulo

    actualizarMeta('name', 'description', descripcion)
    actualizarMeta('name', 'author', perfil.nombre)
    actualizarMeta('property', 'og:title', titulo)
    actualizarMeta('property', 'og:description', descripcion)
    actualizarMeta(
      'property',
      'og:site_name',
      `Portafolio de ${perfil.nombre}`,
    )
    actualizarMeta('property', 'og:image', imagen)
    actualizarMeta('property', 'og:image:alt', altImagen)
    actualizarMeta('name', 'twitter:title', titulo)
    actualizarMeta('name', 'twitter:description', descripcion)
    actualizarMeta('name', 'twitter:image', imagen)
    actualizarMeta('name', 'twitter:image:alt', altImagen)
  }, [perfil])
}
