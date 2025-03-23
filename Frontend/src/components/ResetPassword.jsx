import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useResetPassword from "../hooks/useResetPassword";
import { toast } from "react-toastify";
const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { resetPassword, loading, message } = useResetPassword();
  const navigate = useNavigate();
  const { token } = useParams(); // ✅ Extract token from URL

  useEffect(() => {
    if (message?.type === "success") {
      setTimeout(() => navigate("/login"), 2000);
    }
  }, [message, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match")
      return;
    }
    if(password.length< 8){
      toast.error("Passwords should be of 8 letters minimum")
      return;
    }
    await resetPassword(token, password);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-2xl">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-4">Reset Password</h2>

        {message && (
          <div
            className={`p-3 text-center rounded-lg ${
              message.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
            }`}
          >
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            placeholder="New password"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm password"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 disabled:bg-gray-400"
            disabled={loading}
          >
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
