const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const auth = require('../middlewares/auth.js');

//Import Controllers
const users = require("../controllers/user.controller");


router.post("/login", authController.signIn); // Login as an user
router.post('/register', authController.signUp); // Create a new user

router.get("/:id", users.findOne); // Show user information
router.get("/", users.findAll); // Show all users

router.put("/:id", users.update); // Update user information

router.delete("/:id", auth, users.delete); // Delete an user - *Requires Admin privileges*
router.delete("/", auth, users.deleteAll); // -WARNING- Delete ALL users! - *Requires Admin privileges*
  

//remember auth

module.exports = router;