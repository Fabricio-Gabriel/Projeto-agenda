const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');

// ROTAS HOME
route.get('/', homeController.index);




module.exports = route;