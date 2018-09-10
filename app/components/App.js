import React, { Component, PropTypes } from "react";
import { getWeatherByQuery } from "../api/metaweather";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: "",
        };
    }

    onGetWeather = async () => {
        const { query } = this.state;
        if (query) {
            const res = await getWeatherByQuery(query);
            console.log(res);
        }
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.query}
                    onChange={(event) => { this.setState({ query: event.target.value })}}
                />
                <button
                    onClick={this.onGetWeather}
                >
                    Get Weather
                </button>
            </div>
        );
    }

};

export default App;