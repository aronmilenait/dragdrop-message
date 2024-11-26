import PropTypes from "prop-types";
import { motion } from "framer-motion";

const DraggableItem = ({ item, onDragStart }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      className="bg-gradient-to-br from-blue-400 to-blue-500 text-white p-6 rounded-2xl cursor-pointer shadow-md flex flex-col items-center justify-center"
      draggable
      onDragStart={(e) => onDragStart(e, item)}
    >
      {item.icon}
      <span className="mt-2 text-sm font-medium">{item.name}</span>
    </motion.div>
  );
};

DraggableItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
  }).isRequired,
  onDragStart: PropTypes.func.isRequired,
};

export default DraggableItem;
