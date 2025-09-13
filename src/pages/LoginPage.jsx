import React, { useState } from 'react'; 
import { Link, useNavigate } from 'react-router-dom'; 

export default function LoginPage({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault(); 
    console.log('Logging in with:', email, password);
    setIsLoggedIn(true);
    navigate('/');
  };

  return (
    <div className="login-container">
      <div className="background-blob"></div>
      <form className="login-form" onSubmit={handleFormSubmit}>
        <h2>Sign In</h2>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input 
            type="email" 
            id="email" 
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </div>
        
        <button type="submit" className="submit-btn">
          Sign In
        </button>
        
        <p className="signup-link">
          Don't have an account yet?{' '}
          <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
}