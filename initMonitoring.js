var stats = require("rhmap-stats").init({
  host: process.env.MONITORING_HOST,
  port: process.env.MONITORING_PORT
});

module.exports.stats = stats;

module.exports.log = function(msg, object) {
  console.log(new Date(), msg + ': ', object);
};