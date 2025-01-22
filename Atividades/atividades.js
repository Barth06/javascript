// atividade 2 - mensagem de boas vindas

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
// atividade 5 - verificar o sono

function verificarSono(){
    const qtdHoras = prompt('informar a quantidade de horas que você dorme em média:');
    const qntdMinimaHorasSono = 8;
    if(qtdHoras<qntdMinimaHorasSono){
        alert('Você esta dormindo muito pouco.')
    } else {
        alert ('Você está dormindo o suficiente. Parabéns!')
    }
}

// atividade 6 - relógio 12h

function relogioAmPm(){
   const horaDesejada = prompt('Digite uma hora do dia do relógio 24h:');
   const manha ='a.m';
   const tarde = 'p.m';

   if(horaDesejada<=12){
    alert(horaDesejada+ manha );
   } else{
    alert(horaDesejada-12+ tarde);
   }
}
 // atividade 5 - operadores E e OU 

function testarOperadorOU(){
    const nmr = prompt ('informe um digito:');
    if(nmr == 5 || nmr == 10){
        alert('O número é 5 ou 10');
    }else{
        alert('Outro número digitado que não é 5 ou 10');
    }  
}

function testarOperadorE(){
    const idade = prompt ('informe a sua idade:');
    const idadeAmigo = prompt ('informe a idade do seu amigo:');
    if(idade>=18 && idadeAmigo >=18){
        alert('pode bebe pra caralho');
    } else{
        alert('Não pode bebe ainda');
    }
}

function verificarEntradaBalada() {
    const idade = prompt ('informe a sua idade');
    const lista = prompt ('Você tem nome na lista? Digite sim ou não');
    const ingresso = prompt('Você tem ingresso? Digite sim ou não.');
    
    if( idade > 18 && (ingresso == 'sim' || lista == 'sim') ){
        alert('Entrata permtida! Boa Festa');
    } else {
        alert('Entrada negada.');
    }
}

//atividade 8 - direito a meia entrada

function meiaEntratada(){
    const idade = prompt ('Informe a sua idade:')
    if(idade <=12 || idade > 60){
        alert ('Você tem direito a meia-entrada.')
    } else{
        alert('Você não tem direito a meia-entrada.')
    }
}