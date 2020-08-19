require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
const generalRouter = require("./api/routes/general.router");
const path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/public", express.static(path.join(__dirname, 'public')));


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Methods",
      "GET,HEAD,OPTIONS,DELETE,POST,PUT"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    next();
  });

 

//uso las rutas para acceder a los métodos
app.use("/general", generalRouter);

app.listen(process.env.APP_PORT, () => {
    console.log("Server corriendo en el puerto: ", process.env.APP_PORT);
});