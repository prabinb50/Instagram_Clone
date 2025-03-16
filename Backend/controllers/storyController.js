import cloudinary from "../lib/cloudinaryConfig.js";
import { Story } from "../models/storyModel"


// Create
export const createStory = async (req, res) => {
    try {
        const file = req.file;
        const cloudinaryResponse = cloudinary.uploader.upload(file.path);

        const newlyCreatedStory = await new Story.create({ ...req.body, storyPicture: cloudinaryResponse.secure_url }).save();

        return res.status(201).json({
            message: "Story created successfully",
            story: newlyCreatedStory
        })
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: error
        })
    }
}

// Read All
export const getAllStory = async (req, res) => {
    try {
        const stories = await Story.find();
        return res.status(200).json({
            message: "Stories fetched successfully",
            stories: stories
        })
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: error
        })
    }
}

// Read By Id
export const getStoryById = async (req, res) => {
    try {
        const singleStory = await Story.findById(req.params.id)
        return res.status(201).json({
            message: "Single story fetched successfully",
            story: singleStory
        })
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: error
        })
    }
}

// Delete By Id
export const deleteStoryById = async (req, res) => {
    try {
        const deletedStory = await Story.findByIdAndDelete(req.params.id)
        return res.status(200).json({
            message: "Single story delete successfully",
            story: deletedStory
        })
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: error
        })
    }
}