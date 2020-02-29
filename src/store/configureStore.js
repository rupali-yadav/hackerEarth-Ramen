import ramenRestaurantReducer from "../reducers/ramenRestaurant";
import filterRestaurantsReducer from '../reducers/filterRestaurants'
import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose
} from 'redux';

import thunk from 'redux-thunk';

export default () => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        combineReducers({
            restaurants: ramenRestaurantReducer,
            filters: filterRestaurantsReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};