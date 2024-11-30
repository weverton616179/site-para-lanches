// Abrir seção invisivel 
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('toggleButton');
    const section = document.getElementById('mySection');

    button.addEventListener('click', () => {
        if (section.style.display === 'none' || section.style.display === '') {
            section.style.display = 'block'; // Mostra a seção
            button.textContent = 'Esconder Seção';
        } else {
            section.style.display = 'none'; // Esconde a seção
            button.textContent = 'Mostrar Seção';
        }
    });
});

function toggleMenu() {
    const menu = document.getElementById('menuDropdown');
    // Adiciona ou remove a classe "show" para controlar o menu
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
    console.log("éocaraimemo")
}

function spamCadastro() {
    alert("Cadastrado com sucesso! verifique seu email")
}