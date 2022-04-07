let home = require("./home");
let gitlab = require("./gitlab");
module.exports = function (app) {
  app.use("/", home);
  app.use("/gitlab/", gitlab);
  return app;
};
