function entrar() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    if (email === "" || senha === "") {
        alert("Preencha seu e-mail e senha.");
    } else {
        alert("Login realizado com sucesso!");
        window.location.href = "face.html";
    }
}

function entrarSemCadastro() {
    alert("Entrando como visitante...");
    window.location.href = "face.html";
}

function criarConta() {
    alert("Abrindo página de cadastro...");
    Window.location.href = "face.html";
}