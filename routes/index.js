const userRoute = require("@user/routes");
const categoryRoute = require("@categories/routes");
const postRoute = require("@posts/routes");

module.exports = app => {

  app.route("/aceh").get((req, res) => {
    res.send("Hi Apa Aceh, pastikan lagi asdf!");
  });

  userRoute(app);
  postRoute(app);
  categoryRoute(app);
};
