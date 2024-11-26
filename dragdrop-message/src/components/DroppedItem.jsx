import { motion } from "framer-motion";
import PropTypes from "prop-types";

const DroppedItems = ({ icon, name }) => {
    return (
        <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      className="bg-gradient-to-br from-green-400 to-green-500 text-white p-6 rounded-2xl shadow-md flex flex-col items-center justify-center"
    >
      {icon}
      <span className="mt-2 text-sm font-medium">{name}</span>
    </motion.div>
  );
};

DroppedItems.propTypes = {
  icon: PropTypes.element.isRequired,
  name: PropTypes.string.isRequired,
};

export default DroppedItems;