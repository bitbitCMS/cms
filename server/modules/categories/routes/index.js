const CategoryController = require("@categories/controllers");

module.exports = app => {
  const categoryController = new CategoryController();

  app
    .route("/categories")
    .post(categoryController.create)
    .get(categoryController.index);
};
