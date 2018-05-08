import React from 'react';
// import { Link } from 'react-router-dom';


let EachData = (props) => {
    return (
    <div className="eachData"> 
        <h2>{props.attributes.business_name}</h2>
        <p>{props.type}  </p>
        <p>{props.attributes.city}, {props.attributes.state} </p>
    </div>
    )
}

export default EachData;