import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import postRoutes from "./routes/posts.js";

const app = express();

app.use('/posts', postRoutes);

app.use(cors());

const CONNECTION_URL =
    "mongodb+srv://underwoodbrady:testing123@cluster0.5zdx1n4.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
    .connect(CONNECTION_URL, { useNewUrlParser: true })
    .then(() => {
        app.listen(PORT, ()=>console.log(`Server running on port: ${PORT}`));
    })
    .catch((error) => {
        console.log(error);
    });
