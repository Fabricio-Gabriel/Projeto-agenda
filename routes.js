const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

// ROTAS HOME
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

// ROTAS CONTATO
route.get('/contato', contatoController.paginaContato);



module.exports = route;