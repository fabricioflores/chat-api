var express = require("express");
var router = express.Router();
var textsService = require("../services/texts");

/* GET users listing. */
router.get("/filteredCount", function(req, res, next) {
  res.json(textsService.getFilteredCount());
});

module.exports = router;
