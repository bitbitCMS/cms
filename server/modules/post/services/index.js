const PostModels = require('@post/models');
const Validate = require("fastest-validator");
const HttpStatus = require("http-status-codes");
const slug = require("slugify");

class PostServices{
    constructor(){
        this.postModels = new PostModels();
        this.validator = new Validate();
        this.schema = {
            post_title: {
                type: "string",
                min: 10
            }
        };
    }

    async create(data){
        data.slug = slug(data.post_title, {
            replacement: "-",
            remove: null,
            lower: true
        });

        const isFormValid = this.validator.validate(data,this.schema);

        if(isFormValid !== true){
            return{
                status: HttpStatus.BAD_REQUEST,
                error: {
                    error_code: "FORM_VALIDATION",
                    message: isFormValid
                }
            };
        }

        const postExist = await this.postValidation(data);
        if(postExist !== true){
            return{
                status: HttpStatus.BAD_REQUEST,
                error: {
                    error_code: "DATA_VALIDATION",
                    message: postExist
                }
            };
        }
        const postAdd = await this.postModels.create(data);

        if(postAdd.affectedRows===0){
            return {
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                message: "Internal Server Error"
            };
        }

        return {
            status: HttpStatus.CREATED,
            id: postAdd.insertId
        }
    }
    
    async postValidation(data){
        const { slug } = data;
        const postWithTitle = await this.postModels.getPostBySlug(slug);
        if(postWithTitle.length > 0){
            return [
                {
                    message: "Post Title already exist"
                }
            ];
        }
        return true;
    }

    async update(data){
        const id = data.id;
        delete(data.id);
        const isFormValid = this.validator.validate(data,this.schema);
        if(isFormValid!==true){
            return{
                status: HttpStatus.BAD_REQUEST,
                error: {
                    error_code: 'FORM_VALIDATION',
                    message: isFormValid,
                }
            }
        }

        //TODO:
        /*
        const isExist = this.postValidation(data);
        if(isExist==true){
            return {
                status: HttpStatus.BAD_REQUEST,
                error: {
                    error_code: 'DATA_VALIDATION',
                    message: isExist,
                }
            }
        }
        */
        const updatePost = await this.postModels.update(id,data);
        if(updatePost.affectedRows===0){
            return {
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                message: 'Internal Server Error',
            }
        }

        return {
            status: HttpStatus.CREATED,
            id: id,
        }
    }
}
module.exports = PostServices;