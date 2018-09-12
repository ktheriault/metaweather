import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import QuerySearch from "../containers/QuerySearch";
import IPSearch from "../containers/IPSearch";
import LocationSelection from "../containers/LocationSelection";
import WeatherDisplay from "../containers/WeatherDisplay";
import SavedResults from "../containers/SavedResults";

import "../style/App.css";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
        };
    }

    render() {
        const { currentLocations, currentResult } = this.props;
        return (
            <div className={classNames("app-container")}>
                <div className={classNames("search-container")}>
                    <QuerySearch/>
                    {process.env.PORT ? null : <IPSearch/>}
                </div>
                {currentLocations && currentLocations.length > 0 ? <LocationSelection/> : null}
                {currentResult ? <WeatherDisplay/> : null}
            </div>
        );
    }

};

App.propTypes = {
    currentLocations: PropTypes.array,
    currentResult: PropTypes.object,
}

export default App;