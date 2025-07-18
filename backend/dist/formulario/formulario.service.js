"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormularioService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const Formulario_1 = require("../schemas/Formulario");
let FormularioService = class FormularioService {
    formularioModel;
    constructor(formularioModel) {
        this.formularioModel = formularioModel;
    }
    async create(data) {
        const formulario = new this.formularioModel(data);
        return formulario.save();
    }
    async findAll() {
        return this.formularioModel.find().exec();
    }
    async findByNome(nome) {
        return this.formularioModel.find({ 'proponente.nome': new RegExp(nome, 'i') }).exec();
    }
    async findById(id) {
        return this.formularioModel.findById(id).exec();
    }
    async deleteById(id) {
        return this.formularioModel.deleteOne({ _id: id }).exec();
    }
    async updateById(id, data) {
        return this.formularioModel.findByIdAndUpdate(id, data, { new: true }).exec();
    }
    async findByPage(pagina, tamanho) {
        const skip = (pagina - 1) * tamanho;
        return this.formularioModel.find().skip(skip).limit(tamanho).exec();
    }
};
exports.FormularioService = FormularioService;
exports.FormularioService = FormularioService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(Formulario_1.Formulario.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], FormularioService);
//# sourceMappingURL=formulario.service.js.map