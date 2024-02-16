const User  = require("../models/User")
const bcrypt = require("bcrypt")

const registerFormData = async (req, res) => {
    try {
        const { name, email, number, role, password } = req.body;

        // Check if the user with the provided email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "User with this email already exists" });
        }

        // Generate salt and hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user instance
        const newUser = new User({
            name,
            email,
            number,
            role,
            password: hashedPassword
        });

        // Save the new user to the database
        const user = await newUser.save();

        // Respond with the newly created user
        res.status(200).json(user);
    } catch (error) {
        // Handle errors
        console.error("Error registering user:", error);
        res.status(500).json({ error: "An error occurred while registering" });
    }
}
const loginUserData = async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res.status(400).json({ error: "Invalid email or password" });
      }
  
      const validate = await bcrypt.compare(req.body.password, user.password);
      if (!validate) {
        return res.status(400).json({ error: "Invalid email or password" });
      }
  
      const { password, ...others } = user._doc;
      res.status(200).json({ data: others });
    } catch (error) {
      res.status(500).json({ error: "An error occurred while logging in" });
    }
  };


module.exports = {registerFormData,loginUserData}