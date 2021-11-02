const router = require('express').Router();

//Importamos Routes definidas en routes

const UserRouter = require('./routes/user.routes');
const MovieRouter = require('./routes/movie.routes');
const OrderRouter = require('./routes/order.routes');

//Rutas
router.use('/user', UserRouter);
router.use('/movie', MovieRouter);
router.use('/order', OrderRouter);

module.exports = router;