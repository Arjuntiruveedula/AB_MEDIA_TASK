import express from 'express';
import { getTopPackages } from '../controllers/packageController.js';

const router = express.Router();
router.get('/top-selling', getTopPackages);
export default router;
