const PostControllers = require("@post/controllers");

module.exports = app => {
    this.postControllers = new PostControllers();

    app.route("/post")
        .get(this.postControllers.postlist)
        .post(this.postControllers.addpost)
    app.route("/post/:offset")
        .get(this.postControllers.postlist)

}