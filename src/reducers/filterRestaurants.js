const filterReducerDefaultSate = {
    text: undefined,
    country: undefined,
    year: undefined
}

const filterReducer = (state = filterReducerDefaultSate, action) => {
    switch (action.type) {
        case "SET_TEXT_FILTER":
            return {
                ...state,
                text: action.text
            };
            break;
        case "SET_COUNTRY_FILTER":
            return {
                ...state,
                country: action.country
            };
        case "SET_YEAR_FILTER":
            return {
                ...state,
                year: action.year
            };

        default:
            return state;
    }
}

export default filterReducer;