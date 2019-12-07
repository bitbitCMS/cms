"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("categories", {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true
      },
      name: { type: Sequelize.STRING(255), allowNull: false },
      slug: Sequelize.STRING(255),
      description: Sequelize.STRING(255),
      is_active: { type: Sequelize.INTEGER(1), defaultValue: 1 },

      created_at: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false
      },

      created_by: { type: Sequelize.INTEGER(11), defaultValue: 0 },
      updated_at: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal(
          "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
        ),
        allowNull: false
      },
      updated_by: { type: Sequelize.INTEGER(11), defaultValue: 0 }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("categories");
  }
};
