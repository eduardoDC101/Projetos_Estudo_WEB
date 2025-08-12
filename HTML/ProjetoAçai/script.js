const botao = document.getElementById('theme-green');
botao.addEventListener('click', () => {
    const html = document.documentElement;
    const atributo = html.getAttribute('data-theme');
    html.setAttribute('data-theme', atributo === "green" ? "purple" : "green");
});