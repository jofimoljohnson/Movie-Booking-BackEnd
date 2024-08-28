
const express=require('express')

const movieRouter=express.Router()
const movieController=require('../controllers/movie-controller')

movieRouter.get("/",movieController.getAllMovies)
movieRouter.get("/:id",movieController.getMovieById)
movieRouter.post("/",movieController.addMovie)


module.exports=movieRouter