import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation, Navigate, Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import StreamSelectionPage from "./pages/StreamSelectionPage";
import StreamDetailPage from "./pages/StreamDetailPage";
import QuizPage from "./pages/QuizPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";
import ClassSelectorModal from "./components/ClassSelectorModal";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

/**
 * MainLayout component jo Navbar aur Footer ko manage karta hai.
 */
function MainLayout({ isLoggedIn }) {
  const location = useLocation();
  
  // --- CHANGE: Logic to show Navbar only on specific pages ---
  const pagesWithNavbar = ['/', '/select-stream', '/contact'];
  const showNavbar = pagesWithNavbar.includes(location.pathname);

  // Logic to show Footer on all pages except login/signup
  const showFooter = !['/login', '/signup'].includes(location.pathname);

  return (
    <div className="relative">
      {showNavbar && <Navbar isLoggedIn={isLoggedIn} />}
      <main>
        <AnimatePresence mode="wait">
          <div key={location.pathname}>
            <Outlet /> {/* Child routes will render here */}
          </div>
        </AnimatePresence>
      </main>
      {showFooter && <Footer />}
    </div>
  );
}

/**
 * Logout component
 */
function Logout({ onLogout }) {
  React.useEffect(() => {
    onLogout();
  }, [onLogout]);

  return <Navigate to="/login" replace />;
}

/**
 * Main App component jo state aur routes ko define karta hai.
 */
export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <div className="font-sans bg-gradient-to-br from-blue-50 via-purple-50 to-pink-100 min-h-screen">
        <Routes>
          {/* All pages now go through the MainLayout, which decides if Navbar/Footer should be shown */}
          <Route element={<MainLayout isLoggedIn={isLoggedIn} />}>
            <Route
              path="/"
              element={<HomePage onGetStartedClick={() => setIsModalOpen(true)} />}
            />
            <Route path="/select-stream" element={<StreamSelectionPage />} />
            <Route path="/stream/:streamName" element={<StreamDetailPage />} />
            <Route path="/stream/:streamName/quiz" element={<QuizPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>

          {/* Standalone routes without the layout */}
          <Route
            path="/login"
            element={<LoginPage setIsLoggedIn={() => setIsLoggedIn(true)} />}
          />
          <Route path="/signup" element={<SignUpPage />} />
          <Route
            path="/logout"
            element={<Logout onLogout={() => setIsLoggedIn(false)} />}
          />
        </Routes>

        <ClassSelectorModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </BrowserRouter>
  );
}