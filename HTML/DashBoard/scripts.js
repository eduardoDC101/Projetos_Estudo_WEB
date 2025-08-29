// Tema Escuro
const darkModeBtn = document.getElementById('darkModeBtn');

darkModeBtn.addEventListener('click', () => {
    const html = document.documentElement;

    const atributoHtml = html.getAttribute('data-theme');

    html.setAttribute('data-theme', atributoHtml === "light" ? "dark" : "light");

    darkModeBtn.innerHTML = atributoHtml === 'light'
    ? "<i class='fa-solid fa-sun'></i>"
    : "<i class='fa-solid fa-moon'></i>";

});