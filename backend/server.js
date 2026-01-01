import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import { connectDB } from "./config/db.js";
import axios from "axios";
import homePageController from './controllers/homePage.controller.js';
import titleController from "./controllers/title.controller.js";
import celebController from "./controllers/celeb.controller.js";

dotenv.config(); 

const app = express();

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:5173', // allow your frontend origin
  credentials: true               // if you're using cookies or auth headers
}));

app.get('/api/v1/person/:id',celebController);

app.get('/api/v1/home_page', homePageController);

app.get('/api/v1/title/:id', titleController);


app.listen('5000', () => {
    connectDB();
    console.log("Server running on port 5000")
});