var data = require("../data.json");

var service = {};

/* GET users listing. */
service.getTopicsCount = function() {
  var allTopics = data
    .reduce((array, element) => {
      return array.concat(element.topics);
    }, [])
    .reduce((object, topic) => {
      object[topic.topic] = (object[topic.topic] || 0) + 1;
      return object;
    }, {});
  return allTopics;
};

module.exports = service;
