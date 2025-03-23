import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import About from "./components/About";
import Services from "./components/Services";
import {ToastContainer} from "react-toastify"
import Home from "./components/Home";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import { useAuthContext } from "./Context/AuthContext";
import LogoutComponent from "./components/Logout";
const App = () => {
  const { authUser } = useAuthContext();
  console.log(authUser);
  console.log(localStorage.getItem("chat-user"));
  
  
  return (  
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path='/' element={authUser ? <Home /> : <Navigate to='/login' />} />
          <Route path='/services' element={authUser ? <Services /> : <Navigate to='/login' />} />
          <Route path='/contact' element={authUser ? <Contact /> : <Navigate to='/login' />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={!authUser ? <Login /> : <Navigate to='/' />} />
          <Route path='/signup' element={!authUser ? <Signup /> : <Navigate to='/' />} />
          <Route path='/forgotpassword' element={!authUser ? <ForgotPassword /> : <Navigate to='/' />} />
          <Route path="/resetpassword/:token" element={ <ResetPassword /> } />

          <Route path='/logout' element={authUser ? <LogoutComponent /> : <Navigate to='/' />} />
        </Routes>
		<ToastContainer />
      </div>
      </>
  );
};

export default App;