var express = require("express");
var router = express.Router();
var textsService = require("../services/texts");

router.get("/filteredCount", function(req, res, next) {
  res.json(textsService.getFilteredCount());
});

router.get("/countByPlayer", function(req, res, next) {
  res.json(textsService.getCountByPlayer());
});

module.exports = router;
