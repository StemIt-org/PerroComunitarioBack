const pool = require("../../../config/database");

module.exports = {
    subirForm: (data, callback) => {
        pool.query(`INSERT INTO formulario (nombre_apellido,nombre_perro,direc,tel,mail,red_social,1_localidad,1_barrio,2_casa_cant,2_edades,3_bebe,4_bebe_x_perro,
                     4_compatibles,4_xq,5_anima_casa,6_tuvieron,6_tiempo_porque,7_xq_interes,8_hogar_animal,9_anti_vecino,10_mudanza,10_huida_pais,11_casa_cerrada,12_cama_perro,
                     13_solo_perro,14_vacacion_perro,15_castracion_cachorrito,16_comentario) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`, 
        [
          data.nombre_apellido,
          data.nombre_perro,
          data.direc,
          data.tel,
          data.mail,
          data.red_social,
          data.localidad1,
          data.barrio1,
          data.casa_cant2,
          data.edades2,
          data.bebe3,
          data.bebe_x_perro4,
          data.compatibles4,
          data.xq4,
          data.anima_casa5,
          data.tuvieron6,
          data.tiempo_porque,
          data.xq_interes,
          data.hogar_animal8,
          data.anti_vecino9,
          data.mudanza10,
          data.huida_pais10,
          data.casa_cerrada11,
          data.cama_perro12,
          data.solo_perro13,
          data.vacacion_perro14,
          data.castracion_cachorrito15,
          data.comentario16,
        ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                
                return callback(null, results);
            }

        );

    },

    agarrarform: (nombre_apellido, callback) => {
       
        pool.query(`SELECT * FROM formularios WHERE nombre_apellido = ?`, 
        [nombre_apellido],
            (error, results, fields) => {
                if (error) {
                    callback(error);
                }
                return callback(null, results[0]);
            }
        );
    },

    agarrarFormPerro: (nombre_perro, callback) => {
       
        pool.query(`SELECT * FROM formularios WHERE nombre_perro = ?`, 
        [nombre_perro],
            (error, results, fields) => {
                if (error) {
                    callback(error);
                }
                return callback(null, results[0]);
            }
        );
    },
}


    