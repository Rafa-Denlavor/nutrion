const tabelaDePacientes = document.querySelector("table");

tabelaDePacientes.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function() {
        event.target.parentNode.remove();

    }, 500);

});
    
 