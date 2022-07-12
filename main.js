const botaoMenu = document.getElementById('botao')

function abrirMenu() {
  const sidemenu = document.getElementsByClassName('esconder')
  for (let item of sidemenu) {
    console.log(item)
    item.classList.toggle('active')
  }
}
botaoMenu.addEventListener('click', abrirMenu)
