alert ('Bem vindo a minha página!');

function exibirMensagem () {
    alert('Você clicou no botão');
    console.log('A página executou o metado');
}

//Exercício 3 - Calculadora

function realizarCalculos() {
    let valor1 = parseInt(prompt('informe o primeiro valor'));
    let valor2 = parseInt(prompt('informe o primeiro valor'));
    somar(valor1, valor2);
    subtratir(valor1, valor2);
    dividir(valor1, valor2);
    multiplicar(valor1, valor2);
}

function somar(valor1, valor2) {
    let resultado = valor1 + valor2;
    console.log('O resultado da soma entre '+valor1+' e '+valor2+' é: '+resultado);
}

function subtratir(valor1, valor2) {
    let resultado =valor1 - valor2;
    console.log('O resultado da subtração entre '+valor1+' e '+valor2+' é: '+resultado);
}

function dividir(valor1, valor2) {
    let resultado = valor1 / valor2;
    console.log('O resultado da divisão entre '+valor1+' e '+valor2+' é: '+resultado);
}

function multiplicar(valor1, valor2) {
    let resultado =valor1 * valor2;
    console.log('O resultado da multiplicação entre '+valor1+' e '+valor2+' é: '+resultado);
}

//Calculadora "funcional"
var valor1='';
var valor2='';
var operacao='';

function guardarNumero(valor){
    if(!operacao){
        valor1 += valor;
        console.log(valor1);
    }
    //se a operacao for informada
    if (operacao){
        valor2 += valor;
        console.log(valor2);
    }
}

function guardarOperacao(operacaoE){
    operacao = operacaoE
}

function limpar(){
    valor1='';
    valor2='';
    operacao='';
}

function calcular(){
    valor1 = parseFloat(valor1);
    valor2 = parseFloat(valor2);
    if (operacao == '+'){
        resultado=valor1+valor2;
    } else if(operacao == '-'){
        resultado=valor1-valor2;
    } else if(operacao == '*'){
        resultado=valor1*valor2;
    } else if(operacao == '/'){
        resultado=valor1/valor2;
    }
 
    alert('resultado: ' +resultado);
    limpar();
}