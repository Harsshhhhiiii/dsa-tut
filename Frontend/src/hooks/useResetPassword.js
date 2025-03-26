import { useState } from "react";

const useResetPassword = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const resetPassword = async (token, newPassword) => {
    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch(`https://dsa-tut.onrender.com/api/reset-password/${token}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ newPassword }), 
      });

      const data = await response.json();
      if (response.ok) {
        setMessage({ type: "success", text: data.message });
      } else {
        setMessage({ type: "error", text: data.message });
      }
    } catch (error) {
      setMessage({ type: "error", text: "Something went wrong. Please try again." });
    }

    setLoading(false);
  };

  return { resetPassword, loading, message };
};

export default useResetPassword;
