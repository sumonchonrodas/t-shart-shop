import React, { useContext } from 'react';
import { RingContext } from '../Granpa/Granpa';

const Brother = () => {
    const ring = useContext(RingContext)
    return (
        <div>
            <p>Brother got: {ring}</p>
        </div>
    );
};

export default Brother;