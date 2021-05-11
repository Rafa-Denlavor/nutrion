//Captura a linha do paciente com as suas células
const pacientes = document.querySelectorAll(".paciente__tr");

//Enquanto tiver pacientes, faça essa verificação
for(let i = 0; i < pacientes.length; i++) {

    const paciente = pacientes[i];

    //captura a tag de peso do paciente para em seguida capturar o seu conteudo
    const tdPeso = paciente.querySelector(".info-peso");
    const peso = tdPeso.textContent;

    //captura a tag de altura do paciente para em seguida capturar o seu conteudo
    const tdAltura = paciente.querySelector(".info-altura");
    const altura = tdAltura.textContent;

    //captura a tag de gordura do paciente para em seguida capturar o seu conteudo
    const tdGordura = paciente.querySelector(".info-gordura");
    const gordura = tdGordura.textContent;

    //captura a tag do imc do paciente
    let tdImc = paciente.querySelector(".info-imc");

    //Com a ajuda das funções, valida se os dados inseridos são válidos
    const pesoEValido = validaPeso(peso);
    const alturaEValida = validaAltura(altura);
    const gorduraEValida = validaGordura(gordura);

    //Se o peso não for válido, altura se tornará inválida, o imc receberá 'Peso inválido' como valor e a linha do paciente recebera a classe de 'paciente invalido' para modificar a sua cor.  
    if(!pesoEValido) {
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }

    //Se a altura não for válida, o imc receberá 'Altura inválido' como valor e a linha do paciente recebera a classe de 'paciente invalido' para modificar a sua cor.
    if(!alturaEValida) {
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente__invalido");
    }

    //Se a gordura não for válida, o imc receberá 'Gordura inválido' como valor e a linha do paciente recebera a classe de 'paciente invalido' para modificar a sua cor.
    if(!gorduraEValida) {
        tdImc.textContent = "Gordura inválida!";
        paciente.classList.add("paciente__invalido");
    }

    //Se o peso, a altura e a gordura são válidos, faça o calculo de imc e troque o conteudo dele pelo calculo.
    if(pesoEValido && alturaEValida && gorduraEValida) {
        var imc =  calculaImc(peso, altura);

        let resultadoImc = tdImc.textContent = imc;
        
        if(resultadoImc < 18.5) 
            tdImc.style.backgroundColor = "blue";
        if(resultadoImc >= 18.5 && resultadoImc <= 24.9) 
            tdImc.style.backgroundColor = "green";
        if(resultadoImc >= 25 && resultadoImc <= 29.9) 
        tdImc.style.backgroundColor = "yellow";
        if(resultadoImc >= 30 && resultadoImc <= 34.9) 
            tdImc.style.backgroundColor = "orange";
        if(resultadoImc >= 35 && resultadoImc <= 39.9) 
            tdImc.style.backgroundColor = "red";
        if(resultadoImc >= 40) 
            tdImc.style.backgroundColor = "purple";
    
    }

}

//se o peso for maior ou igual a zero e menor que mil, será verdadeiro. Senão, falso.
function validaPeso(peso) {
    if(peso >= 0 && peso < 1000) {
        return true;
    } else {
        return false;
    }
}

//se a altura for maior ou igual a zero e menor ou igual dois e meio, será verdadeiro. Senão, falso.
function validaAltura(altura) {
    if(altura >= 0 && altura <= 2.5) {
        return true;
    } else {
        return false;
    }
}

//Se a gordura for igual ou maior do que zero e menor ou igual a 100, então será verdadeiro. Senão, falso.
function validaGordura(gordura) {
    if(gordura >= 0 && gordura <= 100) {
        return true;
    } else {
        return false;
    }
}

//O imc inicialmente será zero, porém ao fazer o calculo da variável imc, returnará o valor em duas casas decimais
function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}


function corDaClassificacao() {
    let td = document.querySelector(".info-imc");

}


function corDaClassificacao (resultadoIMc) {

}