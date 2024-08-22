import { Router } from 'express';
import {
  register,
  login,
  googleAuth,
  googleAuthCallback,
  logout,
} from '../controllers/authController.ts';
import { isAuthenticated } from '../services/authService.ts';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.get('/auth/google', googleAuth);
router.get('/auth/google/callback', googleAuthCallback);
router.get('/logout', isAuthenticated, logout);

export default router;
