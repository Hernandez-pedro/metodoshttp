const express = require ('express')

const app = express()

app.get('/', (request, response) =>{
    response.json({
        msg: 'Hello GET'
    })
})

app.post('/', (request, response) =>{
    response.json({msg: 'hello POST'})
})
app.put('/', (request, response) =>{
    response.json({msg:'Hola PUT'})
})
app.patch('/', (request, response) =>{
    response.json({msg:'Hola PATCH'})
})
app.delete('/', (request, response) =>{
    response.json({msg:'Hola DELETE'})
})

/**
 * FUNCIONALIDAD
 * 
 */

//http://localhost:3000/
app.listen(3000, () => {
    console.log('listening on port 3000')
})