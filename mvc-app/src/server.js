import express from 'express';
import { router } from "./routers/mall-router.js";

const app = express();

//mounting the router
app.use("/", router);

const port = 8000;
app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));