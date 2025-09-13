// src/components/Features.jsx
import { motion } from "framer-motion";
import { Compass, GraduationCap, MapPin, Bell } from "lucide-react";

const features = [
  {
    title: "Aptitude-Based Suggestions",
    desc: "Take short quizzes to find the right stream and career fit.",
    icon: <Compass className="w-10 h-10 text-indigo-600" />,
  },
  {
    title: "Course-to-Career Mapping",
    desc: "Visual charts show how degrees connect to jobs & exams.",
    icon: <GraduationCap className="w-10 h-10 text-pink-600" />,
  },
  {
    title: "Nearby Colleges",
    desc: "Find government colleges near you with courses & facilities.",
    icon: <MapPin className="w-10 h-10 text-blue-600" />,
  },
  {
    title: "Timeline Tracker",
    desc: "Never miss admissions, scholarships, or exam deadlines.",
    icon: <Bell className="w-10 h-10 text-purple-600" />,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white relative">
      <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-indigo-600 to-pink-500 text-transparent bg-clip-text">
        Key Features
      </h2>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
        {features.map((f, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all bg-gradient-to-br from-white to-gray-50"
          >
            <div>{f.icon}</div>
            <h3 className="mt-4 font-semibold text-lg">{f.title}</h3>
            <p className="mt-2 text-gray-600">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
