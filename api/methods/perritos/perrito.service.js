const pool = require("../../../config/database");

module.exports = {
    subirPerro: (data, callback) => {
        pool.query(`INSERT INTO perros (imagen,nombre,personalidad,ficha_medica,edad,tamaño,sexo,pelo,tiempo_ea,sociabilidad ) VALUES (?,?,?,?,?,?,?,?,?)`, 
        [
          data.imagen,
          data.nombre,
          data.personalidad,
          data.ficha_medica,
          data.edad,
          data.tamaño,
          data.sexo,
          data.pelo,
          data.tiempo_ea,
          data.sociabilidad,

        ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                
                return callback(null, results);
            }

        );

    },

    agarrarPerrito: (id_perro, callback) => {
       
        pool.query(`SELECT * FROM perros WHERE id_perro = ?`, 
        [id_perro],
            (error, results, fields) => {
                if (error) {
                    callback(error);
                }
                return callback(null, results[0]);
            }
        );
    },
    mostrarPerritos: (callback) => {
       
        pool.query(`SELECT * FROM perros`,
            (error, results, fields) => 
            {
                if (error) {
                    callback(error);
                }
                return callback(null, results);
            }
        );
    },

    actualizarPerro: (data, callback) => {
        pool.query(`UPDATE perros SET nombre  = ?, personalidad = ?, edad=? , tamaño = ?, sexo =? , pelo=? , tiempo_ea = ? , sociaabilidad = ? WHERE name = ? `, 
        [
            data.imagen,
            data.nombre,
            data.personalidad,
            data.ficha_medica,
            data.edad,
            data.tamaño,
            data.sexo,
            data.pelo,
            data.tiempo_ea,
            data.sociabilidad,

        ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                
                return callback(null, results);
            }

        );

    },
    borraPerrito: (id_perro, callback) => {
       
        pool.query(`DELETE FROM perros WHERE id_perro = ?`, 
        [id_perro],
            (error, results, fields) => {
                if (error) {
                    callback(error);
                }
                return callback(null, results[0]);
            }
        );
    },
    


}