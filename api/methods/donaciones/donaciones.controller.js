const { crearPreferenciaByDinero } = require("./donaciones.service")


module.exports = {
    crearPreferenciaByDinero: (req,res) => {
        const dinero = Number(req.body.dinero);
        crearPreferenciaByDinero(dinero, (err,results) => {
            if(err){
                return res.status(500).json({
                    success:0,
                    message:'error creando la preferencia de mercado pago'
                });
            }else{
                return res.status(200).json({
                    success:1,
                    data:results,
                    message:'preferencia creada correctamente'
                });
            }
        })
    }
}