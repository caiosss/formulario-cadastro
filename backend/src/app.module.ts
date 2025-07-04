import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FormularioModule } from './formulario/formulario.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/formulario'),
    FormularioModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
