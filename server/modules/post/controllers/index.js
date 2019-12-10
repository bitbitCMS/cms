const PostServices = require("@post/services");

class PostControllers{
    constructor(){
        this.postServices = new PostServices();
        this.addPost = this.addPost.bind(this);
        this.updatePost = this.updatePost.bind(this);
    }

    async addPost(req,res){
        const addPost = await this.postServices.create(req.body);
        res.status(addPost.status);
        if(addPost.status===201){
            res.send({
                data: addPost.id
            })
        }else{
            res.send({
                error: addPost.error
            });
        }
    }

    async updatePost(req,res){
        const updatePost = await this.postServices.update(req.body); 
        res.status(updatePost.status);
        if(updatePost.status===201){
            res.send({id: updatePost.id});
        }else{
            res.send({error: updatePost.error});
        }
    }
}
module.exports = PostControllers;