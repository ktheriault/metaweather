import React, { Component } from "react";
import PropTypes from "prop-types";

import { getWeather } from "../api/metaweather";

class LocationSelection extends Component {

    constructor(props) {
        super(props);
    }

    getOnLocationSelectedHandler = (i) => {
        return async () => {
            this.props.setIsLoading(true);
            const res = await getWeather(this.props.currentLocations[i].woeid)
            this.props.saveResult(res);
            this.props.setIsLoading(false);    
        }
    }

    render() {
        const { isLoading, currentLocations } = this.props;
        return isLoading ? (
            <div>Loading...</div>
        ) : currentLocations.length === 0 ? (
            <div>Enter a query to get started</div>
        ) : (
            <div>
                {currentLocations.map((location, i) => {
                    return (
                        <div
                            key={location.woeid}
                            onClick={this.getOnLocationSelectedHandler(i)}
                        >
                            {location.title}
                        </div>
                    )
                })}
            </div>
        );
    }

};

LocationSelection.props = {
    isLoading: PropTypes.bool,
    currentLocations: PropTypes.array,
    setIsLoading: PropTypes.func,
}

export default LocationSelection;