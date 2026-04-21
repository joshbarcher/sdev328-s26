import express from 'express';
import * as ctl from '../controller/book-controller.js';

export const router = express.Router();

router.get("/chapters", ctl.getChapters);
router.get("/title", ctl.getTitle);
router.get("/pages", ctl.getPages);
router.get("/author", ctl.getAuthor);
router.all("/", ctl.allBook);