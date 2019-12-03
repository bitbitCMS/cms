const PostServices = require("@post/services");

class PostControllers{
    constructor(){
        this.postServices = new PostServices();
        this.postlist = this.postlist.bind(this);
    }

    async postlist(req,res){
        const postList = await this.postServices.getPostList();
        res.status(postList.status)
        res.send({data: postList.data})
    }
}
module.exports = PostControllers;