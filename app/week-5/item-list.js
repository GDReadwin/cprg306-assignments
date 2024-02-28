// Import necessary modules
import { useClient } from "next/client";
import React, { useState } from "react";
import Item from "./item";
import items from "./items.json";

// Create the functional component named ItemList
const ItemList = () => {
  // Step 1: Initialize sortBy state variable and its setter function
  const [sortBy, setSortBy] = useState("name");

  // Step 2: Sort the items array based on the sortBy state variable
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  // Step 3: Create Sort Buttons
  const handleSortByName = () => {
    setSortBy("name");
  };

  const handleSortByCategory = () => {
    setSortBy("category");
  };

  // Step 4: Render the items with sorting and buttons
  return (
    <div>
      <div>
        {/* Sort by Name button */}
        <button
          onClick={handleSortByName}
          style={{ backgroundColor: sortBy === "name" ? "lightblue" : "white" }}
        >
          Sort by Name
        </button>
        {/* Sort by Category button */}
        <button
          onClick={handleSortByCategory}
          style={{
            backgroundColor: sortBy === "category" ? "lightblue" : "white",
          }}
        >
          Sort by Category
        </button>
      </div>
      {/* Render sorted items */}
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
