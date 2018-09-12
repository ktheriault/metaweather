import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Well, Panel } from "react-bootstrap";

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
                <h3>
                    Showing weather for {currentResult.title}
                </h3>
                <div>
                    <Well className={classNames("weather-container")}>
                        {currentResult.consolidated_weather.map((weather) => {
                            return (
                                <div
                                    key={weather.applicable_date}
                                >
                                    <Panel>
                                        <Panel.Body>
                                            <div>Date: {weather.applicable_date}</div>
                                            <div>Weather: {weather.weather_state_name}</div>
                                            <div>Low: {weather.min_temp.toFixed(2)} C</div>
                                            <div>High: {weather.max_temp.toFixed(2)} C</div>
                                        </Panel.Body>
                                    </Panel>
                                </div>
                            )
                        })}
                    </Well>
                </div>
            </div>
        );
    }

};

WeatherDisplay.props = {
    isLoading: PropTypes.bool,
    currentResult: PropTypes.object,
}

export default WeatherDisplay;