'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('favorites', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      // * ==========[Associate belongsTo]==========
      // userId: {
      //   type: Sequelize.INTEGER,
      //   onDelete: 'CASCADE',
      //   references: {
      //     model: 'users',
      //     key: 'id',
      //     as: 'userId',
      //   }
      // },
      // selectId: {
      //   type: Sequelize.INTEGER,
      //   onDelete: 'CASCADE',
      //   references: {
      //     model: 'selects',
      //     key: 'id',
      //     as: 'selectId',
      //   }
      // },
      // testId: {
      //   type: Sequelize.INTEGER,
      //   onDelete: 'CASCADE',
      //   references: {
      //     model: 'tests',
      //     key: 'id',
      //     as: 'testId',
      //   }
      // },
      // * ==========[end]==========
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).then(function(){
      queryInterface.addColumn('favorites','userId',{
          type: Sequelize.INTEGER,
          references:{model: 'users', key: 'id'}
      })
    }).then(function(){
      queryInterface.addColumn('favorites','selectId',{
          type: Sequelize.INTEGER,
          references:{model: 'selects', key: 'id'}
      })
    }).then(function(){
      queryInterface.addColumn('favorites','testId',{
          type: Sequelize.INTEGER,
          references:{model: 'tests', key: 'id'}
      })
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('favorites');
  }
};