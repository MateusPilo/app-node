'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {

      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER},
      nome: {type: Sequelize.STRING},
      sobrenome: {type: Sequelize.STRING},
      email: {type: Sequelize.STRING},
      password:{allowNull:false, type: Sequelize.STRING},
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE }
      
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};