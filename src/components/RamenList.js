import RamenItem from "./RamenItem"
import React from "react";
import { connect } from "react-redux";


const RamenList = (props) => (
    <div className="facebookSectionContainer">
        
         {props.restaurants.length===0 && <h1>NO RESTAURANTS</h1>}
        {
            props.restaurants.length>0 &&
            props.restaurants.map((restaurant) => {
                return <RamenItem key={restaurant.Brand} {...restaurant}/>
            })
        }   
       
    </div>
);
// export default RamenList;
const mapStateToProps= (state)=>{
   return {
       ramenRestaurantList: state.restaurants,
   }
}
export default connect(mapStateToProps)(RamenList);