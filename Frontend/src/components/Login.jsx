import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useLogin from '../hooks/useLogin';

const Login = () => {
  const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
  const { login }= useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(email, password);
	};
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

 
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-teal-500 to-blue-600">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-white mb-6">Login</h2>
        {error && <p className="text-red-400 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
							onChange={(e) => setEmail(e.target.value)}
					
            className="w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
							onChange={(e) => setPassword(e.target.value)}
					
            className="w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            type="submit"
            className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition duration-300"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        
        <p className="text-center text-gray-400 mt-4">
          Don't have an account? <Link to="/signup" className="text-green-300 hover:underline">Sign Up</Link>
        </p>
        <p className="text-center text-gray-400 mt-4">
          Forgot your Password? <Link to="/forgotpassword" className="text-green-300 hover:underline">Forgot Password</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
