import express from 'express';
import { loginf, logoutf, signupf ,forgotPassword,resetPassword } from '../Controller/authController.js';
const router = express.Router();

router.post('/login', loginf);
router.post('/logout', logoutf);
router.post('/signup', signupf);

router.post('/forgot-password', forgotPassword);
router.post('/reset-password/:token', resetPassword);


export default router;