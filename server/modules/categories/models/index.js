const DBService = require("@common/services/db.common.service.js");

class CategoryModel {
  constructor() {
    this.table = "categories";
    this.dbService = new DBService();
  }

  async create(data) {
    const query = `INSERT into ${this.table} SET ?`;

    return await this.dbService.query(query, data);
  }

  async getCateBySlug(slug) {
    const query = `SELECT id from ${this.table} where slug=?`;

    return await this.dbService.query(query, slug);
  }
}

module.exports = CategoryModel;
