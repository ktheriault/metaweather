export const SET_IS_LOADING = "SET_IS_LOADING";
export const SET_CURRENT_LOCATIONS = "SET_CURRENT_LOCATIONS";
export const SAVE_RESULT = "SAVE_RESULT";

export const setIsLoading = (isLoading) => {
    return {
        type: SET_IS_LOADING,
        isLoading,
    };
}

export const setCurrentLocations = (currentLocations) => {
    return {
        type: SET_CURRENT_LOCATIONS,
        currentLocations
    };
}

export const saveResult = (result) => {
    return {
        type: SAVE_RESULT,
        result,
    };
}
