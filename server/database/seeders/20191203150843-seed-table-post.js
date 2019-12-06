'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('post', 
      [
        {
          post_title: 'Post Article Day 1',
          published_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          status: 'published',
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          created_by: 1,
          updated_by: 1
        },
        {
          post_title: 'Post Article Day 2',
          published_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          status: 'unpublished',
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          created_by: 1,
          updated_by: 1
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('post', null, {});
  }
};
