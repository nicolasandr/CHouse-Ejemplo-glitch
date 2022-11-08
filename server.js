const express = require('express')

const app = express()

const PORT = 8080;

app.get('/home',(req,res) => {
        res.send(`Hola desde el back usando express`)
})
//consigna 1 :
app.get('/', (req, res) => {
    res.send(`<h1 style= 'color:blue'>Hola mundo</h1>`);
});
//consigna 2 : 
let visitas = 0;

app.get('/visitas',(req,res)=> {
        visitas += 1;
        res.send(`La cantidad de visitas es: ${visitas}`)
})
//consigna 3:
app.get('/fyh',(req,res)=>{
        const date = new Date
        res.send(date.toLocaleString())
})

// configuramos el puerto
const server = app.listen (PORT, ()=>{
        console.log(`servidor de express escuchando el puerto : ${PORT}`)
})

//Escuchamos un evento en caso de error
server.on('error', error => console.log(`Error en el servidor ${error}`))