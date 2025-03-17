import cloudinary from "../lib/cloudinaryConfig.js";
import { User } from "../models/userModel.js"
import bcrypt from "bcrypt";
const saltRounds = 10;
import jwt from "jsonwebtoken";

// CRUD For User
// 1. Create or Register User
export const registerUser = async (req, res) => {
    try {
        // 1. check if email already exists or not
        const userExists = await User.findOne({ email: req.body.email });
        if (userExists) {
            return res.status(409).json({
                message: "You already have an account with this email, please login",
                code: 409
            })
        }

        // 2. hash the password using bcrypt
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
        if (!hashedPassword) {
            return res.status(500).json({
                message: "Something went wrong during password hashing",
                code: 500
            });
        }

        // 3. handle profilePicture upload
        const cloudinaryResponse = cloudinary.uploader.upload(req.file.path);

        // 4. save the user to the database
        const saveUser = await new User.create({ ...req.body, profilePicture: (await cloudinaryResponse).secure_url, password: hashedPassword }).save();
        // if user is not saved
        if (!saveUser) {
            return res.status(404).json({
                message: "Could not register user",
                code: 404
            });
        }

        // 5. Return the saved data
        return res.status(201).json({
            message: "You have been registered successfully",
            user: saveUser
        })

    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error,
            code: 500
        })
    }
}

// 2. Login User
export const loginUser = async (req, res) => {
    try {
        // 1. Check if email exists or not
        const userExists = await User.findOne({ email: req.body.email });

        // if user does not exists
        if (!userExists) {
            return res.status(404).json({
                message: "User not found, please register",
                code: 404
            })
        }

        // 2. if user exists, compare the password
        const isPasswordMatched = await bcrypt.compare(req.body.password, userExists.password);

        // if password does not match
        if (!isPasswordMatched) {
            return res.status(401).json({
                message: "Invalid password",
            });
        };

        // 3. Generate jwt token if password matches
        const userToken = jwt.sign({ email: userExists.email, id: userExists._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

        // if token is not generated
        if (!userToken) {
            return res.status(500).json({
                message: "Could not generate token",
                code: 500
            });
        }

        // return the token
        return res.status(200).json({
            message: "Login successful",
            token: userToken
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error,
            code: 500
        })
    }
}

// 3. Get User By Id
export const getUserById = async (req, res) => {
    try {
        const singleUser = await User.findById(req.params.id);

        // if user is not found
        if (!singleUser) {
            return res.status(404).json({
                message: "User doesnot exist matching the given id",
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error,
            code: 500
        })
    }
}

// 4. Get All Users
export const getAllUser = async (req, res) => {
    try {
        const users = await User.find();
        return res.status(200).json({
            message: "All users fetched successfully",
            data: users
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error,
            code: 500
        })
    }
}

// 5. Delete User
export const deleteUser = async (req, res) => {
    try {
        // 1. Only the owner can delete its account
        // get id from token and match that with req.params.id

        // check if user exists or not
        const checkUser = await User.findById(req.params.id);
        if (!checkUser) {
            return res.status(404).json({
                message: "User not found",
                code: 404
            })
        }
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            message: "User deleted successfully",
            data: deletedUser
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error,
            code: 500
        })
    }
}

// 6. Update User
export const updateUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        // handle password hashing
        let newHashedPassword = user.password;
        if (req.body.password) {
            newHashedPassword = bcrypt.hash(req.body.password);
        }

        // handle profile picture upload
        let newProfilePicture = user.profilePicture;
        if (req.file) {
            const cloudinaryResponse = await cloudinary.uploader.upload(req.file.path);
            newProfilePicture = cloudinaryResponse.secure_url;
        }

        const updatedUser = await User.findByIdAndUpdate(req.params.id, { ...req.body, password: newHashedPassword, profilePicture: newProfilePicture }, { new: true });
        return res.status(200).json({
            message: "User updated successfully",
            data: updatedUser
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error,
            code: 500
        })
    }

}



