import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, BookText, Play } from 'lucide-react';
import { streamData } from '../data/streamData';

export default function StreamDetailPage() {
  const { streamName } = useParams();
  const data = streamData[streamName];

  if (!data) {
    return <div>Stream not found!</div>;
  }
  
  const sectionAnimation = {
      initial: { y: 50, opacity: 0 },
      whileInView: { y: 0, opacity: 1 },
      viewport: { once: true, amount: 0.2 },
      transition: { duration: 0.7, type: 'spring' }
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
        
        <motion.div 
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Link to="/select-stream" className="inline-flex items-center gap-2 text-slate-300 hover:text-white mb-4">
            <ArrowLeft size={20} /> Back to Streams
          </Link>
        </motion.div>
        
        {/* New container to center everything below the 'Back' link */}
        <div className="text-center">
          <motion.h1
            initial={{y: -30, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 0.3}}
            className="text-5xl md:text-5xl font-extrabold my-8 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-pink-500 to-amber-400 font-crazy uppercase tracking-wider">
            {data.title}
          </motion.h1>

          <motion.div
            initial={{scale: 0.9, opacity: 0}} animate={{scale: 1, opacity: 1}} transition={{delay: 0.5}}
            className="h-[55vh] inline-block"
          >
            <div className="aspect-video h-full rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/20">
              <video key={data.videoSrc} controls autoPlay muted className="w-full h-full object-cover">
                <source src={data.videoSrc} type="video/mp4" />
              </video>
            </div>
          </motion.div>
        </div>

        <motion.section {...sectionAnimation} className="mt-16">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 ring-1 ring-slate-700 text-center">
              <h2 className="text-3xl font-bold flex items-center justify-center gap-3 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-400">
                <BookText/> Stream Overview
              </h2>
              <div className="prose prose-invert prose-p:text-slate-300 max-h-80 overflow-y-auto pr-4 [&_ul]:inline-block [&_ul]:text-left" dangerouslySetInnerHTML={{ __html: data.documentation }}></div>
            </div>
        </motion.section>

        {/* --- Quiz Section is now just a Link --- */}
        <motion.section {...sectionAnimation} className="mt-16 text-center">
            <Link 
              to={`/stream/${streamName}/quiz`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold rounded-full shadow-lg transform hover:scale-105 transition-transform"
            >
              <Play /> Let's Start With a Quiz Session
            </Link>
        </motion.section>
      </div>
    </motion.div>
  );
}