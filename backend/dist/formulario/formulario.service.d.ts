import { Model } from 'mongoose';
import { Formulario } from 'src/schemas/Formulario';
export declare class FormularioService {
    private readonly formularioModel;
    constructor(formularioModel: Model<Formulario>);
    create(data: any): Promise<Formulario>;
}
