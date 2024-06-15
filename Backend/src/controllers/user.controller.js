import User from '../models/user.model.js';
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

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(name, email, password);
    const user = await User.create({
      name,
      email,
      password,
    });
    return res.status(201).send({ message: 'User registered successfully' });
  } catch (error) {
    return res.status(500).send({ message: 'Error registering user', error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({ message: 'Invalid credentials' });
    }
    const passwordMatch = await user.matchPassword(password);
    if (!passwordMatch) {
      return res.status(400).send({ message: 'Invalid credentials' });
    }
    const token = createToken({ id: user._id });
    res.cookie('authToken', token, {
      path: '/',
      expires: new Date(Date.now() + 3600000),
      secure: true,
      httpOnly: true,
      sameSite: 'None',
    });
    return res.status(200).send({ message: 'User logged in successfully', token, user: { email: user.email } });
  } catch (error) {
    return res.status(500).send({ message: 'Error in logging the user', error: error.message });
  }
};

const logout = async (req, res) => {
  res.clearCookie('authToken');
  return res.status(200).send({ message: 'User logged out successfully' });
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }
    return res.status(200).send({ message: 'User deleted successfully' });
  } catch (error) {
    return res.status(500).send({ message: 'Error in deleting the user', error: error.message });
  }
};

export { register, login, logout, deleteUser };
