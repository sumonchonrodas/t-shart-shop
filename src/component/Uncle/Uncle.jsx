import React, { useContext } from 'react';
import Cusin from '../Cusin/Cusin';
import { MoneyContext } from '../Granpa/Granpa';

const Uncle = () => {
    const [money,setMoney] =useContext(MoneyContext)
    return (
        <div>
            <h3>uncle</h3>
            <p>Money : {money}</p>
            <section className='flex'>
                <Cusin>Nabil</Cusin>
                <Cusin>Nabila</Cusin>
            </section>

            <button onClick={()=>setMoney(money+1)}>increase</button>
            <button onClick={()=>setMoney(money-1)}>Decreas</button>
            {money<0? alert('nagitive money not allow'):setMoney(money)}

        </div>
    );
};

export default Uncle;