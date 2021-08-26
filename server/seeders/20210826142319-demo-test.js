'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('tests', [{
      id: 1,
      name: '한식',
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('tests', null, {});
  }
};
