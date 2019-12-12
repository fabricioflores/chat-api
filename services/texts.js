var data = require("../data.json");

var service = {};

/* GET users listing. */
service.getFilteredCount = function() {
  var allTopics = data.reduce((object, topic) => {
    if (topic.filtered === 0) {
      object["no-filtered"] = (object["no-filtered"] || 0) + 1;
    } else {
      object["filtered"] = (object["filtered"] || 0) + 1;
    }
    return object;
  }, {});
  return allTopics;
};

module.exports = service;
