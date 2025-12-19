const db = require ('../dataBase/db')

module.exports = function buscarClientePorId(id){
    return db.prepare('SELECT * FROM clients WHERE id = ?').get(id)
}