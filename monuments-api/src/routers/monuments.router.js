import { Router } from 'express';
import { getMons } from '../controllers/monuments.controller.js';

export const router = Router();

router.get("/api/monuments", getMons);