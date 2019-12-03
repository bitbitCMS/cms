const PostControllers = require("@post/controllers");

module.exports = app => {
    this.postControllers = new PostControllers();

    app.route("/post")
        .get(this.postControllers.postlist)

}