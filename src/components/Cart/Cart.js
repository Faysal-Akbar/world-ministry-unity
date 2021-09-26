import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;

    let totalBudget = 0;
    let names = [];
    for(const president of cart){
        totalBudget = totalBudget + president.budget;
        names = [...names, president];
    };

    const nameStyle = {
        border: "1px solid gray",
        padding: "5px 10px",
        textAlign: "center",
        backgroundColor: "lightblue",
        color: "blue"
    };
    return (
        <div className = "cart">
            <h2 style = {{textAlign: "center", color: "blue"}}>Person Cart</h2>
            <h3>Total Person : {cart.length}</h3>
            <h3>Total Cost : ${totalBudget}</h3>
            <br />
            {
                names.map(name => <h3 style = {nameStyle} key = {name.id}>{name.name}</h3>)
            }
        </div>
    );
};
export default Cart;