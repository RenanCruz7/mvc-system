import express from 'express';
import cors from 'cors';
import companyRoutes from '../modules/company/routes/company.routes';
import { erroHandler } from '../shared/errors/errorHandler';

const app = express();

app.use(cors());
app.use(express.json());

// Rotas
app.use('/api', companyRoutes);

// Error handler global
app.use(erroHandler);

export default app;