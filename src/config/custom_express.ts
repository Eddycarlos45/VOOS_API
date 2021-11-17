import express from 'express';
import { voo_router } from '../routes/voos_routes';

const app = express();
app.use(express.json());
app.use(voo_router);

export { app } 