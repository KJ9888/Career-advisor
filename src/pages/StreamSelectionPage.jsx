import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Data for the streams
const streams = [
    { name: "Science (Medical)", subjects: "Physics, Chemistry, Biology", path: "/stream/medical" },
    { name: "Science (Non-Medical)", subjects: "Physics, Chemistry, Mathematics", path: "/stream/non-medical" },
    { name: "Commerce (with Maths)", subjects: "Accountancy, Business, Economics, Maths", path: "/stream/commerce-maths" },
    { name: "Commerce (with IP)", subjects: "Accountancy, Business, Economics, IP", path: "/stream/commerce-ip" },
    { name: "Humanities", subjects: "History, Political Sc., Sociology, Arts", path: "/stream/humanities" },
];

// Animation variants for the list and items
const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between each card animation
    },
  },
};

const itemVariants = {
  hidden: { x: -50, opacity: 0 }, // Start from left and invisible
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 },
  },
};

export default function StreamSelectionPage() {
  return (
    // Main container with a fade-in transition for the whole page
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen p-8 flex items-center justify-center"
    >
      <div className="max-w-3xl w-full mx-auto text-center">
        
        {/* Animated Heading and Subheading */}
        <motion.div 
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', duration: 0.8 }}
          className="mb-12"
        >
          <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Select Your Course
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            Your journey begins here. Pick a stream to explore the possibilities.
          </p>
        </motion.div>
        
        {/* Staggered animation for the list of cards on page load */}
        <motion.div 
          variants={listVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-6 text-left"
        >
          {streams.map((stream) => (
            <motion.div key={stream.name} variants={itemVariants}>
              <Link
                to={stream.path}
                className="block p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-transparent hover:border-indigo-400 group"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-2xl font-bold text-indigo-700">{stream.name}</h2>
                    <p className="mt-2 text-gray-600">
                      <span className="font-semibold">Subjects:</span> {stream.subjects}
                    </p>
                  </div>
                  <div className="text-indigo-500 transition-transform duration-300 group-hover:translate-x-2">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.div>
  );
}