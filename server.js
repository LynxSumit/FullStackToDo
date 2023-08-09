import { app } from "./app.js"
import { connectDb } from "./data/Database.js"


// databse Connect  
connectDb()
// Listening App 
app.listen(process.env.PORT, ()=>{
    console.log(`Server is working on port:${process.env.PORT} in ${process.env.NODE_ENV} mode`)
})