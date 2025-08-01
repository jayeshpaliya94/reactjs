 import React, { useState } from "react";

function ClickButton() {
  const [clicked, setClicked] = useState(false);

  return (
    <button
      className="px-4 py-2 bg-green-600 text-white rounded-md"
      onClick={() => setClicked(true)}
    >
      {clicked ? "Clicked!" : "Not Clicked"}
    </button>
  );
}

export default ClickButton;
