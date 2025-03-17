import express from "express";
import multer from "multer";
import { createStory, deleteStoryById, getAllStory, getStoryById } from "../controllers/storyController.js";
const upload = multer({ dest: "uploads/" })

const router = express.Router();

router.post("/", upload.single("storyPicture"), createStory);
router.get("/", getAllStory);
router.get("/:id", getStoryById);
router.delete("/:id", deleteStoryById);

export default router;