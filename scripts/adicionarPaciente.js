//captura o botao do formulario de adicionar paciente
var botaoAdicionar = document.querySelector("#adicionar-paciente");


//funcao para adicionar paciente
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
    //Captura a tabela de pacientes
    const pacienteTr = montaTr(paciente);
    const tabela = document.querySelector("#tabela-pacientes");
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

    //criacao de um objeto com os seus atributos abstraidos do formulario
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
    //Cria as linhas da tabela
    let pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente__tr");
 
     //Adiciona os fihos (na tr)
     pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
     pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
     pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
     pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
     pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe) {
    let td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}


function validaPaciente(paciente) {

    const erros = [];

    if(paciente.nome.length == 0) {
        erros.push("Preencha o nome!");
    }

    if(paciente.peso.length == 0) {
        erros.push("Preencha o peso!");
    }

    if(paciente.altura.length == 0) {
        erros.push("Preencha a altura!");
    }

    if(paciente.gordura.length == 0) {
        erros.push("Preencha a gordura!");
    }

    if(!validaPeso(paciente.peso)) {
        erros.push("Peso inválido!");
    }

    if(!validaAltura(paciente.altura)) {
        erros.push("Altura inválida!");
    }

    if(!validaGordura(paciente.gordura)) {
        erros.push("Gordura inválida!");
    }

    return erros;
}

