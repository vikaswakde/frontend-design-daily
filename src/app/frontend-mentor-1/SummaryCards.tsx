import React from "react";
const summaryData = [
  {
    category: "Reaction",
    score: 80,
    icon: "./assets/images/icon-reaction.svg",
  },
  {
    category: "Memory",
    score: 92,
    icon: "./assets/images/icon-memory.svg",
  },
  {
    category: "Verbal",
    score: 61,
    icon: "./assets/images/icon-verbal.svg",
  },
  {
    category: "Visual",
    score: 72,
    icon: "./assets/images/icon-visual.svg",
  },
];

const SummaryCards = () => {
  return (
    <div>
      {" "}
      <ul className="space-y-4">
        {summaryData.map((item) => (
          <li
            className="flex justify-between items-center bg-gray-600 h-12 rounded-lg px-5 mx-5"
            key={item.category}
          >
            <div className="flex space-x-3">
              <img src={item.icon} alt={item.category} />
              <div>{item.category}</div>
            </div>
            <div className="flex space-x-2">
              <span>{item.score}</span>
              <span>/100</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SummaryCards;
