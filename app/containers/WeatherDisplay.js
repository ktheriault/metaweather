import { connect } from "react-redux";
import WeatherDisplay from "../components/WeatherDisplay";

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        currentResult: state.currentResult,
    }
};

export default connect(mapStateToProps)(WeatherDisplay);
