const express=require('express')
const bookingRouter=express.Router()
const bookingController=require('../controllers/booking-controller')

bookingRouter.get("/:id",bookingController.getBookingById)

bookingRouter.post("/",bookingController.newBooking)
bookingRouter.delete("/:id",bookingController.deleteBooking)

module.exports=bookingRouter