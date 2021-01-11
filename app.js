require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
const adminRouter = require("./api/routes/admin.router");
const userRouter = require("./api/routes/user.router");
const path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/public", express.static(path.join(__dirname, 'public')));


app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
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
app.use("/admin", adminRouter);
app.use("/user", userRouter);

app.listen(3001, () => {
    console.log("Server corriendo en el puerto: ", 3001);
});