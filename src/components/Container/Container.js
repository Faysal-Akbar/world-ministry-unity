import React, { useEffect, useState } from 'react';
import Presidents from '../Presidents/Presidents';
import './Container.css';

const Container = () => {
    const [presidents, setPresidents] = useState([]);

    useEffect( ()=> {
        fetch('./tools.json')
        .then(res => res.json())
        .then(data => setPresidents(data))
    }, []);

    return (
        <div className = "container">
            <div className = "card-container">
                {
                    presidents.map(president => <Presidents
                    key = {president.key}
                    president = {president}
                    ></Presidents>)
                }
            </div>

            <div className = "cart-container">
                <h3>Total : </h3>
            </div>
        </div>
    );
};

export default Container;