import mongoose from "mongoose";

// User Schema 
const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    profilePicture: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
})

// construct a model (table)
export const User = mongoose.model("User", userSchema);