import jwt, { decode } from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.jwt_token;

  if (!token)
    return res
      .status(401)
      .json({ message: "Unauthorized - No token provided!" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decode) {
      return res.status(401).json({ message: "Unauthorized - Invalid token!" });
    }

    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.log("Error in verifyToken middleware: ", error.message);
    return res.status(500).json({ success: false, message: "Server error!" });
  }
};
