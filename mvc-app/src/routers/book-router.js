import express from 'express';
import * as ctl from '../controller/book-controller.js';

export const router = express.Router();

router.get("/chapters", ctl.getChapters);
router.get("/title", ctl.getTitle);
router.get("/pages", ctl.getPages);
router.get("/author", ctl.getAuthor);
router.get("/all", ctl.allBook);
router.get("/details", ctl.getField);
router.get("/print", ctl.printAll);