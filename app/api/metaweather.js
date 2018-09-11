const axios = require("axios");

const baseURL = `${location.origin}/api/v1`

function getWeatherByQuery(query) {
    const url = `${baseURL}/metaweather/query`;
    const body = { query };
    return axios.post(url, body)
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            return err;
        })
}

function getWeatherByCoordinates(latitude, longitude) {
    const url = `${baseURL}/location/search/?lattlong=${latitude},${longitude}`
    return axios.get(url)
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            return err;
        })
}

module.exports = {
    getWeatherByQuery, getWeatherByCoordinates
}