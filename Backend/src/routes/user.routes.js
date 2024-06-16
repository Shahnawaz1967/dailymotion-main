// Import express library
import express from 'express';

// Import controller functions for user operations
import { deleteUser, login, logout, register } from '../controllers/user.controller.js';

// Import the authentication middleware
import { authentication } from '../middlewares/user.middleware.js';

// Create a new router object
const userRouter = express.Router();

/**
 * @swagger
 * /api/user/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "John Doe"
 *               email:
 *                 type: string
 *                 example: "john.doe@example.com"
 *               password:
 *                 type: string
 *                 example: "password123"
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: User already exists with this email
 *       500:
 *         description: Error registering user
 */
// Route for registering a new user
userRouter.post('/register', register);

/**
 * @swagger
 * /api/user/login:
 *   post:
 *     summary: Login a user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "john.doe@example.com"
 *               password:
 *                 type: string
 *                 example: "password123"
 *     responses:
 *       200:
 *         description: User logged in successfully
 *       400:
 *         description: Invalid credentials
 *       500:
 *         description: Error logging in user
 */
// Route for logging in a user
userRouter.post('/login', login);

/**
 * @swagger
 * /api/user/logout:
 *   post:
 *     summary: Logout a user
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: User logged out successfully
 */
// Route for logging out a user
userRouter.post('/logout', logout);

/**
 * @swagger
 * /api/user/{id}:
 *   delete:
 *     summary: Delete a user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           example: "60d0fe4f5311236168a109ca"
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       404:
 *         description: User not found
 *       500:
 *         description: Error deleting user
 */
// Route for deleting a user by ID
// Includes authentication middleware to ensure the user is authenticated
userRouter.delete('/:id', authentication, deleteUser);

// Export the router for use in other parts of the application
export default userRouter;
