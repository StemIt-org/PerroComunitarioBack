const { subirPerro, borraPerrito,agarrarPerrito,mostrarPerritos,actualizarPerro } = require("./perrito.service");


module.exports = {

    subirPerro: (req, res) => {
        const body = req.body;
        
        subirPerro(body, (err, results) => {
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
    borraPerrito: (req, res) => {
        const perro = req.params.perro;
        
        borraPerrito(perro, (err, results) => {
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

    actualizarPerro: (req, res) => {
        const body = req.body;
        
        actualizarPerro(body, (err, results) => {
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

    agarrarPerrito: (req, res) => {
        const id_perro = req.params.id_perro;
        
        agarrarPerrito(id_perro, (err, results) => {
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

    mostrarPerritos: (req, res) => {
        
        mostrarPerritos( (err, results) => {
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