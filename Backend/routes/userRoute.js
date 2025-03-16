import express from "express";

const router = express.Router();

router.post("/", somethingController);
router.get("/", somethingController);
router.get("/:id", somethingController);
router.patch("/:id", somethingController);
router.delete("/:id", somethingController);

export default router;