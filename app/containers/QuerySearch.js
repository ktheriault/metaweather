import { connect } from "react-redux";
import * as actions from "../actions/actions";
import QuerySearch from "../components/QuerySearch";

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setIsLoading: (isLoading) => {
            dispatch(actions.setIsLoading(isLoading));
        },
        setCurrentLocations: (results) => {
            dispatch(actions.setCurrentLocations(results));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuerySearch);
