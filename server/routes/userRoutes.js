import express from "express";
import { protect, adminOnly } from "../middlewares/authMiddleware.js";
import { getUserById, getUsers } from "../controllers/userController.js";

const router = express.Router();

// User management routes.
router.get("/", protect, adminOnly, getUsers); // Get all users (Admin only)
router.get("/:id", protect, getUserById); // Get a specific user.

export default router;