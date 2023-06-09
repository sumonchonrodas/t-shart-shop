import React from 'react';
import {useLoaderData} from 'react-router-dom'

const Home = () => {
    const tsharts = useLoaderData()
    console.log(tsharts);
    return (
        <div>
            <h2>hay, i am Home</h2>
        </div>
    );
};

export default Home;