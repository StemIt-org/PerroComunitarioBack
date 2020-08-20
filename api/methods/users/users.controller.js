const { register, getUserForLogin } = require("./users.service");
const { genSaltSync, hashSync } = require("bcrypt");
//const { sign } = require("jsonwebtoken");

module.exports = {

    register: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        register(body, (err, results) => {
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
            });
        });
    },

}