'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [{
      name: '김코딩',
      email: 'test@code.kr',
      password: '1234',
      phone: '010-1234-5678',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
    await queryInterface.bulkInsert('users', [{
      name: '박코더',
      email: 'park@code.kr',
      password: 'qwer1234',
      phone: '010-1111-1111',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
