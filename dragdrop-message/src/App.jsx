import { useState } from "react";
import "./App.css";
import {
  CiBurger,
  CiFries,
  CiApple,
  CiAvocado,
  CiIceCream,
} from "react-icons/ci";
import Header from "./components/Header";
import Panel from "./components/Panel";
import DraggableItem from "./components/DraggableItem";
import DroppedItem from "./components/DroppedItem";
import SecretMessage from "./components/SecretMessage";

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
      const updatedItems = items.filter((i) => i.id !== item.id);
      setItems(updatedItems);
      setDroppedItems((prev) => [...prev, item]);

      if (updatedItems.length === 0) fetchSecretMessage();
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
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
      <Header />
      <div className="w-full max-w-4xl flex flex-col md:flex-row gap-6">
        <Panel title="Draggable Items" onDrop={(e) => handleDrop(e, "left")}>
          {items.map((item) => (
            <DraggableItem
              key={item.id}
              item={item}
              onDragStart={handleDragStart}
            />
          ))}
        </Panel>
        <Panel title="Drop here" onDrop={(e) => handleDrop(e, "right")}>
          {droppedItems.map((item) => (
            <DroppedItem key={item.id} icon={item.icon} name={item.name} />
          ))}
        </Panel>
      </div>
      <SecretMessage message={message} />
    </div>
  );
};

export default App;
