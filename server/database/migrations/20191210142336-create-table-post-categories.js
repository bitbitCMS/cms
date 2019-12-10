'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("posts_categories", {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true
      },
      posts_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      categories_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false
      }
    }).then(() => queryInterface.addIndex('posts_categories', ['posts_id', 'categories_id']));
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("posts_categories");
  }
};
