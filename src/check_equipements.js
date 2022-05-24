const logger = require('node-color-log');
const apiVirtuals = require('./apis/virutal_plugin.js')

require("dotenv").config()

logger.debug("url :", process.env.BASE_URL);
logger.debug("api key", process.env.API_KEY);

console.log();
console.log();
console.log();

apiVirtuals.getStatus();