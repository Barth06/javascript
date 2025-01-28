// atividade 2 - mensagem de boas vindas

alert('Bem vindo a minha página!');

function exibirMensagem() {
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
    console.log('O resultado da soma entre ' + valor1 + ' e ' + valor2 + ' é: ' + resultado);
}

function subtratir(valor1, valor2) {
    let resultado = valor1 - valor2;
    console.log('O resultado da subtração entre ' + valor1 + ' e ' + valor2 + ' é: ' + resultado);
}

function dividir(valor1, valor2) {
    let resultado = valor1 / valor2;
    console.log('O resultado da divisão entre ' + valor1 + ' e ' + valor2 + ' é: ' + resultado);
}

function multiplicar(valor1, valor2) {
    let resultado = valor1 * valor2;
    console.log('O resultado da multiplicação entre ' + valor1 + ' e ' + valor2 + ' é: ' + resultado);
}

//Calculadora "funcional"
var valor1 = '';
var valor2 = '';
var operacao = '';

function guardarNumero(valor) {
    if (!operacao) {
        valor1 += valor;
        console.log(valor1);
    }
    //se a operacao for informada
    if (operacao) {
        valor2 += valor;
        console.log(valor2);
    }
}

function guardarOperacao(operacaoE) {
    operacao = operacaoE
}

function limpar() {
    valor1 = '';
    valor2 = '';
    operacao = '';
}

function calcular() {
    valor1 = parseFloat(valor1);
    valor2 = parseFloat(valor2);
    if (operacao == '+') {
        resultado = valor1 + valor2;
    } else if (operacao == '-') {
        resultado = valor1 - valor2;
    } else if (operacao == '*') {
        resultado = valor1 * valor2;
    } else if (operacao == '/') {
        resultado = valor1 / valor2;
    }

    alert('resultado: ' + resultado);
    limpar();
}
// atividade 5 - verificar o sono

function verificarSono() {
    const qtdHoras = prompt('informar a quantidade de horas que você dorme em média:');
    const qntdMinimaHorasSono = 8;
    if (qtdHoras < qntdMinimaHorasSono) {
        alert('Você esta dormindo muito pouco.')
    } else {
        alert('Você está dormindo o suficiente. Parabéns!')
    }
}

// atividade 6 - relógio 12h

function relogioAmPm() {
    const horaDesejada = prompt('Digite uma hora do dia do relógio 24h:');
    const manha = 'a.m';
    const tarde = 'p.m';

    if (horaDesejada <= 12) {
        alert(horaDesejada + manha);
    } else {
        alert(horaDesejada - 12 + tarde);
    }
}
// atividade 5 - operadores E e OU 

function testarOperadorOU() {
    const nmr = prompt('informe um digito:');
    if (nmr == 5 || nmr == 10) {
        alert('O número é 5 ou 10');
    } else {
        alert('Outro número digitado que não é 5 ou 10');
    }
}

function testarOperadorE() {
    const idade = prompt('informe a sua idade:');
    const idadeAmigo = prompt('informe a idade do seu amigo:');
    if (idade >= 18 && idadeAmigo >= 18) {
        alert('pode bebe pra caralho');
    } else {
        alert('Não pode bebe ainda');
    }
}

function verificarEntradaBalada() {
    const idade = prompt('informe a sua idade');
    const lista = prompt('Você tem nome na lista? Digite sim ou não');
    const ingresso = prompt('Você tem ingresso? Digite sim ou não.');

    if (idade > 18 && (ingresso == 'sim' || lista == 'sim')) {
        alert('Entrata permtida! Boa Festa');
    } else {
        alert('Entrada negada.');
    }
}

//atividade 8 - direito a meia entrada

function meiaEntratada() {
    const idade = prompt('Informe a sua idade:')
    if (idade <= 12 || idade > 60) {
        alert('Você tem direito a meia-entrada.')
    } else {
        alert('Você não tem direito a meia-entrada.')
    }
}

// atividade 9 - nome na lista
function identificarNomeUsuario() {
    const nomeUsuario = prompt('informe seu nome');
    if (!nomeUsuario) {
        alert('Entrada esta proibida. Obrigada por informar seu nome');
        identificarNomeUsuario();
    } else {
        alert('Entrada liberada!')
    }
}


function calcularComSwitch() {
    valor1 = parseFloat(valor1);
    valor2 = parseFloat(valor2);
    let resultado;
    switch (operacao) {
        case '+':
            resultado = valor1 + valor2;
            break;
        case '-':
            resultado = valor1 - valor2;
            break;
        case '*':
            resultado = valor1 * valor2;
            break;
        case '/':
            resultado = valor1 / valor2;
            break;

    }
    alert('resultado: ' + resultado);
    limpar();
}

function IMC() {
    const peso = prompt('informe seu peso');
    const altura = prompt('informe sua altura');
    const IMC = peso / (altura * altura);

    if (IMC <= 18.50) {
        alert('Você esta abaixo do peso');
    } else if (IMC > 18.5 && IMC < 25) {
        alert('Você esta no peso ideal');
    } else if (IMC > 25 && IMC < 30) {
        alert('Você esta acima do peso');
    } else if (IMC > 30) {
        alert('Você esta obeso');
    }

}

function converterDiasDaSemana(){
    const numero =  parseInt (prompt ('Digite um número'));
    const DOMINGO = 1, SEGUNDA=2, TERCA = 3, QUARTA=4, QUINTA = 5, SEXTA = 6, SABADO = 7;

    switch (numero) {
        case DOMINGO :
            resultado = alert('DOMINGO');
            break;
        case SEGUNDA :
            resultado = alert('SEGUNDA');
            break;           
        case TERCA:
            resultado = alert('TERCA');
            break;
        case QUARTA:
            resultado = alert('QUARTA');
            break;
        case QUINTA:
            resultado = alert('QUINTA');
            break;
        case SEXTA:
            resultado = alert('SEXTA');
            break;
        case SABADO:
            resultado = alert('SABADO');
            break;
        default:{
            resultado = alert('DIA INVÁLIDO');
        }
    }
}

function calcularValorTotal(){
    const valorProduto = parseFloat (prompt('Informe o valor do produto:'));
    //calcular valor da forma de pagamento
    let total = valorProduto + calcularFormaDePgmt (valorProduto);
    console.log ('Total com forma de pagamento:'+total);
    //calcular valo do desconto
    total -= calcularDesconto(valorProduto);
    console.log ('Total com cupom:'+total);
    //calcular valo do frete
    total+= calcularFrete();
    alert('Total da compra: R$'+total);
}

function calcularFormaDePgmt(vlProduto){
    const formaPgmt = parseInt (prompt ('Informa a forma de pagamento \n1 - cartão de débito \n2 - pix \n3 - cartão de crédito \n4 - boleto' ))
    const CARTAODEB = 1, PIX = 2, CARTAOCRED = 3, BOLETO = 4;

    switch (formaPgmt){
        case CARTAODEB:
            //5% off
           return  - (vlProduto * 0.05);
        case PIX:
            //10% off
            return  - (vlProduto * 0.1);
        case CARTAOCRED:
            //+ 2% 
            return  + (vlProduto * 0.02);
        case BOLETO:
            // nada
            return 0;
    }
}
    function calcularDesconto(vlProduto){
        const cupom = prompt('Você possui algum cupom? Se sim, digite-o.');
        let valorCupom = cupom.substring(0,2);
       if (verificarCupomValido(valorCupom)){
        // aplicar desconto
        return  vlProduto * (valorCupom/100);
       } return 0;
    }

    function verificarCupomValido(valorCupom){
        return !isNaN (valorCupom);
    }

    function calcularFrete(){
        const tipoFrete = prompt ('Escolha o tipo de frete \n1 - Frete padrão \n2 - Frete expresso');
        const FRETEPADRAO = 1, FRETEEXPRESSO = 2;
        switch(tipoFrete){
            case FRETEPADRAO:
                return 10;
            case FRETEEXPRESSO:
                return 20;
    }
    return 0;

    }