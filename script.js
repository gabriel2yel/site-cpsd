const botaoMenu = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

if (botaoMenu && menu) {
  botaoMenu.addEventListener("click", () => {
    menu.classList.toggle("ativo");
  });
}
