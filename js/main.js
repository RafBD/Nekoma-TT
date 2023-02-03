const $form = document.querySelector('#form');
const $buttonMailTo = document.querySelector('#trucazo');

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
  event.preventDefault()
  const form = new FormData(this);
  $buttonMailTo.setAttribute('href', `mailto:rafa.bediaz@gmail.com?subject= ¡Hola! Quiero información sobre el club. &body= Nombre: ${form.get('name')} ${form.get('lastName')} Correo: ${form.get('email')} Celular: ${form.get('cel')}`);
  $buttonMailTo.click();
}

document.querySelector('.menu-btn').addEventListener('click', () => {
  document.querySelector('.nav-menu').classList.toggle('show');
});

var enlaces = document.querySelectorAll('.enlace');

enlaces.forEach(enlace => {
  enlace.addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.remove('show');
  })
});




ScrollReveal().reveal('.resumen');
ScrollReveal().reveal('.sobre-nosotros', { delay: 50 });
ScrollReveal().reveal('.ubicacion', { delay: 50 });
ScrollReveal().reveal('.contacto', { delay: 50 });