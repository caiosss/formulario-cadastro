import Formulario from "@/components/formulario/Formulario";
import Imovel from "@/components/imovel/Imovel";
import Pagamento from "@/components/pagamento/Pagamento";
import Proponente from "@/components/proponente/Proponente";
import BotaoSalvar from "@/components/salvar/BotaoSalvar";
import { FormularioProvider } from "@/contexts/formulario.context";

export default function Home() {
  return (
    <main className="overflow-scroll-y">
      <FormularioProvider>   
        <Imovel/>
        <Proponente/>
        <Pagamento/>
        <BotaoSalvar/>
      </FormularioProvider>
    </main>
  );
}
