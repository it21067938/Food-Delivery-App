import express from 'express';
import authMiddleware from '../middleware/Auth.js';
import { placeOrder, verifyOrder, userOrder, listOrders, updateStatus } from '../controllers/OrderController.js';

const orderRoute = express.Router();

orderRoute.post("/place", authMiddleware, placeOrder);
orderRoute.post("/verify", verifyOrder);
orderRoute.post("/userOrders", authMiddleware, userOrder);
orderRoute.get("/list", listOrders);
orderRoute.post("/status", updateStatus);

export default orderRoute;