const visibilidade = true ;
const formulario = document.getElementById('form');

function openForm() {
   if(visibilidade) {
      formulario.classList.add('mostrar');
   }
}

function closeForm() {
   formulario.classList.remove('mostrar');
}