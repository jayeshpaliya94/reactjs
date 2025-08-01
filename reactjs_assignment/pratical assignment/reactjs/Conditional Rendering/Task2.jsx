import React, { useState } from "react";

function VotingEligibility() {
  const [age, setAge] = useState("");

  const isEligible = age >= 18;

  return (
    <div className="p-4 bg-white rounded-xl shadow-md max-w-md mx-auto space-y-4">
      <input
        type="number"
        placeholder="Enter your age"
        className="w-full px-3 py-2 border rounded-md"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <p className="text-lg font-medium">
        {age === ""
          ? "Please enter your age."
          : isEligible
          ? "You are eligible to vote."
          : "You are not eligible to vote."}
      </p>
    </div>
  );
}

export default VotingEligibility;
