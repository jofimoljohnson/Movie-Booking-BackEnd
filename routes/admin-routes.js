const express=require('express')
const adminRouter=express.Router()
const adminController=require('../controllers/admin-controller')

adminRouter.post("/signup",adminController.addAdminSignUp)
adminRouter.post("/login",adminController.adminLogin)
adminRouter.get("/",adminController.getAdmin)
adminRouter.get("/:id",adminController.getAdminById)
module.exports=adminRouter