const axios = require("axios")
const logger = require('node-color-log');

const getStatus = (equipement) =>  {
    return axios.get(process.env.BASE_URL + process.env.URL, {
        params: {
            apikey: process.env.API_KEY,
            plugin: "virtual",
            type: "cmd",
            id: equipement.id,
            value: equipement.value
        }
    });
}

module.exports = {
    getStatus
}
