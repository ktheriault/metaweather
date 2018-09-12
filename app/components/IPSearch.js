import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Button } from "react-bootstrap";

import { getLocationsByIP } from "../api/metaweather";

class IPSearch extends Component {

    constructor(props) {
        super(props);
    }

    onSearch = async () => {
        this.props.setIsLoading(true);
        const locations = await getLocationsByIP();
        this.props.setCurrentResult(null);
        this.props.setCurrentLocations(locations);
        this.props.setIsLoading(false);
    }

    render() {
        return (
            <div>
                <Button
                    bsStyle="primary"
                    onClick={this.onSearch}
                    disabled={this.props.isLoading}
                >
                    Search by IP
                </Button>
            </div>
        );
    }

};

IPSearch.props = {
    isLoading: PropTypes.bool,
    setIsLoading: PropTypes.func,
    setCurrentLocations: PropTypes.func,
    setCurrentResult: PropTypes.func,
}

export default IPSearch;