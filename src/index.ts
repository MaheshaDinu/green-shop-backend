
import express from 'express';
import app from "./app";
import dotenv from "dotenv";

dotenv.config();

//define the  application port
const port = process.env.PORT;


//instruct the app to listen on port 3000
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})