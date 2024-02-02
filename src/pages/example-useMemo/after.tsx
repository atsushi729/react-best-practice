import React, { useMemo, useState } from "react";

const Memo = () => {
  const [text, setText] = useState("");
  const [number, setNumber] = useState(0);

  const expensiveFunction = (number: number) => {
    console.log("Function re-rendered");
    let total = 0;
    for (let i = 0; i < number; i++) {
      total += 1;
    }
    return total;
  };

  const sum = useMemo(() => expensiveFunction(number), [number]);
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
        <input
          className="w-full px-4 py-2 leading-tight text-gray-700 bg-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          onChange={(e) => setNumber(Number(e.target.value))}
          type="number"
          placeholder="Enter number here"
        />
        <span>Total: {sum}</span>
        <br />
        <span>Text: {text}</span>
      </div>
    </div>
  );
};

export default Memo;
