
import express from 'express';
import app from "./app";
import dotenv from "dotenv";
import DBConnection from "./db/DBConnection";

dotenv.config();

//define the  application port
const port = process.env.PORT;

DBConnection().then(result => console.log(result));


//instruct the app to listen on port 3000
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})