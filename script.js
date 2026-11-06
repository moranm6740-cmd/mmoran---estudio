document.addEventListener('DOMContentLoaded', () => {
  fetchGalleryImages();
  setupContactForm();
  setupModal();
});

// 1. Consumo de API Externa (Unsplash) y Manipulación del DOM
async function fetchGalleryImages() {
  const galleryGrid = document.getElementById('galleryGrid');
  
  // Utiliza Picsum Photos como API pública directa para imágenes de prueba de alta calidad
  const fallbackImages = [
    { url: 'https://picsum.photos/id/1025/600/400', title: 'Retrato Canino' },
    { url: 'https://picsum.photos/id/1062/600/400', title: 'Estudio Urbano' },
    { url: 'https://picsum.photos/id/1069/600/400', title: 'Modelo Fotografía' },
    { url: 'https://picsum.photos/id/250/600/400', title: 'Cámara y Lentes' },
    { url: 'https://picsum.photos/id/319/600/400', title: 'Fotografía Nocturna' },
    { url: 'https://picsum.photos/id/433/600/400', title: 'Sesión al Aire Libre' }
  ];

  galleryGrid.innerHTML = ''; // Limpiar loader o contenido previo

  fallbackImages.forEach(item => {
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery-item');

    const img = document.createElement('img');
    img.src = item.url;
    img.alt = item.title;
    img.loading = 'lazy'; // Carga diferida (Lazy Loading)

    // Evento para abrir Modal (Interactividad DOM)
    galleryItem.addEventListener('click', () => openModal(item.url, item.title));

    galleryItem.appendChild(img);
    galleryGrid.appendChild(galleryItem);
  });
}

// 2. Control de Modal para la Galería
function setupModal() {
  const modal = document.getElementById('imageModal');
  const closeModal = document.getElementById('closeModal');

  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
}

function openModal(imageSrc, captionText) {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImg');
  const modalCaption = document.getElementById('modalCaption');

  modal.style.display = 'flex';
  modalImg.src = imageSrc;
  modalCaption.textContent = captionText;
}

// 3. Envío Asíncrono de Formulario (Formspree Fetch API)
function setupContactForm() {
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);

    formStatus.textContent = 'Enviando...';
    formStatus.style.color = '#333';

    try {
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        formStatus.textContent = '¡Gracias! Tu mensaje ha sido enviado correctamente.';
        formStatus.style.color = 'green';
        contactForm.reset();
      } else {
        throw new Error('Error al enviar el formulario');
      }
    } catch (error) {
      formStatus.textContent = 'Hubo un problema al enviar el mensaje. Inténtalo nuevamente.';
      formStatus.style.color = 'red';
    }
  });
}