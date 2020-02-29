import React, { Component } from "react";
import {
    connect
} from 'react-redux';

import RamenList from './RamenList'
import selectRestaurants from '../selectors/restaurants';
import {
    sortByCountry
, setTextFilter,
listRestaurants,
setYearFilter
}
from '../actions/ramenAction'

class RamenPage extends Component {
    constructor() {
        super();
        this.state = {
            text: '',
            country:'',
            year:'',
            data:[]
        };
    }
componentDidUpdate(){
        this.processYearData(this.props.restaurants)

}
    componentDidMount() {
        //  const response = await fetch(`http://starlord.hackerearth.com/TopRamen`);
        //  const json = await response.json();
        // fetch(`http://starlord.hackerearth.com/TopRamen`)
        //     .then(res => res.json())
        //     .then(json => this.setState({
        //         data: json
        //     }));
        //     console.log(json)
         this.props.dispatch(listRestaurants([{
             "Brand": "MAMA",
             "Variety": "Instant Noodles Coconut Milk Flavour",
             "Style": "Pack",
             "Country": "Myanmar",
             "Stars": 5,
             "Top Ten": "2016 #10"
         }, {
             "Brand": "Prima Taste",
             "Variety": "Singapore Laksa Wholegrain La Mian",
             "Style": "Nan",
             "Country": "Singapore",
             "Stars": 5,
             "Top Ten": "2015 #1"
         }]))
        // this.props.dispatch(processYearData(this.props.restaurants))
    }
    processYearData = (restaurants) => {
          const yearArray = [];

          restaurants.map(restaurant => {
              if (!yearArray.includes(restaurant.year)) {
                  yearArray.push(restaurant.year)
              }
          })
    }
    onSearchChange=(e)=>{
        const text = e.target.value;
        this.setState(() => ({
            text
        }))
          this.props.dispatch(setTextFilter(text))
    }
     onCountryChange = (e) => {
         const country = e.target.value;
         this.setState(() => ({
             country
         }));
         this.props.dispatch(sortByCountry(country))
     }
     onYearChange = (e) =>{
            const year = e.target.value;
            this.setState(() => ({
                year
            }));
            this.props.dispatch(setYearFilter(year))
     }
    render(){
        return(
            <div>
             
                <select id="year" onChange={this.onYearChange}>
                {this.props.restaurants.map(restaurant=>{
                    return <option key={restaurant.id} value={restaurant.year}>{restaurant.year}</option>
                })}
                </select> 
                <input placeholder="search..." value={this.state.text} onChange={this.onSearchChange} />
                <input placeholder="sort by country" value={this.state.country} onChange={this.onCountryChange} />
                <RamenList restaurants={this.props.restaurants} />
            </div>
        )
    }
}

    const mapStateToComponentProps = (state) => {
        console.log(state)
        return {
            restaurants: selectRestaurants(state.restaurants, state.filters.country, state.filters.text, state.filters.year)
        };
    };

    const ConnectedRamenPage = connect(mapStateToComponentProps)(RamenPage);

    export default ConnectedRamenPage;

