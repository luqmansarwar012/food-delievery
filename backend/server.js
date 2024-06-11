import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
// import path, { dirname } from "path";
// import { fileURLToPath } from "url";
// App config
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(
  cors({
    origin: ["https://foodie-shoodie-app.vercel.app/"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);

// Database connection
connectDB();

// API endpoints
// food-endpoints
app.use("/api/food", foodRouter);
// user-endpoints
app.use("/api/user", userRouter);
// Cart-endpoints
app.use("/api/cart", cartRouter);
// Order-endpoints
app.use("/api/order", orderRouter);
// endpoint to view image
app.use("/images", express.static("uploads"));

app.get("/", (req, res) => {
  res.json("Hello");
});

// Running frontend build on backend server
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const frontendDistPath = path.resolve(
//   __dirname,

//   "frontend",
//   "dist"
// );

// app.get("/", (req, res) => {
//   app.use(express.static(frontendDistPath));
//   res.sendFile(path.join(frontendDistPath, "index.html"));
// });
// Running express server
app.listen(port, () => {
  console.log(`Server runing on : http://localhost:${port}`);
});
