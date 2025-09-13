import { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Components & Pages
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import StreamSelectionPage from "./pages/StreamSelectionPage";
import StreamDetailPage from "./pages/StreamDetailPage";
import QuizPage from "./pages/QuizPage";
import AiHubPage from "./pages/AiHubPage";
import Footer from "./components/Footer";
import ClassSelectorModal from "./components/ClassSelectorModal";

// This component handles the main layout and routing logic
function Layout() {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-100">

      {/* CHANGE THIS LINE */}
      {location.pathname === '/select-stream' && <Navbar isLoggedIn={isLoggedIn} />}
      
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage onGetStartedClick={() => setIsModalOpen(true)} />} />
          <Route path="/select-stream" element={<StreamSelectionPage />} />
          <Route path="/stream/:streamName" element={<StreamDetailPage />} />
          <Route path="/stream/:streamName/quiz" element={<QuizPage />} />
          <Route path="/ai-videos" element={<AiHubPage />} />
          <Route path="/login" element={<div className="h-screen flex items-center justify-center">Login Page</div>} />
          <Route path="/signup" element={<div className="h-screen flex items-center justify-center">Sign Up Page</div>} />
          <Route path="/logout" element={<div className="h-screen flex items-center justify-center">Logout Page</div>} />
        </Routes>
      </AnimatePresence>
      
      <Footer />
      <ClassSelectorModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="font-sans">
        <Layout />
      </div>
    </BrowserRouter>
  );
}