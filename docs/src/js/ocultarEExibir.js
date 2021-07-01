var visibilidade = true ;

const formulario = document.getElementById('formulario');

const ocultar = formulario.addEventListener('dblclick', function() {
   this.classList.add('invisivel')
   visibilidade = false;
});

function eventosFormulario() {
   if(visibilidade) {
      let formulario = document.getElementById('formulario');
      formulario.classList.add('mostrar')
   } else {
      ocultar();
   }
}
