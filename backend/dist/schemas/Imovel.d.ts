export declare class Imovel {
    enderecoImovel: string;
    quadraImovel: string;
    loteImovel: string;
}
export declare const ImovelSchema: import("mongoose").Schema<Imovel, import("mongoose").Model<Imovel, any, any, any, import("mongoose").Document<unknown, any, Imovel, any> & Imovel & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Imovel, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Imovel>, {}> & import("mongoose").FlatRecord<Imovel> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
