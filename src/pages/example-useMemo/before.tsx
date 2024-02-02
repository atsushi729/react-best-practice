import React, { useState } from "react";

const Memo = () => {
  const [text, setText] = useState("");

  const expensiveFunction = () => {
    console.log("call expensiveFunction");
    let total = 0;
    for (let i = 0; i < 10000000; i++) {
      total += 1;
    }
    return total;
  };

  const sum = expensiveFunction();
  console.log("Component re-rendered");

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-xs">
        <input
          className="w-full px-4 py-2 leading-tight text-gray-700 bg-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Enter text here"
        />
        <span>Total ; {sum}</span>
        <br />
        <span>Text ; {text}</span>
      </div>
    </div>
  );
};

export default Memo;
