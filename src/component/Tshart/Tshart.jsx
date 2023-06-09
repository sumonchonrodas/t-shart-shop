import React from 'react';
import './Tshart.css'

const Tshart = ({tshart,handleAddToCart}) => {
    const {picture,name,price} =tshart;
    return (
        <div className='t-shart'> 
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price : ${price}</p>
            <button onClick={()=>handleAddToCart(tshart)}>Buy now</button>
        </div>
    );
};

export default Tshart;