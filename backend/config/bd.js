

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(__filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require('./default.js')[env];
var db        = {};

module.exports  = () => {
  'use strict';

  if (config.use_env_variable) {
    var sequelize = new Sequelize(process.env[config.use_env_variable], config);
  } else {
    var sequelize = new Sequelize(config.database, config.username, config.password, config);
  }
  
  sequelize.Promise = Promise;

  db.sequelize = sequelize;
  db.Sequelize = Sequelize;

  return db
}

