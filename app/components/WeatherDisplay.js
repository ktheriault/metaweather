import React, { Component } from "react";
import PropTypes from "prop-types";

class WeatherDisplay extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { isLoading, currentResult } = this.props;
        return isLoading ? (
            <div>Loading...</div>
        ) : !currentResult ? (
            <div>No result</div>
        ) : (
            <div>
                {currentResult.consolidated_weather.map((weather) => {
                    return (
                        <div
                            key={weather.applicable_date}
                        >
                            <div>Date: {weather.applicable_date}</div>
                            <div>Weather: {weather.weather_state_name}</div>
                            <div>Low: {weather.min_temp}</div>
                            <div>High: {weather.max_temp}</div>
                        </div>
                    )
                })}
            </div>
        );
    }

};

WeatherDisplay.props = {
    isLoading: PropTypes.bool,
    currentResult: PropTypes.array,
}

export default WeatherDisplay;