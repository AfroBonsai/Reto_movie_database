const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth.js');

//Import Controllers
const users = require("../controllers/user.controller");


router.post("/login", users.logIn); // Login as an existing user
router.post('/register', users.register); // Create a new user

router.get("/:_id", users.findOne); // Show user information
router.get("/", users.findAll); // Show all users

router.put("/:_id", users.update); // Update user information

router.delete("/:_id", auth, users.delete); // Delete an user - *Requires Admin privileges*
router.delete("/", auth, users.deleteAll); // -WARNING- Delete ALL users! - *Requires Admin privileges*
  

//remember auth

module.exports = router;