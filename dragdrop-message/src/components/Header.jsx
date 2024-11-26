import { motion } from 'framer-motion';

const Header = () => (
  <motion.div
    className="w-full max-w-4xl"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
      Drag & Drop
    </h1>
    <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl mx-auto">
      Drag the foods from the left panel and drop them into the right panel
      to discover the secret message.
    </p>
  </motion.div>
);

export default Header;