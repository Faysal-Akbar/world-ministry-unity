import React from 'react';
import './Presidents.css';

const Presidents = (props) => {
    const {name, age, country, position, budget, image} = props.president;
    return (
        <div className = "president">
            <img className = "president-image" src={image} alt="" />
            <h3 style = {{color: "blue"}}>{name}</h3>
            <h4>Age : {age}</h4>
            <h4>Country : {country}</h4>
            <h4>Post : {position}</h4>
            <h3>Total Budget : /= {budget}</h3>
        </div>
    );
};

export default Presidents;