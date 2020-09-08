const router = require("express").Router();
require("dotenv").config();


const {mostrarPerritos,agarrarPerrito} = require("../methods/perritos/perrito.controller");
const { subirForm} = require(".../methods/formulario/formulario.controller");


router.post("/mostrarPerros", mostrarPerritos);
router.post("/agarrarPerros/:perro",agarrarPerrito);
router.post("/completarFormulario", subirForm);





module.exports = router;