import React from "react";

const Spinner = ({ size = "w-8 h-8", color = "border-blue-500" }) => {
  return (
    <div className={`border-4 ${color} border-t-transparent rounded-full animate-spin ${size}`}></div>
  );
};

export default Spinner;
