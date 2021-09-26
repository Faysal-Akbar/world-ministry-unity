import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'
import './Presidents.css';

const Presidents = (props) => {
    const {name, age, country, position, budget, image} = props.president;
    const CardIcon = <FontAwesomeIcon icon={faCartPlus} />
    return (
        <div className = "president">
            <img className = "president-image" src={image} alt="" />
            <h3 style = {{color: "blue"}}>{name}</h3>
            <h4>Age : {age}</h4>
            <h4>Country : {country}</h4>
            <h4>Post : {position}</h4>
            <h3>Total Budget : ${budget}</h3>
            <button onClick = { ()=> props.handleAddToCart(props.president)} className = "regular-button">{CardIcon} Add to Cart</button>
            <br />
            <div className = "social-icon">
                <a href="/facebook"><i class="fab fa-facebook"></i></a>
                <a href="/twitter"><i class="fab fa-twitter-square"></i></a>
                <a href="/instagram"><i class="fab fa-instagram-square"></i></a>
            </div>
        </div>
    );
};

export default Presidents;