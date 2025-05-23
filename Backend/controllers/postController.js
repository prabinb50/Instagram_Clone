import cloudinary from "../lib/cloudinaryConfig.js";
import { Post } from "../models/postModel.js";


// Create
export const createPost = async (req, res) => {
    try {
        const file = req.file;
        const cloudinaryResponse = await cloudinary.uploader.upload(file.path);

        const newlyCreatedPost = await new Post({ ...req.body, postPicture: cloudinaryResponse.secure_url }).save();

        return res.status(201).json({
            message: "Post created successfully",
            data: newlyCreatedPost
        })
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: error
        })
    }
}

// Get all posts 
export const getAllPost = async (req, res) => {
    try {
        const posts = await Post.find();
        return res.status(200).json({
            message: "All post fetched successfully",
            data: posts
        })
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: error
        })
    }
}

// Get post by id
export const getPostById = async (req, res) => {
    try {
        const singlePost = await Post.findById(req.params.id)
        return res.status(201).json({
            message: "Single post fetched successfully",
            data: singlePost
        })
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: error
        })
    }
}

// update post by id
export const updatePostById = async (req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(200).json({
            message: "Single post updated successfully",
            data: updatedPost,
            statusCode: 200,
            updatedTime: new Date().getTime()
        })
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: error.message,
        })
    }
}

// delete post by id
export const deletePostById = async (req, res) => {
    try {
        const checkPost = await Post.findById(req.params.id);
        // if Post is not found
        if (!checkPost) {
            return res.status(404).json({
                message: "Post not found"
            });
        }

        const deletedPost = await Post.findByIdAndDelete(req.params.id)
        return res.status(200).json({
            message: "Single post deleted successfully",
            data: deletedPost
        })
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: error
        })
    }
}