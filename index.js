const http = require('http');
const url = require('url');
const fs = require("fs");

// const myURL = new URL('./home.hmtl');
const listaEstados = require('./estados.json');

const app = http.createServer((req, res)=>{
        const route = url.parse(req.url);

        switch(route.pathname){
            case "/contato":
                res.end("Pagina contato");
                break;
            case '/estados':
                res.setHeader("Content-Type", "text/html");
                res.write(JSON.stringify(listaEstados));
                break;
            default:
                const page =fs.readFilrSync("home.html");
                res.write(page);
                break;
        }
  return res.end();
})

app.listen(8000, ()=> console.log('Servidor iniciado em http://localhost:8000/'));
