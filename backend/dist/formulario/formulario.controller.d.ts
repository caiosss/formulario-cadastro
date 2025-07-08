import { FormularioService } from './formulario.service';
export declare class FormularioController {
    private readonly formularioService;
    constructor(formularioService: FormularioService);
    create(data: any): Promise<import("../schemas/Formulario").Formulario>;
    findAll(): Promise<import("../schemas/Formulario").Formulario[]>;
    findByNome(nome: string): Promise<import("../schemas/Formulario").Formulario[]>;
}
