import React from "react";

const Item = ({ name, quantity, category }) => {
  return (
    <li className="border p-4 my-2">
      <p className="font-bold">{name}</p>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>
    </li>
  );
};

export default Item;
