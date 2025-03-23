import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../model/usermodel.js';
import crypto from 'crypto';
import sendEmail from '../utility/sendEmail.js';

dotenv.config();

export const signupf = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (username.length < 8) {
      return res.status(400).json({ message: 'Username must be at least 8 characters long.' });
    }
    if (password.length < 8) {
      return res.status(400).json({ message: 'Password must be at least 8 characters long.' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists.' });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'Strict' });
    
    const { password: _, ...userWithoutPassword } = newUser.toObject();
    res.status(201).json({ message: 'User registered successfully', user: userWithoutPassword });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const loginf = async (req, res) => {
 
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

    res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'Strict' });

    const { password: _, ...userWithoutPassword } = user.toObject();
    res.status(200).json({ message: 'Login successful', user: userWithoutPassword });
} catch (error) {
    res.status(500).json({ message: 'Server Login error', error });
  }
};

export const logoutf = async (req, res) => {
    try{
        res.cookie('token', '', {maxAge: 0});
    res.status(200).json({ message: 'Logged out successfully' });
    }catch(error){

console.log("Error in logout controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}

 
};

export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    const resetToken = crypto.randomBytes(32).toString('hex');
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 5 * 60 * 1000; // 5 minutes
    await user.save();

    
    const resetLink = `http://localhost:5173/resetpassword/${resetToken}`;
    await sendEmail(email, 'Password Reset', `<p>Click <a href="${resetLink}">here</a> to reset your password. This link expires in 5 minutes.</p>`);

    res.status(200).json({ message: 'Reset link sent to email' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const resetPassword = async (req, res) => {
  try {
    const { newPassword } = req.body;
    const { token } = req.params; 

    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() }, 
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }

    // Hash the new password
    user.password = await bcrypt.hash(newPassword, 12);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    res.status(200).json({ message: "Password reset successfully" });
  } catch (error) {
    console.error("Error resetting password:", error);
    res.status(500).json({ message: "Server error", error });
  }
};
