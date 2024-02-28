import React, { useState } from "react";
import Item from "./item";
import items from "./items.json";

const ItemList = () => {
  const [sortBy, setSortBy] = useState("name");
  const [groupedItems, setGroupedItems] = useState(null);

  const handleSortByName = () => {
    setSortBy("name");
    setGroupedItems(null); // Reset grouped items when sorting by name or category
  };

  const handleSortByCategory = () => {
    setSortBy("category");
    setGroupedItems(null); // Reset grouped items when sorting by name or category
  };

  const handleGroupByCategory = () => {
    const grouped = items.reduce((acc, item) => {
      const { category } = item;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(item);
      return acc;
    }, {});

    // Sort categories alphabetically
    const sortedCategories = Object.keys(grouped).sort();
    // Sort items within each category alphabetically
    const sortedItemsByCategory = {};
    sortedCategories.forEach((category) => {
      sortedItemsByCategory[category] = grouped[category].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    });

    setGroupedItems(sortedItemsByCategory);
  };

  return (
    <div>
      <div>
        <button
          onClick={handleSortByName}
          style={{ backgroundColor: sortBy === "name" ? "lightblue" : "white" }}
        >
          Sort by Name
        </button>
        <button
          onClick={handleSortByCategory}
          style={{
            backgroundColor: sortBy === "category" ? "lightblue" : "white",
          }}
        >
          Sort by Category
        </button>
        <button onClick={handleGroupByCategory}>Group by Category</button>
      </div>
      <ul>
        {groupedItems
          ? Object.entries(groupedItems).map(([category, items]) => (
              <div key={category}>
                <h2 className="text-lg font-semibold capitalize">{category}</h2>
                <ul>
                  {items.map((item) => (
                    <Item
                      key={item.id}
                      name={item.name}
                      quantity={item.quantity}
                      category={item.category}
                    />
                  ))}
                </ul>
              </div>
            ))
          : items
              .sort((a, b) =>
                sortBy === "name"
                  ? a.name.localeCompare(b.name)
                  : a.category.localeCompare(b.category)
              )
              .map((item) => (
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
