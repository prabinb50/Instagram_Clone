import mongoose from "mongoose";

// Post Schema 
const postSchema = new mongoose.Schema({
    caption: { type: String, required: true },
    postPicture: { type: String, required: true },
    likeCount: { type: Number, required: true, default: 0 },
    comments: [
        {
            commentMessage: { type: String, required: true }
        }
    ],
    createdAt: { type: Date, default: Date.now() },
})

// construct a model (table)
export const Post = mongoose.model("Post", postSchema);