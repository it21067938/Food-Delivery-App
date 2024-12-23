import express from 'express';
import {addToCart, removeFromCart, getCart} from "../controllers/CartController.js"
import authMiddleware from '../middleware/Auth.js';

const cartRoute = express.Router();

cartRoute.post("/add", authMiddleware, addToCart);
cartRoute.post("/remove", authMiddleware, removeFromCart);
cartRoute.post("/get", authMiddleware, getCart);

export default cartRoute;