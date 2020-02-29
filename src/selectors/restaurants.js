export default (restaurants,
    country,
    text,
    year
) => {
    return restaurants.filter((restaurant) => {
        // cons matchText = restaurant.Variety.includes(text) ? true :false
        // console.log(restaurant.Variety.includes(text))
        // console.log(restaurant.Country.includes(country))
        if (country == undefined && text == undefined && year == undefined) {
            return restaurant;
        } else if (restaurant.Variety.includes(text) ||
            restaurant.Brand.includes(text) ||
            restaurant.Country.includes(country) ||
            restaurant.year === year)
            return restaurant;

    })
};