const userRoute = require("@user/routes");
const postRoute = require("@post/routes");

module.exports = app => {
  
  app.route("/").get((req, res) => {
    res.send("Hi Apa Aceh, pastikan lagi asdf!");
  });
  
  userRoute(app);
  postRoute(app);

};
