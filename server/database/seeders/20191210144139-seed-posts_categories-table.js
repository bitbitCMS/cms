'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('posts_categories', [
      {
        posts_id: 1,
        categories_id: 1
      },
      {
        posts_id: 1,
        categories_id: 2
      },
    ], {}); 
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('posts_categories', null, {});
  }
};
