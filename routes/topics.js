var express = require("express");
var router = express.Router();
var topicsService = require("../services/topics");

router.get("/count", function(req, res, next) {
  res.json(topicsService.getTopicsCount());
});

module.exports = router;
