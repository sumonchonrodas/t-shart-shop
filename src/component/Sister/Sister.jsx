import React, { useContext } from 'react';
import { MoneyContext } from '../Granpa/Granpa';

const Sister = () => {

    const [money] = useContext(MoneyContext)
    return (
        <div>
            <h1>sister</h1>
            <p>Sister money : {money}</p>
        </div>
    );
};

export default Sister;