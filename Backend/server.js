require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./Routes/auth"); // path must be correct

const app = express();

app.use(cors());
app.use(express.json());


//console.log("authRoutes:", authRoutes);

//  this receive a function (router)
app.use("/api/auth", authRoutes);

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected");
        app.listen(5000, () => {
            console.log("Server running on port 5000");
        });
    })
    .catch((err) => {
        console.error("MongoDB error:", err.message);
    });
