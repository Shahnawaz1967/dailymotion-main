// Import the User model
import User from "../models/user.model.js";

// Import the verifyToken utility for verifying JWT tokens
import { verifyToken } from "../utilities/jwt.js";

// Middleware function for authentication
const authentication = async (req, res, next) => {
  try {
    // Retrieve the authToken cookie from the request
    const token = req.cookies.authToken;

    // If the token is not present, respond with a 401 Unauthorized status
    if (!token) {
      return res.status(401).send({ message: "Unauthorized" });
    }

    // Verify the token and decode the payload
    const decoded = verifyToken(token);

    // Find the user in the database by the ID from the token payload
    const user = await User.findById(decoded.id);

    // If the user is not found, respond with a 401 Unauthorized status
    if (!user) {
      return res.status(401).send({ message: "Unauthorized" });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(500).send({ message: "Error in authorizing the user", error: error.message });
  }
};

export { authentication };
