const User = require("../models/User");
const Bookings=require('../models/Bookings')
const bcrypt = require("bcryptjs");

// get all users
const getAllUsers = async (req, res, next) => {
    let users;
    try {
        users = await User.find();
    } catch (error) {
        return console.log(error);
    }
    if (!users) {
        return res.status(500).json({ message: "Unexpected error Occured" });
    }
    return res.status(200).json({ users });
};

// Sign Up(register)

const SignUp = async (req, res, next) => {
    const { name, email, password } = req.body;
    if (!name && name.trim() === "" && !email && email.trim() === "" && !password && password.trim() === "") {
        return res.status(422).json({ message: "Invalid Inputs" });
    }
    const hashedPassword = bcrypt.hashSync(password);
    let user;
    try {
        user = new User({ name, email, password: hashedPassword });
        user = await user.save();
    } catch (error) {
        return console.log(error);
    }
    if (!user) {
        return res.status(500).json({ message: "Unexpected error Occured" });
    }
    return res.status(201).json({ id:user._id });
};

// update user

const updateUser = async (req, res, next) => {
    const id = req.params.id;
    const { name, email, password } = req.body;
    if (!name && name.trim() === "" && !email && email.trim() === "" && !password && password.trim() === "") {
        return res.status(422).json({ message: "Invalid Inputs" });
    }
    const hashedPassword = bcrypt.hashSync(password);

    let user;
    try {
        user = await User.findByIdAndUpdate(id, {
            name,
            email,
            password: hashedPassword,
        });
    } catch (error) {
        return console.log(error);
    }
    if (!user) {
        return res.status(500).json({ message: "Something went wrong" });
    }
    res.status(200).json({ message: "Updated Successfully" });
};

// delete user

const deleteUser = async (req, res, next) => {
    const id = req.params.id;
    let user;
    try {
        user = await User.findByIdAndDelete(id);
    } catch (error) {
        return console.log(error);
    }
    if (!user) {
        return res.status(500).json({ message: "Something went wrong" });
    }
    return res.status(200).json({ message: "Deleted Successfully " });
};

// login user
const loginUser = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email && email.trim() === "" && !password && password.trim() === "") {
        return res.status(422).json({ message: "Invalid Inputs" });
    }
    let existingUser;
    try {
        existingUser=await User.findOne({email})
        
    } catch (error) {
        return console.log(error)
        
    }
    if(!existingUser){
        return res.status(404).json({message:"Unable to find user from this Id"})
    }
    const isPasswordCorrect=bcrypt.compareSync(password,existingUser.password)
    if(!isPasswordCorrect){
        return res.status(400).json({message:"Incorrect Password"})
    }
    return res.status(200).json({message:"Login Successful",id:existingUser._id})
};


// booking by user

const getBookingByUser=async(req,res,next)=>{
    const id=req.params.id 
    let bookings;
    try {
        bookings=await Bookings.find({user:id}).populate("movie").populate("user")
        
    } catch (error) {
        return console.log(error)
        
    }
    if(!bookings){
        return res.status(500).json({message:"Unable to get Bookings"})
    }
    return res.status(200).json({bookings})

}


// get user id 

const getUserById=async(req,res,next)=>{
    const id=req.params.id 
    let user;
    try {
        user=await User.findById(id)

        
    } catch (error) {
        return console.log(error)

    }

    if(!user){
        return res.status(500).json({message:"Unexpected Error Occured"})
    }
    return res.status(200).json({user})
}




exports.getAllUsers = getAllUsers;
exports.SignUp = SignUp;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
exports.loginUser = loginUser;
exports.getBookingByUser=getBookingByUser
exports.getUserById=getUserById
