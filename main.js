/*ABRE E FECHA O MENU QUANDO CLICAR NO ICONE */

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* QUANDO CLICAR EM UM ITEM DO MENU, ESCONDER O MENU */
const links = document.querySelectorAll('nav ul li a')

for(const link of links) {
  link.addEventListener('click', function (){
    nav.classList.remove('show')
  })
}