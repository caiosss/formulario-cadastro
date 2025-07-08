import { FormularioService } from './formulario.service';
export declare class FormularioController {
    private readonly formularioService;
    constructor(formularioService: FormularioService);
    create(data: any): Promise<import("../schemas/Formulario").Formulario>;
    findAll(): Promise<import("../schemas/Formulario").Formulario[]>;
    findByNome(nome: string): Promise<import("../schemas/Formulario").Formulario[]>;
    findById(id: string): Promise<import("../schemas/Formulario").Formulario | null>;
    findByPage(pagina: number, tamanho: number): Promise<import("../schemas/Formulario").Formulario[]>;
    updateById(id: string, data: any): Promise<import("../schemas/Formulario").Formulario | null>;
    deleteById(id: string): Promise<any>;
}
