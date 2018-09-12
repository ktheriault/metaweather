import * as actions from '../actions/actions';

const defaultState = {
    isLoading: false,
    currentLocations: [],
    currentResult: null,
    lastFiveResults: [],
};

const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case actions.SET_IS_LOADING: {
            const { isLoading } = action;
            return {
                ...state,
                isLoading,
            }
        }
        case actions.SET_CURRENT_LOCATIONS: {
            const { currentLocations } = action;
            return {
                ...state,
                currentLocations,
            }
        }
        case actions.SAVE_RESULT: {
            const { result } = action;
            if (state.lastFiveResults.length < 5) {
                const lastFiveResults = [
                    ...state.lastFiveResults,
                    result,
                ];
                return {
                    ...state,
                    lastFiveResults,
                    currentResult: result,
                };
            } else {
                const lastFiveResults = [
                    ...state.lastFiveResults.slice(1,5),
                    result,
                ];
                return {
                    ...state,
                    lastFiveResults,
                    currentResult: result,
                };
            }
        }
        default:
            return state;
    }
};

export default reducer;