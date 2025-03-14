const axios = require ('axios')

axios.get('https://www.anapioficeandfire.com/api/characters/1')
.then(response=> {
    console.log (response.data.gender) 
})

