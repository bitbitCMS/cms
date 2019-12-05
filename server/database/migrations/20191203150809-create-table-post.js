'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('post', 
      { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        post_title: {
          type: Sequelize.STRING(50),
          allowNull: false
        },
        published_at: Sequelize.DATE,
        status: Sequelize.STRING,
        created_at: Sequelize.DATE,
        created_by: Sequelize.INTEGER,
        updated_at: {
          type: 'TIMESTAMP',
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
          allowNull: false
        },
        updated_by: Sequelize.INTEGER
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('post');
  }
};
