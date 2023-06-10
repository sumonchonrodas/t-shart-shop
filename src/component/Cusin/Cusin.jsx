import React, { Children } from 'react';
import Friend from '../Friend/Friend';

const Cusin = ({Children ,hasFrien}) => {
    return (
        <div>
            <h2>cusin</h2>
            <p><small>{Children}</small></p>
            {hasFrien && <Friend></Friend>}
        </div>
    );
};

export default Cusin;