import {TriangleAlert} from "lucide-react"

function SureConfirmation({ onYes, onNo }) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[10]">
      <div className="bg-fundo w-lg h-80 p-6 rounded-xl flex flex-col items-center border-2 border-traco gap-7" >
        <TriangleAlert 
        size = {100}
        color="red"
        />
        <h1 className="text-3xl text-traco font-bold mb-4">Deseja cancelar o cadastro??</h1>

        <div className="flex gap-4">
          <button
            onClick={onYes}
            className="px-4 py-2 w-50 h-15 bg-red-600 text-white text-4xl rounded-lg border border-black hover:bg-white hover:text-red-600"
          >
            Sim
          </button>

          <button
            onClick={onNo}
            className="px-4 py-2 w-50 h-15 text-4xl  bg-white text-traco rounded-lg border border-traco hover:bg-traco hover:text-white"
          >
            Não
          </button>
        </div>
      </div>
    </div>
  );
}

export default SureConfirmation