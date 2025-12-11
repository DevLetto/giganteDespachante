function Tabela({placa, hora, data, servico, verDetalhe}){
    return(
        <div className=" w-2xl h-200 bg-white rounded-lg ">
            <ul>
                <li className="w-full h-25 bg-fundo border-2 rounded-lg flex flex-col justify-between p-2 font-semibold">
                    <div className="flex flex-row w-full justify-between ">
                        <p className="text-xl font-bold ">BCT6769</p>

                        <div className="flex flex-row gap-4  ">
                            <p>12:15</p>
                            <p>40/23/10</p>
                        </div>
                    </div>
                    <div className="flex flex-row w-full justify-between">
                        <p >Transferencia de veiculo</p>
                        <button className="text-traco hover:cursor-pointer hover:text-[#012e5f]">Ver detalhes...</button>
                    </div>
                </li>

            </ul>

        </div>
    )
}

export default Tabela