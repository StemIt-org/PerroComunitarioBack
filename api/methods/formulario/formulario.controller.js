const { subirForm,agarrarform,agarrarFormPerro} = require("./formulario.service");

module.exports ={


    subirForm: (req, res) => {
        const body = req.body;
        
        subirForm(body, (err, results) => {
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
    agarrarform: (req, res) => {
        const nombre_apellido = req.params.nombre_apellido;
        
        agarrarform(nombre_apellido, (err, results) => {
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
    agarrarFormPerro: (req, res) => {
        const nombre_perro = req.params.nombre_perro;
        
        agarrarFormPerro(nombre_perro, (err, results) => {
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