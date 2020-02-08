'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categories', [
      {
        name: 'category 1',
        slug: 'category-1',
        description: 'category 1 description'
      },
      {
        name: 'category 2',
        slug: 'category-2',
        description: 'category 2 description'
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categories', null, {});
  }
};
