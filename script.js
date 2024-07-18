// script.js

// Função de rolagem suave ao clicar em âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        window.scroll({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});


