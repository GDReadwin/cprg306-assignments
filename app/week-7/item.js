import React from "react";

const Item = ({ name, quantity, category, onSelect }) => {
  return (
    <li
      className="border p-4 my-2 cursor-pointer hover:bg-gray-200 transition-colors duration-200"
      onClick={() => onSelect(name)}
    >
      <p className="font-bold">{name}</p>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>
    </li>
  );
};

export default Item;
