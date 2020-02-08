const DBService = require('@common/services/db.common.service.js');

class CategoryModel {
  constructor() {
    this.table = 'categories';
    this.dbService = new DBService();
  }

  async index(offset = 0, limit = 10, search, sortBy = 'id', order = 'DESC') {
    let query = `SELECT * from ${this.table}`;

    if (search) {
      query += ` WHERE name LIKE '%${search}%'`;
    }

    query += ` ORDER BY ${sortBy} ${order} LIMIT ${offset}, ${limit}`;

    return await this.dbService.query(query);
  }

  async create(data) {
    const query = `INSERT into ${this.table} SET ?`;

    return await this.dbService.query(query, data);
  }

  async getCateBySlug(slug) {
    const query = `SELECT id from ${this.table} where slug=?`;

    return await this.dbService.query(query, slug);
  }

  async getTotalCate() {
    let query = `SELECT COUNT(id) as total_categories FROM ${this.table}`;

    const result = await this.dbService.query(query);
    return result[0].total_categories;
  }
}

module.exports = CategoryModel;
