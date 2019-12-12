var data = require("../data.json");

var service = {};

service.getTopics = function() {
  var allTopics = data.reduce((array, element) => {
    return array.concat(element.topics);
  }, []);
  return allTopics;
};

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

service.getTopicsBannedCount = function() {
  var allTopics = data
    .filter(element => {
      return element.filtered === 1;
    })
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
