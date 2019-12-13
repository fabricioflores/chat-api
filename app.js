var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");

var topics = require("./routes/topics");
var texts = require("./routes/texts");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/api/v1/topics", topics);
app.use("/api/v1/texts", texts);

module.exports = app;
