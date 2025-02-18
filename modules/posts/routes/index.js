const PostControllers = require("@posts/controllers");

module.exports = app => {
    this.postControllers = new PostControllers();

    app.route("/post")
      .post(this.postControllers.addPost)
      .put(this.postControllers.updatePost)
      .get(this.postControllers.postList)
}