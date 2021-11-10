const db = require("../models");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');
const User = db.users;

const UserController = {}; //Create the object "user"

//CRUD end-points Functions


//-------------------------------------------------------------------------------------
//LOG IN as existing user

UserController.logIn = (req, res) => {
  let { email, password } = req.body;

  User.findOne({ email: email }).then(user => { // Search for an existing user
    if (!user) { // Check if the email exists to search for it
      res.status(404).json({ msg: "User with this email was not found" });
    } else {
      if (bcrypt.compareSync(password, user.password)) {
        let token = jwt.sign({ user: user }, authConfig.secret, { // Creates the token
          expiresIn: authConfig.expires
        });
        res.json({
          user: user,
          token: token
        })
      } else { res.status(401).json({ msg: "Wrong password" }) }
    }
  }).catch(err => {
    res.status(500).json(err);
  })
};


//-------------------------------------------------------------------------------------
//REGISTER new user in database

UserController.register = (req, res) => { // Create a new user

  let email = req.body.email; // Declare email for cross check

  User.findOne({ email: email }).then(user => {
    if (!user) { //Check if email is already registered
      if (req.body.password.length >= 8) { //Check if password has the enough
        let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds)); //Encrypts the password
        User.create({ // Create the user
          name: req.body.name,
          surname: req.body.surname,
          dni: req.body.dni,
          password: password,
          email: req.body.email,
          city: req.body.city,
          cp: req.body.cp,
          address: req.body.address,
          phone: req.body.phone,
          superUser: req.body.superUser,
        })
          .then(user => {
            res.json({ user: user }); // Shows the data that was created
          })
          .catch(err => { res.status(500).json(err) });
      } else res.send({ message: "The password needs to be at least 8 characters long." });
    } else res.send({ message: "This email is already registered. Please use a different email." });
  }).catch(err => {
    res.status(500).json(err);
  })
};


// FIND
//-------------------------------------------------------------------------------------
// Search for a single user by ID
UserController.findOne = (req, res) => {

  if (req.user.user.superUser == true) { // Check if the logged in user has admin privileges

    const _id = req.params._id; // Declare ID to use as search parameter

    User.findById(_id).then(data => { // Find by ID
      if (!data)
        res.status(404).send({ message: "Could not find user with id " + _id });
      else res.send(data);
    })
      .catch(err => {
        res.status(500).send({ message: "Error retrieving user with id=" + _id });
      });
  } else res.send({ message: "You are not authorized to retrieve all user entries." }); //Error in case token is invalid
};

//-------------------------------------------------------------------------------------
// Retrieve all users from the database.
UserController.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};

  User.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
};


// UPDATE
//-------------------------------------------------------------------------------------
// Update an user by id

UserController.update = (req, res) => {

  if (req.user.user.superUser == true) {

    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }

    const _id = req.params._id;

    Category.findByIdAndUpdate(_id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update user with id=${_id}. Maybe user was not found!`
          });
        } else res.send({ message: "User was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating User with id=" + _id
        });
      });
  }
  else {
    res.send({
      message: "You are not authorized to modify user entries."
    });
  }
};


// DELETE
//-------------------------------------------------------------------------------------
// Delete an user with the specified id in the request
UserController.delete = (req, res) => {


  if (req.user.user.superUser == true) {

    const _id = req.params._id;

    User.findByIdAndRemove(id, { useFindAndModify: false })
      .then(data => {

        if (!data) {
          res.status(404).send({
            message: `Cannot delete user with id=${_id}. Maybe user was not found!`
          });
        } else {
          res.send({
            message: "User was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete user with id=" + _id
        });
      });
  }
  else {
    res.send({
      message: "You are not authorized to delete user entries."
    });
  }
};


//-------------------------------------------------------------------------------------
// Delete all users from the database.
UserController.deleteAll = (req, res) => {

  if (req.user.user.superUser == true) {

    User.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} ALL users were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing ALL users."
        });
      });
  }
  else {
    res.send({
      message: "You are not authorized to delete ALL user entries."
    });
  }
};



module.exports = UserController;