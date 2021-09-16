//captura o botao do formulario de adicionar paciente
var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    
    const form = document.querySelector("#form-adiciona");
    const paciente = obtemPacienteDoFormulario(form);

    const erros = validaPaciente(paciente);
    if(erros.length > 0) {
        exibeMensagemDeErro(erros);
        return;
    }
    
    adicionaPacienteNaTabela(paciente);

    form.reset();

    const mensagemErro = document.querySelector("#mensagensErro");
    mensagemErro.innerHTML = "";
});

function adicionaPacienteNaTabela(paciente) {
    const pacienteTr = montaTr(paciente);
    const tabela = document.querySelector("#patients__table");
    tabela.appendChild(pacienteTr);
}

function exibeMensagemDeErro (erros) {
    let ul = document.querySelector("#mensagensErro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        let li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemPacienteDoFormulario(form) {
    const paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente) {
    let pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("patient__tr");
 
     pacienteTr.appendChild(montaTd(paciente.nome, "patient__td", "info-nome"));
     pacienteTr.appendChild(montaTd(paciente.peso, "patient__td", "info-peso"));
     pacienteTr.appendChild(montaTd(paciente.altura, "patient__td", "info-altura"));
     pacienteTr.appendChild(montaTd(paciente.gordura, "patient__td", "info-gordura"));
     pacienteTr.appendChild(montaTd(paciente.imc, "patient__td", "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe) {
    let td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente) {
    const erros = [];

    if(paciente.nome.length == 0) erros.push("Preencha o nome!");
    if(paciente.peso.length == 0) erros.push("Preencha o peso!");
    if(paciente.altura.length == 0) erros.push("Preencha a altura!");
    if(paciente.gordura.length == 0) erros.push("Preencha a gordura!");

    if(!validaPeso(paciente.peso)) erros.push("Peso inválido!");
    if(!validaAltura(paciente.altura)) erros.push("Altura inválida!");
    if(!validaGordura(paciente.gordura)) erros.push("Gordura inválida!");

    return erros;
}


