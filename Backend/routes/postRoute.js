import express from "express";
import { createPost, deletePostById, getAllPost, getPostById, updatePostById } from "../controllers/postController.js";
import multer from "multer";
const upload = multer({ dest: "uploads/" })

const router = express.Router();

router.post("/", upload.single("postPicture"), createPost);
router.get("/", getAllPost);
router.get("/:id", getPostById);
router.patch("/:id", updatePostById);
router.delete("/:id", deletePostById);

export default router;