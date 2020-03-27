/*
    metodos http:

    GET: busca uma informação do backend
    POST: cria uma informação no backend
    PUT: alterar uma informação no backend
    DELETE: deletar uma informação no backend

*/

/*
    tipos de paramentros
    QUERY params: paramentros nomeados enviados na rota apos ?
    Route params: parametros utilizado par identificar recursos
    request body: corpo da requição, utilizado para criar ou alterar 
*/

/*
    Driver: SELEECT * FROM users
    QUERY Bulder: table('name').select('*').where()
*/

const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.get('/', (request, response) => {
    console.log('teste');
});

app.listen(3333);