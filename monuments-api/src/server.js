import express from 'express';
import { router } from './routers/monuments.router.js';

const app = express();

app.get("/health", (req, res) => res.status(200).json({"available": true}));

app.use("/", router);

const port = 8000;
app.listen(port, () => console.log(`App started on http://localhost:${port}`));