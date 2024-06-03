import express from "express";
import cors from "cors";

// App config
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("API working");
});

// Run express server
app.listen(port, () => {
  console.log(`Server runing on : http://localhost:${port}`);
});
