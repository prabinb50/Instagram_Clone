import mongoose from "mongoose";

// Reel Schema 
const reelSchema = new mongoose.Schema({
    caption: { type: String, required: true },
    video: { type: String, required: true },
    likeCount: { type: Number, required: true, default: 0 }
})

// construct a model (table)
export const Reel = mongoose.model("Reel", reelSchema);