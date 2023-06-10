import React, { useState } from 'react';
import {useLoaderData} from 'react-router-dom'
import Tshart from '../Tshart/Tshart';
import Cart from '../Cart/Cart';
import './Home.css'
import toast from 'react-hot-toast';

const Home = () => {
    const tsharts = useLoaderData()
    const [cart,setCart] = useState([]);

    const handleAddToCart = tshar =>{
        // console.log(tshar);
        const exiest = cart.find(ts =>ts._id===tshar._id);
        if(exiest){
            toast.error('You have added already.')
        }
        else{

            const newArrya = [...cart, tshar];
            setCart(newArrya);
        }
    }
    const handleRemoveCart = id =>{
        const remaining = cart.filter(item =>item._id !== id)
        setCart(remaining)
    }
    return (
        <div className='home-container'>
            <div className="tshart-container">
            {
                tsharts.map(tshart =><Tshart 
                    key={tshart._id}
                    tshart={tshart}
                    handleAddToCart={handleAddToCart}
                    ></Tshart>)
            }
            </div>
            <div className="cart-containr">
                <Cart 
                cart={cart}
                handleRemoveCart={handleRemoveCart}
                ></Cart>
            </div>
            
        </div>
    );
};

export default Home;
/*
1.Conditional rendaring

*/