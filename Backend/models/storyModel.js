import mongoose from "mongoose";

// Story Schema 
const storySchema = new mongoose.Schema({
    userFullName: { type: String, required: true },
    storyPicture: { type: String, required: true },
})

// construct a model (table)
export const Story = mongoose.model("Story", storySchema);