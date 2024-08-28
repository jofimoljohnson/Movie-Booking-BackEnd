const express=require('express')
const userRouter=express.Router()
const userController=require('../controllers/user-controller')

userRouter.get("/",userController.getAllUsers)
userRouter.get("/:id",userController.getUserById)
userRouter.post("/signup",userController.SignUp)
userRouter.put("/:id",userController.updateUser)
userRouter.delete("/:id",userController.deleteUser)
userRouter.post("/login",userController.loginUser)
userRouter.get("/bookings/:id",userController.getBookingByUser)

module.exports=userRouter