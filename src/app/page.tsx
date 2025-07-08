import Formulario from "@/components/formulario/Formulario";
import Imovel from "@/components/imovel/Imovel";
import Menu from "@/components/menu/Menu";
import Pagamento from "@/components/pagamento/Pagamento";
import Proponente from "@/components/proponente/Proponente";
import BotaoSalvar from "@/components/salvar/BotaoSalvar";
import { FormularioProvider } from "@/contexts/formulario.context";
import { User2Icon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="overflow-scroll-y">
      <Menu />
      <FormularioProvider>
        <Imovel />
        <Proponente />
        <Pagamento />
        <BotaoSalvar />
      </FormularioProvider>
    </main>
  );
}
