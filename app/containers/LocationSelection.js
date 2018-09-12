import { connect } from "react-redux";
import * as actions from "../actions/actions";
import LocationSelection from "../components/LocationSelection";

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        currentLocations: state.currentLocations,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setIsLoading: (isLoading) => {
            dispatch(actions.setIsLoading(isLoading));
        },
        saveResult: (result) => {
            dispatch(actions.saveResult(result));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationSelection);
