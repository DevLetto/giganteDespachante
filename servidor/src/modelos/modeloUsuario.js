const db = require('../dataBase/db')

module.exports = function searchUser(usuario){
    return db.prepare("SELECT * FROM users WHERE usuario = ?").get(usuario)
}