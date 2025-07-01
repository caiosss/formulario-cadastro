import { Input } from "../ui/input";
import { z } from "zod";

export default function Imovel() {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 rounded-lg bg-white shadow-xl m-3">
      <span className="font-semibold text-zinc-500 text-xl">Imóvel</span>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 flex flex-col gap-2">
          <label className="font-medium">Endereço:</label>
          <Input />
        </div>

        <div className="col-span-6 flex flex-col gap-2">
          <label className="font-medium">Quadra:</label>
          <Input />
        </div>

        <div className="col-span-6 flex flex-col gap-2">
          <label className="font-medium">Lote(s):</label>
          <Input />
        </div>
      </div>
    </div>
  );
}
