const pool = require("../../../config/database");

module.exports = {
    subirNoticia: (data, callback) => {
        pool.query(`INSERT INTO noticias (title,image,subtitle,body,date) VALUES (?,?,?,?,?)`, 
        [
          data.title,
          data.image,
          data.subtitle,
          data.body,
          data.date,

        ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                
                return callback(null, results);
            }

        );

    },
    borrarNoticia: (noticias, callback) => {
       
        pool.query(`DELETE * FROM noticias WHERE title = ?`, 
        [title],
            (error, results, fields) => {
                if (error) {
                    callback(error);
                }
                return callback(null, results[0]);
            }
        );
    },


    actualizarNoticia : (data, callback) => {
        pool.query(`UPDATE noticias SET title  = ?, image = ?, subtitle =? , body = ?, date =?  WHERE title  = ? `, 
        [
          data.title,
          data.image,
          data.subtitle,
          data.body,
          data.date,

        ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                
                return callback(null, results);
            }

        );

    },
    mostrarNoticias: ( callback) => {
       
        pool.query(`SELECT * FROM noticias `, 
            (error, results, fields) => 
            {
                if (error) {
                    callback(error);
                }
                return callback(null, results[0]);
            }
        );
    },
}