//

import mongoose from "mongoose";
export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://luqmanrajput012:yupmongowhatsup-69261@cluster0.utazadk.mongodb.net/food-delivery-app"
    )
    .then(() => console.log("Database Connected!"));
};
