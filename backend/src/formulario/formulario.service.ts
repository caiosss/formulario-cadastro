import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Formulario } from 'src/schemas/Formulario';

@Injectable()
export class FormularioService {
    constructor(
        @InjectModel('Formulario') private readonly formularioModel: Model<Formulario>
    ) {}

    async create(data: any): Promise<Formulario> {
        const formulario = new this.formularioModel(data);
        return formulario.save();
    }
}
