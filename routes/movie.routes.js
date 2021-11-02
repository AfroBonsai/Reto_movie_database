const express = require('express');
const router = express.Router();
// const auth = require('../middlewares/auth.js');

//Import Controllers
const movies = require("../controllers/movie.controller");
  
// router.post("/", movies.create); // Create a new movie
// router.get("/", movies.findAll); // Retrieve all movies
// router.get("/available", movies.findAllAvailable); // Retrieve all available movies
// router.get("/:id", movies.findOne); // Retrieve a single movie with id
// router.put("/:id", movies.update); // Update a movie with id
// router.delete("/:id", movies.delete); // Delete a movie with id
// router.delete("/", movies.deleteAll); // Create a new movie
  
// router.get("/", movies.findAll);
// router.get("/:id", movies.findOne);
// router.get("/title/:title", movies.findByTitle);
// router.get("/genre/:genre", movies.findByGenre);
// router.get("/cast/:cast", movies.findByCast);
// router.get("/location/:location", movies.findByLocation);
// router.get("/available/:available", movies.findByAvailability);

// router.post("/", movies.create);

// router.post("/:id", movies.update);

// router.delete("/:id,", auth, movies.delete);


module.exports = router;