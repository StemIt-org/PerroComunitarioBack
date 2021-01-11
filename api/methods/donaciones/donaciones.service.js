const mercadopago = require('mercadopago');

module.exports = {
    crearPreferenciaByDinero: async(dinero,callBack) => {
        mercadopago.configure({
            access_token:'TEST-469839294565252-010923-a4af8a378960057020766c625950b615-287955799'
        });
        
        let preference = {
            items:[
                {
                    title: `Donacion a Perro Comunitaro por ${dinero} ARS`,
                    unit_price:dinero,
                    currency_id: 'ARS',
                    description: 'Con esta donación nos estás ayudando a prevenir que perritos sufran',
                    quantity:1,
                    picture_url:"https://lh3.googleusercontent.com/proxy/wu0e8ZCMr91-LYJrd1rBuKZ_pvjkvvWAhDBSmI5x1spkTiNZdWPSEK8yuy7zbYazluBf1SK0pPMovkmvHA9OkuUM1gkFaSaaQ-KGWzQVvRDq1MAXcw"
                }
            ],
            back_urls:{
                success:"http://localhost:3000/donar",
                "failure":"http://localhost:3000/donar"
            },
            auto_return: "approved"
        };
        
        mercadopago.preferences.create(preference)
        .then(function(response){
            console.log(response);
            return callBack(null,response.body)            
        }).catch(function(error){
            console.log(error);
            callBack(error);
        });
    }
}