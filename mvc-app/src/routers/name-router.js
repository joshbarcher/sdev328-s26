import { printName, printAge } from '../controller/name-controller.js';
import express from 'express';

export const router = express.Router();

router.get("/:fname/:lname/:nickname", printName);
router.get("/:age", printAge);