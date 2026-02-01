const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const router = express.Router();

/**
 * REGISTER
 */
router.post("/register", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password)
        return res.status(400).json({ message: "All fields required" });

    const existingUser = await User.findOne({ email });
    if (existingUser)
        return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
        email,
        password: hashedPassword,
    });

    res.status(201).json({ message: "User registered successfully" });
});

/**
 * LOGIN
 */
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user)
        return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
        return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
        { userId: user._id },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
    );

    res.json({
        token,
        user: {
            id: user._id,
            email: user.email,
            isVerified: user.isVerified,
        },
    });
});

module.exports = router;
