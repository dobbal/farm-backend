import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Backend is running successfully!");
});

const port = parseInt(process.env.PORT || "3001", 10);

// IMPORTANT: Only use this Node format
app.listen(port, "127.0.0.1", () => {
  console.log(`Server running at http://127.0.0.1:${port}`);
});