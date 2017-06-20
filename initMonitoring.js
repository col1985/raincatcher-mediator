var stats = require("rhmap-stats").init({
  host: process.env.MONITORING_HOST,
  port: process.env.MONITORING_PORT
});

module.exports = stats;