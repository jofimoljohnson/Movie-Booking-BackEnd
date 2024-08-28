const express=require('express')
const app=express()
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const userRouter = require('./routes/user-routes')
const adminRouter=require("./routes/admin-routes")
const movieRouter=require("./routes/movie-routes")
const bookingRouter=require('./routes/booking-routes')
dotenv.config()
const cors = require('cors');





// middleware
app.use(cors())
// to convert which type of data you are sending
app.use(express.json())

app.use("/user",userRouter)
app.use("/admin",adminRouter)
app.use("/movie",movieRouter)
app.use("/booking",bookingRouter)




mongoose.connect
(`mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.nz7uq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

).
then(()=>
    app.listen(5002,()=>console.log("Connected To Database and Server is running ")
))
.catch(err=>console.log(err))


