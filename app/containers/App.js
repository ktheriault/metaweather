import { connect } from "react-redux";
import App from "../components/App";

const mapStateToProps = (state) => {
    return {
        currentResult: state.currentResult,
    }
};

export default connect(mapStateToProps)(App);
