import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Formulario } from 'src/schemas/Formulario';

@Injectable()
export class FormularioService {
    constructor(
        @InjectModel(Formulario.name) private readonly formularioModel: Model<Formulario>
    ) {}

    async create(data: any): Promise<Formulario> {
        const formulario = new this.formularioModel(data);
        return formulario.save();
    }

    async findAll(): Promise<Formulario[]> {
        return this.formularioModel.find().exec();
    }

    async findByNome(nome: string): Promise<Formulario[]> {
        return this.formularioModel.find({ 'proponente.nome': new RegExp(nome, 'i') }).exec();
    }
}
