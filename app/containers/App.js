import { connect } from "react-redux";
import * as actions from "../actions/actions";
import App from "../components/App";

const mapStateToProps = (state) => {
    return {
        currentLocations: state.currentLocations,
        currentResult: state.currentResult,
    }
};

const mapDispatchToProps = (dispatch, props) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
