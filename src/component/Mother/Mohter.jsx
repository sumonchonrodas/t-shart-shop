import React from 'react';
import Cusin from '../Cusin/Cusin';

const Mohter = () => {
    return (
        <div>
            <h5>mother</h5>
            <section className='flex'>
                <Cusin> abir</Cusin>
                <Cusin hasFrien={true}> nibr</Cusin>
                
            </section>
        </div>
    );
};

export default Mohter;