const { subirNoticia, borrarNoticia,actualizarNoticia,mostrarNoticias, mostrarNoticiaById} = require("./noticias.service");

module.exports={
    subirNoticia: (req, res) => {
        const body = req.body;
        
        subirNoticia(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "database connection error",
                });
            }
            return res.status(200).json({
                success: 1,
                data: results,
                message: "se ha realizado la operacion con exito"
            });
        });
    },
    borrarNoticia: (req, res) => {
        const title = req.params.title;
        
        borrarNoticia(title, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "database connection error",
                });
            }
            return res.status(200).json({
                success: 1,
                data: results,
                message: "se ha realizado la operacion con exito"
            });
        });
    },

    actualizarNoticia: (req, res) => {
        const body = req.body;
        
        actualizarNoticia(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "database connection error",
                });
            }
            return res.status(200).json({
                success: 1,
                data: results,
                message: "se ha realizado la operacion con exito"
            });
        });
    },
    mostrarNoticias: (req, res) => {
        
        
        mostrarNoticias( (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "database connection error",
                });
            }
            return res.status(200).json({
                success: 1,
                data: results,
                message: "se ha realizado la operacion con exito"
            });
        });
    },
    mostrarNoticiaById: (req, res) => {
        const id_noticias = req.params.id_noticias;
        
        mostrarNoticiaById(id_noticias, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "database connection error",
                });
            }
            return res.status(200).json({
                success: 1,
                data: results,
                message: "se ha realizado la operacion con exito"
            });
        });
    },
}
