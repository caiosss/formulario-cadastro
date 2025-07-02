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
exports.FormularioSchema = exports.Formulario = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const Imovel_1 = require("./Imovel");
const Proponente_1 = require("./Proponente");
const Pagamento_1 = require("./Pagamento");
let Formulario = class Formulario extends mongoose_2.Document {
    imovel;
    pagamento;
    proponente;
};
exports.Formulario = Formulario;
__decorate([
    (0, mongoose_1.Prop)({ type: Imovel_1.ImovelSchema }),
    __metadata("design:type", Imovel_1.Imovel)
], Formulario.prototype, "imovel", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Pagamento_1.PagamentoSchema }),
    __metadata("design:type", Pagamento_1.Pagamento)
], Formulario.prototype, "pagamento", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Proponente_1.ProponenteSchema }),
    __metadata("design:type", Proponente_1.Proponente)
], Formulario.prototype, "proponente", void 0);
exports.Formulario = Formulario = __decorate([
    (0, mongoose_1.Schema)()
], Formulario);
exports.FormularioSchema = mongoose_1.SchemaFactory.createForClass(Formulario);
//# sourceMappingURL=Formulario.js.map