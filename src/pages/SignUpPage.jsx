import  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; // Framer Motion import karo

export default function SignUpPage() {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log('Signing up with:', fullName, email, password);
    alert("Signup successful! Please log in.");
    navigate('/login');
  };

  // Animation variants (same as login page for consistency)
  const formVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

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
          Create Account
        </motion.h2>

        <motion.div variants={itemVariants} className="mb-6">
          <label htmlFor="name" className="block text-gray-300 text-sm font-semibold mb-2">Full Name</label>
          <input type="text" id="name" placeholder="Your Name" value={fullName} onChange={(e) => setFullName(e.target.value)} required className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-gray-400 transition duration-300" />
        </motion.div>

        <motion.div variants={itemVariants} className="mb-6">
          <label htmlFor="email" className="block text-gray-300 text-sm font-semibold mb-2">Email Address</label>
          <input type="email" id="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-gray-400 transition duration-300" />
        </motion.div>

        <motion.div variants={itemVariants} className="mb-6">
          <label htmlFor="password" className="block text-gray-300 text-sm font-semibold mb-2">Password</label>
          <input type="password" id="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-gray-400 transition duration-300" />
        </motion.div>

        <motion.div variants={itemVariants} className="mb-6">
          <label htmlFor="confirmPassword" className="block text-gray-300 text-sm font-semibold mb-2">Confirm Password</label>
          <input type="password" id="confirmPassword" placeholder="••••••••" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-gray-400 transition duration-300" />
        </motion.div>

        <motion.button variants={itemVariants} type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg transition duration-300 shadow-lg mb-6" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          Sign Up
        </motion.button>

        <motion.p variants={itemVariants} className="text-center text-gray-400 text-sm">
          Already have an account?{' '}
          <Link to="/login" className="text-purple-400 hover:text-purple-300 font-semibold hover:underline transition duration-300">
            Login
          </Link>
        </motion.p>
      </motion.form>
    </div>
  );
}