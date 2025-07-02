import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Pagamento {
    
    @Prop()
    valorTotal: number;

    @Prop()
    valorEntrada: number;

    @Prop()
    parcelas: string;

    @Prop()
    balao: string;

    @Prop()
    chaves: string;

    @Prop()
    financiamento: string;
}

export const PagamentoSchema = SchemaFactory.createForClass(Pagamento);