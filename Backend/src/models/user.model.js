// Import mongoose library
import mongoose from 'mongoose';

// Import bcryptjs library for password hashing
import bcrypt from 'bcryptjs';

// Define the User schema with mongoose
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Name is required
  },
  email: {
    type: String,
    required: true, // Email is required
    unique: true,  // Ensure email is unique
  },
  password: {
    type: String,
    required: true, // Password is required
  },
});

// Method to check if the entered password matches the hashed password
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Pre-save middleware to hash the password before saving it to the database
userSchema.pre('save', async function (next) {
  // If the password field is not modified, move to the next middleware
  if (!this.isModified('password')) {
    next();
  }
  // Generate a salt with a cost factor of 10
  const salt = await bcrypt.genSalt(10);
  // Hash the password with the generated salt
  this.password = await bcrypt.hash(this.password, salt);
});

// Create a User model using the defined schema
const User = mongoose.model('User', userSchema);

// Export the User model for use in other parts of the application
export default User;
