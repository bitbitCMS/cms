const DBServices = require("@common/services/db.common.service.js");

class PostModels{
    constructor(){
        this.dbServices = new DBServices();
    }

    async getPostList(offset=0, limit=10){
        const query = `SELECT * FROM post WHERE status=1 LIMIT ${offset},${limit}`
        return await this.dbServices.query(query)
    }

    async getPagination(){
        const query = `SELECT COUNT(id) AS total_item FROM post WHERE status=1`
        const result = await this.dbServices.query(query)
        return result[0].total_item
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

    async getCategoriesByPostsId(postsId){
        const query = `SELECT pc.posts_id, c.name, c.id as category_id FROM posts_categories pc
          LEFT JOIN categories c ON c.id = pc.categories_id
          WHERE pc.posts_id IN (?)`;
        
        const result = await this.dbServices.query(query, [postsId]);
        return result;
    }
}

module.exports = PostModels;