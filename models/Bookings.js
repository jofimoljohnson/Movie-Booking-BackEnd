const mongoose=require('mongoose')
const Schema=mongoose.Schema

const bookingSchema=new Schema({
    movie:{
        type:mongoose.Types.ObjectId,
        ref:"Movie",
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    seatNumber:{
        type:Number,
        required:true
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:true
    }

})

module.exports=mongoose.model("Booking",bookingSchema)