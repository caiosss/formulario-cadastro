import { Document } from 'mongoose';
import { Imovel } from './Imovel';
import { Proponente } from './Proponente';
import { Pagamento } from './Pagamento';
export declare class Formulario extends Document {
    imovel: Imovel;
    pagamento: Pagamento;
    proponente: Proponente;
}
export declare const FormularioSchema: import("mongoose").Schema<Formulario, import("mongoose").Model<Formulario, any, any, any, Document<unknown, any, Formulario, any> & Formulario & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Formulario, Document<unknown, {}, import("mongoose").FlatRecord<Formulario>, {}> & import("mongoose").FlatRecord<Formulario> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
