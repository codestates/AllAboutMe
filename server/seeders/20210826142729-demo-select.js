'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('selects', [{
      name: '비빔밥',
      testId: 1,
      image: 'https://cdn.foodnews.co.kr/news/photo/201909/71182_27048_4433.jpg'
    }]);
    await queryInterface.bulkInsert('selects', [{
      name: '삼겹살',
      testId: 1,
      image: 'https://cdn.discordapp.com/attachments/879193560598061087/880455174626349056/2Q.png'
    }]);
    await queryInterface.bulkInsert('selects', [{
      name: '육회',
      testId: 1,
      image: 'https://cdn.discordapp.com/attachments/879193560598061087/880455279362342932/Z.png'
    }]);
    await queryInterface.bulkInsert('selects', [{
      name: '순두부찌개',
      testId: 1,
      image: 'https://cdn.discordapp.com/attachments/879193560598061087/880455506072862720/2Q.png'
    }]);
    await queryInterface.bulkInsert('selects', [{
      name: '된장찌개',
      testId: 1,
      image: 'https://cdn.discordapp.com/attachments/879193560598061087/880455555968278538/2Q.png'
    }]);
    await queryInterface.bulkInsert('selects', [{
      name: '간장게장',
      testId: 1,
      image: 'https://cdn.discordapp.com/attachments/879193560598061087/880455597227655178/Z.png'
    }]);
    await queryInterface.bulkInsert('selects', [{
      name: '칼국수',
      testId: 1,
      image: 'https://cdn.discordapp.com/attachments/879193560598061087/880455826584793129/2021021915160485251_1613715364.png'
    }]);
    await queryInterface.bulkInsert('selects', [{
      name: '제육볶음',
      testId: 1,
      image: 'https://cdn.discordapp.com/attachments/879193560598061087/880455383527862392/2Q.png'
    }]);
    await queryInterface.bulkInsert('selects', [{
      name: '김밥',
      testId: 1,
      image: 'https://cdn.discordapp.com/attachments/879193560598061087/880455876320837632/2Q.png'
    }]);
    await queryInterface.bulkInsert('selects', [{
      name: '떡볶이',
      testId: 1,
      image: 'https://cdn.discordapp.com/attachments/879193560598061087/880455927344529469/Z.png'
    }]);
    await queryInterface.bulkInsert('selects', [{
      name: '떡갈비',
      testId: 1,
      image: 'https://cdn.discordapp.com/attachments/879193560598061087/880456111323484170/2Q.png'
    }]);
    await queryInterface.bulkInsert('selects', [{
      name: '곱창',
      testId: 1,
      image: 'https://cdn.discordapp.com/attachments/879193560598061087/880456268433723412/Z.png'
    }]);
    await queryInterface.bulkInsert('selects', [{
      name: '설렁탕',
      testId: 1,
      image: 'https://cdn.discordapp.com/attachments/879193560598061087/880456353309667358/Z.png'
    }]);
    await queryInterface.bulkInsert('selects', [{
      name: '육개장',
      testId: 1,
      image: 'https://cdn.discordapp.com/attachments/879193560598061087/880456454044254228/Z.png'
    }]);
    await queryInterface.bulkInsert('selects', [{
      name: '짜글이',
      testId: 1,
      image: 'https://cdn.discordapp.com/attachments/879193560598061087/880456587024691220/9k.png'
    }]);
    await queryInterface.bulkInsert('selects', [{
      name: '굴비구이',
      testId: 1,
      image: 'https://cdn.discordapp.com/attachments/879193560598061087/880456858740064256/images.png'
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('selects', null, {});
  }
};
