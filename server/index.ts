import express from "express";
import { Server } from "node:http";

const app = express();

app.get("/", (req, res) => {
  res.send("Backend is running successfully!");
});

const port = process.env.PORT || 3001;

app.listen(
  Number(port),
  "0.0.0.0",
  () => {
    console.log(`Server running at http://0.0.0.0:${port}`);
  }
);