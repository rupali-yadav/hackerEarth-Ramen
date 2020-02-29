import React from "react";
const RamenItem = (props) => (
    <div className="RamenItem">
        <p>{props.Brand}</p>
        <p>{props.Variety}</p>
        <p>{props.Style}</p>
        <p>{props.Country}</p>
        <p>{props.Stars}</p>
    </div>
);
export default RamenItem;