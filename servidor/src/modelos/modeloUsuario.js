const db = require('../dataBase/db');

module.exports = async function searchUser(usuario) {
    try {
        const [rows] = await db.execute("SELECT * FROM users WHERE usuario = ?", [usuario]);
        
        return rows[0]; 
    } catch (error) {
        console.error("Erro ao buscar usuário no MariaDB:", error.message);
        throw error;
    }
}