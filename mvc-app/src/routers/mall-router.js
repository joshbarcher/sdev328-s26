import { Router } from 'express';
import { allMalls, mallById, mallLocations } from '../controller/mall-controller.js';

//create an express router
export const router = Router();

//define a route
router.get("/all", allMalls);
router.get("/byid", mallById);
router.get("/locations", mallLocations);