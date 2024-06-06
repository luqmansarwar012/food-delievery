import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
// App config
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());

// Database connection
connectDB();

// API endpoints
// food-endpoints
app.use("/api/food", foodRouter);
// user-endpoints
app.use("/api/user", userRouter);
// Cart-endpoints
app.use("/api/cart", cartRouter);
// endpoint to view image
app.use("/images", express.static("uploads"));

// Running express server
app.listen(port, () => {
  console.log(`Server runing on : http://localhost:${port}`);
});
