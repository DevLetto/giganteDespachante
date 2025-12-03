function CadastroVendedor({
  nome,
  setNome,
  cpf_cnpj,
  setCpf,
  email,
  setEmail,
  endereco,
  setEndereco,
}) {
  return (
    <div className="w-screen h-screen bg-fundo flex items-center flex-col ">
      <main className="flex flex-col justify-between gap-15">
        <div>
          <div className="border-b border-traco  ml-8 mr-8 text-center">
            <h1 className="text-traco text-6xl font-[Arial] font-bold">
              Vendedor
            </h1>
          </div>
        </div>
        <section className="border-2 border-traco flex flex-col items-center w-100 h-[460px] gap-10 p-2">
          <fieldset className="w-[98%] ">
            <label
              htmlFor="Nome"
              className="text-xl text-traco font-bold font-[Arial]"
            >
              Nome do Vendedor*
            </label>
            <input
              required
              type="text"
              name="Nome"
              value = {nome}
              autoComplete="off"
              onChange={(e) => setNome(e.target.value)}
              className="bg-white w-full h-12 rounded-lg p-1 text-traco"
            />
          </fieldset>
          <fieldset className="w-[98%]">
            <label
              htmlFor="CPF"
              className="text-xl text-traco font-bold font-[Arial]"
            >
              CPF/CNPJ*
            </label>
            <input
              required
              type="number"
              name="CPF"
              maxLength={14}
              autoComplete="off"
              placeholder="Somente números"
              className="bg-white w-full h-12 rounded-lg p-1 text-traco [appearance:textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none "
            />
          </fieldset>
          <fieldset className="w-[98%]">
            <label
              htmlFor="email"
              className="text-xl text-traco font-bold font-[Arial]"
            >
              E-mail*
            </label>
            <input
              required
              type="email"
              name="email"
              maxLength={11}
              autoComplete="off"
              className="bg-white  h-12 w-full rounded-lg p-1 text-traco"
            />
          </fieldset>

          <fieldset className="w-[98%]">
            <label
              htmlFor="endereco"
              className="text-xl text-traco font-bold font-[Arial]"
            >
              Endereço*
            </label>
            <input
              required
              type="text"
              name="endereco"
              value={endereco}
              autoComplete="off"
              className="bg-white w-full h-12 rounded-lg p-1 text-traco"
            />
          </fieldset>
        </section>
        <input
          type="submit"
          value="Prosseguir"
          className="self-center bg-white  h-12 rounded-lg w-[60%] text-3xl font-bold p-1 text-traco hover:bg-traco hover:text-white transition hover:cursor-pointer"
        />
      </main>
    </div>
  );
}

export default CadastroVendedor;
