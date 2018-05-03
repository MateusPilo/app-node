'use strict';
module.exports = () => {
  var db = require('../../config/bd')();
  const DataTypes = require('sequelize/lib/data-types');

  var Users = db.sequelize.define('Users', {
    id: { allowNull: false, autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER},
    nome: {type: DataTypes.STRING},
    sobrenome: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    password:{allowNull:false, type: DataTypes.STRING}

  }, {});
  Users.associate = function(models) {
    // associations can be defined here
  };  

  
  return Users;
};