import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PublisherService  } from "example-application";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: PublisherService,
      useClass: PublisherService
    }],
})
export class AppModule { }
