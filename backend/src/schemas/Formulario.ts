
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Imovel, ImovelSchema } from './Imovel';
import { Proponente, ProponenteSchema } from './Proponente';
import { PagamentoSchema, Pagamento } from './Pagamento';

@Schema()
export class Formulario extends Document {
    
   @Prop({ type: ImovelSchema }) imovel: Imovel;

    @Prop({ type: PagamentoSchema }) pagamento: Pagamento;

    @Prop({ type: ProponenteSchema }) proponente: Proponente;
}

export const FormularioSchema = SchemaFactory.createForClass(Formulario);