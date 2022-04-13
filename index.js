const http = require('http');
const url = require('url');

const myURL = new URL('./home.hmtl');
const listaEstados = require('./estados.json');

const app = http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Content-type', 'application/json')
    res.write(JSON.stringify(listaEstados));

    res.end();
})

app.listen(8000, ()=> console.log(`Servidor iniciado em http://localhost:8000/${myURL}`));