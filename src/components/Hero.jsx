import { motion } from "framer-motion";

export default function Hero({ onGetStartedClick }) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      
      {/* Floating gradient shapes */}
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute w-72 h-72 bg-gradient-to-tr from-pink-400 to-purple-400 rounded-full blur-3xl opacity-40 top-10 left-10"
      />
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="absolute w-96 h-96 bg-gradient-to-tr from-blue-300 to-cyan-400 rounded-full blur-3xl opacity-30 bottom-10 right-10"
      />

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500"
      >
        Your Digital Career & College Guide
      </motion.h1>

      {/* Paragraph */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl"
      >
        Discover your path with personalized guidance, college insights, and
        career opportunities — all in one place.
      </motion.p>

      {/* Get Started Button */}
      <motion.button
        onClick={onGetStartedClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="mt-10 px-8 py-4 bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-2xl transition-all"
      >
        Get Started
      </motion.button>
    </section>
  );
}