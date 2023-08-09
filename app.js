import express from "express"
import UserRouter from "./routes/user.js"
import {config} from "dotenv"
import cookieParser from "cookie-parser"
import taskRouter from "./routes/task.js"
import { errorMiddleware } from "./middleWares/error.js"
import cors from "cors"
export const app = express()

config({
    path : './data/config.env'
})
// Using MiddleWarwes 
app.use(express.json())
app.use(cookieParser())
app.use(errorMiddleware)
app.use(cors({
    origin : [process.env.URL1 , process.env.URL2],
    methods : ["GET", "PUT", "POST", "DELETE"],
    credentials : true
}))
// Using Routes 
app.use("/api/v1/users", UserRouter)
app.use("/api/v1/task", taskRouter)

app.get("/", (req,res)=>{
    res.send("Hello Guys")
})


