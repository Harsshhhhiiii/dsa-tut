import { useState } from "react";
import { toast } from "react-toastify";
import { useAuthContext } from "../Context/AuthContext";

const useForgotPassword = () => {
  const [loading, setLoading] = useState(false);

  const forgotpass = async (email) => {
    if (!email ) {
      toast.error("Please fill in the email field");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("https://dsa-tut.onrender.com/api/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email}),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Invalid User");
      }

      localStorage.setItem("chat-user", JSON.stringify(data));
     
     // Fix: set user in AuthContext
      
      toast.success("Reset link sent to your Email");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, forgotpass };
};

export default useForgotPassword;
