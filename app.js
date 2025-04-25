import express from "express";
import cors from "cors";
import helmet from "helmet";
import connectDB from "./config/db.js";
import project from "./routes/project.js";
import auth from "./routes/auth.js";

const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:3000",
  credentials: true
}));
app.use(express.json());

// API Routes
app.use("/api/auth", auth);
app.use("/api/projects", project);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});
