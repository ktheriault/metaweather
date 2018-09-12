import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Grid, Row, Col } from "react-bootstrap";

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
                <Grid>
                    <Row>
                        <Col sm={12} md={5} className={classNames("search-component")}>
                            <QuerySearch/>
                        </Col>
                        <Col sm={12} md={2} className={classNames("search-component")}>
                            <h5>- or -</h5>
                        </Col>
                        <Col sm={12} md={5} className={classNames("search-component")}>
                            <IPSearch/>
                        </Col>
                    </Row>
                </Grid>
                {currentLocations && currentLocations.length > 0 ? <LocationSelection/> : null}
                {currentResult ? <WeatherDisplay/> : null}
                <SavedResults/>
            </div>
        );
    }

};

App.propTypes = {
    currentLocations: PropTypes.array,
    currentResult: PropTypes.object,
}

export default App;