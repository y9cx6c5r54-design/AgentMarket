import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import './lib/db.js';
import healthRoutes from './routes/health.js';
import authRoutes from './routes/auth.js';
import adminRoutes from './routes/admin.js';

if (!process.env.JWT_SECRET) {
  console.error('Missing JWT_SECRET in environment.');
  process.exit(1);
}

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (_req, res) => {
  res.json({ service: 'agentmarket-backend', status: 'running' });
});

app.use('/health', healthRoutes);
app.use('/auth', authRoutes);
app.use('/admin', adminRoutes);

const port = Number(process.env.PORT || 3001);
app.listen(port, () => {
  console.log(`AgentMarket backend running on http://localhost:${port}`);
});
