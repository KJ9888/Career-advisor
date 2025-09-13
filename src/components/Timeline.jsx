// src/components/Timeline.jsx
const events = [
  { step: "April", text: "Admission Forms Open" },
  { step: "May", text: "Entrance & Counseling" },
  { step: "June", text: "Scholarship Applications" },
  { step: "July", text: "Classes Begin" },
];

export default function Timeline() {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-50 to-pink-50">
      <h2 className="text-4xl font-bold text-center text-indigo-700">
        Timeline Tracker
      </h2>
      <div className="mt-12 flex flex-col md:flex-row justify-center gap-8 px-8">
        {events.map((e, i) => (
          <div
            key={i}
            className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl w-64"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-bold">
              {i + 1}
            </div>
            <h3 className="mt-4 font-semibold">{e.step}</h3>
            <p className="text-gray-600 mt-2">{e.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
