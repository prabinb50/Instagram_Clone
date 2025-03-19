import express from "express";
import { deleteUser, getAllUser, getUserById, loginUser, registerUser, updateUser } from "../controllers/userController.js";
import multer from "multer";
const upload = multer({ dest: "uploads/" })

const router = express.Router();

router.post("/register", upload.single("profilePicture"), registerUser);
router.post("/login", loginUser);
router.get("/", getAllUser);
router.get("/:id", getUserById);
router.patch("/:id", upload.single("profilePicture"), updateUser);
router.delete("/:id", deleteUser);

export default router;