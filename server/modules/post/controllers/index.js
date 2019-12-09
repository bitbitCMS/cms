const PostServices = require("@post/services");

class PostControllers{
    constructor(){
        this.postServices = new PostServices();
        this.postlist = this.postlist.bind(this);
        this.addpost = this.addpost.bind(this);
    }

    async postlist(req,res){
        const postList = await this.postServices.getPostList(req.params.offset);
        res.status(postList.status)
        res.send({
            data: postList.data,
            pagination: postList.pagination
        })
    }

    async addpost(req,res){
        const addPost = await this.postServices.create(req.body);
        res.status(addPost.status);
        if(addPost.status===201){
            res.send({
                data: addPost.id
            })
        }
        res.send({
            error: addPost.error
        });
    }
}
module.exports = PostControllers;