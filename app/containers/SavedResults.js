import { connect } from "react-redux";
import SavedResults from "../components/SavedResults";

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        lastFiveResults: state.lastFiveResults,
    }
};

export default connect(mapStateToProps)(SavedResults);
