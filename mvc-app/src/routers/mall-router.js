import { Router } from 'express';
import { allMalls, mallById } from '../controller/mall-controller.js';

//create an express router
export const router = Router();

//define a route
router.get("/malls", allMalls);
router.get("/mall", mallById);