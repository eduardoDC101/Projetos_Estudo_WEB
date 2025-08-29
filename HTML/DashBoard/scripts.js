// Tema Escuro
const html = document.documentElement;
html.setAttribute('data-theme', localStorage.getItem('estado'));

const darkModeBtn = document.getElementById('darkModeBtn');

darkModeBtn.addEventListener('click', () => {
    const html = document.documentElement;

    const atributoHtml = html.getAttribute('data-theme');

    html.setAttribute('data-theme', atributoHtml === "light" ? "dark" : "light");

    darkModeBtn.innerHTML = atributoHtml === 'light'
    ? "<i class='fa-solid fa-sun'></i>"
    : "<i class='fa-solid fa-moon'></i>";

    localStorage.setItem('estado', html.getAttribute('data-theme'));

});