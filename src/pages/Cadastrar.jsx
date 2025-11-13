import { ArrowLeft } from "lucide-react";

function Cadastrar(){
    
    return(
        <div className='w-screen h-screen bg-fundo flex gap-70 items-center flex-col  '>

            <ArrowLeft />

            <form action="*">
                <main>
                    <div className="border-b border-traco m-8">
                        <h1 className="text-traco text-6xl font-[Arial] font-bold">Cadastro</h1>
                    </div>

                    <section className="border ">
                        <label htmlFor="Nome">Nome do Cliente</label>
                        <input type="text" name="Nome"/>
                        
                        <label htmlFor="CPF">CPF/CNPJ</label>
                        <input type="number" name="CPF" />

                        <label htmlFor="Telef">Telefone</label>
                        <input type="tel" name="Telef" id="" />

                        <label htmlFor="Servi">Serviço Feito</label>
                        <select name="Servi" ></select>
                    </section>

                    <section className="border">
                        <input type="text " name="placa" />
                        <input type="text " name="modelo" />
                        <input type="number" name="ano" id="" />
                        <input type="text" name="chassi" id="" />
                        <input type="text" name="cor" />

                    </section>
                
                </main>
                <input type="submit" value="Finalizar" />
            </form>
            
        </div>
    )
}

export default Cadastrar;