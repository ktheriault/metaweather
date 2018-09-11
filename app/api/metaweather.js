const axios = require("axios");

const baseURL = "https://www.metaweather.com/api"

function getWeatherByQuery(query) {
    //const url = `${baseURL}/location/search/?query=${query}`
    const url = `${baseURL}/location/44418/2013/4/27`
    return axios.get(url)
        .then((response) => {
            console.log(response)
            return response.data;
        })
        .catch((err) => {
            console.log(err);
            return err;
        })
}

function getWeatherByCoordinates(latitude, longitude) {
    const url = `${baseURL}/location/search/?lattlong=${latitude},${longitude}`
    return axios.get(url)
        .then((response) => {
            console.log(response)
            return response.data;
        })
        .catch((err) => {
            console.log(err);
            return err;
        })
}


module.exports = {
    getWeatherByQuery, getWeatherByCoordinates
}