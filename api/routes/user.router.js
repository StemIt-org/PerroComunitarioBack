const router = require("express").Router();
require("dotenv").config();


const {mostrarPerritos,agarrarPerrito} = require("../methods/perritos/perrito.controller");



router.post("/mostrarPerros", mostrarPerritos);
router.post("/agarrarPerros/:perro",agarrarPerrito);





module.exports = router;