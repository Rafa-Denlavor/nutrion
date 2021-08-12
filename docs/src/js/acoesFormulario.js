const visibilidade = true ;
const formulario = document.getElementById('formulario');

function mostrarFormulario() {
   if(visibilidade) {
      formulario.classList.add('mostrar');
   }
}

function fecharFormulario() {
   formulario.classList.remove('mostrar');
}