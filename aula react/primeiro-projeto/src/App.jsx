import { useState } from 'react'
import './App.css'

function App() {

  let animal = {
   Nome: "simba",
   especie: "fofo",
   cor: "malhado",
   image:"https://s2-g1.glbimg.com/IgfcDeQGuizSeUUX05DgGmhgKHs=/0x0:848x488/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/q/X/5r2OG2SPyqGUZzc7S2Yw/anotacao-2019-07-23-173211.png"
  }

  let animal2 = {
    Nome: "larissa",
    especie:"pequeno",
    cor:"laranja",
    image:"https://mega.ibxk.com.br/2024/09/12/12120112707124.jpg?ims=fit-in/800x500",
  }

  return (
    <>
      <h1>{animal.Nome}</h1>
      <h2>{animal.especie}</h2>
      <h3>{animal.cor}</h3>
      <img src={animal.image} alt="" />

      <h1>{animal2.Nome}</h1>
      <h2>{animal2.especie}</h2>
      <h3>{animal2.cor}</h3>
      <img src={animal2.image} alt="" />
    </>
  )
}

export default App
