const { verify, decode } = require("jsonwebtoken");
const router = require("express").Router();
require("dotenv").config();
const pool = require("../../config/database");
const {register, login} = require("../methods/users/users.controller");
const {borraPerrito,actualizarPerro} = require("../methods/perritos/perrito.controller");
const { agarrarform, agarrarFormPerro} = require("../methods/formulario/formulario.controller");
const {checkToken} = require('../../auth/tokenvalidation');
const {borrarNoticia,actualizarNoticia} = require("../methods/noticias/noticias.controller");

const path = require("path");

const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});
const upload = multer({
  storage,
  limits: { fileSize: 20000000 }, // In bytes: 2000000 bytes = 2 MB
  fileFilter(req, file, cb) {
    if (file != null) {
      const ext = path.extname(file.originalname).toLowerCase();
      if (ext !== ".png" && ext !== ".jpg" && ext !== ".jpeg") {
        cb(new Error("Error: Unacceptable file format"), false);
      } else {
        cb(null, true);
      }
    } else {
      cb(null, true);
    }
  },
});


router.post("/eliminarPerro/:id_perro", checkToken, borraPerrito);
router.post("/actualizarPerro", checkToken, actualizarPerro);

router.get("/verFormulario/:nombre_apellido", checkToken, agarrarform);
router.get("/verFormularioPerro/:nombre_perro", checkToken, agarrarFormPerro);
router.post("/registrarse", register);
router.post("/login", login);

router.post("/borrarNoticia/:title", checkToken, borrarNoticia);
router.post(
  "/subirNoticia",
  checkToken,
  upload.single("filee"),
  (req, res) => {

    pool.query(
      `INSERT INTO noticias (title,image,subtitle,body,date) VALUES (?,?,?,?,?)`,
      [ 
         req.body.title,
         req.file.path,
         req.body.subtitle,
         req.body.body,
         req.body.date
      ],
      (error, results, fields) => {
        if (error) {
          return res.status(500).json({
            success: 0,
            message: error,
          });
        }
        else {
          res.status(200).json({
            success: 0,
            message: "Perro agregado con éxito",
        });
        }
      }
    );
  }
);
router.post("/actualizarNoticia", checkToken, actualizarNoticia);

router.get(
  "/checkAdmin",
  (req, res) => {

    let token = req.get("authorization");
    if (token) {
        token = token.slice(7);
        verify(token, process.env.JSONTOKEN_KEY, (err, decoded) => {
            if (err) {
                res.status(401).json({
                    success: 0,
                    message: "Invalid Token",
                });
            } else {
              res.status(200).json({
                success: 0,
                message: "Admin válido",
            });
            }
        });
    } else {
        res.status(403).json({
            success: 0,
            message: "Access denied! Unauthorized user",
        });
    }

  (req) => {
      token = req.headers.authorization.split(" ");
      token = decode(token[1]);        
      return token;
  }
}
);

router.post(
    "/subirPerro",
    checkToken,
    upload.single("filee"),
    (req, res) => {

      pool.query(
        `INSERT INTO perros (imagen,nombre,personalidad,ficha_medica,edad,tamaño,sexo,pelo,tiempo_ea,sociabilidad) VALUES (?,?,?,?,?,?,?,?,?,?)`,
        [ 
           req.file.path,
           req.body.nombre,
           req.body.personalidad,
           req.body.ficha_medica,
           req.body.edad,
           req.body.tamaño,
           req.body.sexo,
           req.body.pelo,
           req.body.tiempo_ea,
           req.body.sociabilidad,
        ],
        (error, results, fields) => {
          if (error) {
            return res.status(500).json({
              success: 0,
              message: error,
            });
          }
          else {
            res.status(200).json({
              success: 0,
              message: "Perro agregado con éxito",
          });
          }
        }
      );
    }
  );

module.exports = router;