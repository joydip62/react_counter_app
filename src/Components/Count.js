import React, { useState } from 'react'

export default function Count() {
    const [count, setCount] = useState(0);

    const incriment = () => {
        setCount(count + 1);
    }

    const dicriment = () => {
      setCount(count - 1);
    };
    
    const reset = () => {
      setCount(0);
    };


  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count : {count}</h2>
        <div className="card__btns">
          <button
            className="btn card__btn"
            onClick={incriment}
            disabled={count === 5 ? true : false}
          >
            +
          </button>
          <button
            className="btn card__btn"
            onClick={dicriment}
            disabled={count === -5 ? true : false}
          >
            -
          </button>
          <button className="btn card__btn" onClick={reset}>0</button>
        </div>
      </div>
    </div>
  );
}
