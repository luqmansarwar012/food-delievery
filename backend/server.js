import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/food.route.js";
// App config
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());

// Database connection
connectDB();

// API endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));

app.get("/", (req, res) => {
  res.status(200).send("API working");
});

// Run express server
app.listen(port, () => {
  console.log(`Server runing on : http://localhost:${port}`);
});
