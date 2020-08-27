const router = require("express").Router();
require("dotenv").config();

const {register, login} = require("../methods/users/users.controller");
const {subirPerro,borraPerrito,actualizarPerro} = require("../methods/perritos/perrito.controller");
const {checkToken} = require('../../auth/tokenvalidation');


router.post("/eliminarPerro/:perro", checkToken, borraPerrito);
router.post("/subirPerro", checkToken, subirPerro);
router.post("/actualizarPerro", checkToken, actualizarPerro);



router.post("/registrarse", register);
router.post("/login", login);

module.exports = router;