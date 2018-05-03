const sequelize = require('./config/bd')();
const config = require('./config/default');
const express = require('express');
const bodyParse = require('body-parser');
const logger = require('morgan');


const app = express();
const server = require('http').createServer(app);

const routers = require('./src/routes')();

app.use(logger('dev'));
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: false }));

app.use(sequelize.Sequelize);

app.use('/', routers);

server.listen(config.port,()=> console.log('Express server listening on port' + server.address().port));

module.exports = app;