import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; // Framer Motion import karo

const googleIcon = "https://img.icons8.com/color/16/000000/google-logo.png";

const phoneIcon = "https://img.icons8.com/ios-filled/16/000000/phone.png";

export default function LoginPage({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('Logging in with:', email, password);
    setIsLoggedIn(true);
    navigate('/');
  };

  // Animation variants for the form container
  const formVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        when: "beforeChildren", // Children animations start after this
        staggerChildren: 0.1, // Delay between each child animation
      },
    },
  };

  // Animation variants for form items (labels, inputs, buttons)
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 p-4">
      <motion.form
        className="bg-gray-800 bg-opacity-70 backdrop-blur-md p-8 rounded-xl shadow-2xl w-full max-w-md border border-gray-700"
        onSubmit={handleFormSubmit}
        variants={formVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 variants={itemVariants} className="text-3xl font-bold text-white mb-8 text-center uppercase tracking-wider">
          Sign In
        </motion.h2>

        <motion.div variants={itemVariants} className="mb-6">
          <label htmlFor="email" className="block text-gray-300 text-sm font-semibold mb-2">Email Address</label>
          <input type="email" id="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-gray-400 transition duration-300" />
        </motion.div>

        <motion.div variants={itemVariants} className="mb-6">
          <label htmlFor="password" className="block text-gray-300 text-sm font-semibold mb-2">Password</label>
          <input type="password" id="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-gray-400 transition duration-300" />
        </motion.div>

        <motion.button variants={itemVariants} type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg transition duration-300 shadow-lg" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          Sign In
        </motion.button>

        <motion.div variants={itemVariants} className="relative flex items-center justify-center my-6">
          <div className="absolute inset-x-0 h-px bg-gray-700"></div>
          <span className="relative z-10 bg-gray-800 bg-opacity-70 px-4 text-gray-400 text-sm">OR</span>
        </motion.div>

        <motion.button variants={itemVariants} type="button" className="w-full flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2.5 rounded-lg mb-3 border border-gray-600 transition duration-300" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <img src={googleIcon} alt="Google" className="w-5 h-5 mr-3" />
          Continue with Google
        </motion.button>
        {/* ... (other social buttons can also have the same motion effect) ... */}
        <motion.button variants={itemVariants} type="button" className="w-full flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2.5 rounded-lg mb-6 border border-gray-600 transition duration-300" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <img src={phoneIcon} alt="Phone" className="w-5 h-5 mr-3" />
          Continue with Phone
        </motion.button>

        <motion.p variants={itemVariants} className="text-center text-gray-400 text-sm">
          Don't have an account yet?{' '}
          <Link to="/signup" className="text-purple-400 hover:text-purple-300 font-semibold hover:underline transition duration-300">
            Sign Up
          </Link>
        </motion.p>
      </motion.form>
    </div>
  );
}