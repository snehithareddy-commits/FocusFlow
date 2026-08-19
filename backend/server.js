const bcrypt = require("bcrypt");
const express = require("express");
const cors = require("cors")
const mongoose = require("mongoose");
const User = require("./models/User");


mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.log("MongoDB connection error:", error);
  });

const app = express();
app.use(cors())
app.use(express.json());

app.get("/", (req, res) => {
  res.send("FocusFlow Backend is running!");
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      user.password
    );

    if (!isPasswordCorrect) {
      return res.status(401).json({
        message: "Incorrect password"
      });
    }

    res.json({
      message: "Login successful!",
      user: {
        name: user.name,
        email: user.email
      }
    });

  } catch (error) {
    console.log("Login error:", error);

    res.status(500).json({
      message: "Login failed"
    });
  }
});
app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password,10);
    const newUser = new User({
      name,
      email,
      password: hashedPassword
    });

    await newUser.save();

    res.json({
      message: "User registered successfully!",
      user: newUser
    });

  } catch (error) {
    console.log("Signup error:", error);

    res.status(500).json({
      message: "Signup failed"
    });
  }
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`FocusFlow backend running on port ${PORT}`);
});