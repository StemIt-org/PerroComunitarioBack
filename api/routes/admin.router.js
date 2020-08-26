const router = require("express").Router();
require("dotenv").config();

const {register, login} = require("../methods/users/users.controller");

router.post("/registrarse", register);
router.post("/login", login);

module.exports = router;