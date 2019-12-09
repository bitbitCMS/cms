const DBServices = require("@common/services/db.common.service.js");

class PostModels{
    constructor(){
        this.dbServices = new DBServices();
    }

    async getPostList(offset){
        const query = `SELECT * FROM post WHERE status='published' LIMIT ${offset},10`
        return await this.dbServices.query(query)
    }

    async getPostBySlug(slug){
        const query = `SELECT * FROM post WHERE slug=?`;
        return await this.dbServices.query(query,slug);
    }

    async create(data){
        const query = `INSERT INTO post SET ?`;
        return await this.dbServices.query(query,data);
    }

    async update(id,data){
        const query = `UPDATE post SET ? WHERE id=?`;
        return await this.dbServices.query(query,[data,id]);
    }
}

module.exports = PostModels;