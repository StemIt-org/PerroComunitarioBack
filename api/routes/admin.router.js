const router = require("express").Router();
require("dotenv").config();

const {register, login} = require("../methods/users/users.controller");
const {subirPerro,borraPerrito,actualizarPerro} = require("../methods/perritos/perrito.controller");
<<<<<<< HEAD
const { agarrarform, agarrarFormPerro} = require("../methods/formulario/formulario.controller");
=======
const { agarrarform,agarrarFormPerro} = require("../methods/formulario/formulario.controller");
>>>>>>> cba16d5ceba9517e4f69641cd8fbdb88a102d528
const {checkToken} = require('../../auth/tokenvalidation');




router.post("/eliminarPerro/:perro", checkToken, borraPerrito);
router.post("/subirPerro", checkToken, subirPerro);
router.post("/actualizarPerro", checkToken, actualizarPerro);

router.get("/verFormulario/:nombre_apellido", checkToken, agarrarform);
router.get("/verFormularioPerro/:nombre_perro", checkToken, agarrarFormPerro);

router.post("/registrarse", register);
router.post("/login", login);

module.exports = router;