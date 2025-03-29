import express from 'express'
import mongoose from 'mongoose'
import cors from "cors"
import "dotenv/config"
import userRoute from "./routes/userRoute.js"
import postRoute from "./routes/postRoute.js"
import reelRoute from "./routes/reelRoute.js"
import storyRoute from "./routes/storyRoute.js"

// app config
const app = express();

// middleware
app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:5173",
        origin: "https://instagram-beta-lilac.vercel.app/",
    })
)

// database connection
try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("Database connected successfully")
} catch (error) {
    console.log("Error in connecting database", error)
}

app.use("/users", userRoute);
app.use("/posts", postRoute);
app.use("/reels", reelRoute);
app.use("/stories", storyRoute);


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})

app.get("/", (req, res) => {
    res.send("Instagram server is running")
})
