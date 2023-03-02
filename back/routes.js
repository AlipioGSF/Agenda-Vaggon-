const express = require('express');
const routes = express.Router();

const loginController = require('./src/controllers/loginController');
const cadastroController = require("./src/controllers/cadastroController");
const atividadeController = require('./src/controllers/atividadeController');

routes.post('/logar' , loginController.logar);
routes.post('/cadastrar', cadastroController.cadastrar);   
routes.get('/logado/:login/', loginController.logado);

module.exports = routes;