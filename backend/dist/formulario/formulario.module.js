"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormularioModule = void 0;
const common_1 = require("@nestjs/common");
const formulario_controller_1 = require("./formulario.controller");
const formulario_service_1 = require("./formulario.service");
const mongoose_1 = require("@nestjs/mongoose");
const Formulario_1 = require("../schemas/Formulario");
let FormularioModule = class FormularioModule {
};
exports.FormularioModule = FormularioModule;
exports.FormularioModule = FormularioModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ schema: Formulario_1.FormularioSchema, name: Formulario_1.Formulario.name }])
        ],
        controllers: [formulario_controller_1.FormularioController],
        providers: [formulario_service_1.FormularioService]
    })
], FormularioModule);
//# sourceMappingURL=formulario.module.js.map