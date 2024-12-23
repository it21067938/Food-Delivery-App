import express from 'express';
import authMiddleware from '../middleware/Auth.js';
import { placeOrder } from '../controllers/OrderController.js';

const orderRoute = express.Router();

orderRoute.post("/place", authMiddleware, placeOrder);

export default orderRoute;