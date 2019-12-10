const DBServices = require("@common/services/db.common.service.js");

class PostModels{
    constructor(){
        this.dbServices = new DBServices();
    }

    async getPostList(offset){
        const query = `SELECT * FROM post WHERE status='published' LIMIT ${offset},10`
        return await this.dbServices.query(query)
    }

    async getPostByTitle(post_title){
        const query = `SELECT * FROM post WHERE post_title=?`;
        return await this.dbServices.query(query,post_title);
    }

    async create(data){
        const query = `INSERT INTO post SET ?`;
        return await this.dbServices.query(query,data);
    }

    async updatePost(id,data){
        const query = `UPDATE post SET ? WHERE id=?`;
        return await this.dbServices.query(query,[id,data]);
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