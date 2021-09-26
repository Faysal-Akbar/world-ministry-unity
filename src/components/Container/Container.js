import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Presidents from '../Presidents/Presidents';
import './Container.css';

const Container = () => {
    const [presidents, setPresidents] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( ()=> {
        fetch('./tools.json')
        .then(res => res.json())
        .then(data => setPresidents(data))
    }, []);

    const handleAddToCart = (presidents) => {
        const newCart = [...cart, presidents];
        setCart(newCart);
    }

    return (
        <div className = "container">
            <div className = "card-container">
                {
                    presidents.map(president => <Presidents
                    key = {president.id}
                    president = {president}
                    handleAddToCart = {handleAddToCart}
                    ></Presidents>)
                }
            </div>

            <div className = "cart-container">
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Container;