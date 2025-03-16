import cloudinary from "../lib/cloudinaryConfig.js";
import { Story } from "../models/storyModel.js"


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

// Get all stories 
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

// Get story by id
export const getStoryById = async (req, res) => {
    try {
        const singleStory = await Story.findById(req.params.id);
        // if story is not found
        if (!singleStory) {
            return res.status(404).json({
                message: "Story not found"
            })
        }
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

// delete story by id
export const deleteStoryById = async (req, res) => {
    try {
        const checkStory = await Story.findById(req.params.id);
        // if story is not found
        if (!checkStory) {
            return res.status(404).json({
                message: "Story not found"
            });
        }

        // Proceed with deletion only if the product exists
        const deletedStory = await Story.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            message: "Single story deleted successfully",
            story: deletedStory
        })
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: error
        })
    }
}