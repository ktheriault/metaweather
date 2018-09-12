import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Well, Panel } from "react-bootstrap";

const SavedResults = (props) => {

    const getOnResultSelectedHandler = (i) => {
        return () => {
            props.setCurrentLocations(null);
            props.setCurrentResult(props.lastFiveResults[i])
        }
    }

    const { lastFiveResults } = props;
    return lastFiveResults && lastFiveResults.length > 0 ? (
        <div>
            <h3 className={classNames("title")}>
                Your saved results
            </h3>
            <Well className={classNames("saved-results-container")}>
                {lastFiveResults.map((result, i) => {
                    const date = new Date(result.time);
                    let month = date.getMonth() + 1;
                    if (month < 10) month = `0${month}`;
                    let day = date.getDate();
                    if (day < 10) day = `0${day}`;
                    const time = `${date.getFullYear()}-${month}-${day}`;
                    return (
                        <Panel
                            key={i}
                            className={classNames("saved-result")}
                            onClick={getOnResultSelectedHandler(i)}
                        >
                            <Panel.Body>
                                <div className={classNames("overflow-text")}>{result.title}</div>
                                <div className={classNames("overflow-text")}>{time}</div>
                            </Panel.Body>
                        </Panel>
                    );
                })}
            </Well>
        </div>
    ) : null;

};

SavedResults.props = {
    lastFiveResults: PropTypes.array,
    setCurrentLocations: PropTypes.func,
    setCurrentResult: PropTypes.func,
}

export default SavedResults;