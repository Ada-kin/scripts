const axios = require("axios")
const logger = require('node-color-log');

function getStatus() {
    axios.get(process.env.BASE_URL + '/core/api/jeeApi.php', {
        params: {
            apikey: process.env.API_KEY,
            plugin: "virtual",
            type: "cmd",
            id: 71,
            value: "#[Cuisine][DO-3 Détecteur ouverture n°3][Ouverture]#"
        }
    })
    .then(function (response) {
        logger.info(response.data)
    })
    .catch(function (error) {
        console.error("errr")
    })
    .then(function () {
        // console.debug("here")
    });
}

module.exports = {
    getStatus
}
