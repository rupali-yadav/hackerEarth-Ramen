const topRamenReducerDefaultstate = [

]
    // restaurants: []
    // text: undefined,
    // country: undefined,
    // year: undefined
// }
const ramenRestaurantReducer = (state = topRamenReducerDefaultstate, action) => {
    switch (action.type) {
        case "LIST_RESTAURANTS":
            return [
                ...action.restaurants
            ]
            break;
        default:
            return state;
    }
}
export default ramenRestaurantReducer;