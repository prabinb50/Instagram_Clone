import express from "express";
import multer from "multer";
const upload = multer({ dest: "uploads/" })

const router = express.Router();

router.post("/", upload.single("storyPicture"), somethingController);
router.get("/", somethingController);
router.get("/:id", somethingController);
router.patch("/:id", somethingController);
router.delete("/:id", somethingController);

export default router;