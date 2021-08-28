const express = require('express');

const CandidateController = require('./src/controllers/CandidateController');
const routes = new express.Router();

routes.post('/register', CandidateController.register);
//   /register -> serve para salvar o usuário

routes.get('/', (req, res) => {
    res.send('itimalia, praticamente funcionando!')
});

module.exports = routes;
