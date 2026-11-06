5. Resumen y Documentación Técnica
Semántica HTML5: Se emplearon elementos estructurales nativos (<header>, <nav>, <main>, <section>, <article>, <footer>) para optimizar el SEO técnico y la accesibilidad (lectores de pantalla).

Distribución de Layout (CSS):

Flexbox: Implementado en el menú de navegación (.header), las tarjetas de servicio (.services-container) y el alineamiento del formulario para un flujo unidimensional adaptable.

CSS Grid: Utilizado en la galería (.gallery-grid) con repeat(auto-fill, minmax(280px, 1fr)) para asegurar un diseño responsivo automático sin necesidad de complejas Media Queries para cada dispositivo.

Consumo de APIs y Manipulación del DOM:

Inyección dinámica de elementos <img> dentro del contenedor del DOM.

Captura de eventos del usuario para la apertura/cierre de la ventana modal amplia.

Manejo asíncrono con async/await y la API fetch para procesar el envío del formulario mediante Formspree sin recargar la página.

Buenas Prácticas Aplicadas:

Implementación de Lazy Loading (loading="lazy") en imágenes para mejorar el tiempo de carga (Core Web Vitals).

Uso de variables CSS (:root) para mantener consistencia visual y facilitar modificaciones futuras de diseño.