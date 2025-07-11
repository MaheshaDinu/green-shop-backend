"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//initialize the express app
const express_1 = __importDefault(require("express"));
let app = (0, express_1.default)();
//define the  application port
const port = 3000;
app.get("/", (req, res) => {
    res.send("Hello world");
});
//instruct the app to listen on port 3000
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
