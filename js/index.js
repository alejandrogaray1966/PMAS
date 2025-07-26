/*               Funcion de INDEX.html del MENU DE OPCIONES                */

"uses estrict"

const menu = document.querySelector(".menu");
const barra = document.querySelector(".barra");

function mostrarMenu() {
    barra.classList.toggle("show");
}

menu.addEventListener("click", mostrarMenu);