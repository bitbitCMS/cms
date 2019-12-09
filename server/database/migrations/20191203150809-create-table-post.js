'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('post', 
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        post_title:{
          type: Sequelize.STRING,
          allowNull: false,
        },
        slug: Sequelize.STRING,
        type: Sequelize.INTEGER,
        post_content: Sequelize.TEXT,       
        type: Sequelize.INTEGER,
        published_at: Sequelize.DATE,
        published_by: Sequelize.INTEGER,
        status: {
          type: Sequelize.INTEGER,
          defaultValue: 0,
        },
        thumbnail: Sequelize.STRING,
        meta_description: Sequelize.STRING,
        created_at: Sequelize.DATE,
        created_by: Sequelize.INTEGER,
        updated_at: {
          type: 'TIMESTAMP',
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
        },
        updated_by: Sequelize.INTEGER,
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('post');
  }
};
