"use client";
import React, { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item"; // Import the NewItem component
import itemsData from "./items.json"; // Import items.json as itemsData

const Page = () => {
  const [items, setItems] = useState(itemsData); // Initialize state variable with data from items.json

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]); // Event handler function to add a new item to items
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />{" "}
      {/* Pass the handleAddItem event handler to NewItem component */}
      <ItemList items={items} />{" "}
      {/* Pass the items state to ItemList component */}
    </main>
  );
};

export default Page;
