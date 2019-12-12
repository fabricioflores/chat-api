var express = require("express");
var router = express.Router();
var topicsService = require("../services/topics");

/* GET users listing. */
router.get("/count", function(req, res, next) {
  res.json(topicsService.getTopicsCount());
});

module.exports = router;
