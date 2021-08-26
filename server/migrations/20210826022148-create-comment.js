'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      content: {
        type: Sequelize.STRING
      },
      // * ==========[Associate]==========
      // userId: {
      //   type: Sequelize.INTEGER,
      //   onDelete: 'CASCADE',
      //   references: {
      //     model: 'users',
      //     key: 'id',
      //     as: 'userId',
      //   }
      // },
      // postId: {
      //   type: Sequelize.INTEGER,
      //   onDelete: 'CASCADE',
      //   references: {
      //     model: 'posts',
      //     key: 'id',
      //     as: 'postId',
      //   }
      // },
      // * ======================
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).then(function(){
      queryInterface.addColumn('comments', 'userId',{
          type: Sequelize.INTEGER,
          references:{model: 'users', key: 'id'}
      })
    }).then(function(){
      queryInterface.addColumn('comments','postId',{
          type: Sequelize.INTEGER,
          references:{model: 'users', key: 'id'}
      })
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('comments');
  }
};