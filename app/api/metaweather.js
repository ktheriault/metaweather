const axios = require("axios");

const baseURL = `${location.origin}/api/v1`

function getLocationsByQuery(query) {
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

function getLocationsByCoordinates(latitude, longitude) {
    const url = `${baseURL}/metaweather/coordinates`;
    const body = { latitude, longitude };
    return axios.post(url, body)
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            return err;
        })
}

// Doesn't run on the live Heroku site because of "mixed content".
// So I'm using the react-geolocated wrapper on the IPSearch component instead.
function getLocationsByIP() {
    const url = "http://ip-api.com/json";
    return axios.get(url)
        .then((response) => {
            return response.data;
        })
        .then((data) => {
            const { lat, lon } = data;
            return getLocationsByCoordinates(lat, lon)
        })
        .catch((err) => {
            return err;
        })
}

function getWeather(woeid) {
    const url = `${baseURL}/metaweather/woeid`;
    const body = { woeid };
    return axios.post(url, body)
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            return err;
        })
}

module.exports = {
    getLocationsByQuery, getLocationsByCoordinates, getWeather
}