export const portafolioData = {
  perfil: {
    nombre: 'Vanessa Pérez',
    titulo: 'Ingeniera Civil | Estudiante de Ingeniería en Computación',
    descripcion:
      'Ingeniera Civil en transición hacia el desarrollo de software. Combino mi base analítica y resolución de problemas estructurales con el desarrollo web moderno en React y Angular.',
    ubicacion: 'Maracaibo, Zulia, Venezuela',
    imagen: '/foto-vanessa.png',
    altImagen: 'Foto de perfil de Vanessa Pérez',
  },
  habilidades: [
    {
      area: 'Frontend',
      items: ['React', 'Angular', 'JavaScript (ES6+)', 'HTML5', 'CSS3'],
    },
    {
      area: 'Backend y datos',
      items: ['C++', 'Estructuras de Datos', 'Algoritmos'],
    },
    {
      area: 'Herramientas',
      items: ['Git', 'GitHub', 'VS Code', 'Vite', 'npm'],
    },
  ],
  trayectoria: [
    {
      id: 'ing-computacion',
      periodo: 'Sep 2025 - Presente',
      titulo: 'Ingeniería en Computación',
      institucion: 'Universidad Rafael Urdaneta',
      descripcion:
        'Formación en programación estructurada y orientada a objetos, estructuras de datos, lógica computacional y desarrollo de aplicaciones web.',
    },
    {
      id: 'ing-civil',
      periodo: '2014 - 2018',
      titulo: 'Ingeniería Civil',
      institucion: 'Universidad Rafael Urdaneta',
      descripcion:
        'Desarrollo de pensamiento analítico, cálculo, gestión de proyectos y resolución de problemas complejos aplicados a la ingeniería.',
    },
  ],
  proyectos: [
    {
      id: 'click-and-store',
      titulo: 'Click&Store',
      descripcionCorta:
        'Tienda en línea con catálogo, búsqueda, filtros y carrito persistente.',
      descripcionAmpliada:
        'Aplicación web frontend de comercio electrónico que permite explorar un catálogo de productos con scroll infinito y carga progresiva de imágenes, buscar por nombre o descripción, filtrar por categoría y visualizar el detalle de cada producto. Cuenta con registro e inicio de sesión de usuarios, así como un carrito de compras independiente por cuenta, persistido en localStorage, con cálculo automático de subtotal, envío y total. Consume los endpoints de la API pública de DummyJSON e incluye datos locales de respaldo para mantener la tienda funcional sin conexión.',
      tecnologias: [
        'Angular 22',
        'TypeScript',
        'RxJS',
        'Tabler Icons',
        'Vitest + jsdom',
        'Prettier',
        'HTML',
        'CSS',
      ],
      imagenes: [
        {
          src: '/img/ecommerce1.png',
          alt: 'Página de inicio de Click&Store con buscador, navegación y catálogo destacado.',
        },
        {
          src: '/img/ecommerce2.png',
          alt: 'Catálogo de productos de belleza, fragancias y muebles con filtros por categoría.',
        },
        {
          src: '/img/ecommerce3.png',
          alt: 'Carrito de compras con cuatro productos, cantidades y resumen del pedido.',
        },
      ],
      linkCodigo: 'https://github.com/Vaneppv/ecommerce',
    },
    {
      id: 'panaleague',
      titulo: 'PanaLeague',
      descripcionCorta:
        'Gestor de ligas amateur con fixture automático y estadísticas.',
      descripcionAmpliada:
        'Aplicación web de una sola página (SPA) construida con JavaScript vanilla, HTML y CSS que permite administrar ligas deportivas amateur de forma local en el navegador mediante IndexedDB y LocalStorage. Soporta múltiples deportes (fútbol, básquet y tenis) con terminología e identidad visual adaptada, además de dos modalidades de torneo: liga (todos contra todos a una vuelta o ida y vuelta con generación automática de fixture) y eliminación directa (bracket para 4, 8 o 16 equipos con avance automático de ganadores). Incluye nueve vistas (dashboard, ligas, equipos, jugadores, partidos, estadísticas y sus vistas de detalle), gráficos con Chart.js y ligas plantilla de ejemplo al iniciar.',
      tecnologias: [
        'JavaScript',
        'Web Components',
        'Custom Elements',
        'IndexedDB',
        'LocalStorage',
        'Hash Router',
        'HTML5',
        'CSS3',
        'Chart.js',
      ],
      imagenes: [
        {
          src: '/img/panaleague1.png',
          alt: 'Panel de PanaLeague con el próximo partido y la tabla de posiciones de la liga LifiSenior Grupo B.',
        },
        {
          src: '/img/panaleague2.png',
          alt: 'Pantalla de inicio de PanaLeague con ligas de ejemplo y accesos a crear liga, equipos y jugadores.',
        },
        {
          src: '/img/panaleague3.png',
          alt: 'Dashboard de la liga LifiSenior Grupo A con próximo partido y tabla de posiciones.',
        },
      ],
      linkDemo: 'https://vaneppv.github.io/PanaLeague/',
      linkCodigo: 'https://github.com/Vaneppv/PanaLeague',
    },
    {
      id: 'methub',
      titulo: 'MetHub',
      descripcionCorta:
        'Explorador de la colección del MET con búsqueda, filtros y comparación de obras.',
      descripcionAmpliada:
        'Aplicación web de página única (SPA) desarrollada como cliente interactivo para la API pública del Metropolitan Museum of Art. Permite explorar una colección de aproximadamente 470.000 obras de arte a través de seis vistas dinámicas (inicio, departamentos, comparación, detalles de obra, búsqueda/exploración y estados de error/carga), ofreciendo herramientas avanzadas de filtrado, búsqueda y comparación. Incluye caché en memoria (Map) para optimizar las consultas de miniaturas por departamento y uso de AbortController para cancelar peticiones pendientes al navegar entre vistas.',
      tecnologias: [
        'JavaScript (ES Modules)',
        'Web Components',
        'Fetch API',
        'AbortController',
        'Map',
        'HTML5',
        'CSS3',
      ],
      imagenes: [
        {
          src: '/img/MetHub1.png',
          alt: 'Página de inicio de MetHub con obras destacadas y estadísticas de la colección del MET.',
        },
        {
          src: '/img/MetHub2.png',
          alt: 'Vista de departamentos del Metropolitan Museum of Art con accesos por área.',
        },
        {
          src: '/img/MetHub3.png',
          alt: 'Explorador de obras con filtros por búsqueda, departamento, rango de años y resultados.',
        },
        {
          src: '/img/MetHub4.png',
          alt: 'Detalle de la obra Martyrdom of Saint Lawrence con ficha técnica y opción de comparar.',
        },
      ],
      linkCodigo:
        'https://github.com/JonnerPaz/cliweb/tree/main/proyectos/MetHub',
    },
  ],
  contacto: {
    email: 'vaneppv@gmail.com',
    github: 'https://github.com/Vaneppv',
    linkedin:
      'https://www.linkedin.com/in/vanessa-p%C3%A9rez-812361193/',
  },
}
