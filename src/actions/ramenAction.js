import uuid from 'uuid';

export const sortByCountry = (country = '') => ({
    type: "SET_COUNTRY_FILTER",
    country
});
export const setTextFilter = (text = "") => ({
    type: "SET_TEXT_FILTER",
    text
});
export const setYearFilter = (year = "") => ({
    type: "SET_YEAR_FILTER",
    year
});
export const listRestaurants = (restaurants) => {
    const newList = restaurants.map(restaurant => {
        restaurant.year = Object.values(restaurant)[Object.keys(restaurant).length - 1].split("#")[0].trim();
        restaurant.id = uuid();
        return restaurant;
    })
    return {
        type: "LIST_RESTAURANTS",
        restaurants: newList
    }
}

