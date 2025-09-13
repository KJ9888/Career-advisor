// src/components/ClassSelectorModal.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom"; // hook import karo

export default function ClassSelectorModal({ isOpen, onClose }) {
  const navigate = useNavigate(); // navigate function initialize karo

  if (!isOpen) return null;

  function handleTenthPassClick() {
    onClose(); // Modal band karo
    navigate("/select-stream"); // Naye page par redirect karo
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative z-10 w-full max-w-md p-8 bg-white rounded-3xl shadow-2xl text-center"
          >
            <h2 className="text-2xl font-bold text-gray-800">
              Let’s get started! Which class have you completed?
            </h2>
            <p className="mt-2 text-gray-500">
              Choose an option below to see the best suggestions.
            </p>

            <div className="mt-8 flex justify-center gap-6">
              <button 
                onClick={handleTenthPassClick} // yahan function add karo
                className="px-10 py-4 bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
              >
                10th Pass
              </button>
              <button className="px-10 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
                12th Pass
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}