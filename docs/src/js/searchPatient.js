const buscarPaciente = document.querySelector("#search__patient");

buscarPaciente.addEventListener("click", function() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function() {

        var erro__ajax = document.querySelector("#erro__ajax");

        if(xhr.status == 200) {
            erro__ajax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            erro__ajax.classList.remove("invisivel");
        }  
    });
    xhr.send();  //send envia a requisição
});