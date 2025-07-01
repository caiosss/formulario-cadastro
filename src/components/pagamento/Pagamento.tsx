import { Input } from "../ui/input";

export default function Pagamento() {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 rounded-lg bg-white shadow-xl m-3">
      <span className="font-semibold text-zinc-500 text-xl">
        Condições de Pagamento
      </span>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 flex flex-col gap-2">
          <label className="font-medium">Valor Total: </label>
          <Input type="number"/>
        </div>

        <div className="col-span-12 flex flex-col gap-2">
          <label className="font-medium">Valor de Entrada:</label>
          <Input type="number" />
        </div>

        <div className="col-span-12 flex flex-col gap-2">
          <label className="font-medium">Parcelas:</label>
          <Input />
        </div>

        <div className="col-span-12 flex flex-col gap-2">
          <label className="font-medium">Balão:</label>
          <Input />
        </div>

        <div className="col-span-12 flex flex-col gap-2">
          <label className="font-medium">Chaves:</label>
          <Input />
        </div>

        <div className="col-span-12 flex flex-col gap-2">
          <label className="font-medium">Financiamento:</label>
          <Input />
        </div>
      </div>
    </div>
  );
}
