import React from 'react';
// import { Link } from 'react-router-dom';


let EachData = (props) => {
    return (
    <div className="each-data-container">
    <div className="each-data"> 
        <h2>{props.attributes.business_name}</h2>
        <p>Type: {props.type}  </p>
        <p>Location: {props.attributes.city}, {props.attributes.state} </p>
    </div>
    </div>
    )
}

export default EachData;