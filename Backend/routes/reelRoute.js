import express from "express";
import { createReel, deleteReelById, getAllReel, getReelById } from "../controllers/reelController.js";

const router = express.Router();

router.post("/", createReel);
router.get("/", getAllReel);
router.get("/:id", getReelById);
router.delete("/:id", deleteReelById);

export default router;