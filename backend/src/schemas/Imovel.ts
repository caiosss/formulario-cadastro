import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Imovel {
    @Prop() enderecoImovel: string;
    @Prop() quadraImovel: string;
    @Prop() loteImovel: string;
}

export const ImovelSchema = SchemaFactory.createForClass(Imovel);