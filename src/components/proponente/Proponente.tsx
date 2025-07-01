import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

export default function Proponente() {
  // viacep.com.br/ws/{formData.cep}/json/

  

  return (
    <div className="grid grid-cols-1 gap-4 p-4 rounded-lg bg-white shadow-xl m-3">
      <span className="font-semibold text-zinc-500 text-xl">Proponente</span>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 flex flex-col gap-2">
          <label className="font-medium">Nome:</label>
          <Input />
        </div>

        <div className="col-span-6 flex flex-col gap-2">
          <label className="font-medium">Data de Nascimento:</label>
          <Input type="date" />
        </div>

        <div className="col-span-6 flex flex-col gap-2">
          <label className="font-medium">RG:</label>
          <Input mask="00000000-0" />
        </div>

        <div className="col-span-12 flex flex-col gap-2">
          <label className="font-medium">Órgão Expedidor:</label>
          <Input />
        </div>

        <div className="col-span-12 flex flex-col gap-2">
          <label className="font-medium">Estado Civil:</label>
          <RadioGroup
            name="estadoCivil"
            className="flex flex-col flex-wrap gap-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="solteiro" id="solteiro" />
              <Label htmlFor="solteiro" className="text-md">
                Solteiro
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="casado" id="casado" />
              <Label htmlFor="casado" className="text-md">
                Casado
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="uniaoEstavel" id="uniaoEstavel" />
              <Label htmlFor="uniaoEstavel" className="text-md">
                União Estável
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="divorciado" id="divorciado" />
              <Label htmlFor="divorciado" className="text-md">
                Divorciado
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="col-span-12 flex flex-col gap-2">
          <label className="font-medium">Profissão:</label>
          <Input />
        </div>

        <div className="col-span-6 flex flex-col gap-2">
          <label className="font-medium">CPF:</label>
          <Input mask="000.000.000-00" />
        </div>

        <div className="col-span-6 flex flex-col gap-2">
          <label className="font-medium">CEP:</label>
          <Input mask="00000-000" />
        </div>

        <div className="col-span-12 flex flex-col gap-2">
          <label className="font-medium">Bairro:</label>
          <Input />
        </div>

        <div className="col-span-6 flex flex-col gap-2">
          <label className="font-medium">Cidade:</label>
          <Input />
        </div>

        <div className="col-span-6 flex flex-col gap-2">
          <label className="font-medium">Estado:</label>
          <Input />
        </div>

        <div className="col-span-6 flex flex-col gap-2">
          <label className="font-medium">Email:</label>
          <Input type="email" />
        </div>

        <div className="col-span-6 flex flex-col gap-2">
          <label className="font-medium">Whatsapp:</label>
          <Input mask="+55 (00) 00000-0000" type="tel" />
        </div>
      </div>
    </div>
  );
}
