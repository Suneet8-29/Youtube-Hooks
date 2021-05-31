import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
    const [data, setData] = useState([100, 200, 300, 400, 500]);
    const length = data.length;
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((value) => (value >= length - 1 ? 0 : value + 1));
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [count, length]);
    
    const handleBack = () => {
        setCount(value=> value === 0 ? length-1 : value-1 )
    }

    const handleFront = () => {
        setCount(value=> value >= length-1 ? 0 : value+1 )
    }
    
  return (
    <div>
      {data.map((el, index) => {
        return (
          <div key={index}>
            {count === index ? (
              <>
                <button onClick={handleBack}>back</button>
                <div>{el}</div>
                <button onClick={handleFront}>front</button>
              </>
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Counter;
