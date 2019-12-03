const PostModels = require('@post/models');

class PostServices{
    constructor(){
        this.postModels = new PostModels();
    }

    async getPostList(){
        const result = await this.postModels.getPostList();
        return{
            status: 200,
            data: result
        }
    }
}
module.exports = PostServices;