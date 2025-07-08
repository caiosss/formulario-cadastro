import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { FormularioService } from './formulario.service';

@Controller('formulario')
export class FormularioController {
  constructor(private readonly formularioService: FormularioService) {}

  @Post()
  async create(@Body() data: any) {
    return this.formularioService.create(data);
  }

  @Get("all")
  async findAll() {
    return this.formularioService.findAll();
  }

  @Get(":nome")
  async findByNome(@Param('nome') nome: string) {
    return this.formularioService.findByNome(nome);
  }
}
