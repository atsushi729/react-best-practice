import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    /**
     * Solution:
     * Use updater function.　To increase the value 4 by one with each click, use the previous value.
     * By coding in the following way, you can ensure that the current value is always updated from the previous value.
     *
     *     setCount(0 + 1);
     *     setCount(1 + 1);
     *     setCount(2 + 1);
     *     setCount(3 + 1);
     *     => 4 will be set as count.
     *
     * Rererence:
     * EN
     * https://react.dev/reference/react/useState#updating-state-based-on-the-previous-state
     *
     * JA
     * https://ja.react.dev/reference/react/useState#updating-state-based-on-the-previous-state
     *
     */
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
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
