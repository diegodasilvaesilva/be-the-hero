const express = require('express');

const routes = express.Router();

/**
 * Tipo de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtro, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição utilizado para criar ou alterar recursos
 */

 //Acessar query params
//app.get('/users', (request, response) => {

//Acessar route params
//app.get('/users/:id', (request, response) => {

//Acessar Request Body
routes.post('/users', (request, response) => {

    //Acessar query params    
    //const params = request.query;

    //Acessar route params    
    //const params = request.params;

    //console.log(params);    

    //Acessar request body
    const body = request.body;    
    
    console.log(body);
    

    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Diego da Silva e Silva. '
    });
});

module.exports = routes;