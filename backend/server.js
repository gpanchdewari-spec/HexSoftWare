import "dotenv/config";

import express from "express";
import cors from "cors";

import connectDB from "./config/db.js";

import serviceRoutes from "./routes/serviceRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";
import internshipRoutes from "./routes/internshipRoutes.js";
import applicationRoutes from "./routes/applicationRoutes.js";
import certificateRoutes from "./routes/certificateRoutes.js";
import testimonialRoutes from "./routes/testimonialRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import userAuthRoutes from "./routes/userAuthRoutes.js";
import jobApplicationRoutes from "./routes/jobApplicationRoutes.js";

import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

await connectDB();

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
  }),
);

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "HexSoftwares API is running",
  });
});

app.use("/api/services", serviceRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/jobs", jobRoutes);

app.use("/api/internships", internshipRoutes);

app.use("/api/applications", applicationRoutes);

app.use("/api/certificates", certificateRoutes);

app.use("/api/testimonials", testimonialRoutes);

app.use("/api/contact", contactRoutes);

app.use("/api/users", userAuthRoutes);

app.use("/api/job-applications", jobApplicationRoutes);

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
