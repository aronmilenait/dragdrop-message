import { useState } from "react";
import "./App.css";
import {
  CiBurger,
  CiFries,
  CiApple,
  CiAvocado,
  CiIceCream,
} from "react-icons/ci";
import { motion, AnimatePresence } from "framer-motion";

const App = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Burger", icon: <CiBurger size={40} /> },
    { id: 2, name: "Fries", icon: <CiFries size={40} /> },
    { id: 3, name: "Apple", icon: <CiApple size={40} /> },
    { id: 4, name: "Avocado", icon: <CiAvocado size={40} /> },
    { id: 5, name: "Ice Cream", icon: <CiIceCream size={40} /> },
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
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="w-full max-w-4xl flex flex-col md:flex-row gap-6">
        {/* Left Panel */}
        <motion.div
          className="flex-1 bg-white rounded-2xl shadow-lg p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, "left")}
        >
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Draggable Items
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <AnimatePresence>
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-br from-blue-400 to-blue-500 text-white p-4 rounded-xl cursor-pointer shadow-md flex items-center justify-center"
                  draggable
                  onDragStart={(e) => handleDragStart(e, item)}
                >
                  {item.icon}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Right Panel */}
        <motion.div
          className="flex-1 bg-white rounded-2xl shadow-lg p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, "right")}
        >
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Drop here
          </h2>
          <div className="min-h-[200px] border-2 border-dashed border-gray-300 rounded-xl p-4 flex flex-wrap gap-4">
            <AnimatePresence>
              {droppedItems.map((item, index) => (
                <motion.div
                  key={index}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-br from-green-400 to-green-500 text-white p-4 rounded-xl shadow-md flex items-center justify-center"
                >
                  {item.icon}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          {/* Secret Message */}
          <AnimatePresence>
            {message && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mt-6 p-4 bg-yellow-100 border border-yellow-400 rounded-xl text-center text-yellow-800"
              >
                Secret Message: {message}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default App;
