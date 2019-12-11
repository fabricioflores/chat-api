var express = require('express');
var router = express.Router();
var topicsService = require('../services/topics');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.json(topicsService.getTopics());
});

module.exports = router;
