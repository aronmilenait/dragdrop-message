import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Panel = ({ title, children, onDragOver, onDrop }) => (
  <motion.div
    className="flex-1 bg-white rounded-3xl shadow-lg p-6 border border-gray-100"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    onDragOver={onDragOver}
    onDrop={onDrop}
  >
    <h2 className="text-2xl font-semibold mb-6 text-gray-800">{title}</h2>
    <div className="min-h-[200px] border-2 border-dashed border-gray-300 rounded-2xl p-4 flex flex-wrap gap-4">
      {children}
    </div>
  </motion.div>
);

Panel.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  onDragOver: PropTypes.func,
  onDrop: PropTypes.func,
};

Panel.defaultProps = {
  children: null,
  onDragOver: () => {},
  onDrop: () => {},
};

export default Panel;
