import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useForgotPassword from "../hooks/useForgotPassword";
import { toast } from "react-toastify";

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { forgotpass }= useForgotPassword();

	const handleSubmit = async (e) => {
		e.preventDefault();
    try{
      await forgotpass(email);
    }catch(error){
      toast.error(error);
    }
		
	};
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-2xl transform transition duration-300 hover:scale-105">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-4">Forgot Password</h2>
        {message && (
          <div className={`p-3 text-center rounded-lg ${message.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
            {message.text}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition duration-200 disabled:bg-gray-400"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>
        <p className="text-center text-gray-600 text-sm mt-4">
          Remembered your password? {" "}
          <button onClick={() => navigate("/login")} className="text-blue-500 hover:underline font-medium">
            Login here
          </button>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
