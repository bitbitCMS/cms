const CategoryService = require("@categories/services");

class CategoryController {
  constructor() {
    this.categoryService = new CategoryService();
    this.create = this.create.bind(this);
  }

  async create(req, res) {
    const saveCategories = await this.categoryService.create(req.body);

    res.status(saveCategories.status);

    if (saveCategories.status === 201) {
      res.send({
        data: saveCategories
      });
    }

    res.send({
      error: saveCategories.error
    });
  }
}

module.exports = CategoryController;
