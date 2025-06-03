// Script para rolagem suave para as seções
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Script para animação de seções ao rolar a página (Scroll Reveal)
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section:not(#hero)'); // Seleciona todas as seções, exceto a hero

    const revealSection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Para de observar depois de animar
            }
        });
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
        root: null, // Observa a viewport
        threshold: 0.15 // Inicia a animação quando 15% da seção está visível
    });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });
});

// Você pode adicionar um carrossel de imagens aqui para a galeria (mais avançado)
// Exemplo básico (requer mais CSS e HTML específicos para um carrossel real):
/*
let slideIndex = 0;
const slides = document.querySelectorAll('#galeria .gallery-grid img'); // Se a galeria virar carrossel

function showSlides() {
    slides.forEach(slide => slide.style.display = 'none');
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 3000); // Mudar imagem a cada 3 segundos
}

// Para iniciar o carrossel, chame showSlides() quando a página carregar
// Mas lembre-se, isso vai substituir a grade de imagens por um carrossel!
// showSlides();
*/