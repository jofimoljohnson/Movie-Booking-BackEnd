1)install nodemon,express,mongoose,dotenv,bcrypt,jsonwebtoken
2)password: J5046agYHyKLTdWD
3)app.js
--------
const express=require('express')
const app=express()
const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config()

mongoose.connect
(`mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.nz7uq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

).
then(()=>
    app.listen(5000,()=>console.log("Connected To Database and Server is running ")
))
.catch(err=>console.log(err))


4)models/user.js
-----------------

5)controllers/user-controller.js
---------------------------------
const User=require('../models/User')
// get all users

6)routes/user-Routes.js
------------------------
const express=require('express')
const userRouter=express.Router()
const userController=require('../controllers/user-controller')

userRouter.get("/",userController.getAllUsers)

module.exports=userRouter

7)app.js
--------
// middleware
// to convert which type of data you are sending
app.use(express.json())
app.use("/user",userRouter)


8)controllers/user-controller.js
---------------------------------
// Sign Up(register)


9)controllers/user-controller.js
---------------------------------
// update user 

10)controllers/user-controller.js
---------------------------------

// delete user 

11)controllers/user-controller.js
---------------------------------
// login user

<!-- get bookings by user -->

------------------------------------------------------------------------------------------------
section-2(Admin)
----------
1)models/Admin.js
------------------



2)routes/admin-routes.js
--------------------------
const express=require('express')
const adminRouter=express.Router()
const adminController=require('../controllers/admin-controller')

adminRouter.post("/signup",adminController.addAdmin)

module.exports=adminRouter


3)app.js
---------

const adminRouter=require("./routes/admin-routes")
app.use("/admin",adminRouter)


4)controllers/admin-controller.js
----------------------------------
// add admin(admin signup )


5)controllers/admin-controller.js
----------------------------------
//normal user authorization is unnecessary but admin authorization is necessary

// admin login

<!-- get admin -->
---------------------------------------------------------------------------
section-3
----------

1)models/Movie.js
------------------

2)routes/movie-routes.js
-------------------------
3)app.js
----------
const movieRouter=require("./routes/movie-routes")
app.use("/movie",movieRouter)


4)controller/movie-controller.js
---------------------------------
<!-- addMovie -->

verification process:
1)verify decrypt token
2)store admin id from decrypted token

5)controller/movie-controller.js
---------------------------------

<!-- get All Movies -->

6)controller/movie-controller.js
---------------------------------

<!-- get movie by id -->
---------------------------------------------------------------------------

section-4
----------
1)model/Bookings.js
-------------------
2)routes/booking-routes.js
---------------------------
3)app.js
---------
const bookingRouter=require('./routes/booking-routes')

app.use("/booking",bookingRouter)


4)controller/booking-controller.js
------------------------------------
<!-- new booking -->
<!-- get booking by id -->
<!-- delete booking -->







