import { Model } from 'mongoose';
import { Formulario } from 'src/schemas/Formulario';
export declare class FormularioService {
    private readonly formularioModel;
    constructor(formularioModel: Model<Formulario>);
    create(data: any): Promise<Formulario>;
    findAll(): Promise<Formulario[]>;
    findByNome(nome: string): Promise<Formulario[]>;
    findById(id: string): Promise<Formulario | null>;
    deleteById(id: string): Promise<any>;
    updateById(id: string, data: any): Promise<Formulario | null>;
}
