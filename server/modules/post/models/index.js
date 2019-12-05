const DBServices = require("@common/services/db.common.service.js");

class PostModels{
    constructor(){
        this.dbServices = new DBServices();
    }

    async getPostList(offset){
        const query = `SELECT * FROM post WHERE status='published' LIMIT ${offset},10`
        return await this.dbServices.query(query)
    }
}

module.exports = PostModels;