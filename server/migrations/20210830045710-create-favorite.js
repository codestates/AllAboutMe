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
      userId: {
        type: Sequelize.INTEGER,
        field: 'userId',
        references: {
          model: 'users',
          key: 'id'
        },
        onDelete: 'cascade'
      },
      selectId: {
        type: Sequelize.INTEGER,
        field: 'selectId',
        references: {
          model: 'selects',
          key: 'id'
        },
        onDelete: 'cascade'
      },
      testId: {
        type: Sequelize.INTEGER,
        field: 'testId',
        references: {
          model: 'tests',
          key: 'id'
        },
        onDelete: 'cascade'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('favorites');
  }
};