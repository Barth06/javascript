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

let listaFilmes = ["Clube da luta", "Casablanca", "Clube dos Cinco", "Pulpfiction", "Cidade de Deus", "Titanic"]

function atualizarListaFilmes(){
    let ul = document.querySelector(".listas-filmes")
    ul.innerHTML = ""

    listaFilmes.forEach(filme => {
        ul.innerHTML += `<li>${filme}</li>`
    })
}

atualizarListaFilmes()

document.querySelector (".btn-adicionar")
.addEventListener("click", ()=> `{

})
