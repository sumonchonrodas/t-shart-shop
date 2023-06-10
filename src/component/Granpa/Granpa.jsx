import React, { createContext, useState } from "react";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Mohter from "../Mother/Mohter";
import "./Granpa.css";

export const RingContext = createContext("gold");
export const MoneyContext = createContext(0);
const Granpa = () => {
  const [money, setMoney] = useState(0);

  const ring = "diamon";
  return (
    <div className="granpa">
      <h2>Granpha</h2>
      <p>Has monye: {money}</p>
      <MoneyContext.Provider value={[money, setMoney]}>
        <RingContext.Provider value=" nothing bro">
          <section className="flex">
            <Father ring={ring} />
            <Uncle />
            <Mohter />
          </section>
        </RingContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default Granpa;
