const db = require('../dataBase/db')

module.exports = async function listaCadastros(){

    try{
        const stmt = await db.prepare(`SELECT *, datetime(data_emissao, 'localtime') AS data_emissao_local FROM clients ORDER BY data_emissao DESC`).all()

        const listaFormatada = stmt.map(item =>{
            const dt = new Date(item.data_emissao + "Z"); // adiciona 'Z' para tratar como UTC

        // formata BR
            const dataBR = dt.toLocaleDateString("pt-BR");                // "10/01/2025"
        const horaBR = dt.toLocaleTimeString("pt-BR", {               // "14:32"
            hour: "2-digit",
            minute: "2-digit",
            hour12: false
        });

        return {
            ...item,
            data: dataBR,
            hora: horaBR
        }
        })

        return listaFormatada

    } catch(error){
        console.error("Erro ao pegar o cadastro no banco de dados:", error);
        throw error; 
    }
}
