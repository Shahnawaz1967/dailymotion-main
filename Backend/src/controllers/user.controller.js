// Import the User model
import User from '../models/user.model.js';

// Import the createToken utility for JWT creation
import { createToken } from '../utilities/jwt.js';

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: "60d0fe4f5311236168a109ca"
 *         name:
 *           type: string
 *           example: "John Doe"
 *         email:
 *           type: string
 *           example: "john.doe@example.com"
 *         password:
 *           type: string
 *           example: "password123"
 *     NewUser:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *       properties:
 *         name:
 *           type: string
 *           example: "John Doe"
 *         email:
 *           type: string
 *           example: "john.doe@example.com"
 *         password:
 *           type: string
 *           example: "password123"
 */

// Register a new user
const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(name, email, password);

    // Check if user with the same email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send({ message: 'User already exists with this email' });
    }

    // Create a new user
    const user = await User.create({
      name,
      email,
      password,
    });

    // Send success response
    return res.status(201).send({ message: 'User registered successfully' });
  } catch (error) {
    // Send error response
    return res.status(500).send({ message: 'Error registering user', error: error.message });
  }
};

// User login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({ message: 'Invalid credentials' });
    }

    // Check if password matches
    const passwordMatch = await user.matchPassword(password);
    if (!passwordMatch) {
      return res.status(400).send({ message: 'Invalid credentials' });
    }

    // Create a token and set it in cookies
    const token = createToken({ id: user._id });
    res.cookie('authToken', token, {
      path: '/',
      expires: new Date(Date.now() + 3600000), // Token expiration time
      secure: true, // Cookie is only sent over HTTPS
      httpOnly: true, // Cookie is not accessible via JavaScript
      sameSite: 'None', // Cookie is sent in cross-site requests
    });

    // Send success response with token
    return res.status(200).send({ message: 'User logged in successfully', token, user: { email: user.email } });
  } catch (error) {
    // Send error response
    return res.status(500).send({ message: 'Error in logging the user', error: error.message });
  }
};

// User logout
const logout = async (req, res) => {
  // Clear the authentication token cookie
  res.clearCookie('authToken');
  // Send success response
  return res.status(200).send({ message: 'User logged out successfully' });
};

// Delete a user by ID
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    // Find and delete the user by ID
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }

    // Send success response
    return res.status(200).send({ message: 'User deleted successfully' });
  } catch (error) {
    // Send error response
    return res.status(500).send({ message: 'Error in deleting the user', error: error.message });
  }
};

// Export the functions for use in other parts of the application
export { register, login, logout, deleteUser };
