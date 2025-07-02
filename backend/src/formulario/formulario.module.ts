import { Module } from '@nestjs/common';
import { FormularioController } from './formulario.controller';
import { FormularioService } from './formulario.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FormularioSchema, Formulario } from 'src/schemas/Formulario';

@Module({
  imports: [
    MongooseModule.forFeature([{schema: FormularioSchema, name: Formulario.name}])
  ],
  controllers: [FormularioController],
  providers: [FormularioService]
})
export class FormularioModule {}
