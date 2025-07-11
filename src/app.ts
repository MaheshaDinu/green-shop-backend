import express,{Express,Request,Response} from "express";
import productRoutes from "./routes/product.routes";
import cors from "cors"
import contactRoutes from "./routes/contact.routes";

//initialize the express app
const app = express();

//Define Middleware


//Define allowed origins
const allowedOrigins = [
    "http://localhost:5173",
]

const corsOptions = {
    origin: (origin: string | undefined, callback:(err: Error | null, allow?: boolean)=>void)=>{
        if (!origin || allowedOrigins.includes(origin)) { // The request has no origin — typically from non-browser tools (like Postman or curl). These are allowed.
            callback(null, true); // allow the request
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    }
}

app.use(cors(corsOptions))
app.use(express.json())

app.use("/products", productRoutes)
app.use("/contact", contactRoutes)



export default app