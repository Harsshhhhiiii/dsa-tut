import { useState } from "react";
import { toast } from "react-toastify";
import { useAuthContext } from "../Context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async ({username, email, password ,confirmPassword}) => {
    const success = handleInputErrors({ username, email , password, confirmPassword });
		if (!success) return;


    setLoading(true);
    try {
      const res = await fetch("https://dsa-tut.onrender.com/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password, confirmPassword }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Signup failed");
      }

			
			localStorage.setItem("chat-user", JSON.stringify(data));
			setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignup;

function handleInputErrors({ username ,email, password, confirmPassword }) {
	if (!username || !password || !confirmPassword || !email ) {
		toast.error("Please fill in all fields");
		return false;
	}

	if (password !== confirmPassword) {
		toast.error("Passwords do not match");
		return false;
	}

	if (password.length < 8) {
		toast.error("Password must be at least 6 characters");
		return false;
	}

	return true;
}