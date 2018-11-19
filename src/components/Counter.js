import React from "react";

export const Counter = ({ amount }) => {
    console.log(`------------------${amount}-----------------`)
  return (
    <div className="counter">
        <span className="counter-amount">{ amount }</span>
    </div>
  );
};

export default Counter;