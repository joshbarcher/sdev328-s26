import express from 'express';
import { router as mallRtr } from "./routers/mall-router.js";
import { router as bookRtr } from './routers/book-router.js';
import { router as nameRtr } from './routers/name-router.js';

const app = express();

//mounting the router
app.use("/api/malls", mallRtr);
app.use("/api/book", bookRtr);
app.use("/api/name", nameRtr);

const port = 8000;
app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));