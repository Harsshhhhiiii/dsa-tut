import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../Context/AuthContext";
import useLogout from "../hooks/useLogout";
import { FiLogOut, FiLogIn, FiUserPlus, FiMenu } from "react-icons/fi";


const Navbar = () => {
  const { authUser } = useAuthContext();
  const { logout } = useLogout();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

 

  return (
    <div className="navbar bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-md px-6 py-3 flex justify-between items-center text-white">
      <div className="flex items-center">
        <Link to="/" className="text-2xl font-bold text-white">DSATUT</Link>
      </div>


      <div className="flex items-center space-x-6 text-lg">
        <Link to="/about" className="hover:text-gray-300">About</Link>
        {authUser && (
          <>
            <Link to="/services" className="hover:text-gray-300">Services</Link>
            <Link to="/contact" className="hover:text-gray-300">Contact</Link>
          </>
        )}
      </div>
      
      <div className="hidden lg:flex items-center space-x-3">
        {authUser ? (
          <Link to="/logout">

         
          <button className="flex items-center gap-2 text-white hover:text-red-400">
            <FiLogOut /> Logout
          </button>

          </Link>
        ) : (
          <>
            <Link to="/login" className="flex items-center gap-2 text-white hover:text-green-400">
              <FiLogIn /> Login
            </Link>
            <Link to="/signup" className="flex items-center gap-2 text-white hover:text-blue-400">
              <FiUserPlus /> Signup
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
