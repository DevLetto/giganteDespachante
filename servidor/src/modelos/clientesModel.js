const db = require('../dataBase/db');

module.exports = async function buscarClientePorId(id) {
    try {
        const [rows] = await db.execute('SELECT * FROM clients WHERE id = ?', [id]);
        
        return rows[0]; 
    } catch (error) {
        console.error("Erro ao buscar cliente por ID:", error.message);
        throw error;
    }
}