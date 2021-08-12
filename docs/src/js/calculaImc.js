const pacientes = document.querySelectorAll(".paciente__tr");

for(let i = 0; i < pacientes.length; i++) {
    const paciente = pacientes[i];

    const tdPeso = paciente.querySelector(".info-peso");
    const peso = tdPeso.textContent;

    const tdAltura = paciente.querySelector(".info-altura");
    const altura = tdAltura.textContent;

    const tdGordura = paciente.querySelector(".info-gordura");
    const gordura = tdGordura.textContent;

    let tdImc = paciente.querySelector(".info-imc");

    const pesoEValido = validaPeso(peso);
    const alturaEValida = validaAltura(altura);
    const gorduraEValida = validaGordura(gordura);
 
    if(!pesoEValido) {
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente__invalido");
    }

    if(!alturaEValida) {
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente__invalido");
    }

    if(!gorduraEValida) {
        tdImc.textContent = "Gordura inválida!";
        paciente.classList.add("paciente__invalido");
    }

    if(pesoEValido && alturaEValida && gorduraEValida) {
        var imc =  calculaImc(peso, altura);
        var resultadoImc = tdImc.textContent = imc;
        
        if(resultadoImc < 18.5) 
            tdImc.classList.add('pesoBaixo__cor');
        if(resultadoImc >= 18.5 && resultadoImc <= 24.9) 
            tdImc.classList.add('saudavel__cor');
        if(resultadoImc >= 25 && resultadoImc <= 29.9) 
            tdImc.classList.add('sobrepeso__cor');
        if(resultadoImc >= 30 && resultadoImc <= 34.9) 
            tdImc.classList.add('obesidade__cor');
        if(resultadoImc >= 35 && resultadoImc <= 39.9) 
            tdImc.classList.add('obesidadeSevera__cor');
        if(resultadoImc >= 40) 
            tdImc.classList.add('obesidadeMorbida__cor');
    }
}

function validaPeso(peso) {
    if(peso >= 0 && peso < 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if(altura >= 0 && altura <= 2.5) {
        return true;
    } else {
        return false;
    }
}

function validaGordura(gordura) {
    if(gordura >= 0 && gordura <= 100) {
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}