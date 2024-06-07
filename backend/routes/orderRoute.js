import express from "express";
import {
  placeOrder,
  userOrders,
  verifyOrder,
} from "../controllers/orderController.js";
import authMiddleware from "../middleware/auth.js";

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.post("/userOrders", authMiddleware, userOrders);
orderRouter.post("/verify", verifyOrder);

export default orderRouter;
