import { Body, Controller, Post } from '@nestjs/common';
import { FormularioService } from './formulario.service';

@Controller('formulario')
export class FormularioController {
  constructor(private readonly formularioService: FormularioService) {}

  @Post()
  async create(@Body() data: any) {
    return this.formularioService.create(data);
  }
}
