import React from "react";

export default function ColorBox() {
    const colors = [
      "bg-red-500",
      "bg-blue-500",
      "bg-green-500",
      "bg-yellow-500",
      "bg-purple-500",
      "bg-pink-500",
      "bg-orange-500",
      "bg-teal-500",
    ];

  return (
    <div className="flex gap-20 rotate-40">
      {[...Array(2)].map((_, colIndex) => (
        <div key={colIndex} className="flex flex-col gap-0.5">
          {[...Array(8)].map((_, rowIndex) => (
            <div key={rowIndex} className={`w-3 h-3 ${colors[rowIndex]}`}></div>
          ))}
        </div>
      ))}
    </div>
  );
}
