// Efecto dinámico en el header al hacer scroll (Manipulación del DOM)
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(18, 18, 18, 0.98)';
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
    } else {
        header.style.background = 'rgba(18, 18, 18, 0.95)';
        header.style.boxShadow = 'none';
    }
});