const express = require('express');
const router = express.Router();
// const auth = require('../middlewares/auth.js');

//Import Controllers
const orders = require("../controllers/order.controller");
  

router.post("/", orders.create);

router.get("/", orders.findAll);

router.delete("/:_id", orders.delete);
 
  
module.exports = router;