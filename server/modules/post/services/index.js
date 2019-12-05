const PostModels = require('@post/models');

class PostServices{
    constructor(){
        this.postModels = new PostModels();
    }

    async getPostList(offset=0){
        const result = await this.postModels.getPostList(offset);
        return{
            status: 200,
            data: result,
            pagination: {
                count_item: result.length,
                limit: 10,
                offset: 10
            }
        }
    }
}
module.exports = PostServices;