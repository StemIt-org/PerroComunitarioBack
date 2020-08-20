//login
//Register

const pool = require("../../../config/database");

module.exports = {
    register: (data, callback) => {
        pool.query(`INSERT INTO users (username, password) VALUES (?,?)`, 
        [
          data.username,
          data.password
        ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }

        );

    },

    getUserForLogin: (user, callback) => {
       
        pool.query(`SELECT * FROM users WHERE username = ?`, 
        [user],
            (error, results, fields) => {
                if (error) {
                    callback(error);
                }
                return callback(null, results[0]);
            }
        );
    }

}