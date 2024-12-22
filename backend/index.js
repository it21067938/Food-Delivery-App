import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 8050;

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
    .then(() => {
        console.log("MongoDB Connection Success...");
    })
    .catch((err) => {
        console.error("MongoDB Connection Error:", err);
    });

app.listen(PORT, () => {
    console.log(`Server is up and running on port: ${PORT} 🚀🚀🚀`);
});

app.get("/", (req, res) => {
    res.send("API work")
})



//API's
import foodRouter from "./routes/FoodRoute.js";
app.use("/api/food", foodRouter);
app.use("/images", express.static('uploads'))

import userRouter from "./routes/UserRoute.js";
app.use("/api/user", userRouter);

import cartRoute from "./routes/CartRoute.js";
app.use("/api/cart", cartRoute);