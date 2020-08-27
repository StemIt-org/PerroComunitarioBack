const pool = require("../../../config/database");

module.exports = {
    subirPerro: (data, callback) => {
        pool.query(`INSERT INTO perros (name, ds_cualidad,size,ficha_medica,edad) VALUES (?,?,?,?,?)`, 
        [
          data.name,
          data.ds_cualidad,
          data.size,
          data.ficha_medica,
          data.edad,

        ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                
                return callback(null, results);
            }

        );

    },

    agarrarPerrito: (perro, callback) => {
       
        pool.query(`SELECT * FROM perros WHERE name = ?`, 
        [perro],
            (error, results, fields) => {
                if (error) {
                    callback(error);
                }
                return callback(null, results[0]);
            }
        );
    },
    mostrarPerritos: ( callback) => {
       
        pool.query(`SELECT * FROM perros `, 
            (error, results, fields) => 
            {
                if (error) {
                    callback(error);
                }
                return callback(null, results[0]);
            }
        );
    },

    actualizarPerro: (data, callback) => {
        pool.query(`UPDATE perros SET name = ?, ds_cualidad = ?, size = ?, ficha_medica=?, edad=? WHERE name = ? `, 
        [
          data.name,
          data.ds_cualidad,
          data.size,
          data.ficha_medica,
          data.edad,
          data.name

        ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                
                return callback(null, results);
            }

        );

    },
    borraPerrito: (perro, callback) => {
       
        pool.query(`DELETE * FROM perros WHERE name = ?`, 
        [perro],
            (error, results, fields) => {
                if (error) {
                    callback(error);
                }
                return callback(null, results[0]);
            }
        );
    },
    


}