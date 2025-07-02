export declare class Pagamento {
    valorTotal: number;
    valorEntrada: number;
    parcelas: string;
    balao: string;
    chaves: string;
    financiamento: string;
}
export declare const PagamentoSchema: import("mongoose").Schema<Pagamento, import("mongoose").Model<Pagamento, any, any, any, import("mongoose").Document<unknown, any, Pagamento, any> & Pagamento & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Pagamento, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Pagamento>, {}> & import("mongoose").FlatRecord<Pagamento> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
