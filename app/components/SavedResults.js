import React, { Component } from "react";
import PropTypes from "prop-types";

class SavedResults extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return this.props.isLoading ? (
            <div>Loading...</div>
        ) : (
            <div>Results</div>
        );
    }

};

SavedResults.props = {
    isLoading: PropTypes.bool,
    lastFiveResults: PropTypes.array,
}

export default SavedResults;