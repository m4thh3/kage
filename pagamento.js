
function finalizarCompra() {
    // Busca o elemento do modal no HTML
    const modal = document.getElementById('successModal');
    
    // Ativa a classe que faz o modal aparecer suavemente e iniciar a animação
    modal.classList.add('active');
    
    // Aguarda 3 segundos (tempo para o usuário ver a animação) e redireciona
    setTimeout(() => {
        window.location.href = "face.html"; 
    }, 1500); 
}