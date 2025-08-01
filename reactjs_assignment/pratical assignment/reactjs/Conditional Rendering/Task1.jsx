import React from "react";

function UserCard({ name, age, location }) {
  return (
    <div className="max-w-sm mx-auto p-6 bg-white rounded-2xl shadow-md border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>
      <p className="text-gray-600"><span className="font-medium">Age:</span> {age}</p>
      <p className="text-gray-600"><span className="font-medium">Location:</span> {location}</p>
    </div>
  );
}

export default UserCard;
