const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const logger = require('./config/winston');
const cors = require("cors"); // Import cors module
const db = require("./models");
const router = require('./router.js');
const IP = require("../Reto_movie_database/config/db.config");
// import { IP as _IP } from "../Reto_movie_database/config/db.config"; //experimento ES6

const app = express();
const PORT = process.env.PORT || 3000; //Configuramos puerto heroku

//Config Cors Options
var corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
  };
  
//Middleware
app.use(morgan('combined', { stream: logger.stream }));
app.use(express.json());
app.use(cors(corsOptions)); //Add CORS Middleware

//Rutas
app.get('/', (req, res) => {res.send("Welcome to AfroBonsai's movie database.");});
app.use(router);

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
    // app.listen(PORT, ()=> console.log(` < Connected to local host on port ${PORT} > `.bgGreen.black));
    app.listen(PORT, ()=> console.log(` < Connected to local host `.bgGreen.black + `${IP.IP}`.bgBrightCyan.black + ` on port `.bgGreen.black + `${PORT}`.bgBrightCyan.black + ` > `.bgGreen.black));
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
//-------------------------------------------------------------------------------
