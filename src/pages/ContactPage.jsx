// src/pages/ContactPage.jsx
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50 p-8 flex items-center justify-center"
    >
      <div className="max-w-4xl w-full mx-auto text-center">
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500"
        >
          Get In Touch
        </motion.h1>
        <motion.p
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 mt-4 text-lg"
        >
          We'd love to hear from you. Here's how you can reach us.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <InfoCard icon={<Mail />} title="Email Us" content="contact@careerguide.com" />
          <InfoCard icon={<Phone />} title="Call Us" content="+91 12345 67890" />
          <InfoCard icon={<MapPin />} title="Find Us" content="123 Education Lane, Delhi, India" />
        </div>
      </div>
    </motion.div>
  );
}

const InfoCard = ({ icon, title, content }) => (
  <motion.div
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.4 }}
    className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
  >
    <div className="text-indigo-500 mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-gray-800">{title}</h3>
    <p className="text-gray-600 mt-2">{content}</p>
  </motion.div>
);