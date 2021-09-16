function hiddenIcon () {
   var iconeInstrucoes = document.querySelector(".hidden__icon");
   var containerInstrucoes = document.querySelector("#recommendation");

   iconeInstrucoes.addEventListener("click", function ocultar() {
   if(containerInstrucoes.style.display = "block") {
      return (containerInstrucoes.style.display = "none",
               containerInstrucoes.style.marginTop = 0 );
   }
});
}