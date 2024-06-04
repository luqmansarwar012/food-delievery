import foodModel from "../models/food.model.js";
import fs from "fs";

// add food item
const addFood = async (req, res) => {
  console.log("food added");
  let image = `${req.file.filename}`;
  const { name, description, price, category } = req.body;
  const food = new foodModel({
    name,
    description,
    price,
    category,
    image,
  });
  try {
    await food.save();
    res.status(200).json({ success: true, message: "Food added!", food });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Food not added!" });
  }
};
export { addFood };
