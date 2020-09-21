const router = require("express").Router();
require("dotenv").config();


const {mostrarPerritos,agarrarPerrito} = require("../methods/perritos/perrito.controller");
const { subirForm } = require("../methods/formulario/formulario.controller");
const {mostrarNoticias} = require("../methods/noticias/noticias.controller");


router.get("/mostrarPerros", mostrarPerritos);
router.post("/agarrarPerros/:perro",agarrarPerrito);
router.post("/completarFormulario", subirForm);
router.get("/mostrarNoticias",mostrarNoticias);





module.exports = router;