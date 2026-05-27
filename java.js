// Ativacao futura para funcionalidades do carrinho, busca e usuario
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
