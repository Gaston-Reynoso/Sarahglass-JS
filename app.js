// MENU HAMBURGuESA

let menuHamburguesa = document.querySelector('.menu-hamburguesa'); //Asignamos el boton a la variable.
let navMenu = document.querySelector('.ul-nav'); //Tambien le asignamos una variable para los link de navegacion.

menuHamburguesa.addEventListener('click', () => {
    navMenu.classList.toggle('activado'); //Verificamos si la clase existe para abrir los links de navegacion.
  });



  // BOTON MODO OSCURO/CLARO

  let botonModoOscuro = document.getElementById('modoOscuro'); //Asignamos el boton a la variable.
 

  botonModoOscuro.addEventListener('click', () => { //Agregamos evento / funcion
    document.body.classList.toggle('modo-oscuro');//Verificamos si la clase existe para que se realice el cambio a modo oscuro
  
    // Cambiamos el ícono del botón
  if (document.body.classList.contains('modo-oscuro')) { //Verificamos que contenga la clase para asignar el icono
    botonModoOscuro.textContent = '☀️';
  } else {
    botonModoOscuro.textContent = '🌙';
  }
  
  
  });



 

let slides = Array.from(document.querySelectorAll('.carousel-slide')); //Guardamos en un array los 'carosuel-slide'
let currentIndex = 0; //Lo inicializamos en la primera diapo

function changeSlide() {
  
  slides[currentIndex].classList.remove('active'); // Ocultar la diapo actual
  
  
  currentIndex = (currentIndex + 1) % slides.length;// Cambiamos a la siguiente diapo, una vez llegamos al final de la lista comienza con la primera nuevamente
  

  slides[currentIndex].classList.add('active');  // Mostrar la nuevo diapo
}


setInterval(changeSlide, 5000);// Cambiamos de diapo cada 5 segundos