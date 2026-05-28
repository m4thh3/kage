// Ativacao futura para funcionalidades do carrinho, busca e usuario
// Configuração do Observador de Scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-element');
        } else {
            entry.target.classList.remove('show-element');
        }
    });
}, {
    threshold: 0.1 
});

// Executa assim que a página carregar
document.addEventListener("DOMContentLoaded", () => {
    const elementsToAnimate = document.querySelectorAll('.hidden-element');
    elementsToAnimate.forEach((element) => observer.observe(element));
});
document.addEventListener('DOMContentLoaded', () => {
    console.log('KAGE Store - Script carregado com sucesso.');

    const searchIcon = document.querySelector('.fa-search');
    const cartIcons = document.querySelectorAll('.fa-shopping-cart');
    const userIcon = document.querySelector('.fa-user');

    searchIcon.addEventListener('click', () => {
        alert('Sistema de busca em desenvolvimento!');
    });

    cartIcons.forEach((cartIcon) => {
        cartIcon.addEventListener('click', (event) => {
            event.preventDefault();
            window.location.href = 'pagamento.html';
        });
    });

    userIcon.addEventListener('click', () => {
        window.location.href = 'cadastro.html';
    });
  
});
