// src/components/Colleges.jsx
import { motion } from "framer-motion";

const colleges = [
  { name: "Govt College A", courses: "B.A., B.Sc., B.Com.", location: "Delhi" },
  { name: "Govt College B", courses: "B.Sc., BBA", location: "Jaipur" },
  { name: "Govt College C", courses: "B.Com., B.A.", location: "Lucknow" },
];

export default function Colleges() {
  return (
    <section className="py-20 bg-white">
      <h2 className="text-4xl font-bold text-center text-pink-600">
        Nearby Government Colleges
      </h2>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
        {colleges.map((c, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gradient-to-br from-indigo-50 to-pink-50 rounded-2xl shadow-lg hover:shadow-2xl"
          >
            <h3 className="text-xl font-semibold">{c.name}</h3>
            <p className="text-gray-700 mt-2">{c.courses}</p>
            <p className="text-sm text-gray-500 mt-1">{c.location}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
