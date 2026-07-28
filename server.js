import express from "express";
//loads the env file into the server.js
import { configDotenv } from "dotenv";
import { pool } from "./database/db.js";

//creating the express application
const app = express();

//port number for communicating from the env file or port 5000
const PORT = process.env.PORT || 5000;

//loading env file
configDotenv();

//making app run json files in express
app.use(express.json());

//the port the app is listening from
app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`);
})