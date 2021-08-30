const express = require('express');

const CandidateController = require('./src/controllers/CandidateController');

//Routes: onde ficam todas as rotas do software
const routes = new express.Router();

//Ação a ser executada quando /register for acionado
routes.post('/register', CandidateController.register);
//   /register -> serve para salvar o usuário

routes.get('/', (req, res) => {
    res.send('itimalia, praticamente funcionando!')
});

module.exports = routes;
