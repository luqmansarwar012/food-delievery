import express from "express";
import { addFood } from "../controllers/food.controller.js";
import { upload } from "../config/multer.js";

const foodRouter = express.Router();

foodRouter.post("/add", upload.single("image"), addFood);

export default foodRouter;
