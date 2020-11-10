const router = require("express").Router();
require("dotenv").config();


const {mostrarPerritos,agarrarPerrito} = require("../methods/perritos/perrito.controller");
const { subirForm } = require("../methods/formulario/formulario.controller");
const {mostrarNoticias, mostrarNoticiaById} = require("../methods/noticias/noticias.controller");


router.get("/mostrarPerros", mostrarPerritos);
router.post("/agarrarPerros/:id_perro",agarrarPerrito);
router.post("/completarFormulario", subirForm);
router.get("/mostrarNoticias",mostrarNoticias);
router.get("/abrirNoticia/:id_noticias",mostrarNoticiaById);





module.exports = router;