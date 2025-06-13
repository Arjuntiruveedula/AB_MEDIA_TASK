import express from 'express';
import cors from 'cors';
 import dotenv from 'dotenv';
import connectDB from './config/db.js';

import destinationRoutes from './routes/destinationRoutes.js';
import packageRoutes from './routes/packageRoutes.js';
import testimonialRoutes from './routes/testimonialRoutes.js';

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/destinations', destinationRoutes);
app.use('/api/packages', packageRoutes);
app.use('/api/testimonials', testimonialRoutes);

app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running!' });
});

const PORT =  5000;
app.listen(PORT, () => console.log(`Server running on port 5000`));
