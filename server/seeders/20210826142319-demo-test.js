'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('tests', [{
      id: 1,
      name: '한식',
      image: 'https://pbs.twimg.com/media/EIwDhacUcAIymQF.jpg'
    }]);
    await queryInterface.bulkInsert('tests', [{
      id: 2,
      name: '강아지',
      image: 'https://img.insight.co.kr/static/2019/05/29/700/0k2sv68nso46ww4o5js6.jpg'
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('tests', null, {});
  }
};
