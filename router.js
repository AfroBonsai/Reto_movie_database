const router = require('express').Router();

//Import and define routes

const UserRouter = require('./routes/user.routes');
const MovieRouter = require('./routes/movie.routes');
const OrderRouter = require('./routes/order.routes');

//Routes
router.use('/user', UserRouter);
router.use('/movie', MovieRouter);
router.use('/order', OrderRouter);

module.exports = router;