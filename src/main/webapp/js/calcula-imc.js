var botao = document.querySelector("#calcular-imc");

botao.addEventListener("click", function(event) {
    event.preventDefault();
    peso = document.querySelector("#peso").value;
    altura = document.querySelector("#altura").value;
    var imc = peso / (altura * altura);
    var resultado = tabelaimc(imc);
    alert(resultado);
})

function tabelaimc(imc) {
    genero = document.querySelector("#genero").value;
    
    switch (genero) {
        case "M":
            if (imc < 20.7) {
                text = "Abaixo do peso";
            }
            else if (imc >= 20.7 && imc <= 26.4) {
                text = "Peso ideal";
            }
            else if (imc >= 26.5 && imc <= 27.8) {
                text = "Pouco acima do peso";
            }
            else if (imc >= 27.9 && imc <= 31.1) {
                text = "Acima do peso";
            }
            else {
                text = "Obesidade";
            }
            break;
        case "F":
            if (imc < 19.1) {
                text = "Abaixo do peso";
            }
            else if (imc >= 19.1 && imc <= 25.8) {
                text = "Peso ideal";
            }
            else if (imc >= 25.9 && imc <= 27.3) {
                text = "Pouco acima do peso";
            }
            else if (imc >= 27.4 && imc <= 32.3) {
                text = "Acima do peso";
            }
            else {
                text = "Obesidade";
            }
            break;
        default:
            text = "Sexo inválido";
    }
    
    return text;
}