// let frutas = ["limão","banana","maracujá","manga","melancia","melão","bergamota","laranja","morango","kiwi","tomate","lixia","uva","pêra","maçã"]

// document.querySelector

// frutas.forEach(fruta => {
//     let h1 = document.createElement ("h1")
//     h1.innerHTML = fruta
//     document.querySelector(".frutas").appendChild(h1)
// })

// document.querySelector(".btn-fruta")
// .addEventListener("click",()=>{
//     let texto = document.querySelector(".nome-fruta").value
//     frutas.push(texto)
//     console.log

// })

// function atualizarListaFrutas(){
//     let ulFrutas = document.querySelector(".frutas")
//     ulFrutas.innerHTML =""

//     frutas.forEach(fruta=>{

//         // let liFruta = document.createElement("li")
//         // liFruta.innerHTML = fruta
//         // ulFrutas.appendChild(liFruta)

//         ulFrutas.innerHTML += `<li>${fruta}</li>`
//     })
// }

// atualizarListaFrutas()

// document.querySelector(".btn-fruta") 
// addEventListener ("click", ()=> {
//     let input = document.querySelector(".nome-fruta")
//     frutas.push(input.value)
//     atualizarListaFrutas()
// })


let h1 = document.querySelector(".saudacao")
h1.innerText = "Olá mundo!"

let input = document.querySelector (".valor")
input.value = "Digite aqui"

let div = document.querySelector (".quadrado")
div.style.height = "100px"
div.style.width="100px"
div.style.backgroundColor="blue"


const botao = document.getElementById('meuBotao');
botao.addEventListener('click', function() {
    alert('Você clicou no botão!');
});

let p = document.querySelector("#animais")
p.addEventListener("mouseover",()=>{
    p.innerText = "🦁"
})

let transformar = document.querySelector(".transformar")
transformar.style.height = "100px"
transformar.style.width= "100px"
transformar.style.backgroundColor="pink"
transformar.addEventListener("dblclick",()=>{
transformar.style.borderRadius ="50%"})

let quadrado = document.querySelector(".quadrado2")
quadrado.style.height = "100px"
quadrado.style.width= "100px"
quadrado.style.backgroundColor="green"

quadrado.addEventListener("mouseenter", () => {
quadrado.style.marginLeft = "200px"; 
});

