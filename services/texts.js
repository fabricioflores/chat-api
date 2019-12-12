var data = require("../data.json");

var service = {};

/* GET users listing. */
service.getFilteredCount = function() {
  var allFiltered = data.reduce((object, text) => {
    if (text.filtered === 0) {
      object["no-filtered"] = (object["no-filtered"] || 0) + 1;
    } else {
      object["filtered"] = (object["filtered"] || 0) + 1;
    }
    return object;
  }, {});
  return allFiltered;
};

service.getCountByPlayer = function() {
  var allTopics = data.reduce((object, text) => {
    object[text.player] = (object[text.player] || 0) + 1;
    return object;
  }, {});
  return allTopics;
};

module.exports = service;
