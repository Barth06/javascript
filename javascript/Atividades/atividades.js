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

    function loopDeUmaVez(){
        console.log('Loop com for');
        for(let i=1; i<=10; i++){
            console.log(i)
        }

        console.log('Loop com while');
        let c=1;
        while(c<=10){
            console.log(c);
            c++;
        }
    }

    function loopDezAUm(){
        console.log('loop com for');
        for (let i=10; i>0; i--){
        console.log(i)
        }

        console.log('Loop com while');
        let c=10;
        while(c>0){
            console.log(c);
            c--;
    }

    }

    function loopParesAteDez(){
        console.log('loop com for');
        for (let i=0; i<=10; i+=2){
        console.log(i)
        }

        console.log('Loop com while');
        let c=0;
        while(c<=10){
            console.log(c);
            c+=2;
        }
    }

    function loopImparesAteDez(){
        console.log('loop com for');
        for (let i=1; i<=10; i+=2){
        console.log(i)
        }

        console.log('Loop com while');
        let c=1;
        while(c<=10){
            console.log(c);
            c+=2;
        }
    }
    
    function whileBreakEContinue(){
        let numero=0
        while (numero!= 7){
            numero = prompt('Informe um número')
        if(numero==5){
            console.log('Você achou um easter egg e pode sair do loop');
            break;
        }else if (numero==3){
            console.log ('Não imprime seu número');
            continue;
        }
        console.log (numero);
        }
    }

    function pedirNota(){
        let nota = 11;
        while(nota < 0 || nota > 10) {
            nota = prompt('Informe uma nota entre 0 e 10:');
        if (nota < 0 || nota > 10){
            alert('Nota iválida. Tente denovo');
        }
    }
    alert('Nota válida');
}

function pedirNotaWhileTrue(){
    let nota;
    while(true){
        nota = prompt('Informe uma nota entre 0 e 10:');
    if (nota < 0 || nota > 10){
        alert('Nota inválida. Tente denovo');
    }else {
        break;
        }
    }
        alert('Nota válida');
}

function usuarioEsenha(){
    const usuario='aninhatop';
    const senha='anaana2';
    let usuarioInformado;
    let senhaInformada;
    while(true){
        usuarioInformado = prompt('Informe seu nome de usuário:');
        senhaInformada = prompt('Informe sua senha:');
    if (usuarioInformado == usuario && senhaInformada==senha ){
        alert('Login aprovado');
        break;
    }else {
        alert('Usuário ou senhas incorreta');
        }
    }
}

function palavrasAteParar(){
    let palavra;
    while(palavra!='sair'){
        palavra=prompt('informe uma palavra');
        if(palavra.length < 4){
            console.log('A palavra '+palavra+' foi desconsiderada por possuir menos de tres caracteres');
            continue;
        }
        console.log ('palavra válida:'+palavra);
    }
}

function solicitarNumeros() {
    let numeros = [];
    for (let i = 0; i < 10; i++) {
        numeros.push(prompt('Informe um número'));
    }
    console.log(numeros);
}

function realizarLoginUsuarios() {
    const usuarios = ['tamires@@', 'marcos123', 'gabi77'];
    const senhas = ['123', 'aab4', 'a57'];
    let usuarioLogin = prompt('Informe seu usuário de login');
    let senhaLogin = prompt('Informe sua senha');
    let fezLogin = false;
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i] == usuarioLogin && senhas[i] == senhaLogin) {
            fezLogin = true;
            alert('Login realizado');
            break;
        }
    }
    if (!fezLogin) {
        alert('Usuário ou senha inválido. Tente novamente');
    }
}

function contarLetras() {
    const animais = ['gato', 'cachorro', 'girafa', 'jaguatirica'];
    animais.forEach(animal => {
        console.log('A palavra ' + animal + ' tem ' + animal.length + ' letras');
        alert('A palavra ' + animal + ' tem ' + animal.length + ' letras');
    })
}

function contar() {
    const contador = document.getElementById('contador');
    contador.innerText = parseInt(contador.innerText) + 1;
}

function visualizarSenha() {
    const senha = document.getElementById('senha');
    const iconeSenha = document.getElementById('iconeSenha');
    if (senha.type == 'text') {
        senha.type = 'password';
        iconeSenha.innerHTML = '<svg onclick="visualizarSenha()" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"'
            +'class="bi bi-eye" viewBox="0 0 16 16">'
            +'<path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />'
            +'<path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />'
        +'</svg>';
    } else {
        senha.type = 'text';
        iconeSenha.innerHTML = '<svg onclick="visualizarSenha()" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash"'
            +'viewBox="0 0 16 16">'
            +'<path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />'
            +'<path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />'
            +'<path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />'
        +'</svg>';
    }
}

    function esconderTexto() {
        const textoEsconder = document.getElementById('texto-esconder');
        textoEsconder.classList.add('escondido');
    }

    function mostrarTexto() {
        const textoEsconder = document.getElementById('texto-esconder');
        textoEsconder.classList.remove('escondido');
    }

    function incluirTexto (){
        const textoUsuario = document.getElementById ('texto-usuario');
        const conteudoTexto = document.getElementById ('conteudo-texto');
        const texto = document.createElement('P');
        conteudoTexto.innerHTML = ' ';
    }

    function limpar(){
        const conteudoTexto = document.getElementById ('conteudo-texto');
        conteudoTexto.innerHTML = ' ';
    }

