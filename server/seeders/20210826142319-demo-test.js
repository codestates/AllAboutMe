'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('tests', [{
      id: 1,
      name: '한식',
      image: 'https://pbs.twimg.com/media/EIwDhacUcAIymQF.jpg'
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('tests', null, {});
  }
};
