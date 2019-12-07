const CategoryService = require('@categories/services');

class CategoryController {
  constructor() {
    this.categoryService = new CategoryService();
    this.create = this.create.bind(this);
    this.index = this.index.bind(this);
  }

  async create(req, res) {
    const saveCategories = await this.categoryService.create(req.body);

    res.status(saveCategories.status);

    if (saveCategories.status === 201) {
      res.send({
        id: saveCategories.id
      });
    }

    res.send({
      error: saveCategories.error
    });
  }

  async index(req, res) {
    const categories = await this.categoryService.index(req.query);
    res.send({
      categories
    });
  }
}

module.exports = CategoryController;
