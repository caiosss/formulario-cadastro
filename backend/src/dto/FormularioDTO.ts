import { Imovel } from "src/models/Imovel";
import { Pagamento } from "src/models/Pagamento";
import { Proponente } from "src/models/Proponente";

export class FormularioDTO {
    imovel: Imovel
    proponente: Proponente
    pagamento: Pagamento
}