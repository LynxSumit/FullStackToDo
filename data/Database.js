import mongoose from "mongoose"

export const connectDb = () => {
    // Database Connect 
mongoose.connect(process.env.MONGO_URI, {dbName : 'Users'}).then((c)=>{
    console.log(`connected with ${c.connection.host}`)
})
}