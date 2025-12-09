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

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// GET /products → return example product list
app.get("/products", (req, res) => {
  const products = [
    { id: "p1", title: "Complex NPK 20-20-20 (25kg)", price: 899.0, desc: "Balanced nutrient for vegetables" },
    { id: "p2", title: "Bio-fertilizer (1L)", price: 249.0, desc: "Organic growth promoter" },
    { id: "p3", title: "Drip irrigation kit", price: 1799.0, desc: "Complete starter kit" },
    { id: "p4", title: "Protective Gloves (pair)", price: 199.0, desc: "Safety gloves for spraying" }
  ];

  res.json(products);
});
