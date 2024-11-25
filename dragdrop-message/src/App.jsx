import { useState } from "react";
import "./App.css";

const App = () => {
  const [items, setItems] = useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
  ]);
  const [droppedItems, setDroppedItems] = useState([]);
  const [message, setMessage] = useState("");

  const handleDragStart = (e, item) => {
    e.dataTransfer.setData("text/plain", item);
  };

  const handleDrop = (e, target) => {
    e.preventDefault();
    const item = e.dataTransfer.getData("text/plain");
    if (target === "right" && items.includes(item)) {
      setItems((prev) => prev.filter((i) => i !== item));
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
                key={item}
                className="bg-blue-500 text-white p-2 rounded-md cursor-pointer"
                draggable
                onDragStart={(e) => handleDragStart(e, item)}
              >
                {item}
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
                {item}
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
