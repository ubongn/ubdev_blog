import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "../api/routes/user.route.js"
import authRoutes from "../api/routes/auth.route.js"

dotenv.config();


mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('MongoDb is connected');
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log("listening on post 3000")
})

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);