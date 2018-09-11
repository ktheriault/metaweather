const superagent = require("superagent");
const agent = superagent.agent();
const baseURL = "https://www.metaweather.com/api";

module.exports = function(router) {

    router.post("/metaweather/query", (req, res) => {
        const { query } = "";
        const url = `${baseURL}/location/search/?query=${query}`;
        agent.get(url)
            .end((err, response) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.status(200).send(response.body);
                }
            });
    });

    router.post("/metaweather/latitude", (req, res) => {
        const { latitude, longitude } = req.body;
        const url = `${baseURL}/location/search/?lattlong=${latitude},${longitude}`;
        agent.get(url)
            .end((err, response) => {
                if (err) {
                    console.log();
                    console.log("*** ERR ***");
                    console.log();
                    console.log(err);
                    console.log();
                    res.status(500).send(err);
                } else {
                    console.log();
                    console.log(response.body);
                    console.log();
                    res.status(200).send(response.body);
                }
            })
    });

}