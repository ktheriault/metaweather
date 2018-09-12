import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { FormControl, Button } from "react-bootstrap";

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
            this.props.setCurrentResult(null);
            this.props.setCurrentLocations(locations)
            this.props.setIsLoading(false);
        }
    }

    render() {
        return (
            <div>
                <form className={classNames("form-inline")}>
                    <FormControl
                        className={classNames("form-control", "search-bar")}
                        value={this.state.query}
                        onChange={(event) => { this.setState({ query: event.target.value })}}
                        disabled={this.props.isLoading}
                    />
                    <Button
                        bsStyle="success"
                        type="submit"
                        onClick={this.onSearch}
                        disabled={this.props.isLoading}
                    >
                        Find My Location
                    </Button>
                </form>
            </div>
        );
    }

};

QuerySearch.props = {
    isLoading: PropTypes.bool,
    setIsLoading: PropTypes.func,
    setCurrentLocations: PropTypes.func,
    setCurrentResult: PropTypes.func,
}

export default QuerySearch;