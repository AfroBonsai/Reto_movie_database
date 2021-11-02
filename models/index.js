const dbConfig = require("../config/db.config");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

db.users = require("./user.model.js")(mongoose);
db.movies = require("./movie.model.js")(mongoose);
db.orders = require("./order.model.js")(mongoose);

module.exports = db;