const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth.js');

//Import Controllers
const movies = require("../controllers/movie.controller");
  
  
router.get("/", movies.findAll);
router.get("/:id", movies.findById);
router.get("/title/:title", movies.findByTitle);
router.get("/genre/:genre", movies.findByGenre);
router.get("/cast/:cast", movies.findByCast);
router.get("/location/:location", movies.findByLocation);
router.get("/available/:available", movies.findByAvailability);

router.post("/", movies.create);

router.post("/:id", movies.update);

router.delete("/:id,", auth, movies.delete);


module.exports = router;