var iconeInstrucoes = document.querySelector(".ocultar__icone");
var containerInstrucoes = document.querySelector("#instrucoes");

iconeInstrucoes.addEventListener("click", function ocultar() {
   if(containerInstrucoes.style.display = "block") {
      return (containerInstrucoes.style.display = "none",
               containerInstrucoes.style.marginTop = 0 );
   }
});

