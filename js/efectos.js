/* Animaciones de la web */

/*Scroll Smoth*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });


/** Header text efect */
let reveal = ScrollReveal()

var slideUp = {
    distance: '150%',
    origin: 'bottom',
    opacity: 0,
    duration: 1000
};
reveal.reveal('.text-presentation', {duration: 1000});

/** Services efect */

var slideRight = {
    distance: '300px',
    origin: 'right',
    duration: 1000
};
reveal.reveal('.from-right', slideRight);

var slideLeft = {
    distance: '300px',
    origin: 'left',
    duration: 1000
};
reveal.reveal('.from-left', slideLeft);

/** Proyects efect */

reveal.reveal('.card1', {delay:200});
reveal.reveal('.card2', {delay:400});
reveal.reveal('.card3', {delay:600});