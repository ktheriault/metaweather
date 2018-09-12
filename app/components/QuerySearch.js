import React, { Component } from "react";
import PropTypes from "prop-types";

import { getLocationsByQuery } from "../api/metaweather";

class QuerySearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: "",
        }
    }

    onSearch = async () => {
        const { query } = this.state;
        if (query) {
            this.props.setIsLoading(true);
            const locations = await getLocationsByQuery(query);
            this.props.setCurrentLocations(locations)
            this.props.setIsLoading(false);
        }
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.query}
                    onChange={(event) => { this.setState({ query: event.target.value })}}
                    disabled={this.props.isLoading}
                />
                <button
                    onClick={this.onSearch}
                    disabled={this.props.isLoading}
                >
                    Get Weather
                </button>
            </div>
        );
    }

};

QuerySearch.props = {
    isLoading: PropTypes.bool,
    setIsLoading: PropTypes.func,
    setCurrentLocations: PropTypes.func,
}

export default QuerySearch;