import { useAuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const useLogout = () => {
  const { setAuthUser } = useAuthContext(); // Get setAuthUser from context
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("chat-user");
    Cookies.remove("token");
    setAuthUser(null); // Clear user state
    toast.success("Logged out successfully.");
    navigate("/login"); // Redirect to login page
  };

  return { logout };
};

export default useLogout;
