'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('selects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      // * ==========[Associate belongsTo]==========
      // testId: {
      //   type: Sequelize.INTEGER,
      //   onDelete: 'CASCADE',
      //   references: {
      //     model: 'tests',
      //     key: 'id',
      //     as: 'testId',
      //   }
      // },
    }).then(function(){
      queryInterface.addColumn('selects','testId',{
          type: Sequelize.INTEGER,
          references:{model: 'tests', key: 'id'}
      })
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('selects');
  }
};