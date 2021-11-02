const db = require("../models");
const Order = db.categories;

const OrderController = {}; //Create the object controller

//CRUD end-points Functions
//-------------------------------------------------------------------------------------
// Create and Save a new Order
OrderController.create = (req, res) => {
  // Validate request
  if (!req.body.movieID) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Order
  const order = new Order({
    movieID: req.body.movieID,
    clientId: req.body.clientId,
    orderDate: req.body.orderDate,
    returnDate: req.body.returnDate,
    price: req.body.price
  });

  // Save order in the database
  order
    .save(order)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the new order."
      });
    });
};


//-------------------------------------------------------------------------------------
// Retrieve all orders from the database.
OrderController.findAll = (req, res) => {
  const movieID = req.query.movieID;
  var condition = movieID ? { movieID: { $regex: new RegExp(movieID), $options: "i" } } : {};

  Order.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving all the orders."
      });
    });
};


// //-------------------------------------------------------------------------------------
// // Update an order by the id in the request
// OrderController.update = (req, res) => {
//   if (!req.body) {
//     return res.status(400).send({
//       message: "Data to update can not be empty!"
//     });
//   }

//   const id = req.params.id;

//   Order.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
//     .then(data => {
//       if (!data) {
//         res.status(404).send({
//           message: `Cannot update order with id=${id}. Maybe the order was not found!`
//         });
//       } else res.send({ message: "Order was updated successfully." });
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Error updating order with id=" + id
//       });
//     });
// };


//-------------------------------------------------------------------------------------
// Delete a Category with the specified id in the request
OrderController.delete = (req, res) => {
  const movieID = req.params.movieID;

  Category.findByIdAndRemove(movieID, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete order with id= ${movieID}. Maybe the order was not found!`
        });
      } else {
        res.send({
          message: "Order was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete order with id= " + movieID
      });
    });
};


//-------------------------------------------------------------------------------------
// Delete all Categories from the database.
OrderController.deleteAll = (req, res) => {
  Order.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Order were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Order."
      });
    });
};



module.exports = OrderController;