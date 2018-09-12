import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Well, Panel } from "react-bootstrap";

import { getWeather } from "../api/metaweather";

const LocationSelection = (props) => {

    const getOnLocationSelectedHandler = (i) => {
        return async () => {
            props.setIsLoading(true);
            const res = await getWeather(props.currentLocations[i].woeid)
            props.setCurrentLocations(null)
            props.saveResult(res);
            props.setIsLoading(false);    
        }
    }

    const { isLoading, currentLocations } = props;
    return isLoading ? (
        <div>Loading...</div>
    ) : (
        <Well className={classNames("locations-container")}>
            {currentLocations && currentLocations.length === 0 ? (
                <div>Enter a query to get started</div>
            ) : (
                <div>
                    <h4 className={classNames("title")}>
                        Select your location:
                    </h4>
                    {currentLocations.map((location, i) => {
                        return (
                            <Panel
                                key={location.woeid}
                                className={classNames("location")}
                                onClick={getOnLocationSelectedHandler(i)}
                            >
                                <Panel.Body>
                                    {location.title}
                                </Panel.Body>
                            </Panel>
                        )
                    })}
                </div>
            )}
        </Well>
    );

};

LocationSelection.props = {
    isLoading: PropTypes.bool,
    currentLocations: PropTypes.array,
    setCurrentLocations: PropTypes.func,
    setIsLoading: PropTypes.func,
}

export default LocationSelection;