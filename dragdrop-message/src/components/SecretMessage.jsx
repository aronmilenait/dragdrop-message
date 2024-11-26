import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

const secretMessage = ({ message }) => {
    return (
        <AnimatePresence>
          {message && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-6 p-4 bg-yellow-100 border border-yellow-300 rounded-2xl text-center text-yellow-800"
            >
              <h3 className="text-lg font-semibold mb-2">Secret Message</h3>
              <p>{message}</p>
            </motion.div>
          )}
        </AnimatePresence>
      );
    };

secretMessage.propTypes = {
    message: PropTypes.string,
    };

export default secretMessage;