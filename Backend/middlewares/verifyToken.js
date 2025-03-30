import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    const token = req.headers["authorization"];
    // console.log("Token:", token);

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    const pureToken = token.split(" ")[1];
    console.log("Pure Token:", pureToken);

    jwt.verify(pureToken, process.env.JWT_SECRET, function (err, decoded) {
        if (err) {
            return res.status(401).json({ message: "You are not authorized" });
        }
        console.log("Decoded Token:", decoded);
        next();
    });
}