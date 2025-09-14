import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { HashLink } from 'react-router-hash-link';

export default function Navbar({ isLoggedIn = false }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const overviewLinks = [
    { name: 'Key Features', to: '/#features' },
    { name: 'Courses', to: '/#courses' },
    { name: 'Colleges', to: '/#colleges' },
    { name: 'Timeline', to: '/#timeline' },
  ];

  const streamLinks = [
    { name: "Medical", path: "/stream/medical" },
    { name: "Non-Medical", path: "/stream/non-medical" },
    { name: "Commerce (Maths)", path: "/stream/commerce-maths" },
    { name: "Commerce (IP)", path: "/stream/commerce-ip" },
    { name: "Humanities", path: "/stream/humanities" },
  ];

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      // --- CHANGE HERE: z-40 ko z-50 kar diya ---
      className="w-full z-50 p-4" 
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between h-16 px-6 bg-black/20 backdrop-blur-lg rounded-2xl shadow-lg ring-1 ring-white/10 text-white">
        <HashLink to="/#" className="text-2xl font-bold font-crazy">LOGO</HashLink>

        <div className="hidden md:flex items-center gap-6 h-full">
          <div 
            className="relative h-full flex items-center" 
            onMouseEnter={() => setActiveDropdown('overview')} 
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <DesktopNavItem text="Overview" />
            <AnimatePresence>
              {activeDropdown === 'overview' && <DesktopDropdown items={overviewLinks} isHashLink />}
            </AnimatePresence>
          </div>

          <div 
            className="relative h-full flex items-center"
            onMouseEnter={() => setActiveDropdown('streams')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <DesktopNavItem text="Streams" />
            <AnimatePresence>
              {activeDropdown === 'streams' && <DesktopDropdown items={streamLinks} />}
            </AnimatePresence>
          </div>
          
          <NavLink to="/contact" className={getDesktopLinkClass}>Contact</NavLink>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          {isLoggedIn ? (
            <NavLink to="/logout" className="px-5 py-2.5 rounded-lg text-sm font-semibold bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-md hover:shadow-lg hover:shadow-red-500/40 transition-all transform hover:scale-105 active:scale-95">
              Logout
            </NavLink>
          ) : (
            <NavLink to="/login" className="px-5 py-2.5 rounded-lg text-sm font-semibold bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-white shadow-md hover:shadow-lg hover:shadow-indigo-500/40 transition-all transform hover:scale-105 active:scale-95">
              Sign In
            </NavLink>
          )}
        </div>
        
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-2 p-4 bg-black/30 backdrop-blur-lg rounded-2xl flex flex-col gap-4 text-slate-200"
          >
            <HashLink to="/#features" onClick={() => setIsMobileMenuOpen(false)}>Key Features</HashLink>
            <NavLink to="/select-stream" onClick={() => setIsMobileMenuOpen(false)}>Streams</NavLink>
            <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</NavLink>
            {isLoggedIn ? (
              <NavLink to="/logout" onClick={() => setIsMobileMenuOpen(false)} className="bg-red-500 text-white p-2 rounded text-center">Logout</NavLink>
            ) : (
              <NavLink to="/login" onClick={() => setIsMobileMenuOpen(false)} className="bg-indigo-500 text-white p-2 rounded text-center">Sign In</NavLink>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

// Helper Components
const DesktopNavItem = ({ text }) => (
  <button className="flex items-center gap-1 text-slate-200 hover:text-white transition-colors h-full border-b-2 border-transparent hover:border-indigo-400 cursor-pointer">
    {text} <ChevronDown size={16} />
  </button>
);

const DesktopDropdown = ({ items, isHashLink }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 10 }}
    className="absolute top-20 p-2 bg-black/30 backdrop-blur-md rounded-lg flex flex-col gap-1 w-48"
  >
    {items.map(item => {
      const LinkComponent = isHashLink ? HashLink : NavLink;
      return (
        <LinkComponent key={item.name} to={item.path || item.to} smooth
          className="p-2 hover:bg-white/10 rounded-md text-slate-200 transition-colors"
        >
          {item.name}
        </LinkComponent>
      );
    })}
  </motion.div>
);

const getDesktopLinkClass = ({ isActive }) =>
  `h-full flex items-center border-b-2 transition-colors ${
    isActive ? 'border-indigo-400 text-white' : 'border-transparent text-slate-200 hover:text-white'
  }`;