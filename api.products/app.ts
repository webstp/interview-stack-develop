import express, { Application } from "express";
import productRoutes from './api/routes/products';
import morgan from 'morgan';

// Export App for testing
export const app: Application = express();

app.use(morgan("common"));
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);