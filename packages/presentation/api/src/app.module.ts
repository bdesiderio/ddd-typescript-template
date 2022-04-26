import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Mediator } from "@extrimian/core";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: Mediator,
      useClass: Mediator
    }],
})
export class AppModule { }
