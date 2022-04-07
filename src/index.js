// init project
let express = require("express");
let bodyParser = require("body-parser");
let cookieParser = require("cookie-parser");
let createError = require("http-errors");
let app = express();

var path = require("path");
global.appRoot = path.resolve(__dirname) + "/../";

console.log(appRoot);

app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app = require("./routes")(app);
/**
 * Page Not Found Error Route Handler
 */
app.use(function (req, res, next) {
  next(createError(404));
});

/**
 * Critical Error Route Handler
 */
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send(err);
});

// Listen on port 8080
var listener = app.listen(8080, function () {
  console.log("Listening on port " + listener.address().port);
});
