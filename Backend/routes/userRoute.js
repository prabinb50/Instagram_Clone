import express from "express";
import { deleteUser, getAllUser, getUserById, registerUser, updateUser } from "../controllers/userController.js";

const router = express.Router();

router.post("/", registerUser);
router.get("/", getAllUser);
router.get("/:id", getUserById);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;