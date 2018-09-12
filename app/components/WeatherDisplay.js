import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Well, Panel } from "react-bootstrap";

const WeatherDisplay = (props) => {

    const { isLoading, currentResult } = props;
    return isLoading ? (
        <div>Loading...</div>
    ) : currentResult ? (
        <div className={classNames("weather-display-container")}>
            <h3 className={classNames("title")}>
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
                                        <div className={classNames("overflow-text")}>Date: {weather.applicable_date}</div>
                                        <div className={classNames("overflow-text")}>Weather: {weather.weather_state_name}</div>
                                        <div className={classNames("overflow-text")}>Low: {weather.min_temp.toFixed(2)} C</div>
                                        <div className={classNames("overflow-text")}>High: {weather.max_temp.toFixed(2)} C</div>
                                    </Panel.Body>
                                </Panel>
                            </div>
                        )
                    })}
                </Well>
            </div>
        </div>
    ) : null;

};

WeatherDisplay.props = {
    isLoading: PropTypes.bool,
    currentResult: PropTypes.object,
}

export default WeatherDisplay;