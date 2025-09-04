import React from "react";

interface CardTableProps {
  color?: "dark" | "light"; // Support dark or light theme
}

const CardTable: React.FC<CardTableProps> = ({ color = "light" }) => {
  const bgClass = color === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800";
  const borderClass = color === "dark" ? "border-gray-700" : "border-gray-200";

  return (
    <div className={'p-4 rounded-lg shadow ${bgClass}'}>
      <h3 className="text-lg font-semibold mb-2">[Placeholder: Table Title]</h3>
      <div className="overflow-x-auto">
        <table className={'w-full ${borderClass}'}>
          <thead>
            <tr className={borderClass}>
              <th className="p-2 text-left">ID</th>
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr className={borderClass}>
              <td className="p-2">[Placeholder: 1]</td>
              <td className="p-2">[Placeholder: Item 1]</td>
              <td className="p-2">[Placeholder: 100]</td>
            </tr>
            <tr className={borderClass}>
              <td className="p-2">[Placeholder: 2]</td>
              <td className="p-2">[Placeholder: Item 2]</td>
              <td className="p-2">[Placeholder: 200]</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CardTable;