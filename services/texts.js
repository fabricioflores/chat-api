var data = require("../data.json");

var service = {};

/* GET users listing. */
service.getFilteredCount = function () {
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

service.getCountByPlayerTop = function () {
  var allTopics = data.reduce((object, text) => {
    object[text.player] = (object[text.player] || 0) + 1;
    return object;
  }, {});
  var sortable = [];
  for (var vehicle in allTopics) {
    sortable.push([vehicle, allTopics[vehicle]]);
  }

  var filtered = sortable.sort(function (a, b) {
    return b[1] - a[1];
  }).filter(a => a[1] > 100);

  var objSorted = {}
  filtered.forEach(function (item) {
    objSorted[item[0]] = item[1]
  });

  return objSorted;
};

module.exports = service;
