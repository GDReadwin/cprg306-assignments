// /app/week-4/new-item.js
import { useState } from "react";

export default function NewItem({ onAddItem }) {
  // Add a new prop { onAddItem }
  // Initialize state variables
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  // Form submission handler
  const handleSubmit = (event) => {
    event.preventDefault();

    // Create an item object with current values
    const newItem = {
      id: generateId(), // Generate a random id
      name,
      quantity,
      category,
    };

    // Call the onAddItem prop with the item object
    onAddItem(newItem);

    // Reset state variables
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  // Function to generate a random id
  const generateId = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  // Render the component
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Add New Item</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Quantity Field */}
        <div>
          <label htmlFor="quantity" className="block mb-1">
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            min="1"
            max="99"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Category Field */}
        <div>
          <label htmlFor="category" className="block mb-1">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen-foods">Frozen Foods</option>
            <option value="canned-goods">Canned Goods</option>
            <option value="dry-goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-300 focus:outline-none focus:bg-blue-600"
        >
          +
        </button>
      </form>
    </div>
  );
}
