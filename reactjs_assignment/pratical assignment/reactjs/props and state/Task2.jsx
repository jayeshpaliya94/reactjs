//Task 2: Counter Component Using React State
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center space-y-4 p-6 bg-gray-50 rounded-2xl shadow-md w-64 mx-auto mt-6">
      <h2 className="text-lg font-bold text-blue-700">Current Count: {count}</h2>
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
      >
        Increment
      </button>
    </div>
  );
}

export default Counter;
