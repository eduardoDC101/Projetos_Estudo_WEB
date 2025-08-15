/* Mostrando Senha */

let inputSenha = document.getElementById('password');
let iconeSenha = document.getElementById('seePassword');

iconeSenha.addEventListener('click', () => {
    let verificarTipo = inputSenha.type === "password";

    inputSenha.type = verificarTipo ? "text" : 'password';

    iconeSenha.innerHTML = verificarTipo 
    ? "<i class='fa-solid fa-eye-slash'></i>"
    : "<i class='fa-solid fa-eye'></i>";
})

/* Mostrando Senha */