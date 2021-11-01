const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth.js');

//Import Controllers
const users = require("../controllers/user.controller");
  
// router.post("/", movies.create); // Create a new movie
// router.get("/", movies.findAll); // Retrieve all movies
// router.get("/available", movies.findAllAvailable); // Retrieve all available movies
// router.get("/:id", movies.findOne); // Retrieve a single movie with id
// router.put("/:id", movies.update); // Update a movie with id
// router.delete("/:id", movies.delete); // Delete a movie with id
// router.delete("/", movies.deleteAll); // Create a new movie


router.post("/login", users.logIn); // Login as an user
router.post('/register', auth, users.register); // Create a new user - *Requires Admin privileges*

router.get("/:id", users.findById); // Show user information
router.get("/", users.findAll); // Show all users

router.put("/:id", users.update); // Update user information

router.delete("/:id", auth, users.delete); // Delete an user - *Requires Admin privileges*
router.delete("/", auth, users.deleteAll); // -WARNING- Delete ALL users! - *Requires Admin privileges*
  

module.exports = users;