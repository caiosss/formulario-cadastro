/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
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

  @Get("nome/:nome")
  async findByNome(@Param('nome') nome: string) {
    return this.formularioService.findByNome(nome);
  }

  @Get("id/:id")
  async findById(@Param('id') id: string) {
    return this.formularioService.findById(id);
  }

  @Put(":id")
  async updateById(@Param('id') id: string, @Body() data: any) {
    return this.formularioService.updateById(id, data);
  }

  @Delete(":id")
  async deleteById(@Param('id') id: string) {
    return this.formularioService.deleteById(id);
  }
}
