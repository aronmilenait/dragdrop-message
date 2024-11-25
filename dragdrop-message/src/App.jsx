import { useState } from "react";
import "./App.css";

import { CiBurger, CiFries, CiApple } from "react-icons/ci";
import { LuCakeSlice } from "react-icons/lu";
import { BiSolidSushi } from "react-icons/bi";

const App = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Burger", icon: <CiBurger size={40} /> },
    { id: 2, name: "Fries", icon: <CiFries size={40} /> },
    { id: 3, name: "Apple", icon: <CiApple size={40} /> },
    { id: 4, name: "Cake", icon: <LuCakeSlice size={40} /> },
    { id: 5, name: "Sushi", icon: <BiSolidSushi size={40} /> },
  ]);
  const [droppedItems, setDroppedItems] = useState([]);
  const [message, setMessage] = useState("");

  const handleDragStart = (e, item) => {
    e.dataTransfer.setData("text/plain", item.id);
  };

  const handleDrop = (e, target) => {
    e.preventDefault();
    const itemId = e.dataTransfer.getData("text/plain");
    const item = items.find((i) => i.id === parseInt(itemId));

    if (target === "right" && item) {
      setItems((prev) => prev.filter((i) => i.id !== item.id));
      setDroppedItems((prev) => [...prev, item]);

      if (items.length === 1) fetchSecretMessage();
    }
  };

  const fetchSecretMessage = async () => {
    try {
      const response = await fetch(
        "https://iems-757535565657.us-central1.run.app/Test"
      );
      const secret = await response.text();
      setMessage(secret);
    } catch (error) {
      console.error("Failed to fetch the secret message:", error);
      setMessage("Failed to fetch the secret message.");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-3/4 flex gap-4">
        {/* Left Panel */}
        <div
          className="flex-1 bg-white border-2 border-dashed border-gray-400 p-4 rounded-md"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, "left")}
        >
          <h2 className="text-lg font-semibold mb-4">Draggable Items</h2>
          <div className="space-y-2">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-blue-500 text-white p-2 rounded-md cursor-pointer"
                draggable
                onDragStart={(e) => handleDragStart(e, item)}
              >
                {item.icon}
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel */}
        <div
          className="flex-1 bg-white border-2 border-dashed border-gray-400 p-4 rounded-md"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, "right")}
        >
          <h2 className="text-lg font-semibold mb-4">Drop here</h2>
          <div className="space-y-2">
            {droppedItems.map((item, index) => (
              <div
                key={index}
                className="bg-green-500 text-white p-2 rounded-md"
              >
                {item.icon}
              </div>
            ))}
          </div>
          {/* Secret Message */}
          {message && (
            <div className="mt-4 p-3 bg-yellow-100 border border-yellow-400 rounded-md text-center">
              Secret Message: {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
