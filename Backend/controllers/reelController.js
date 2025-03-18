import cloudinary from "../lib/cloudinaryConfig.js";
import { Reel } from "../models/reelsModel.js";

// Create
export const createReel = async (req, res) => {
    try {
        console.log(req.file);
        const file = req.file;
        const cloudinaryResponse = await cloudinary.uploader.upload(file.path);

        const newlyCreatedReel = await new Reel({ ...req.body, video: cloudinaryResponse.secure_url }).save();

        return res.status(201).json({
            message: "Reel created successfully",
            reel: newlyCreatedReel
        })
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: error.message
        })
    }
}

// Read All
export const getAllReel = async (req, res) => {
    try {
        const reels = await Reel.find();
        return res.status(200).json({
            message: "Reels fetched successfully",
            reels: reels
        })
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: error
        })
    }
}

// Read By Id
export const getReelById = async (req, res) => {
    try {
        const singleReel = await Reel.findById(req.params.id)
        return res.status(201).json({
            message: "Single reel fetched successfully",
            reel: singleReel
        })
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: error
        })
    }
}

// Delete By Id
export const deleteReelById = async (req, res) => {
    try {
        const checkReel = await Reel.findById(req.params.id);
        // if reel is not found
        if (!checkReel) {
            return res.status(404).json({
                message: "Reel not found"
            });
        }

        const deletedReel = await Reel.findByIdAndDelete(req.params.id)
        return res.status(200).json({
            message: "Single Reel deleted successfully",
            reel: deletedReel
        })
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: error
        })
    }
}