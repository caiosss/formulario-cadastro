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
exports.FormularioController = void 0;
const common_1 = require("@nestjs/common");
const formulario_service_1 = require("./formulario.service");
let FormularioController = class FormularioController {
    formularioService;
    constructor(formularioService) {
        this.formularioService = formularioService;
    }
    async create(data) {
        return this.formularioService.create(data);
    }
    async findAll() {
        return this.formularioService.findAll();
    }
    async findByNome(nome) {
        return this.formularioService.findByNome(nome);
    }
    async findById(id) {
        return this.formularioService.findById(id);
    }
    async updateById(id, data) {
        return this.formularioService.updateById(id, data);
    }
    async deleteById(id) {
        return this.formularioService.deleteById(id);
    }
};
exports.FormularioController = FormularioController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FormularioController.prototype, "create", null);
__decorate([
    (0, common_1.Get)("all"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FormularioController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)("nome/:nome"),
    __param(0, (0, common_1.Param)('nome')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FormularioController.prototype, "findByNome", null);
__decorate([
    (0, common_1.Get)("id/:id"),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FormularioController.prototype, "findById", null);
__decorate([
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], FormularioController.prototype, "updateById", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FormularioController.prototype, "deleteById", null);
exports.FormularioController = FormularioController = __decorate([
    (0, common_1.Controller)('formulario'),
    __metadata("design:paramtypes", [formulario_service_1.FormularioService])
], FormularioController);
//# sourceMappingURL=formulario.controller.js.map