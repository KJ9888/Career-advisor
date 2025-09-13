import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

// This is now a simpler, non-sticky navbar
export default function Navbar({ isLoggedIn = false }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Styles for the pill design
  const linkStyles = 'hover:text-indigo-600';
  const activeLinkStyles = 'text-indigo-600 font-bold';
  const ctaButtonStyles = 'bg-indigo-600 hover:bg-indigo-500 text-white';

  const StyledNavLink = ({ to, children }) => (
    <NavLink 
      to={to} 
      className={({ isActive }) => 
        `transition-colors ${linkStyles} ${isActive ? activeLinkStyles : ''}`
      }
    >
      {children}
    </NavLink>
  );

  return (
    <nav className="w-full z-50">
      <div className="flex items-center justify-between h-20 px-4 md:px-8 max-w-5xl mx-auto bg-white/80 backdrop-blur-lg text-gray-800 shadow-xl ring-1 ring-gray-200 rounded-full my-4">
        
        <Link to="/" className="text-2xl font-bold font-crazy">
          LOGO
        </Link>

        <div className="hidden md:flex items-center gap-8 font-semibold">
          <StyledNavLink to="/">Home</StyledNavLink>
          {isLoggedIn ? (
            <StyledNavLink to="/logout">Logout</StyledNavLink>
          ) : (
            <>
              <StyledNavLink to="/login">Login</StyledNavLink>
              <Link to="/signup" className={`px-5 py-2 rounded-full transition-colors ${ctaButtonStyles}`}>
                Sign Up
              </Link>
            </>
          )}
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden max-w-5xl mx-auto px-4 pb-4 space-y-4 font-semibold text-center bg-white/80 backdrop-blur-lg rounded-b-3xl">
            <StyledNavLink to="/">Home</StyledNavLink>
            {isLoggedIn ? ( <StyledNavLink to="/logout">Logout</StyledNavLink> ) : (
                <>
                <StyledNavLink to="/login">Login</StyledNavLink>
                <Link to="/signup" className={`block w-full mt-2 py-2 rounded-full transition-colors ${ctaButtonStyles}`}>
                    Sign Up
                </Link>
                </>
            )}
        </div>
      )}
    </nav>
  );
}