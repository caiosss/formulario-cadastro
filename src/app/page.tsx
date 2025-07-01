import Formulario from "@/components/formulario/Formulario";
import Imovel from "@/components/imovel/Imovel";
import Pagamento from "@/components/pagamento/Pagamento";
import Proponente from "@/components/proponente/Proponente";

export default function Home() {
  return (
    <main className="overflow-scroll-y">
      <Imovel/>
      <Proponente/>
      <Pagamento/>
    </main>
  );
}
