import { motion } from "framer-motion";

// Animation variants for a staggered effect
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Delay between each child animation
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function Hero({ onGetStartedClick }) {
  return (
    // Added z-10 to ensure it stays behind the navbar
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative z-10 overflow-hidden">
      
      {/* Background Blobs */}
      <BackgroundBlob 
        animation={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        className="bg-gradient-to-tr from-pink-400 to-purple-400 top-10 left-10"
      />
      <BackgroundBlob 
        animation={{ y: [0, -20, 0], x: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        className="bg-gradient-to-tr from-blue-300 to-cyan-400 bottom-10 right-10 w-96 h-96"
      />

      {/* Main Content with Staggered Animation */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500"
        >
          Your Digital Career & College Guide
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl"
        >
          Discover your path with personalized guidance, college insights, and
          career opportunities — all in one place.
        </motion.p>

        <motion.div variants={itemVariants}>
          <motion.button
            onClick={onGetStartedClick}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(99, 102, 241, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="mt-10 px-8 py-4 bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold rounded-2xl shadow-lg"
          >
            Get Started
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}

// Helper component for background shapes
const BackgroundBlob = ({ animation, transition, className }) => (
  <motion.div
    animate={animation}
    transition={transition}
    className={`absolute w-72 h-72 rounded-full blur-3xl opacity-30 ${className}`}
  />
);