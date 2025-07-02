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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProponenteSchema = exports.Proponente = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Proponente = class Proponente {
    nome;
    dataNascimento;
    rg;
    orgaoExpedidor;
    estadoCivil;
    profissao;
    cpf;
    cep;
    bairro;
    cidade;
    estado;
    email;
    telefone;
};
exports.Proponente = Proponente;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Proponente.prototype, "nome", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Proponente.prototype, "dataNascimento", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Proponente.prototype, "rg", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Proponente.prototype, "orgaoExpedidor", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Proponente.prototype, "estadoCivil", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Proponente.prototype, "profissao", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Proponente.prototype, "cpf", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Proponente.prototype, "cep", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Proponente.prototype, "bairro", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Proponente.prototype, "cidade", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Proponente.prototype, "estado", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Proponente.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Proponente.prototype, "telefone", void 0);
exports.Proponente = Proponente = __decorate([
    (0, mongoose_1.Schema)()
], Proponente);
exports.ProponenteSchema = mongoose_1.SchemaFactory.createForClass(Proponente);
//# sourceMappingURL=Proponente.js.map