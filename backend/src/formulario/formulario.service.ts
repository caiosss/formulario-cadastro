/* eslint-disable @typescript-eslint/no-unsafe-argument */
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

    async findById(id: string): Promise<Formulario | null> {
        return this.formularioModel.findById(id).exec();
    }

    async deleteById(id: string): Promise<any> {
        return this.formularioModel.deleteOne({ _id: id }).exec();
    }

    async updateById(id: string, data: any): Promise<Formulario | null> {
        return this.formularioModel.findByIdAndUpdate(id, data, { new: true }).exec();
    }
}
