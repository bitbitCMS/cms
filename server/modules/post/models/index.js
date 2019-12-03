const DBServices = require("@common/services/db.common.service.js");

class PostModels{
    constructor(){
        this.dbServices = new DBServices();
    }

    async getPostList(){
        const query = `SELECT * FROM post WHERE status='published'`
        return await this.dbServices.query(query)
    }
}

module.exports = PostModels;