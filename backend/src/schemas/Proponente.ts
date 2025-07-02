import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Proponente {
    @Prop()
    nome: string;

    @Prop()
    dataNascimento: string;
    
    @Prop()
    rg: string;

    @Prop()
    orgaoExpedidor: string;

    @Prop()
    estadoCivil: string;

    @Prop()
    profissao: string;
    
    @Prop()
    cpf: string;
    
    @Prop()
    cep: string;

    @Prop()
    bairro: string;

    @Prop()
    cidade: string;

    @Prop()
    estado: string;

    @Prop()
    email: string;

    @Prop()
    telefone: string;
}

export const ProponenteSchema = SchemaFactory.createForClass(Proponente);