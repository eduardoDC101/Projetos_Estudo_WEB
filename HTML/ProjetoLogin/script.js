/* Mostrando Senha */
const inputSenha = document.getElementById('password');
const iconeSenha = document.getElementById('seePassword');

iconeSenha.addEventListener('click', () => {
    let verificarTipo = inputSenha.type === "password";

    inputSenha.type = verificarTipo ? "text" : 'password';

    iconeSenha.innerHTML = verificarTipo 
    ? "<i class='fa-solid fa-eye-slash'></i>"
    : "<i class='fa-solid fa-eye'></i>";
});
/* Mostrando Senha */


/* Tema Dark */
const botaoTema = document.getElementById('tema-dark');

botaoTema.addEventListener('click' , () =>{
    let tagHtml = document.documentElement;

    let atributoHtml = tagHtml.getAttribute('data-theme');

    tagHtml.setAttribute('data-theme', atributoHtml === "light" ? "dark" : "light");

    botaoTema.innerHTML = atributoHtml === "light"
    ? "<i class='fa-solid fa-sun'></i>"
    : "<i class='fa-solid fa-moon'>";

});

/* Tema Dark */