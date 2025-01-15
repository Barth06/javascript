// exibr uma mensagem ao carregar a pagina
alert('Olá! Seja bem-vindo!');

function exibirMensagem() {
    alert('Você clicou parabens');
    console.log('a pagina executou exibir mensagem');
}

// exercício 3 - calculadora

var numero1 = 10 , numero=5; 

function realizarCalculos () {
    let numero1 = 10 , numero=5; 
    somar(numero1, numero2);
    subtrair(numero1, numero2);
    dividir(numero1, numero2);
    multiplicar(numero1, numero2);
}

function somar(valor1, valor2) {
    //operação
    let resultado = valor1 + valor2;
    //exibir no console
    console.log('O resultado da soma entre: '+valor1+' e '+valor2+' é: '+resultado);
}
function subtrair(valor1, valor2){
    valor1 - valor2;
    console.log('O resultado da subtração entre: '+valor1+' e '+valor2+' é: '+resultado);
}

function dividir(valor1, valor2){
    valor1 / valor2;
    console.log('O resultado da divisão entre: '+valor1+' e '+valor2+' é: '+resultado);
}

function multiplicar(valor1, valor2){
    valor1 * valor2;
    console.log('O resultado da multiplicação entre: '+valor1+' e '+valor2+' é: '+resultado);
}


