const gerarProcuração = require('../modelos/PDFs/gerarProcuração')
const {buscarClientePorId} = require('../modelos/clientesModel')

function normalizarNome(nome) {
  return nome
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9\s]/g, "")
    .toLowerCase()
    .replace(/\s+/g, "-");
}

module.exports = async function controleProcuração(req,res){
    try{
        const{id} = req.params

        const cliente = await buscarClientePorId(id)

        if(!cliente){
           return res.status(404).json({error:"Id não encontrado"}) 
        }

        const nomeNormalizado = normalizarNome(cliente.nome)

        res.setHeader("Content-Type", "application/pdf");
        res.setHeader(
            "Content-Disposition",
            `attachment; filename="procuracao-${nomeNormalizado}.pdf"`
        );
    
        const doc = gerarProcuração(cliente);
        doc.pipe(res);
    } catch (error) {
        res.status(500).json({ error: "erro interno ao gerar pdf" });
        

    }
}