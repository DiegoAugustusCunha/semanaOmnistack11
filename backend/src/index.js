/**
 *  Rota / Recurso
 *  Rota = http://localhost:3333/users
 *  Recurso = users
 */

 /**
  * Métodos HTTP
  * 
  * GET: Busca/Listar uma informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação n back-end
  * DELETE: Deletar uma informação no back-end 
  */
 
  /**
   * Tipos de parâmetros:
   * 
   * Query Params: Parâmento nomeados enviados na rota após "?" (Usados: Filtros, paginação)
   * Ex: http://localhost:3333/users?nome=Diego
   * 
   * Route Params: Parâmento utilizados para identificar recursos unicos
   * Ex: http://localhost:3333/users/1 (retornar ID 1) /users/:id
   * 
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
   */

   /**
    * Tipos de bancos de dados
    * SQL: MySQL, SQLite, PostgreeSQL, Oracle, Microsoft SQL Server
    * NSQL: MongoDB, CouchDB, etc
    */



const express = require('express');
const cors = require('cors');
/*Pega o arquivo routers na mesma pasta*/
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);
