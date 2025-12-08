import express from "express";
import cors from "cors";

const app = express();

const allowedOrigins = [
  "https://farm-frontend-li56.vercel.app",
  "https://farm-frontend-gray-xi.vercel.app",  // optional fallback
  "http://localhost:5173"
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (mobile apps, curl, etc.)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Default route
app.get("/", (req, res) => {
  res.send("Backend is running successfully!");
});

const port = process.env.PORT || 3001;

app.listen(Number(port), "0.0.0.0", () => {
  console.log(`Server running at http://0.0.0.0:${port}`);
});