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

for (const link of links) {
  link.addEventListener('click', function () {
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

// TESTIMONIALS CAROUSEL SLIDER SWIPER
const swiper = new Swiper('.swiper-container', {
  sliderPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})

// ScrollReveal: Mostrar elementos quando der scroll na página
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social
 `,
  { interval: 100 }
)


// BOTÃO VOLTAR PARA O TOPO            

const backToTopButton = document.querySelector('.back-to-top')
 window.addEventListener('scroll', function () {
  if (window.scrollY >= 1000) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
})