var data = require('../data.json')

var service = {};

/* GET users listing. */
service.getTopics = function () {
    var topics = data.map(d => d.topics);
    return topics;
};

module.exports = service;