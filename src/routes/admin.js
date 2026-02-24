import { Router } from 'express';
import { requireAuth } from '../lib/auth.js';

const router = Router();

router.get('/dashboard', requireAuth, (req, res) => {
  res.json({
    message: 'Welcome to AgentMarket admin backend',
    user: req.user
  });
});

export default router;
