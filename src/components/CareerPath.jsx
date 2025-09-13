// src/components/CareerPath.jsx
import { motion } from "framer-motion";

const paths = [
  { degree: "B.A.", careers: "Civil Services, Journalism, Teaching" },
  { degree: "B.Sc.", careers: "Research, IT, Banking, Govt Exams" },
  { degree: "B.Com.", careers: "Accounting, Finance, MBA, SSC" },
  { degree: "BBA", careers: "Business, Startups, Marketing, HR" },
];

export default function CareerPath() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <h2 className="text-4xl font-bold text-center text-indigo-700">
        Course-to-Career Mapping
      </h2>
      <div className="mt-12 flex flex-wrap justify-center gap-6 px-6">
        {paths.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl w-72"
          >
            <h3 className="text-xl font-bold text-indigo-600">{p.degree}</h3>
            <p className="mt-3 text-gray-700">{p.careers}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
