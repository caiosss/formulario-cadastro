export declare class Proponente {
    nome: string;
    dataNascimento: string;
    rg: string;
    orgaoExpedidor: string;
    estadoCivil: string;
    profissao: string;
    cpf: string;
    cep: string;
    bairro: string;
    cidade: string;
    estado: string;
    email: string;
    telefone: string;
}
export declare const ProponenteSchema: import("mongoose").Schema<Proponente, import("mongoose").Model<Proponente, any, any, any, import("mongoose").Document<unknown, any, Proponente, any> & Proponente & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Proponente, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Proponente>, {}> & import("mongoose").FlatRecord<Proponente> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
