let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.mySlides');
    
    // Esconde todos os slides
    slides.forEach(slide => (slide.style.display = 'none'));

    // Incrementa o índice
    slideIndex++;

    // Reinicia o índice se atingir o final
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Mostra o slide atual
    slides[slideIndex - 1].style.display = 'block';

    // Alterna o slide a cada 3 segundos
    setTimeout(showSlides, 3000);
}

// Inicia o slideshow ao carregar a página
document.addEventListener('DOMContentLoaded', showSlides);