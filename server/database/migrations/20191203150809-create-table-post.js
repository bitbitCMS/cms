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
        title: Sequelize.STRING(50),
        published_at: Sequelize.DATE,
        status: Sequelize.STRING,
        created_at: Sequelize.DATE,
        created_by: Sequelize.INTEGER,
        updated_at: {
          type: 'TIMESTAMP',
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
          allowNull: false
        },
        updated_by: Sequelize.STRING
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('post');
  }
};
