"use client";
import React, { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";
import { useUserAuth } from "./_utils/auth-context";

const Page = () => {
  const { user } = useUserAuth();
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  if (!user) {
    return <div>please log in to view the shopping list. </div>;
  }

  const handleItemSelect = (itemName) => {
    if (typeof itemName !== "string") {
      itemName = itemName.toString();
    }

    const cleanedItemName = itemName
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
        ""
      )
      .trim();

    setSelectedItemName(cleanedItemName);
  };

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <div className="container mx-auto px-4 py-8 flex">
      <div className="w-1/2 pr-4">
        <h1 className="text-3xl font-bold mb-4">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="w-1/2 pl-4">
        <h1 className="text-3xl font-bold mb-4">Meal Ideas</h1>
        {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
      </div>
    </div>
  );
};

export default Page;
