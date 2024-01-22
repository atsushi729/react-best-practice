import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    /**
     * Problem
     * We expect that count value will be 4 by one click, but actually value still 1.
     * 
     * Cause:
     * It is because that useState() is aysnc function so next setCount is called before change count state.
     *
     *     setCount(0 + 1); // count is still 0
     *     setCount(0 + 1);
     *     setCount(0 + 1);
     *     setCount(0 + 1);
     *     => 1 will be set as count
     *
     * Solution -> after.tsx
     *
     */
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="text-center">
        <button
          className="bg-blue-500 px-4 text-white rounded mb-5"
          onClick={handleClick}
        >
          Click me
        </button>

        <p>Count is {count}</p>
      </div>
    </div>
  );
};

export default Counter;
