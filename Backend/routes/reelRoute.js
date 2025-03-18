import express from "express";
import { createReel, deleteReelById, getAllReel, getReelById } from "../controllers/reelController.js";
import multer from "multer";
const upload = multer({ dest: "uploads/" })

const router = express.Router();

router.post("/", upload.single("video"), createReel);
router.get("/", getAllReel);
router.get("/:id", getReelById);
router.delete("/:id", deleteReelById);

export default router;