import { connect } from "react-redux";
import * as actions from "../actions/actions";
import SavedResults from "../components/SavedResults";

const mapStateToProps = (state) => {
    return {
        lastFiveResults: state.lastFiveResults,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentLocations: (currentLocation) => {
            dispatch(actions.setCurrentLocations(currentLocation));
        },
        setCurrentResult: (result) => {
            dispatch(actions.setCurrentResult(result));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SavedResults);
