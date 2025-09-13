// src/pages/AiHubPage.jsx
import { useState } from 'react';
import { BookOpen, Film, PlayCircle, RefreshCw } from 'lucide-react';

// --- NEW: Video Data with Correct Paths ---
const videoData = [
  {
    title: "Science with Medical",
    description: "Explore the world of medicine, biology, and healthcare. This stream opens doors to careers like being a doctor, pharmacist, and researcher.",
    src: "/medical.mp4"
  },
  {
    title: "Science with Non-Medical",
    description: "Dive into engineering, technology, and physics. This path leads to innovations in software, machinery, and beyond.",
    src: "/non-medical.mp4"
  },
  {
    title: "Commerce with Maths",
    description: "Understand the backbone of business with subjects like accountancy, economics, and the analytical power of mathematics.",
    src: "/commerce-maths.mp4"
  },
  {
    title: "Commerce with IP",
    description: "A modern commerce stream combining business studies with computer science fundamentals and informatics practices.",
    src: "/commerce-ip.mp4"
  },
  {
    title: "Humanities",
    description: "Study human society, culture, and history. This stream is perfect for careers in civil services, law, journalism, and more.",
    src: "/humanities.mp4"
  }
];

// --- Quiz Data and Logic (No changes needed here) ---
const quizData = {
    medical: [
      { q: 'Which is the powerhouse of the cell?', o: ['Nucleus', 'Mitochondria', 'Ribosome'], a: 'Mitochondria' },
      { q: 'What is the main component of bones?', o: ['Iron', 'Potassium', 'Calcium'], a: 'Calcium' },
      { q: 'Botany is the study of?', o: ['Animals', 'Plants', 'Insects'], a: 'Plants' },
      { q: 'How many chambers are in the human heart?', o: ['2', '4', '6'], a: '4' },
      { q: 'Which gas do plants absorb from the atmosphere?', o: ['Oxygen', 'Carbon Dioxide', 'Nitrogen'], a: 'Carbon Dioxide' },
    ],
    'non-medical': [
      { q: 'What is the value of Pi (π) approximately?', o: ['3.14', '2.71', '1.61'], a: '3.14' },
      { q: 'What does "F" stand for in F=ma?', o: ['Force', 'Friction', 'Frequency'], a: 'Force' },
      { q: 'What is H₂O?', o: ['Salt', 'Sugar', 'Water'], a: 'Water' },
      { q: 'The rate of change of velocity is called?', o: ['Speed', 'Acceleration', 'Displacement'], a: 'Acceleration' },
      { q: 'Who is known as the father of computers?', o: ['Albert Einstein', 'Charles Babbage', 'Isaac Newton'], a: 'Charles Babbage' },
    ],
    'commerce-maths': [
      { q: 'What is the formula for calculating profit?', o: ['Revenue - Expenses', 'Assets - Liabilities', 'Sales + Costs'], a: 'Revenue - Expenses' },
      { q: 'What does IPO stand for?', o: ['Initial Public Offering', 'Internal Profit Order', 'International Product Office'], a: 'Initial Public Offering' },
      { q: 'The study of scarcity and choice is?', o: ['Sociology', 'Accounting', 'Economics'], a: 'Economics' },
      { q: 'What is 15% of 200?', o: ['15', '30', '45'], a: '30' },
      { q: 'Credit means?', o: ['What comes in', 'What goes out', 'Balance'], a: 'What goes out' },
    ],
    'commerce-ip': [
      { q: 'What does CPU stand for?', o: ['Central Processing Unit', 'Computer Power Unit', 'Central Power Utility'], a: 'Central Processing Unit' },
      { q: 'Which of these is not an output device?', o: ['Monitor', 'Printer', 'Mouse'], a: 'Mouse' },
      { q: 'A collection of related data is a?', o: ['File', 'Database', 'Record'], a: 'Database' },
      { q: 'The term "Economics" is derived from a word of which language?', o: ['Latin', 'Greek', 'French'], a: 'Greek' },
      { q: 'What does GST stand for?', o: ['General Sales Tax', 'Goods and Services Tax', 'Government Sales Treaty'], a: 'Goods and Services Tax' },
    ],
    humanities: [
      { q: 'Who wrote "Romeo and Juliet"?', o: ['Charles Dickens', 'William Shakespeare', 'Mark Twain'], a: 'William Shakespeare' },
      { q: 'The first World War was fought between?', o: ['1914-1918', '1939-1945', '1905-1910'], a: '1914-1918' },
      { q: 'What is the capital of France?', o: ['London', 'Berlin', 'Paris'], a: 'Paris' },
      { q: 'Democracy means rule by the?', o: ['King', 'Army', 'People'], a: 'People' },
      { q: 'The study of past events is called?', o: ['Geography', 'History', 'Civics'], a: 'History' },
    ],
  };

const streamTabs = [
  { id: 'medical', name: 'Science (Medical)' },
  { id: 'non-medical', name: 'Science (Non-Medical)' },
  { id: 'commerce-maths', name: 'Commerce (Maths)' },
  { id: 'commerce-ip', name: 'Commerce (IP)' },
  { id: 'humanities', name: 'Humanities' },
];

export default function AiHubPage() {
  const [currentVideo, setCurrentVideo] = useState(videoData[0]);
  const [activeTab, setActiveTab] = useState('medical');
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleAnswerChange = (qIndex, option) => { setAnswers({ ...answers, [qIndex]: option }); };
  const handleSubmit = () => { let correctAnswers = 0; quizData[activeTab].forEach((question, index) => { if (answers[index] === question.a) { correctAnswers++; } }); setScore(correctAnswers); setSubmitted(true); };
  const handleTryAgain = () => { setAnswers({}); setScore(null); setSubmitted(false); };
  const handleTabChange = (tabId) => { setActiveTab(tabId); handleTryAgain(); };
  const allQuestionsAnswered = Object.keys(answers).length === quizData[activeTab].length;

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500 mb-12">
          AI Learning Hub
        </h1>

        {/* --- UPDATED: Video Playlist Layout --- */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 flex items-center">
            <Film className="mr-3 w-8 h-8 text-purple-500"/> Guidance Videos
          </h2>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Video Player */}
            <div className="w-full lg:w-2/3 bg-white p-4 rounded-2xl shadow-xl">
              <div className="aspect-video rounded-xl overflow-hidden">
                <video key={currentVideo.src} controls autoPlay muted className="w-full h-full object-cover">
                  <source src={currentVideo.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mt-4">{currentVideo.title}</h3>
              <p className="mt-2 text-gray-600">{currentVideo.description}</p>
            </div>

            {/* Video Playlist on the side */}
            <div className="w-full lg:w-1/3">
              <div className="flex flex-col gap-4 max-h-[500px] lg:max-h-full overflow-y-auto pr-2">
                {videoData.map((video) => (
                  <button
                    key={video.title}
                    onClick={() => setCurrentVideo(video)}
                    className={`w-full text-left p-3 rounded-xl flex items-center gap-4 transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${currentVideo.title === video.title ? 'bg-indigo-500 text-white shadow-lg' : 'bg-white'}`}
                  >
                    <div className="flex-shrink-0">
                      <PlayCircle className={`w-8 h-8 ${currentVideo.title === video.title ? 'text-white' : 'text-indigo-500'}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold">{video.title}</h4>
                      <p className={`text-sm ${currentVideo.title === video.title ? 'text-indigo-200' : 'text-gray-500'}`}>
                        Click to play
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* --- Quiz Section (No changes here) --- */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 flex items-center"><BookOpen className="mr-3 w-8 h-8 text-purple-500"/> AI-Based Subject Quiz</h2>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex flex-wrap border-b border-gray-200 mb-6">
              {streamTabs.map(tab => (<button key={tab.id} onClick={() => handleTabChange(tab.id)} className={`px-4 py-3 font-semibold transition-colors ${activeTab === tab.id ? 'border-b-4 border-indigo-500 text-indigo-600' : 'text-gray-500 hover:text-indigo-500'}`}>{tab.name}</button>))}
            </div>
            <div className="space-y-6">
              {quizData[activeTab].map((item, index) => {
                const selectedAnswer = answers[index];
                const correctAnswer = item.a;
                return (
                  <div key={index}><p className="font-semibold text-lg">{index + 1}. {item.q}</p><div className="mt-3 flex flex-wrap gap-4">
                      {item.o.map(option => {
                        let buttonClass = 'bg-gray-200 hover:bg-gray-300';
                        if (submitted) {
                           if (option === correctAnswer) buttonClass = 'bg-green-500 text-white';
                           else if (option === selectedAnswer) buttonClass = 'bg-red-500 text-white';
                           else buttonClass = 'bg-gray-200 text-gray-500';
                        } else if (option === selectedAnswer) {
                           buttonClass = 'bg-indigo-500 text-white';
                        }
                        return (<button key={option} onClick={() => handleAnswerChange(index, option)} disabled={submitted} className={`px-4 py-2 rounded-lg transition-all ${buttonClass} disabled:cursor-not-allowed disabled:opacity-70`}>{option}</button>);
                      })}
                  </div></div>);
              })}
            </div>
            <div className="mt-8 text-center">
              {!submitted ? (<button onClick={handleSubmit} disabled={!allQuestionsAnswered} className="px-8 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold rounded-lg shadow-md hover:scale-105 transform transition-transform disabled:opacity-50 disabled:cursor-not-allowed">Submit Quiz</button>) : (<button onClick={handleTryAgain} className="flex items-center justify-center mx-auto px-8 py-3 bg-gradient-to-r from-orange-400 to-red-500 text-white font-bold rounded-lg shadow-md hover:scale-105 transform transition-transform"><RefreshCw className="mr-2 h-5 w-5"/> Try Again</button>)}
              {submitted && score !== null && (<div className="mt-6 p-4 bg-indigo-100 text-indigo-800 rounded-lg text-xl font-bold">Your Score: {score} / {quizData[activeTab].length}</div>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}