const form = document.getElementById("registerForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;
    const termos = document.getElementById("termos").checked;

    if (nome === "" || email === "" || telefone === "" || senha === "" || confirmarSenha === "") {
        alert("Preencha todos os campos para criar sua conta.");
        return;
    }

    if (!validarEmail(email)) {
        alert("Digite um e-mail válido.");
        return;
    }

    if (senha.length < 6) {
        alert("A senha precisa ter pelo menos 6 caracteres.");
        return;
    }

    if (senha !== confirmarSenha) {
        alert("As senhas não são iguais.");
        return;
    }

    if (!termos) {
        alert("Você precisa aceitar os termos para criar sua conta.");
        return;
    }

    alert("Conta KAGE criada com sucesso!");

    window.location.href = "login.html";
});

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function entrarSemCadastro() {
    alert("Entrando como visitante...");
    window.location.href = "face.html";
}