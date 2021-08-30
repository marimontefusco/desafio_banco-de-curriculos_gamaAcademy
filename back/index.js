const express = require('express')
const mongoose = require('mongoose')
const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');
const routes = require('./routes');
const cors = require('cors');
const app = express();
//const port = 5000;

//Para conectar ao Banco de Dados MongoDB Atlas:
mongoose.connect(
  'mongodb+srv://marimontefusco:3bqpTHhVfxx9VBE@cluster-google-cloud-sp.lc9jr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  {
    useNewUrlParser: true
  }
);

//Antigo bodyParser (const bodyParser = require('body-parser') -> descontinuado e agora já incluso no express. Então:
//Definição de middlewares
app.use(express.json());

//Configuração swagger
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
//  /docs -> serve para mostrar nossa documentação, essa é a rota de onde ela está

//Configuração das rotas
app.use(routes);

//Evitando erros de cors
app.use(cors());

//Configuração do servidor
app.listen(process.env.PORT || 5000, () => {
  console.log(`Servidor rodando em http://localhost:5000`)
});