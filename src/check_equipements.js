const logger = require('node-color-log');
const apiVirtuals = require('./apis/virutal_plugin.js')
const equipements = require('./config/equipements.json');
// import equipements from "./config/equipements" assert {type: 'json'};

require("dotenv").config()

logger.debug("url :", process.env.BASE_URL);
logger.debug("api key", process.env.API_KEY);

// logger.info("EQ :", equipements);

console.log();
console.log();
console.log();

equipements.map(equipement => {
    // logger.debug(equipement)
    if (equipement.id && equipement.name && equipement.value)
        apiVirtuals.getStatus(equipement)
            .then(function (response) {
                // logger.debug(response.data);

                response.data.toString() === "1" || response.data.toString() === "0" ?
                // logger.info(util.format("%s%s%s","".padStart(3), equipement.name + ":".padEnd(5), "OK")) :
                logger.info(" "+ equipement.name +": OK (" + (response.data.toString() === "1" ? "OUVERTE" : "FERMÉE") + ")") :
                logger.error(equipement.name +": KO (" + response.data + ")")
            })
            .catch(function (error) {
                logger.error(error);
            })
            .then(function () {
            });
    else logger.error("Equipement config missing value for '" + equipement.name + "' :" + equipement)
})
