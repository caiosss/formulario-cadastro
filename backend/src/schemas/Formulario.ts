
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Imovel } from 'src/models/Imovel';
import { Pagamento } from 'src/models/Pagamento';
import { Proponente } from 'src/models/Proponente';

@Schema()
export class Formulario extends Document {
    
    @Prop()
    imovel: Imovel;

    @Prop()
    proponente: Proponente;

    @Prop()
    pagamento: Pagamento;
}

export const FormularioSchema = SchemaFactory.createForClass(Formulario);