import React, { useState } from "react"; 
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import StreamSelectionPage from "./pages/StreamSelectionPage";
import StreamDetailPage from "./pages/StreamDetailPage";
import QuizPage from "./pages/QuizPage";
import AiHubPage from "./pages/AiHubPage";
import Footer from "./components/Footer";
import ClassSelectorModal from "./components/ClassSelectorModal";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

function Logout({ setIsLoggedIn }) {
  React.useEffect(() => {
    setIsLoggedIn(false);
  }, [setIsLoggedIn]);

  return <Navigate to="/" />;
}


function Layout() {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const pagesWithoutNavbar = ['/', '/login', '/signup'];
  const pagesWithoutFooter = ['/login', '/signup'];


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-100">

      {!pagesWithoutNavbar.includes(location.pathname) && <Navbar isLoggedIn={isLoggedIn} />}
      
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage onGetStartedClick={() => setIsModalOpen(true)} />} />
            <Route path="/select-stream" element={<StreamSelectionPage />} />
            <Route path="/stream/:streamName" element={<StreamDetailPage />} />
            <Route path="/stream/:streamName/quiz" element={<QuizPage />} />
            <Route path="/ai-videos" element={<AiHubPage />} />
            <Route 
              path="/login" 
              element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} 
            />
            <Route path="/signup" element={<SignUpPage />} />
            <Route 
              path="/logout" 
              element={<Logout setIsLoggedIn={setIsLoggedIn} />} 
            />
          </Routes>
        </AnimatePresence>
      </main>
      
      {!pagesWithoutFooter.includes(location.pathname) && <Footer />}
      
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