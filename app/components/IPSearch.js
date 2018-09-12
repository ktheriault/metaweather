import React, { Component } from "react";
import PropTypes from "prop-types";

import { getLocationsByIP } from "../api/metaweather";

class IPSearch extends Component {

    constructor(props) {
        super(props);
    }

    onSearch = async () => {
        this.props.setIsLoading(true);
        const locations = await getLocationsByIP();
        this.props.setCurrentLocations(locations)
        this.props.setIsLoading(false);
    }

    render() {
        return (
            <div>
                <button
                    onClick={this.onSearch}
                    disabled={this.props.isLoading}
                >
                    Search by IP
                </button>
            </div>
        );
    }

};

IPSearch.props = {
    isLoading: PropTypes.bool,
    setIsLoading: PropTypes.func,
    setCurrentLocations: PropTypes.func,
}

export default IPSearch;