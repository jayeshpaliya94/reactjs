 import React, { useState } from "react";

function DynamicInput() {
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col items-start space-y-2">
      <input
        type="text"
        className="border border-gray-300 px-3 py-2 rounded-md"
        placeholder="Type something..."
        onChange={(e) => setValue(e.target.value)}
      />
      <p className="text-gray-700">You typed: <strong>{value}</strong></p>
    </div>
  );
}

export default DynamicInput;
