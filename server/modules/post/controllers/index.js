const PostServices = require("@post/services");

class PostControllers{
    constructor(){
        this.postServices = new PostServices();
        this.postlist = this.postlist.bind(this);
    }

    async postlist(req,res){
        const postList = await this.postServices.getPostList(req.params.offset);
        res.status(postList.status)
        res.send({
            data: postList.data,
            pagination: postList.pagination
        })
    }
}
module.exports = PostControllers;