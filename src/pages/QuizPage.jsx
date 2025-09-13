import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, BrainCircuit, RefreshCw } from 'lucide-react';
import { streamData } from '../data/streamData';

// Function to shuffle an array and get the first N items
const getRandomQuestions = (questionBank, count) => {
  return [...questionBank].sort(() => 0.5 - Math.random()).slice(0, count);
};

export default function QuizPage() {
  const { streamName } = useParams();
  const data = streamData[streamName];

  const [quizQuestions, setQuizQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (data) {
      setQuizQuestions(getRandomQuestions(data.questionBank, 10));
    }
  }, [data]);
  
  const handleAnswerChange = (qIndex, option) => setAnswers({ ...answers, [qIndex]: option });
  const handleSubmit = () => { let correct = 0; quizQuestions.forEach((q, i) => { if(answers[i] === q.a) correct++; }); setScore(correct); setSubmitted(true); };
  const handleTryAgain = () => { setAnswers({}); setScore(null); setSubmitted(false); setQuizQuestions(getRandomQuestions(data.questionBank, 10)); };

  if (!data) {
    return <div>Quiz not found!</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-slate-900 text-white p-4 sm:p-8 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full blur-3xl opacity-20 animate-subtle-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-600 to-fuchsia-600 rounded-full blur-3xl opacity-20 animate-subtle-blob" style={{animationDelay: '5s'}}></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div initial={{y: -30, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 0.2}}>
          <Link to={`/stream/${streamName}`} className="inline-flex items-center gap-2 text-slate-300 hover:text-white mb-8">
            <ArrowLeft size={20} /> Back to Stream Details
          </Link>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 ring-1 ring-slate-700"
        >
          <h2 className="text-3xl font-bold mb-6 flex items-center justify-center gap-3">
            <BrainCircuit/> {data.title} Quiz
          </h2>
          <div className="space-y-6">
            {quizQuestions.map((item, index) => {
              const selectedAnswer = answers[index];
              const correctAnswer = item.a;
              return(
                <div key={index}>
                  <p className="font-semibold text-lg text-slate-200">{index + 1}. {item.q}</p>
                  <div className="mt-3 flex flex-wrap gap-4">
                    {item.o.map(option => {
                      let buttonClass = 'bg-slate-700 hover:bg-slate-600';
                      if(submitted) {
                        if (option === correctAnswer) buttonClass = 'bg-green-500 text-white';
                        else if (option === selectedAnswer) buttonClass = 'bg-red-500 text-white';
                        else buttonClass = 'bg-slate-700 text-slate-400';
                      } else if (option === selectedAnswer) {
                        buttonClass = 'bg-indigo-600 text-white';
                      }
                      return (<button key={option} onClick={()=>handleAnswerChange(index, option)} disabled={submitted} className={`px-4 py-2 rounded-lg transition-all ${buttonClass} disabled:cursor-not-allowed`}>{option}</button>);
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-8 text-center">
            {!submitted ? <button onClick={handleSubmit} className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-lg shadow-lg">Submit Quiz</button> : <button onClick={handleTryAgain} className="flex items-center gap-2 justify-center mx-auto px-8 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-lg shadow-lg"><RefreshCw size={20}/> Try a New Set</button>}
            {submitted && score !== null && <div className="mt-6 p-4 bg-slate-900 ring-1 ring-slate-700 text-slate-200 rounded-lg text-xl font-bold">Your Score: {score} / 10</div>}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}