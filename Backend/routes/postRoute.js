import express from "express";
import { createPost, deletePostById, getAllPost, getPostById, updatePostById } from "../controllers/postController.js";
import multer from "multer";
import { verifyToken } from "../middlewares/verifyToken.js";
const upload = multer({ dest: "uploads/" })

const router = express.Router();

router.post("/", verifyToken, upload.single("postPicture"), createPost);
router.get("/", verifyToken, getAllPost);
router.get("/:id", verifyToken, getPostById);
router.patch("/:id", verifyToken, updatePostById);
router.delete("/:id", verifyToken, deletePostById);

export default router;