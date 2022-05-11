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

/* MUDAR O HEADER DA PÁGINA QUANDO DER SCROLL */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    // Scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // Menor que a altura do header 
    header.classList.remove('scroll')
  }
})