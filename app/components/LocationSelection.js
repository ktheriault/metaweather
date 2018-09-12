import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Well, Panel } from "react-bootstrap";

import { getWeather } from "../api/metaweather";

class LocationSelection extends Component {

    constructor(props) {
        super(props);
    }

    getOnLocationSelectedHandler = (i) => {
        return async () => {
            this.props.setIsLoading(true);
            const res = await getWeather(this.props.currentLocations[i].woeid)
            this.props.setCurrentLocations(null)
            this.props.saveResult(res);
            this.props.setIsLoading(false);    
        }
    }

    render() {
        const { isLoading, currentLocations } = this.props;
        return isLoading ? (
            <div>Loading...</div>
        ) : (
            <Well className={classNames("locations-container")}>
                {currentLocations && currentLocations.length === 0 ? (
                    <div>Enter a query to get started</div>
                ) : (
                    <div>
                        <div>
                            Select your location:
                        </div>
                        {currentLocations.map((location, i) => {
                            return (
                                <div
                                    key={location.woeid}
                                    onClick={this.getOnLocationSelectedHandler(i)}
                                >
                                    <Panel>
                                        <Panel.Body>
                                            {location.title}
                                        </Panel.Body>
                                    </Panel>
                                </div>
                            )
                        })}
                    </div>
                )}
            </Well>
        );
    }

};

LocationSelection.props = {
    isLoading: PropTypes.bool,
    currentLocations: PropTypes.array,
    setCurrentLocations: PropTypes.func,
    setIsLoading: PropTypes.func,
}

export default LocationSelection;