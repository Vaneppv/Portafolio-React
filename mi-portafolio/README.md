# Portafolio de Vanessa Pérez

Portafolio personal construido con React y Vite. Todo el contenido editable vive en un único archivo de datos y la interfaz se compone con secciones reutilizables.

## Stack

- React 19
- Vite 8
- JavaScript y JSX
- CSS con variables y tema claro/oscuro según `prefers-color-scheme`
- ESLint

## Características

- Perfil principal con foto, descripción, ubicación y llamadas a la acción.
- Habilidades agrupadas por área.
- Trayectoria académica y profesional en formato de línea de tiempo.
- Proyectos generados desde datos, con galería y modal de detalle accesible.
- Enlaces de demo y código renderizados solo cuando existen.
- Sección de contacto y footer generados desde el contenido del portafolio.
- Navegación responsive con menú móvil, cierre con Escape y skip link.
- Metadatos SEO sincronizados con el perfil desde JavaScript.
- Estilos adaptados a móvil, foco visible y soporte para movimiento reducido.

## Requisitos

- Node.js y npm instalados.

## Puesta en marcha

```bash
cd mi-portafolio
npm install
npm run dev
```

Vite mostrará la URL local para abrir el portafolio.

## Scripts

| Comando           | Descripción                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Inicia el servidor de desarrollo.        |
| `npm run build`   | Genera la versión de producción en `dist/`. |
| `npm run preview` | Sirve localmente la build de producción. |
| `npm run lint`    | Ejecuta ESLint sobre el proyecto.        |

## Editar el contenido

El archivo `src/data/portafolioData.js` es la única fuente de verdad del contenido. No es necesario tocar los componentes para actualizar textos, proyectos o enlaces.

### Perfil

```js
perfil: {
  nombre: 'Vanessa Pérez',
  titulo: 'Ingeniera Civil | Estudiante de Ingeniería en Computación',
  descripcion: '...',
  ubicacion: 'Maracaibo, Zulia, Venezuela',
  imagen: '/foto-vanessa.png',
  altImagen: 'Foto de perfil de Vanessa Pérez',
}
```

La imagen debe colocarse en `public/` y referenciarse con una ruta que empiece por `/`.

### Habilidades

Cada grupo tiene un `area` y una lista de `items`:

```js
{
  area: 'Frontend',
  items: ['React', 'Angular', 'JavaScript (ES6+)'],
}
```

### Trayectoria

Cada entrada usa `id`, `periodo`, `titulo`, `institucion` y `descripcion`.

### Proyectos

Cada proyecto usa `id`, `titulo`, `descripcionCorta`, `descripcionAmpliada`, `tecnologias` e `imagenes`. Cada imagen se define como `{ src, alt }`.

Los campos `linkDemo` y `linkCodigo` son opcionales. Si no existen, el enlace correspondiente no se muestra. No uses URLs de ejemplo o placeholders.

### Contacto

`contacto` admite `email`, `github` y `linkedin`. Los enlaces se renderizan solo si el campo tiene contenido.

## SEO

`src/hooks/useDocumentMeta.js` actualiza el título, la descripción, el autor y las etiquetas Open Graph/Twitter a partir de `perfil`. `index.html` mantiene una versión estática de respaldo para la carga inicial y los rastreadores que no ejecutan JavaScript.

## Estructura

```text
mi-portafolio/
├── public/
│   ├── favicon.svg
│   ├── foto-vanessa.png
│   └── img/                    # Imágenes de los proyectos
├── src/
│   ├── components/             # Hero, secciones, modal, navbar y footer
│   ├── data/
│   │   └── portafolioData.js   # Contenido editable
│   ├── hooks/
│   │   └── useDocumentMeta.js  # SEO dinámico
│   ├── utils/
│   │   └── proyecto.js         # Utilidades de proyectos
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Despliegue

Ejecuta `npm run build` y publica el contenido de `dist/` en el servicio de hosting estático que prefieras. El proyecto no usa rutas del lado del servidor, por lo que no requiere configuración especial de rewrites.
