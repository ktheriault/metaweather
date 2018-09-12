import React, { Component } from "react";
import QuerySearch from "../containers/QuerySearch";
import IPSearch from "../containers/IPSearch";
import LocationSelection from "../containers/LocationSelection";
import WeatherDisplay from "../containers/WeatherDisplay";
import SavedResults from "../containers/SavedResults";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
        };
    }

    render() {
        return (
            <div>
                <QuerySearch/>
                <IPSearch/>
                <LocationSelection/>
                <WeatherDisplay/>
            </div>
        );
    }

};

export default App;