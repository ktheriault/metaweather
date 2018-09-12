import React from "react";
import PropTypes from "prop-types";
import { geolocated } from "react-geolocated";
import { Button } from "react-bootstrap";

import { getLocationsByCoordinates } from "../api/metaweather";

const IPSearch = (props) => {

    const onSearch = async () => {
        const { coords } = props;
        if (coords && coords.latitude && coords.longitude) {
            props.setIsLoading(true);
            const locations = await getLocationsByCoordinates(coords.latitude, coords.longitude);
            props.setCurrentResult(null);
            props.setCurrentLocations(locations);
            props.setIsLoading(false);
        }
    }

    return (
        <div>
            <Button
                bsStyle="primary"
                onClick={onSearch}
                disabled={props.isLoading || !props.isGeolocationAvailable || !props.coords}
            >
                Search by IP
            </Button>
        </div>
    );

};

IPSearch.props = {
    isLoading: PropTypes.bool,
    setIsLoading: PropTypes.func,
    setCurrentLocations: PropTypes.func,
    setCurrentResult: PropTypes.func,
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(IPSearch);